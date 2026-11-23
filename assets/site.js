/* Visagie Apps – shared moving parts. Plain JS, no libraries.
   Everything here is extra: the pages read fine without it. Stops all motion for prefers-reduced-motion. */
(function () {
  const root = document.body.dataset.root || "";
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seen = (els, cb, opts) => {
    if (!("IntersectionObserver" in window)) { els.forEach(e => cb(e, true)); return; }
    const io = new IntersectionObserver(es => es.forEach(e => cb(e.target, e.isIntersecting, io)), opts || { threshold: 0.15 });
    els.forEach(e => io.observe(e));
  };
  const $$ = s => Array.from(document.querySelectorAll(s));

  /* 1. scroll reveals */
  seen($$(".rv"), (el, on, io) => { if (on) { el.classList.add("in"); io && io.unobserve(el); } }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  /* 2. the gold aura round [data-led] boxes is pure CSS (site.css) */

  /* 3. phones that flip through screenshots while visible: <div class="scr" data-cycle="3000"><img>…</div> */
  $$("[data-cycle]").forEach(scr => {
    const imgs = Array.from(scr.querySelectorAll(":scope > img")); if (imgs.length < 2) return;
    let i = 0, t = null; imgs.forEach((im, k) => im.classList.toggle("on", k === 0));
    const next = () => { imgs[i].classList.remove("on"); i = (i + 1) % imgs.length; imgs[i].classList.add("on"); };
    if (still) return;
    seen([scr], (el, on) => { clearInterval(t); t = on ? setInterval(next, +scr.dataset.cycle || 3000) : null; }, { threshold: 0.3 });
  });

  /* 4. walkthrough: the step in the middle of the screen lights up and the pinned phone shows its screen */
  $$(".walk").forEach(walk => {
    const steps = Array.from(walk.querySelectorAll(".steps > li")), imgs = Array.from(walk.querySelectorAll(".pin img"));
    const show = n => {
      steps.forEach((s, k) => s.classList.toggle("on", k === n));
      const want = steps[n] && steps[n].dataset.shot;
      imgs.forEach(im => im.classList.toggle("on", im.dataset.shot === want));
    };
    show(0);
    seen(steps, (el, on) => { if (on) show(steps.indexOf(el)); }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
  });

  /* 5. numbers that count up: <b data-count="25" data-suffix=" MB"> */
  seen($$("[data-count]"), (el, on, io) => {
    if (!on) return; io && io.unobserve(el);
    const end = +el.dataset.count, pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    if (still) { el.textContent = pre + end + suf; return; }
    const t0 = performance.now(), dur = 1400;
    const step = now => { const p = Math.min(1, (now - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = pre + v + suf; if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, { threshold: 0.6 });

  /* 6. animated mock screens only run while visible (saves battery) */
  seen($$(".mock"), (el, on) => el.classList.toggle("play", on && !still), { threshold: 0.2 });

  /* 7. little text tickers inside mocks: <span data-words="a|b|c"> */
  $$("[data-words]").forEach(el => {
    const w = el.dataset.words.split("|"); let i = 0; if (still) return;
    setInterval(() => { if (!el.closest(".mock.play")) return; i = (i + 1) % w.length; el.textContent = w[i]; }, +el.dataset.every || 1600);
  });
  /* style cycler (time stamp looks): <div data-looks="a b c"> swaps one class */
  $$("[data-looks]").forEach(el => {
    const l = el.dataset.looks.split(" "), name = el.querySelector("[data-look-name]"); let i = 0; if (still) return;
    setInterval(() => { if (!el.closest(".mock.play")) return; el.classList.remove(l[i]); i = (i + 1) % l.length; el.classList.add(l[i]);
      if (name) name.textContent = name.dataset.lookName.split("|")[i]; }, 1700);
  });
  /* counting list (scan a list) */
  $$("[data-tally]").forEach(list => {
    const rows = Array.from(list.querySelectorAll("[data-n]")), tot = list.querySelector("[data-total]"); if (still) return;
    let k = 0;
    setInterval(() => { if (!list.closest(".mock.play")) return;
      const r = rows[[0, 1, 0, 2, 1, 0, 3, 2][k++ % 8] % rows.length], n = r.querySelector("b"); n.textContent = (+n.textContent + 1);
      r.classList.remove("hit"); void r.offsetWidth; r.classList.add("hit");
      if (tot) tot.textContent = rows.reduce((s, x) => s + +x.querySelector("b").textContent, 0); }, 900);
  });

  /* 8. gentle parallax: <div data-par="0.15"> */
  const par = $$("[data-par]");
  if (par.length && !still) {
    let ticking = false;
    const run = () => { const y = scrollY; par.forEach(el => el.style.translate = `0 ${(-y * +el.dataset.par).toFixed(1)}px`); ticking = false; };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
  }

  /* 9. 3D tilt on mouse (desktop only): class="tilt" */
  if (!still && matchMedia("(hover:hover) and (pointer:fine)").matches) $$(".tilt").forEach(el => {
    el.addEventListener("pointermove", e => { const b = el.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
      el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`; });
    el.addEventListener("pointerleave", () => el.style.transform = "");
  });

  /* 10. Google Play buttons follow apps.json: live:false → "Coming soon". <span data-play="package.id"><a …></span> */
  /* 11. Pro prices follow apps.json too ("pro", or an app's own "pro"): <div data-pro="package.id"><b>R…</b><span>…</span></div>,
         and <span data-pro-text></span> in running text ("about R99.99 (≈ $4.99)"). */
  const slots = $$("[data-play]"), prices = $$("[data-pro]"), priceTexts = $$("[data-pro-text]");
  if (slots.length || prices.length || priceTexts.length) fetch(root + "apps.json", { cache: "no-cache" }).then(r => r.json()).then(d => {
    const live = {}; d.apps.forEach(a => live[a.id] = !!a.live);
    slots.forEach(s => { if (live[s.dataset.play] === false) s.innerHTML = '<span class="soon">Coming soon to Google Play</span>'; });
    const own = id => (d.apps.find(a => a.id === id) || {}).pro;
    const pro = id => own(id) || d.pro;
    // A real, dated launch sale (apps.json "sale"): only for apps on the normal price, and only up to its last day.
    const sale = d.sale && new Date() <= new Date(d.sale.until + "T23:59:59+02:00") ? d.sale : null;
    const endText = sale ? new Date(sale.until + "T12:00:00+02:00").toLocaleDateString("en-ZA", { day: "numeric", month: "long" }) : "";
    const daysLeft = sale ? Math.max(0, Math.ceil((new Date(sale.until + "T23:59:59+02:00") - new Date()) / 864e5)) : 0;
    prices.forEach(el => {
      const p = pro(el.dataset.pro), b = el.querySelector("b"), s = el.querySelector("span");
      if (!p) return;
      if (sale && !own(el.dataset.pro)) {
        if (b) b.innerHTML = '<s class="was">' + p.zar + "</s> " + sale.zar;
        if (s) s.textContent = sale.name + " until " + endText + (daysLeft <= 14 ? " – " + daysLeft + (daysLeft === 1 ? " day" : " days") + " left" : "") + " · then " + p.zar + " (about " + p.usd + ")";
        el.classList.add("on-sale");
      } else {
        if (b) b.textContent = p.zar;
        if (s) s.textContent = "once-off · about " + p.usd;
      }
    });
    priceTexts.forEach(el => {
      if (!d.pro) return;
      el.textContent = sale
        ? "about " + sale.zar + " (≈ " + sale.usd + ") – " + sale.name.toLowerCase() + " until " + endText + ", then " + d.pro.zar
        : "about " + d.pro.zar + " (≈ " + d.pro.usd + ")";
    });
  }).catch(() => {});
})();
