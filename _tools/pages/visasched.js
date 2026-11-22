// VisaSched page words. Run: node _tools/make-app-pages.js visasched
// Free / Pro split from _VisaStoreListings/VisaSched/listing.md (Places is switched off – don't mention it).
module.exports = {
  id: "visagie.philip.visasched",
  title: "VisaSched – smart reminders that put your phone on autopilot",
  description: "Reminders that read themselves aloud and open WhatsApp, the dialer or maps ready to go. Battery, charger, Wi-Fi and Bluetooth automations. Just say it: “Call Mom at 3 pm”.",
  hero: {
    kicker: "Smart reminders · Automations",
    title: 'Your phone, <span class="shine">on autopilot.</span>',
    lede: "Say “Call Mom at 3 pm” and it's done. VisaSched reads your reminders aloud, opens WhatsApp with the birthday message already typed, and starts the radio when your car connects.",
    chips: ["🗣️ Just say it", "🔊 Reads aloud", "💬 WhatsApp ready", "🔋 Battery & charger", "🚗 Car Bluetooth", "🧩 Starts the Visa apps"],
    stage: [["s1.webp", "s2.webp", "s3.webp", "s5.webp"], "s4.webp", "s5.webp"],
    orbits: [
      { t: "🔊 “Take your pills”", pos: "left:2%;top:12%" },
      { t: "🚗 Car connected → radio", c: "g", pos: "right:0;top:56%" },
      { t: "🎂 Message ready to send", c: "c", pos: "left:6%;bottom:8%" },
    ],
  },
  ticker: ["“Call Mom at 3 pm”", "Reads reminders aloud", "WhatsApp with the message typed", "Charger in → good night", "Battery low → ten push-ups",
    "Car connects → radio on", "Water & desk breaks", "Meeting starts → Do Not Disturb", "Starts VisaPlay, VisaCook & VisaPdf"],
  stats: [
    { n: 20, label: "triggers – time, battery, Bluetooth…" },
    { n: 15, suf: "+", label: "ready-made starters" },
    { n: 1, label: "sentence to set it up" },
    { t: "Once", label: "Pro is a once-off – no subscription" },
  ],
  showcase: {
    kicker: "What it can do", title: "A reminder that does the work.",
    lede: "A reminder that only beeps is half the job. VisaSched gets everything ready – you just tap.",
    tiles: [
      { title: "When… then…", tag: "free", img: "s2.webp", text: "Pick WHEN: a time, charger in, battery low, Wi-Fi, Bluetooth. Pick WHAT: say something, vibrate, torch, volume, open an app." },
      { title: "Ready to tap", tag: "free", img: "s4.webp", text: "The dialer with the number, WhatsApp on the right chat with the message typed, maps with directions. You press Send." },
      { title: "Starters", tag: "free", img: "s5.webp", text: "Birthday, Call Mom, Water break, Car mode, Night charging… tap one, save, done." },
    ],
  },
  walk: {
    kicker: "Tutorial · 1 minute", title: "Your first automation.",
    lede: "Two ways: just say it, or build it with taps.",
    steps: [
      { shot: "s1.webp", title: "Tap Speak – and say it", text: "Tap <b>Speak</b> and say <b>“Call Mom at 3 pm”</b>. VisaSched fills in the time, repeat and action for you to check." },
      { shot: "s2.webp", title: "Or tap New and pick WHEN", text: "At a time, phone restarts, charger in or out, battery low or full, Wi-Fi, Bluetooth… Calendar, messages and more with Pro." },
      { shot: "s3.webp", title: "Pick WHAT happens", text: "<b>Say out loud</b>, notification, vibrate, volume, ring mode, torch – or open the phone, WhatsApp, SMS, email, a link or an app." },
      { shot: "s1.webp", title: "Save. It's on.", text: "Your automations sit on the home screen with a switch. Tap ▶ to test one right now." },
    ],
  },
  feats: {
    kicker: "More than a time", title: "Fun, useful – and a little bit magic.",
    items: [
      { icon: "🔊", title: "Read it to me", text: "Tap 🔊 on the notification – even on the lock screen. Pro reads every reminder as it pops up." },
      { icon: "💪", title: "Move more", text: "Battery below 30%? Ten push-ups! Points and a daily streak." },
      { icon: "💧", title: "Water & toilet breaks", text: "Every-few-hours reminders that stay quiet at night." },
      { icon: "💬", title: "Messages read aloud", tag: "pro", text: "A WhatsApp arrives while you drive? Hear it – or auto-reply “driving”." },
      { icon: "📅", title: "Calendar smarts", tag: "pro", text: "Do Not Disturb when a meeting starts, open the meeting link, navigate to the appointment." },
      { icon: "🤳", title: "Shake & face down", tag: "pro", text: "Shake for the torch, put the phone face down for silence." },
      { icon: "🌅", title: "Sunrise, music, apps", tag: "pro", text: "Sunrise or sunset, music starts, an app opens, a new photo – all triggers." },
      { icon: "⏰", title: "Loud alarm", tag: "pro", text: "An alarm that keeps ringing until you deal with it – plus early warnings." },
      { icon: "🧩", title: "Starts the Visa apps", text: "Radio in VisaPlay at 4, dinner in VisaCook at 5, VisaPdf's camera after work." },
    ],
  },
  howto: {
    kicker: "How to", title: "Favourite recipes.",
    items: [
      { icon: "🎂", title: "Birthday message, ready to send", tag: "free", sub: "Never forget again", steps: [
        "Tap the <b>Birthday</b> starter.", "Pick the contact and the date, and type your message.",
        "On the day, tap the notification: WhatsApp opens on their chat with your message typed. Press Send."] },
      { icon: "🚗", title: "Car connects → radio on", tag: "free", sub: "Bluetooth trigger", steps: [
        "Tap <b>New</b> and choose <b>Bluetooth connects</b>, then pick your car.", "Add the action <b>Music control → Play</b> (or open VisaPlay).",
        "Save. Next time you start the car, the music starts."], tip: "With VisaPlay Pro, VisaSched can start your favourite radio station." },
      { icon: "🔋", title: "Battery low → ten push-ups", tag: "free", sub: "Move more", steps: [
        "Tap the <b>Battery low</b> or a <b>Move more</b> starter.", "Choose the level (say 30%) and the exercise.", "When the battery drops, VisaSched says it out loud. Earn points and keep your streak."] },
      { icon: "💊", title: "Pills every 4 hours", tag: "free", sub: "Read aloud", steps: [
        "Tap <b>Speak</b> and say <b>“Take my pills every 4 hours”</b>.", "Check the time and switch on <b>Say out loud</b>.",
        "Tap <b>Taken</b> or <b>Snooze</b> on the notification."] },
      { icon: "💬", title: "Read WhatsApps while driving", tag: "pro", sub: "And auto-reply", steps: [
        "Use the <b>Driving mode</b> starter.", "Allow notification access when VisaSched asks (used only on your phone).",
        "New messages are read aloud. Switch on <b>Driving reply</b> to answer “driving” – once per person."] },
      { icon: "🤝", title: "Meeting starts → Do Not Disturb", tag: "pro", sub: "Calendar trigger", steps: [
        "Tap the <b>Meeting quiet</b> starter.", "Pick your calendar.", "When a meeting starts the phone goes quiet – and comes back after."] },
    ],
  },
  compare: {
    kicker: "Free vs Pro", title: "Free gets you started. Pro runs your day.",
    rows: [
      "The basics",
      ["Automations", "5", "Unlimited"], ["Actions per automation", "2", "Unlimited"], ["Time, battery, charger, Wi-Fi, Bluetooth, restart", true, true],
      ["Speak to set up · starters", true, true], ["Ready-to-tap WhatsApp, dialer, maps, links", true, true], ["Tap to read aloud · move more · water breaks", true, true],
      "Smart triggers",
      ["Messages arrive – read, count, auto-reply", false, true], ["Calendar events", false, true], ["Music, sunrise, shake, face down, apps, new photo", false, true],
      ["“Only if” conditions", false, true], ["Do Not Disturb, silent, brightness, rotate", false, true], ["Read every reminder aloud", false, true],
      ["Loud alarm, early warnings, webhooks, history", false, true], ["No ads", false, true],
    ],
  },
  pitch: {
    title: "Put your whole day on autopilot.",
    price: "R49.99", once: "once-off · about $2.99",
    fine: "Google Play shows the exact price for your country. No subscription, ever.",
    list: ["Unlimited automations", "Messages read aloud & auto-reply", "Calendar triggers", "Shake, face down, sunrise", "Do Not Disturb & silent", "Loud alarm", "Every reminder read aloud", "No ads"],
    how: "In the app: Settings → VisaSched Pro",
    why: [["Pay once", "Automation apps often charge monthly. Not this one."], ["Yours to keep", "New phone? Same Google account, tap Restore purchase."], ["You stay in charge", "VisaSched never sends or deletes anything without you."]],
  },
  privacy: { title: "Your day stays on your phone.", text: "Automations stay on your phone. Messages and which app is open are used on your phone only to run your automations – never uploaded or used for ads. VisaSched never reads your contact list, SMS or call log." },
  faq: [
    ["Does it send messages for me?", "No. VisaSched opens WhatsApp, SMS or email with everything filled in – you press Send. The only exception is the Pro “Driving reply”, which you switch on yourself."],
    ["Why does it ask for notification access?", "Only for the Pro “message arrives” trigger and music state. It's off until you turn it on, and nothing leaves your phone."],
    ["Will it drain my battery?", "No. Time reminders use Android's own alarms. Instant triggers are optional and show a small notification while on."],
    ["Do I pay again on a new phone?", "No. Use the same Google account and tap Restore purchase in Settings."],
  ],
};
