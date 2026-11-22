// VisaPdf page words. Run: node _tools/make-app-pages.js visapdf
// Free / Pro split from VisaPDF/HANDOFF.md (confirmed by the owner 2026-11-20 / 21).

// A made-up QR-looking picture for the "QR / barcode" screen (21 x 21 squares, three corner eyes).
function qr() {
  const n = 21, on = [];
  let seed = 7; const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const eye = (x, y) => x < 7 && y < 7 || x >= n - 7 && y < 7 || x < 7 && y >= n - 7;
  for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
    if (eye(x, y)) continue;
    if (x === 7 || y === 7 || x === n - 8 && y < 8 || y === n - 8 && x < 8) continue;
    if (rnd() > 0.52) on.push(`M${x} ${y}h1v1h-1z`);
  }
  const ring = (x, y) => `M${x} ${y}h7v7h-7zM${x + 1} ${y + 1}v5h5v-5zM${x + 2} ${y + 2}h3v3h-3z`;
  return `<svg viewBox="0 0 ${n} ${n}" aria-hidden="true" shape-rendering="crispEdges"><path fill="#2B1A0C" fill-rule="evenodd" d="${ring(0, 0)}${ring(n - 7, 0)}${ring(0, n - 7)}${on.join("")}"/></svg>`;
}

const lines = k => Array.from({ length: k }, (_, i) => `<span class="ln" style="width:${[92, 70, 84, 60, 88, 76, 66][i % 7]}%"></span>`).join("");

const M = {
  id: `<div class="mock m-id" role="img" aria-label="Front and back of an ID card land on one A4 page">
    <div class="bar-top">ID card <em>· front + back</em></div>
    <div class="page"><div class="card front"><i></i><s></s><s></s><s></s><b>IDENTITY CARD</b></div><div class="card back"><s></s><i></i></div></div>
    <div class="beam"></div><span class="badge">Cropped &amp; straight</span></div>`,
  qr: `<div class="mock m-qr" role="img" aria-label="A QR code is scanned and its web link becomes tappable">
    <div class="bar-top">QR / barcode</div>
    <div class="code"><i class="corner c1"></i><i class="corner c2"></i><i class="corner c3"></i><i class="corner c4"></i>${qr()}<i class="laser"></i></div>
    <div class="link"><small>Link in your PDF – tap to open</small><u>https://example.com/menu</u></div><i class="tap"></i></div>`,
  stamp: `<div class="mock m-stamp st-orange" data-looks="st-orange st-box st-gold st-receipt st-line st-clock" role="img" aria-label="A photo with a date and time stamp in six styles">
    <div class="sun"></div><div class="hill"></div><div class="hill b"></div><div class="tree"></div>
    <span class="name" data-look-name="Orange date · free|Bold box · free|Gold card · Pro|Receipt · Pro|Small line · Pro|Big clock · Pro">Orange date · free</span>
    <div class="stamp">22 Nov 2026 07:42<small>Site visit · Bloemfontein</small></div><div class="shutter"></div></div>`,
  list: `<div class="mock m-list" role="img" aria-label="Scanned barcodes are counted in a list">
    <div class="bar-top">Scan a list <em>· Stock, shelf 3</em></div>
    <div class="rows" data-tally>
      <div class="row" data-n><i></i><span>Rooibos tea 80s<small>6001234567890</small></span><b>4</b></div>
      <div class="row" data-n><i></i><span>Maize meal 5 kg<small>6009876543210</small></span><b>2</b></div>
      <div class="row" data-n><i></i><span>Peanut butter<small>6005551234567</small></span><b>7</b></div>
      <div class="row" data-n><i></i><span>Coffee 250 g<small>6004443332221</small></span><b>3</b></div>
    </div>
    <div class="total">Total <b data-total>16</b><span>Excel ✓</span></div></div>`,
  office: `<div class="mock m-office" role="img" aria-label="A PDF turns into Word, Excel and PowerPoint files">
    <div class="bar-top">Save as…</div>
    <div class="page">${lines(6)}</div><div class="flow"></div>
    <div class="outs"><div class="o w"><i>W</i>Word</div><div class="o x"><i>X</i>Excel</div><div class="o p"><i>P</i>PowerPoint</div></div></div>`,
  sign: `<div class="mock m-sign" role="img" aria-label="A PDF is highlighted, signed and stamped PAID">
    <div class="bar-top">PDF studio <em>· invoice.pdf</em></div>
    <div class="page">${lines(5)}<i class="hl"></i>
      <svg class="sig" viewBox="0 0 120 44" aria-hidden="true"><path d="M4 30c8-18 14-24 16-18s-6 22-2 22 10-26 16-24-2 20 2 20 8-14 12-14 2 12 6 12 8-10 14-10 6 6 10 6 14-4 18-6"/></svg>
      <span class="paid">PAID</span></div>
    <div class="tools"><i>✍️</i><i>🖍️</i><i>T</i><i>🔒</i><i>⋯</i></div></div>`,
  read: `<div class="mock m-read" role="img" aria-label="Lines of a PDF light up as the phone reads them aloud">
    <div class="bar-top">Read it to me</div><div class="page">${lines(5)}${lines(3)}</div>
    <div class="player"><i></i><i></i><i></i><i></i><i></i></div></div>`,
  lock: `<div class="mock m-lock" role="img" aria-label="A PDF is locked with a password">
    <div class="bar-top">Lock with a password</div><div class="page">${lines(7)}</div><div class="pad"></div>
    <div class="dots"><i></i><i></i><i></i><i></i><i></i></div></div>`,
};

