// Builds every app's feature + tutorial page: _tools/pages/<slug>.js  →  <slug>/index.html
// Usage (from the _website folder):  node _tools/make-app-pages.js          (all apps)
//                                     node _tools/make-app-pages.js visapdf  (one app)
// New app: copy a file in _tools/pages/, change the words + screenshots (shots/<slug>/), add it to NAV below, run this.
// Folders starting with "_" are not published by GitHub Pages. Never touches <slug>/privacy.html.
const fs = require("fs"), path = require("path");
const SITE = path.join(__dirname, "..");
// Pro prices come from apps.json ("pro", or the app's own "pro") – the ONE place to change them. site.js also
// refreshes them in the browser, so a price change in apps.json shows even before this tool is run again.
const APPS = JSON.parse(fs.readFileSync(path.join(SITE, "apps.json"), "utf8"));
const proPrice = id => (APPS.apps.find(x => x.id === id) || {}).pro || APPS.pro;

const NAV = [
  { slug: "visapdf", name: "VisaPdf", line: "The PDF office in your pocket" },
  { slug: "visaplay", name: "VisaPlay", line: "Plays everything + world radio" },
  { slug: "visacook", name: "VisaCook", line: "Recipes, cocktails, groceries" },
  { slug: "visasched", name: "VisaSched", line: "Your phone on autopilot" },
  { slug: "visakeep", name: "VisaKeep", line: "Your home admin, sorted" },
  { slug: "visarelax", name: "VisaRelax", line: "22 family games" },
];

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const playUrl = id => "https://play.google.com/store/apps/details?id=" + id;
const PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#34A853" d="M3.6 2.3 13.4 12l-9.8 9.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z"/><path fill="#FBBC04" d="m16.8 8.6-3.4 3.4 3.4 3.4 3.9-2.2c.8-.5.8-1.7 0-2.2z"/><path fill="#4285F4" d="M3.6 21.7 13.4 12l3.4 3.4-11.5 6.5c-.6.3-1.2.2-1.7-.2z"/><path fill="#EA4335" d="M3.6 2.3c.5-.4 1.1-.5 1.7-.2l11.5 6.5-3.4 3.4z"/></svg>';
const playBtn = id => `<span data-play="${id}"><a class="btn btn-play" href="${playUrl(id)}">${PLAY_SVG}<span><small>Get it on</small><b>Google Play</b></span></a></span>`;
const tag = t => t === "pro" ? '<span class="pro-tag">Pro</span>' : t === "free" ? '<span class="free-tag">Free</span>' : "";
const shot = (a, f) => `../shots/${a.slug}/${f}`;
const img = (a, f, alt, extra = "") => `<img src="${shot(a, f)}" alt="${esc(alt || "")}" loading="lazy" decoding="async" width="480" height="960"${extra}>`;

function nav(cur) {
  return `<header class="bar"><div class="wrap">
  <a class="brand" href="../"><span class="dots"><i></i><i></i><i></i><i></i></span><span class="t">Visagie Apps</span></a>
  <nav aria-label="Apps">${NAV.map(n => `<a href="../${n.slug}/"${n.slug === cur ? ' aria-current="page"' : ""}><img src="../img/${n.slug}.png" alt=""><b>${n.name}</b></a>`).join("")}</nav>
</div></header>`;
}

function footer(a) {
  return `<footer><div class="wrap"><div class="cols">
  <div><h4>Visagie Apps</h4><p>Simple, powerful Android apps<br>by the Visagie Apps team, South Africa.</p></div>
  <div><h4>${esc(a.name)}</h4><p><a href="privacy.html">Privacy policy</a></p><p><a href="#pro">Free vs Pro</a></p><p><a href="#howto">How to</a></p></div>
  <div><h4>The family</h4>${NAV.map(n => `<p><a href="../${n.slug}/">${n.name}</a></p>`).join("")}</div>
  <div><h4>Questions?</h4><p><a href="mailto:philip.visadev@gmail.com">philip.visadev@gmail.com</a></p><p><a href="../">Home</a></p></div>
</div><p class="made">Made in South Africa · Google Play and the Google Play logo are trademarks of Google LLC.</p></div></footer>`;
}

