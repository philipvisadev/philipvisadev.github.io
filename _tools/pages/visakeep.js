// VisaKeep page words. Run: node _tools/make-app-pages.js visakeep
// Free / Pro split from VisaKeep/HANDOFF.md. Wording: never pills / medicine / doctors / banking / loans / budget.
// Say plainly it's a personal organiser – NOT a visa or immigration service.
module.exports = {
  id: "visagie.philip.visakeep",
  title: "VisaKeep – never miss a licence disc, warranty or birthday again",
  description: "Take a photo, pick the date, and VisaKeep reminds you a month before, a week before and on the day. Plus shopping lists, a monthly budget and a car logbook. Everything stays on your phone.",
  hero: {
    kicker: "Your home admin, sorted",
    title: 'Never miss <span class="shine">a date.</span>',
    lede: "Snap your licence disc, passport, contract or warranty slip, pick the date – VisaKeep reminds you a month before, a week before and on the day. Plus shopping lists, a monthly budget and a car logbook.",
    chips: ["📷 Photo + date", "🔔 Reminded in time", "🛡️ Warranty helper", "🎂 Birthdays", "🛒 Shopping lists", "💰 Monthly budget", "🚗 Car logbook"],
    stage: [["s1.webp", "s2.webp", "s4.webp", "s5.webp"], "s3.webp", "s5.webp"],
    orbits: [
      { t: "🚗 Licence disc in 15 days", pos: "left:2%;top:12%" },
      { t: "🎂 Mom's birthday", c: "g", pos: "right:0;top:56%" },
      { t: "🛡️ TV warranty", c: "c", pos: "left:6%;bottom:8%" },
    ],
  },
  ticker: ["Licence disc", "Roadworthy", "Passport", "Insurance renewal", "Rental contract", "Warranties", "Birthdays",
    "Appointments", "Shopping lists", "Home stock", "Monthly budget", "Fuel & services", "Lent & borrowed"],
  stats: [
    { n: 3, label: "reminders – a month, a week, the day" },
    { n: 5, label: "tabs – Due soon, Keep, Lists, Car, Budget" },
    { n: 0, label: "accounts – everything stays on your phone" },
    { t: "Once", label: "Pro is a once-off – no subscription" },
  ],
  showcase: {
    kicker: "What it does", title: "Remembers the dates you forget.",
    lede: "One app for the papers, the lists and the car – each with a photo, a date and a reminder.",
    tiles: [
      { title: "Due soon", tag: "free", img: "s1.webp", text: "Everything coming up in the next 30 days, first. Red when it's close, gold when there's time." },
      { title: "Photo, date, done", tag: "free", img: "s3.webp", text: "Take a photo of the licence disc or till slip, pick a category and the date. Pro reads the date from the photo for you." },
      { title: "Car logbook", tag: "free", img: "s5.webp", text: "Fuel fill-ups and services, next service by km, litres per 100 km and costs per month and year." },
    ],
  },
  walk: {
    kicker: "Tutorial · 1 minute", title: "Keep your first date.",
    lede: "Your licence disc, start to finish.",
    steps: [
      { shot: "s1.webp", title: "Tap Keep something", text: "The big gold button at the bottom of the home screen." },
      { shot: "s3.webp", title: "Photo and name", text: "Tap <b>Take photo</b> (or <b>Pick photo</b>), type <b>Licence disc</b> and pick the category <b>Car</b>." },
      { shot: "s3.webp", title: "Pick the date and reminders", text: "Tap the date it runs out, then how early to remind you – 30 days, 7 days… You always get one on the day too." },
      { shot: "s2.webp", title: "Save. It's kept.", text: "It sits under <b>Keep</b> by category and shows up in <b>Due soon</b> when the date gets close." },
    ],
  },
  feats: {
    kicker: "More than dates", title: "Small things that save you trouble.",
    items: [
      { icon: "🛡️", title: "Warranty helper", text: "Pick the day you bought it and how long the warranty lasts – VisaKeep works out the end date." },
      { icon: "⏰", title: "Appointments with a time", text: "Hairdresser at 14:30? Get a reminder 15 minutes to 3 hours before." },
      { icon: "📨", title: "Send to someone", text: "Share a date on WhatsApp or email – they tap the link and it goes straight into their VisaKeep." },
      { icon: "📱", title: "Home-screen widget", text: "See what's next without opening the app. Pick its colour, glow and what it shows." },
      { icon: "🏠", title: "Home stock", text: "Running low on coffee? It goes onto the shopping list by itself." },
      { icon: "🔧", title: "Lent & borrowed", text: "Who has your drill, since when – and a reminder to ask for it back." },
      { icon: "💰", title: "Monthly budget", text: "Debit orders, payments, cash, savings and income – tick each one off as it's paid. Pay days show up in Due soon." },
      { icon: "⛽", title: "Fills itself in", text: "Petrol comes from your fuel log, groceries from the prices on your shopping list." },
      { icon: "🔒", title: "PIN-lock the budget", text: "Optional 4-digit PIN. Forgot it? Your phone's own fingerprint or screen lock opens it." },
      { icon: "🔁", title: "Repeats", tag: "pro", text: "Every week, month or year – birthdays, bin day, the yearly licence disc." },
      { icon: "🔍", title: "Reads the date", tag: "pro", text: "Take the photo and VisaKeep finds the expiry date on it." },
      { icon: "🔔", title: "More reminders", tag: "pro", text: "60, 30, 14, 7 and 1 day before – pick as many as you like, and several photos per item." },
    ],
  },
  howto: {
    kicker: "How to", title: "Handy recipes.",
    items: [
      { icon: "🛡️", title: "Keep a warranty", tag: "free", sub: "Claim in time", steps: [
        "Tap <b>Keep something</b> and photograph the till slip.", "Pick the category <b>Warranties</b>.",
        "Pick the day you bought it and how long the warranty lasts – the end date fills in by itself."],
        tip: "With Pro, VisaKeep reads the date from the till slip for you." },
      { icon: "🎂", title: "Never forget a birthday", tag: "free", sub: "Call or WhatsApp from the reminder", steps: [
        "Tap <b>Keep something</b>, pick <b>Birthdays</b>.", "Type the name or pick the person from your contacts.",
        "On the day, tap <b>Call</b> or <b>WhatsApp</b> right on the reminder."], tip: "With Pro, set it to repeat every year." },
      { icon: "📨", title: "Send a date to the family", tag: "free", sub: "School concert, family lunch", steps: [
        "Open the item and tap <b>Send to someone</b>.", "Choose WhatsApp or email.",
        "They tap the link and tap <b>Add</b> – date, time and reminders included."] },
      { icon: "🛒", title: "Shopping list", tag: "free", sub: "Add many at once", steps: [
        "Open <b>Lists</b>, type items and tap <b>Add</b>.", "Tick them off in the shop.", "Tap <b>Share</b> to send the list as text, or <b>Clear ticked</b>."] },
      { icon: "⛽", title: "Log your fuel", tag: "free", sub: "Litres per 100 km", steps: [
        "Open <b>Car</b> and add your car once.", "After filling up, tap <b>Fuel</b> and type the litres, price and km.",
        "VisaKeep shows your consumption, costs and when the next service is due."] },
      { icon: "💰", title: "Your monthly budget", tag: "free", sub: "Like your Excel sheet – on your phone", steps: [
        "Open <b>Budget</b> and tap <b>Start November's budget</b>.", "Tap a group – Debit orders, Payments, Cash, Savings, Unplanned or Income – and add your lines with a pay day.",
        "Tick each one as it's paid. Next month, tap <b>Start December</b>: same lines, ticks cleared, what's left over brought forward."],
        tip: "Tap 🔒 next to the month to lock the budget with a PIN." },
    ],
  },
  compare: {
    kicker: "Free vs Pro", title: "Free keeps you covered. Pro keeps everything.",
    rows: [
      "The basics",
      ["Kept items", "15", "Unlimited"], ["Shopping lists", "2", "Unlimited"], ["Cars", "1", "Unlimited"],
      ["Photo, date and a reminder on the day", true, true], ["Warranty helper · appointments · birthdays", true, true],
      ["Send to someone · widget · home stock", true, true], ["Fuel and service logbook", true, true],
      ["Monthly budget for this month · PIN lock", true, true],
      "Pro",
      ["Repeats – every week, month or year", false, true], ["Reads the date from the photo", false, true],
      ["Reminders before the day", "1", "As many as you like"], ["Several photos per item", false, true],
      ["Budget: past months, Excel export, chart", false, true], ["No ads", false, true],
    ],
  },
  pitch: {
    title: "Keep everything, repeat everything.",
    fine: "Google Play shows the exact price for your country. No subscription, ever.",
    list: ["Unlimited items, lists and cars", "Repeats every week, month or year", "Reads the date from the photo", "Several reminders per item", "Several photos per item", "Budget history, Excel export & chart", "No ads"],
    how: "In the app: Settings → VisaKeep Pro",
    why: [["Pay once", "No monthly fee for your own dates."], ["Yours to keep", "New phone? Same Google account, tap Restore purchase."], ["No account", "Nothing to sign up for, nothing uploaded."]],
  },
  privacy: { title: "Your papers stay on your phone.", text: "Everything stays on your phone – no account, no cloud, and VisaKeep never connects to your bank. Contacts are picked one at a time, so VisaKeep can't see your contact list. Photos come from your own camera or photo picker." },
  faq: [
    ["Is this a visa or immigration service?", "No. VisaKeep is a personal organiser made by a small team in South Africa. “Visa” comes from the surname Visagie."],
    ["When do the reminders come?", "Around 8 in the morning on the days you chose, and always on the day itself. Appointments with a time remind you the set time before."],
    ["Do I pay again on a new phone?", "No. Use the same Google account and tap Restore purchase in Settings."],
    ["Does the link I send upload my data?", "No. The date sits in the link itself after the “#”, which is never sent to our website."],
  ],
};