module.exports = {
  id: "visagie.philip.visapdf",
  title: "VisaPdf – the whole PDF office in your pocket",
  description: "Photos to PDF, ID card scans, QR codes, time stamp camera, sign and fill PDFs, Word / Excel / PowerPoint – all on your Android phone, nothing uploaded. Free, with a once-off Pro.",
  mocks: true,
  hero: {
    kicker: "New in VisaPdf 1.2",
    title: 'The whole <span class="shine">PDF office</span> in your pocket.',
    lede: "Snap a slip, scan an ID card, sign a contract, turn a PDF into Word – and send it on WhatsApp before the kettle boils. Everything happens on your phone. Nothing is uploaded, ever.",
    chips: ["📷 Photo → PDF", "🪪 ID card scan", "▦ QR & barcodes", "⏱ Time stamp camera", "✍️ Sign & fill", "📄 Word · Excel · PowerPoint"],
    stage: [["s1.webp", "s2.webp", "s4.webp", "s5.webp", "s7.webp"], "s3.webp", "p09.webp"],
    orbits: [
      { t: "✓ Your PDF is ready!", pos: "left:2%;top:14%" },
      { t: "🔒 Stays on your phone", c: "g", pos: "right:0;top:58%" },
      { t: "Tt  Copy any word", c: "c", pos: "left:6%;bottom:8%" },
    ],
  },
  ticker: ["Photos to PDF in seconds", "ID card – front & back on one page", "Tappable QR links", "Time stamp camera", "Scan a list to Excel",
    "Sign & fill forms", "Word · Excel · PowerPoint", "Read it to me", "Lock with a password", "Send several PDFs at once", "Works on tablets & car screens"],
  stats: [
    { n: 9, label: "superpowers in one app" },
    { n: 0, label: "files uploaded – all on your phone" },
    { n: 25, suf: " MB+", label: "PDF size – or no limit with Pro" },
    { t: "Once", label: "Pro is a once-off – no subscription" },
  ],
  showcase: {
    kicker: "New · 1.2",
    title: "Nine superpowers. One small app.",
    lede: "VisaPdf started as “photo to PDF”. Our testers kept asking for more – so now it scans, stamps, signs, counts, reads and converts. The first six are brand new.",
    tiles: [
      { new: true, title: "ID card scan", tag: "free", mock: M.id, text: "Front and back on one A4 page, at real card size. VisaPdf crops the edges and turns the card straight by itself." },
      { new: true, title: "QR & barcodes", tag: "free", mock: M.qr, text: "Scan any code and add it to your PDF as a sharp page. Web links in QR codes can be tapped right inside the PDF." },
      { new: true, title: "Time stamp camera", tag: "free", mock: M.stamp, text: "Date and time on your photo – drag it where you want. Proof of delivery, site visits, meter readings. 2 looks free, 4 more with Pro." },
      { new: true, title: "Scan a list", tag: "pro", mock: M.list, text: "Stock-take in minutes: keep scanning, the same code counts up. Get a neat PDF table or an Excel sheet." },
      { new: true, title: "Word, Excel, PowerPoint", tag: "pro", mock: M.office, text: "Turn any PDF or photo into a Word file you can edit, an Excel sheet with real numbers, or a PowerPoint deck." },
      { new: true, title: "Full PDF studio", tag: "free", mock: M.sign, text: "Open any PDF: sign it, fill in forms, search, copy text. Pro adds draw, highlight, text, whiteout and page tools." },
      { title: "Make text", tag: "pro", img: "s5.webp", text: "Words in your photos become real text. Long-press any word to copy it – or search the whole PDF." },
      { title: "Read it to me", tag: "pro", mock: M.read, text: "Your phone reads the PDF out loud and lights up each line as it goes. Pick the voice and speed." },
      { title: "Lock with a password", tag: "pro", mock: M.lock, text: "Payslips and statements stay private: lock any PDF with strong AES-256 encryption before you send it." },
    ],
  },
  walk: {
    kicker: "Tutorial · 1 minute",
    title: "Your first PDF in four taps.",
    lede: "Slips, invoices, homework, a lease – here's the whole thing, start to finish.",
    steps: [
      { shot: "s1.webp", title: "Take photo or choose photos", text: "Tap <b>Take photo</b> to use VisaPdf's camera (front or back), or <b>Choose photos</b> to pick from your gallery. Every photo becomes one page." },
      { shot: "s2.webp", title: "Put the pages in order", text: "Move pages up or down, remove one with ✕. Tap <b>Tt</b> on a page and its words become real text you can copy and search <span class=\"pro-tag\">Pro</span>." },
      { shot: "s3.webp", title: "Crop and clean up", text: "Tap a page to edit it. Drag the gold corners to crop, turn it left or right, and pick <b>B&amp;W document</b> for that crisp scanned look." },
      { shot: "s4.webp", title: "Make PDF – and send it", text: "Tap <b>Make PDF</b>. It's kept small (under 5 MB) so it fits in any email. Then tap <b>WhatsApp</b>, <b>Share</b> or <b>Save</b>. Done!" },
      { shot: "s7.webp", title: "Find it again in History", text: "Every PDF waits in <b>History</b> – even if you never sent it. Search by name, preview it, edit it, or send a few at once." },
    ],
  },
  feats: {
    kicker: "Everything else it does",
    title: "Small app. Seriously powerful.",
    items: [
      { icon: "Tt", title: "Make text", tag: "pro", text: "Words in your photos become real text – long-press to copy, search inside the PDF." },
      { icon: "🔊", title: "Read it to me", tag: "pro", text: "Your phone reads the PDF aloud and highlights each line as it goes. Choose the voice and speed." },
      { icon: "📨", title: "Send several at once", text: "Long-press in History, pick a few PDFs and send them on WhatsApp, email or save them to a folder." },
      { icon: "✉️", title: "Email one by one", text: "Work mailbox takes only 5 MB? VisaPdf splits your PDFs into emails that fit." },
      { icon: "📂", title: "Open with VisaPdf", text: "Open PDFs from Gmail, WhatsApp or Files right in VisaPdf's studio – zoom, search, copy, print." },
      { icon: "🔑", title: "Password PDFs", text: "Open password-protected PDFs (bank statements!). Pro can lock your own PDFs with a password too." },
      { icon: "🖊️", title: "Fill in forms", text: "Type into PDF forms, tick the boxes, sign and send back – no printer needed." },
      { icon: "📑", title: "Page tools", tag: "pro", text: "Delete, move, copy or add pages, join two PDFs, page numbers, watermark, new PDF from chosen pages." },
      { icon: "📺", title: "Tablets & car screens", text: "Looks right on a phone, a tablet or a 9-inch car radio. Light or dark look." },
    ],
  },
  howto: {
    kicker: "How to",
    title: "Step by step, for every tool.",
    lede: "Tap a tool to open its steps.",
    items: [
      { icon: "🪪", title: "Scan an ID card", tag: "free", sub: "Front and back on one page", steps: [
        "On the home screen tap <b>ID card</b>.", "Hold the phone over the <b>front</b> of the card – the scanner finds the edges and snaps it.",
        "Turn the card over and scan the <b>back</b> (or tap <b>No back – PDF with the front only</b>).",
        "VisaPdf turns both sides straight and puts them on one A4 page at real size. Want them bigger? Switch on <b>Bigger cards</b>.",
        "Tap <b>WhatsApp</b>, <b>Share</b> or <b>Save</b>."],
        tip: "Already have pages in your list? The ID card joins them as the next page." },
      { icon: "▦", title: "Add a QR code or barcode", tag: "free", sub: "With links you can tap in the PDF", steps: [
        "Tap <b>QR / barcode</b> and point the camera at the code.", "VisaPdf shows what's inside – a link (and whether it's secure), Wi-Fi password, phone number…",
        "Tap <b>Add to PDF</b>. Add a note for the page if you like.", "Tap <b>Make PDF</b>. Links in QR codes can now be tapped by whoever opens your PDF."],
        tip: "QR codes in your normal photos work too – VisaPdf finds them and makes their links tappable." },
      { icon: "⏱", title: "Time stamp a photo", tag: "free", sub: "Proof of when and where", steps: [
        "Tap <b>Time stamp</b>.", "Drag the stamp to where you want it, pick a look and type a note (like a site name) <span class=\"pro-tag\">Pro</span>.",
        "Take the photo. You can still move the stamp or change the look.", "Tap <b>Save photo</b>, <b>Add to PDF</b> or <b>Share</b>."] },
      { icon: "✍️", title: "Sign a PDF someone sent you", tag: "free", sub: "Contracts, school forms, leases", steps: [
        "In WhatsApp or Gmail, tap the PDF and choose <b>Open with VisaPdf</b>.", "Tap <b>Sign</b>, draw your signature with your finger and tap <b>Use</b>. VisaPdf keeps up to 5 signatures.",
        "Drag the signature onto the line and pinch to size it.", "Tap <b>Save</b> or <b>WhatsApp</b> to send it straight back."],
        tip: "A signature here is a picture of your signature – fine for everyday forms, not a certified digital signature." },
      { icon: "📄", title: "Turn a PDF into Word or Excel", tag: "pro", sub: "Edit the text, use the numbers", steps: [
        "Make a PDF (or open one with VisaPdf).", "On the ready card tap <b>Save as Word, Excel or PowerPoint</b>.",
        "Pick <b>Word – editable text</b>, <b>Word – exact look</b>, <b>Excel</b> or <b>PowerPoint</b>.", "Send it or save it. Amounts in Excel are real numbers you can add up."] },
      { icon: "📦", title: "Scan a list (stock-take)", tag: "pro", sub: "Counted, to PDF or Excel", steps: [
        "Tap <b>QR / barcode</b>, scan the first item and tap <b>Scan a list</b>.", "Give the list a name. Keep <b>Keep scanning</b> on – the scanner opens again after each code.",
        "Scan the same code again and it counts up. Fix a count with − and +.", "Tap <b>Add to PDF</b> for a table with a total row, or <b>Excel</b> for a spreadsheet."] },
      { icon: "🔊", title: "Have a PDF read to you", tag: "pro", sub: "Great for long letters", steps: [
        "Before you make the PDF, tap <b>Tt</b> on the pages you want to read.", "Make the PDF and tap <b>Preview PDF</b>.",
        "Tap <b>Read it to me</b>. The line being read lights up in gold.", "Change <b>Speed</b> or <b>Voice</b> on the player at the bottom."] },
      { icon: "✉️", title: "Email many PDFs, one by one", tag: "free", sub: "For mailboxes with a size limit", steps: [
        "Open <b>History</b> and long-press a PDF. Tap more to pick them.", "Tap <b>One by one</b> and type the email address (only once).",
        "VisaPdf packs them into emails that fit and opens Gmail for each – you press Send."] },
    ],
  },
  compare: {
    kicker: "Free vs Pro", title: "Free is generous. Pro is unstoppable.",
    lede: "Everything in the free version works for real – no watermarks, no trial. Pro is for people who do this every day.",
    rows: [
      "Make PDFs",
      ["Photos & camera to PDF (front + back camera)", true, true], ["Crop, turn, black & white document look", true, true],
      ["ID card – front & back on one page", true, true], ["QR / barcode pages, tappable links", true, true],
      ["PDF size", "5 MB", "Any"], ["Make text from photos (Tt)", false, true], ["Read it to me", false, true],
      "Camera tools",
      ["Time stamp camera", "2 looks", "6 + note"], ["Scan a list – counted, PDF table or Excel", false, true],
      "PDF studio",
      ["Open, zoom, search, copy, print", true, true], ["Sign & fill in forms", true, true], ["Open password PDFs", true, true],
      ["Draw, highlight, add text, photo, whiteout", false, true], ["Delete, move, copy, add pages · join PDFs", false, true],
      ["Lock with a password · page numbers · watermark", false, true], ["Save as Word, Excel, PowerPoint", false, true],
      "Sending & extras",
      ["History, send several, email one by one", true, true], ["Works on tablets & car screens", true, true], ["No ads", false, true],
    ],
  },
  pitch: {
    title: "Get Pro once. Keep it forever.",
    price: "R49.99", once: "once-off · about $2.99",
    fine: "Google Play shows the exact price for your country. No subscription, no monthly fees – ever.",
    list: ["Word, Excel & PowerPoint", "Scan a list to Excel", "Draw, highlight, text, whiteout", "Page tools & join PDFs", "Lock PDFs with a password",
      "Read it to me & Make text", "Any PDF size", "No ads"],
    how: "In the app: Settings → Upgrade to Pro",
    why: [["Less than a coffee", "Pay once – then every new Pro tool we add is yours too."], ["Yours to keep", "Bought with your Google account. New phone? Tap Restore purchase."], ["Supports a small developer", "Built in South Africa by one person, shaped by real testers."]],
  },
  privacy: { title: "Your documents never leave your phone.", text: "ID cards, payslips, contracts – VisaPdf reads, scans and converts them all on your device. No account, no cloud, no uploads. Only you decide where a PDF goes." },
  faq: [
    ["Is VisaPdf really free?", "Yes. Making PDFs, ID cards, QR pages, the time stamp camera, signing and filling forms all work in the free version, with one small banner ad. Pro is an optional once-off purchase."],
    ["Does it upload my documents?", "No. Everything – scanning, reading text, converting to Word – happens on your phone. VisaPdf has no account and no server."],
    ["I bought Pro on my old phone. Do I pay again?", "No. Install VisaPdf with the same Google account, open Settings and tap Restore purchase."],
    ["Can it open PDFs other people send me?", "Yes. In WhatsApp, Gmail or Files tap the PDF and pick “Open with VisaPdf”. You can zoom, search, copy, sign, fill in and print – free."],
    ["Why is it called VisaPdf?", "“Visa” comes from the developer's surname, Visagie. It's a general PDF app for any documents – not for visa applications."],
  ],
};