function hero(a) {
  const h = a.hero, [c, l, r] = h.stage;
  return `<section class="hero"><div class="glow"></div><div class="ledgrid" data-par="0.08"></div>
<div class="wrap hero-grid">
  <div>
    <span class="kicker rv"><span class="live"></span>${h.kicker}</span>
    <h1 class="rv d1">${h.title}</h1>
    <p class="lede rv d2">${h.lede}</p>
    <div class="cta-row rv d3">${playBtn(a.id)}<a class="btn btn-ghost" href="#howto">See how it works ↓</a></div>
    <div class="chips rv d4">${h.chips.map(t => `<span class="chip">${t}</span>`).join("")}</div>
  </div>
  <div class="stage rv z d2">
    <div class="phone sm p-l float d1"><div class="scr">${img(a, l, "")}</div><div class="glare"></div></div>
    <div class="phone sm p-r float d2"><div class="scr">${img(a, r, "")}</div><div class="glare"></div></div>
    <div class="phone p-c float"><div class="scr" data-cycle="2600">${c.map((f, i) => i ? img(a, f, "") : `<img src="${shot(a, f)}" alt="${esc(a.name)} on a phone" class="on" fetchpriority="high" decoding="async" width="480" height="960">`).join("")}</div><div class="glare"></div></div>
    ${(h.orbits || []).map((o, i) => `<span class="orbit ${o.c || ""}" style="${o.pos};animation-delay:-${i * 1.3}s">${o.t}</span>`).join("")}
  </div>
</div></section>`;
}

const ticker = a => a.ticker ? `<div class="ticker" aria-hidden="true"><div class="run">${[...a.ticker, ...a.ticker].map(t => `<span>${t}</span>`).join("")}</div></div>` : "";

function head(s, cls = "") {
  return `<div class="sec-head ${cls} rv">${s.kicker ? `<span class="kicker">${s.kicker}</span>` : ""}<h2>${s.title}</h2>${s.lede ? `<p>${s.lede}</p>` : ""}</div>`;
}

const stats = a => a.stats ? `<section class="dark" style="padding:56px 0"><div class="wrap"><div class="stats">${a.stats.map((s, i) =>
  `<div class="stat rv d${i + 1}"><b${s.n != null ? ` data-count="${s.n}" data-prefix="${s.pre || ""}" data-suffix="${s.suf || ""}"` : ""}>${s.n != null ? (s.pre || "") + s.n + (s.suf || "") : s.t}</b><span>${s.label}</span></div>`).join("")}</div></div></section>` : "";

function showcase(a) {
  const s = a.showcase; if (!s) return "";
  return `<section class="${s.cls || "dark"}" id="new"><div class="wrap">${head(s)}
<div class="tiles">${s.tiles.map((t, i) => `<article class="tile rv d${(i % 3) + 1}">
  <div class="screen">${t.mock || img(a, t.img, t.title)}</div>
  <h3>${t.new ? '<span class="new-tag">New</span>' : ""}${t.title}${tag(t.tag)}</h3><p>${t.text}</p></article>`).join("")}</div></div></section>`;
}

function walk(a) {
  const w = a.walk; if (!w) return "";
  const shots = [...new Set(w.steps.map(s => s.shot))];
  return `<section class="light" id="howto"><div class="wrap">${head(w)}
<div class="walk"><ol class="steps">${w.steps.map(s => `<li data-shot="${s.shot}"><h3>${s.title}</h3><p>${s.text}</p>${img(a, s.shot, s.title, ' class="mini"')}</li>`).join("")}</ol>
<div class="pin"><div class="phone" data-led><div class="scr">${shots.map(f => img(a, f, "").replace("<img ", `<img data-shot="${f}" `)).join("")}</div><div class="glare"></div></div></div></div>
</div></section>`;
}

function feats(a) {
  const f = a.feats; if (!f) return "";
  return `<section class="${f.cls || "sandbg"}"><div class="wrap">${head(f)}
<div class="feats">${f.items.map((x, i) => `<div class="feat rv d${(i % 3) + 1}"><i aria-hidden="true">${x.icon}</i><div><b>${x.title}${tag(x.tag)}</b><span>${x.text}</span></div></div>`).join("")}</div></div></section>`;
}

function howto(a) {
  const h = a.howto; if (!h) return "";
  return `<section class="light"${a.walk ? "" : ' id="howto"'}><div class="wrap">${head(h)}
<div class="howto">${h.items.map((x, i) => `<details class="rv d${(i % 2) + 1}"${i === 0 ? " open" : ""}><summary><i aria-hidden="true">${x.icon}</i><span>${x.title}${tag(x.tag)}<small>${x.sub}</small></span></summary>
<ol>${x.steps.map(s => `<li>${s}</li>`).join("")}</ol>${x.tip ? `<p class="tip">💡 ${x.tip}</p>` : ""}</details>`).join("")}</div></div></section>`;
}

