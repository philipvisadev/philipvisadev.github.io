// Turns an app's store-listing/privacy-policy.md into <slug>/privacy.html in the house style.
// Usage (from the _website folder):  node _tools/make-privacy.js <path-to-privacy-policy.md> <slug>
// Example: node _tools/make-privacy.js ../VisaPlay/store-listing/privacy-policy.md visaplay
// Folders starting with "_" are not published by GitHub Pages, so this script stays private to the repo.
const fs = require("fs"), path = require("path");
const [src, slug] = process.argv.slice(2);
if (!src || !slug) { console.error("usage: node _tools/make-privacy.js <md> <slug>"); process.exit(1); }

const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const inline = s => esc(s)
  .replace(/`([^`]+)`/g, "<code>$1</code>")
  .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
  .replace(/(^|[\s(])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>")
  .replace(/(https?:\/\/[^\s<)]+?)([.,;:]?)(?=[\s<)]|$)/g, '<a href="$1">$1</a>$2');

const lines = fs.readFileSync(src, "utf8").replace(/\r/g, "").split("\n");
let title = "", date = "", body = [], para = [], list = null;
const flushPara = () => { if (para.length) { body.push(`<p>${inline(para.join(" "))}</p>`); para = []; } };
const flushList = () => { if (list) { body.push(`<ul>${list.map(i => `<li>${inline(i)}</li>`).join("")}</ul>`); list = null; } };
for (const raw of lines) {
  const l = raw.trimEnd();
  if (/^# /.test(l)) { title = l.slice(2).trim(); continue; }
  if (/^Effective date:/i.test(l)) { date = l.replace(/^Effective date:\s*/i, ""); continue; }
  if (/^## /.test(l)) { flushPara(); flushList(); body.push(`<h2>${inline(l.slice(3))}</h2>`); continue; }
  if (/^\s*[-*] /.test(l)) { flushPara(); (list ||= []).push(l.replace(/^\s*[-*] /, "")); continue; }
  if (!l.trim()) { flushPara(); flushList(); continue; }
  if (list && /^\s{2,}/.test(raw)) { list[list.length - 1] += " " + l.trim(); continue; }
  flushList(); para.push(l.trim());
}
flushPara(); flushList();
if (/fill in/i.test(date)) { console.error("Effective date not filled in: " + src); process.exit(1); }

const app = title.split(/[ :–-]/)[0];             // "VisaPlay: Video & Music Player – Privacy Policy" -> "VisaPlay"
const icon = fs.existsSync(path.join("img", slug + ".png")) ? `<img src="../img/${slug}.png" alt="">` : "";
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(app)} Privacy Policy</title>
<meta name="description" content="How ${esc(app)} handles your information. Made by Philip Visagie, South Africa.">
<link rel="icon" href="../img/${slug}.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,800&family=Nunito+Sans:opsz,wght@6..12,400;6..12,700;6..12,800&display=swap" rel="stylesheet">
<style>
:root{--gold:#FFCE45;--deep-orange:#A94E14;--emerald-deep:#075128;--cream:#FFF7EA;--sand:#F6E3C3;--ink:#2B1A0C;--ink-muted:#7A5A3C;--espresso:#24170C}
*{box-sizing:border-box}
body{margin:0;font-family:"Nunito Sans",system-ui,"Segoe UI",Arial,sans-serif;color:var(--ink);background:var(--cream);line-height:1.6}
.bar{background:var(--espresso)}
.bar a{display:flex;align-items:center;gap:10px;max-width:820px;margin:0 auto;padding:16px 20px;color:var(--cream);text-decoration:none;font-weight:800}
.dots{display:grid;grid-template-columns:repeat(2,8px);gap:3px}.dots i{width:8px;height:8px;border-radius:50%;background:var(--gold)}
.dots i:nth-child(2){background:#E6A54A}.dots i:nth-child(3){background:#0E7A3C}.dots i:nth-child(4){background:#FFE28A}
main{max-width:820px;margin:0 auto;padding:36px 20px 60px}
.head{display:flex;align-items:center;gap:16px;margin-bottom:24px}
.head img{width:64px;height:64px;border-radius:15px;flex:none}
h1{font-family:"Fraunces",Georgia,serif;font-weight:800;font-size:clamp(28px,5vw,40px);line-height:1.1;margin:0;color:var(--emerald-deep)}
.date{margin:4px 0 0;color:var(--ink-muted);font-weight:700}
article{background:#fff;border:1px solid var(--sand);border-radius:22px;padding:8px 28px 24px}
h2{font-size:19px;margin:28px 0 6px;color:var(--deep-orange)}
ul{padding-left:22px}li{margin:4px 0}
a{color:var(--deep-orange);word-break:break-word}
code{background:var(--sand);padding:1px 5px;border-radius:5px;font-size:.92em}
footer{margin-top:28px;color:var(--ink-muted);font-size:15px}
@media (max-width:560px){article{padding:4px 18px 18px}}
</style>
</head>
<body>
<div class="bar"><a href="../"><span class="dots"><i></i><i></i><i></i><i></i></span>Visagie Apps</a></div>
<main>
  <div class="head">${icon}<div><h1>${esc(app)} – Privacy Policy</h1><p class="date">Effective date: ${esc(date)}</p></div></div>
  <article>
${body.join("\n")}
  </article>
  <footer><a href="../">← The Visagie Family of Apps</a></footer>
</main>
</body>
</html>
`;
fs.mkdirSync(slug, { recursive: true });
fs.writeFileSync(path.join(slug, "privacy.html"), html);
console.log(`${slug}/privacy.html  (${app}, ${date}, ${body.filter(b => b.startsWith("<h2")).length} sections)`);