function compare(a) {
  const c = a.compare; if (!c) return "";
  const cell = (v, pro) => v === true ? `<td class="y${pro ? " pro" : ""}"><span class="sr">Yes</span></td>` : v === false ? `<td class="n${pro ? " pro" : ""}"><span class="sr">No</span></td>` : `<td class="v${pro ? " pro" : ""}">${v}</td>`;
  return `<section class="sandbg" id="pro"><div class="wrap">${head(c, "c")}
<div class="compare rv"><table><thead><tr><th scope="col">What you get</th><th class="f" scope="col">Free</th><th class="pro" scope="col">Pro</th></tr></thead><tbody>
${c.rows.map(r => typeof r === "string" ? `<tr class="grp"><td colspan="3">${r}</td></tr>` : `<tr><td>${r[0]}</td>${cell(r[1])}${cell(r[2], true)}</tr>`).join("\n")}
</tbody></table></div></div></section>`;
}

function pitch(a) {
  const p = a.pitch; if (!p) return "";
  return `<section class="light"><div class="wrap"><div class="pitch rv z" data-led><div class="seal"></div>
<span class="kicker" style="color:var(--deep-orange)">${a.name} Pro</span>
<h2>${p.title}</h2>
<div class="price" data-pro="${a.id}"><b>${proPrice(a.id).zar}</b><span>once-off · about ${proPrice(a.id).usd}</span></div><p class="fine">${p.fine}</p>
<ul>${p.list.map(l => `<li>${l}</li>`).join("")}</ul>
<div class="cta-row">${playBtn(a.id)}<span style="font-weight:800">${p.how}</span></div>
<div class="why">${p.why.map(w => `<div><b>${w[0]}</b>${w[1]}</div>`).join("")}</div>
</div></div></section>`;
}

const privacy = a => a.privacy ? `<section class="green"><div class="wrap lockband"><div class="lock rv z" aria-hidden="true">🔒</div>
<div class="rv">${head({ kicker: "Private by design", title: a.privacy.title, lede: a.privacy.text })}<a class="btn btn-ghost" href="privacy.html">Read the privacy policy</a></div></div></section>` : "";

const faq = a => a.faq ? `<section class="light"><div class="wrap">${head({ title: "Questions", kicker: "Good to know" }, "c")}
<div class="faq">${a.faq.map(q => `<details class="rv"><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join("")}</div></div></section>` : "";

function family(a) {
  const others = NAV.filter(n => n.slug !== a.slug);
  return `<section class="sandbg"><div class="wrap">${head({ kicker: "The Visagie family", title: "Better together", lede: "Every Visa app works on its own – and they find each other by themselves. VisaSched can even start the others at the right moment." })}
<div class="family-strip">${others.map((n, i) => `<a class="fam rv d${i + 1}" href="../${n.slug}/"><img src="../img/${n.slug}.png" alt="" loading="lazy"><span><b>${n.name}</b><span>${n.line} →</span></span></a>`).join("")}</div></div></section>`;
}

function page(a) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(a.title)}</title>
<meta name="description" content="${esc(a.description)}">
<meta property="og:title" content="${esc(a.title)}">
<meta property="og:description" content="${esc(a.description)}">
<meta property="og:image" content="https://philipvisadev.github.io/img/${a.slug}.png">
<meta name="theme-color" content="#24170C">
<link rel="icon" href="../img/${a.slug}.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,800&family=Nunito+Sans:opsz,wght@6..12,400;6..12,700;6..12,800;6..12,900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/site.css">${a.mocks ? '\n<link rel="stylesheet" href="../assets/mocks.css">' : ""}
<script>document.documentElement.classList.add("js")</script>
</head>
<body data-root="../">
<!-- Made by _tools/make-app-pages.js from _tools/pages/${a.slug}.js – edit that file, then run the tool. -->
${nav(a.slug)}
<main>
${hero(a)}
${ticker(a)}
${stats(a)}
${showcase(a)}
${walk(a)}
${feats(a)}
${howto(a)}
${compare(a)}
${pitch(a)}
${privacy(a)}
${faq(a)}
${family(a)}
</main>
${footer(a)}
<script src="../assets/site.js" defer></script>
</body>
</html>
`;
}

const want = process.argv[2];
for (const n of NAV) {
  if (want && want !== n.slug) continue;
  const a = require(`./pages/${n.slug}.js`);
  a.slug = n.slug; a.name = a.name || n.name;
  fs.mkdirSync(path.join(SITE, n.slug), { recursive: true });
  fs.writeFileSync(path.join(SITE, n.slug, "index.html"), page(a));
  console.log("wrote", n.slug + "/index.html");
}
