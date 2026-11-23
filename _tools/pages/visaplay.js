// VisaPlay page words. Run: node _tools/make-app-pages.js visaplay
// Free / Pro split from _VisaStoreListings/VisaPlay/listing.md and VisaPlay/HANDOFF.md.
module.exports = {
  id: "visagie.philip.visaplay",
  title: "VisaPlay – plays every video & music file, plus world radio",
  description: "VisaPlay plays MKV, AVI, FLAC and almost every other format, with subtitles, playlists, music visuals and thousands of internet radio stations. Cast to your TV and play from your PC or NAS with Pro.",
  hero: {
    kicker: "Video · Music · Radio",
    title: 'Plays the files <span class="shine">others give up on.</span>',
    lede: "MKV, AVI, FLAC, Dolby sound, styled subtitles – VisaPlay just plays them. Then add thousands of radio stations, your PC's movies and your TV, all from one small app.",
    chips: ["🎬 MKV · AVI · MP4", "🎵 FLAC · MP3 · OPUS", "💬 Subtitles", "📻 World radio", "📺 Cast to TV", "🖥️ PC & NAS"],
    stage: [["s1.webp", "s3.webp", "p08.webp", "p02.webp", "p10.webp"], "s4.webp", "p09.webp"],
    orbits: [
      { t: "▶ Continue watching", pos: "left:2%;top:12%" },
      { t: "📻 Live · Smooth Jazz", c: "g", pos: "right:0;top:56%" },
      { t: "No codec packs", c: "c", pos: "left:6%;bottom:8%" },
    ],
  },
  ticker: ["MKV · MP4 · AVI · MOV · WMV · WebM", "MP3 · FLAC · AAC · OGG · OPUS · WAV", "Dolby AC3 & DTS sound", "Styled subtitles", "Free playlists",
    "Thousands of radio stations", "Cast to Chromecast", "Play from PC, NAS, Plex, Kodi", "Picture-in-picture", "Equaliser with bass boost"],
  stats: [
    { n: 20, suf: "+", label: "video & music formats" },
    { n: 1000, suf: "s", label: "of radio stations, world-wide" },
    { n: 0, label: "codec packs to install" },
    { t: "Once", label: "Pro is a once-off – no subscription" },
  ],
  showcase: {
    kicker: "What it can do",
    title: "One player for everything.",
    lede: "From the WhatsApp voice note to the 4-hour MKV movie on your PC – VisaPlay handles it.",
    tiles: [
      { title: "Plays almost everything", tag: "free", img: "s1.webp", text: "Videos, music and folders, neatly sorted. Continue watching picks up exactly where you stopped." },
      { title: "Preview view", tag: "free", img: "p02.webp", text: "Video thumbnails play a short silent clip, so you see what's inside before you tap." },
      { title: "Music that keeps playing", tag: "free", img: "s3.webp", text: "Screen off, phone in your pocket – control it from the lock screen, headphones or car Bluetooth." },
      { title: "World radio", tag: "pro", img: "p08.webp", text: "Local favourites and stations from everywhere. Search by name or style – jazz, gospel, news…" },
      { title: "Equaliser & bass boost", tag: "pro", img: "p10.webp", text: "Presets for every taste – Rock, Pop, Live, Full bass. Your music, your way." },
      { title: "Play from your PC or NAS", tag: "pro", img: "p11.webp", text: "Watch the movies on your home computer, NAS, Plex or Kodi – without copying them to your phone." },
    ],
  },
  walk: {
    kicker: "Tutorial · 1 minute",
    title: "From file to full screen.",
    lede: "No setup. Open VisaPlay and your videos and music are already there.",
    steps: [
      { shot: "s1.webp", title: "Pick Videos, Music or Folders", text: "VisaPlay finds every video and song on your phone. Tap <b>Open any file</b> for something in your downloads – or use <b>Open with VisaPlay</b> from WhatsApp or Files." },
      { shot: "p02.webp", title: "Choose how you browse", text: "<b>List</b> for names only, <b>Detail</b> for pictures and sizes, or <b>Preview</b> where clips quietly play. Sort by newest, name, size or length." },
      { shot: "s3.webp", title: "Play – and control it your way", text: "On video, swipe left side for brightness, right side for volume, sideways to seek. Double-tap to skip. On music: shuffle, repeat, sleep timer." },
      { shot: "s4.webp", title: "Make playlists – free", text: "Tap ⋮ on any song or video: <b>Play next</b>, <b>Add to queue</b> or <b>Add to playlist</b>. Tap the heart for favourites." },
      { shot: "p09.webp", title: "Switch on the radio", text: "Open <b>Online</b>, search a station or a style and tap it. It keeps playing with the screen off <span class=\"pro-tag\">Pro</span>." },
    ],
  },
  feats: {
    kicker: "And there's more",
    title: "Little things that make a big difference.",
    items: [
      { icon: "💬", title: "Subtitles", text: "Built-in SRT and styled ASS/SSA subtitles, or load your own file. Switch audio languages with one tap." },
      { icon: "🎙️", title: "Voice notes", text: "Show only WhatsApp audio or recordings. Tap “Who is this?” to name who's talking." },
      { icon: "🧠", title: "Find voice notes by person", tag: "pro", text: "Name one note and VisaPlay finds the others that sound like them – all on your phone." },
      { icon: "🌈", title: "Music visuals", text: "Bars and Ring visuals dance to your music. Pro adds the Aurora visual." },
      { icon: "🪟", title: "Picture-in-picture", tag: "pro", text: "Keep watching in a small window while you reply on WhatsApp." },
      { icon: "🔗", title: "Play any link", tag: "pro", text: "Paste the address of a web video, song or live stream (http, m3u8, rtsp)." },
      { icon: "⏩", title: "Speed, sleep & A-B repeat", tag: "pro", text: "Learn a song, study a lecture, fall asleep to music." },
      { icon: "🔒", title: "Lock the screen", tag: "pro", text: "No more accidental taps when the kids are watching." },
      { icon: "📤", title: "Share", text: "Pick a few videos or songs and send them with WhatsApp, Gmail or Bluetooth." },
    ],
  },
  howto: {
    kicker: "How to", title: "Step by step.",
    items: [
      { icon: "📺", title: "Cast a video to your TV", tag: "pro", sub: "Chromecast or Google TV", steps: [
        "Make sure your phone and TV are on the same Wi-Fi.", "Start the video in VisaPlay and tap the <b>Cast</b> button at the top.",
        "Pick your TV. Your phone's volume buttons now control the TV's volume."] },
      { icon: "🖥️", title: "Watch movies from your PC or NAS", tag: "pro", sub: "No copying needed", steps: [
        "Open the <b>Network</b> tab (Wi-Fi icon). VisaPlay looks for computers and media servers on your Wi-Fi.",
        "Tap your PC or NAS – or tap <b>Add a server</b> and choose PC/NAS, FTP, SFTP or NFS.", "Type the login if it asks (it's kept encrypted on your phone only).",
        "Browse the folders and tap a movie to play it."], tip: "Works with Windows shares, Plex, Kodi and other DLNA media servers." },
      { icon: "📻", title: "Find a radio station", tag: "pro", sub: "Local or world-wide", steps: [
        "Open the <b>Online</b> tab (globe).", "Type a name or a style – <b>jazz</b>, <b>gospel</b>, <b>news</b>. Switch between <b>Near you</b> and <b>Worldwide</b>.",
        "Tap a station. Tap the heart to keep it in your favourites."], tip: "With VisaSched your station can start by itself – say, every weekday at 4 pm." },
      { icon: "🎵", title: "Make a playlist", tag: "free", sub: "Videos and music together", steps: [
        "Tap ⋮ next to any song or video and choose <b>Add to playlist…</b>", "Tap <b>New playlist</b>, give it a name.",
        "Open the <b>Playlists</b> tab to play it. Drag songs to change the order."] },
      { icon: "💬", title: "Load your own subtitles", tag: "free", sub: "SRT, ASS, VTT…", steps: [
        "While a video plays, tap the speech-bubble button.", "Pick a built-in subtitle track – or tap <b>Load a subtitle file</b> and choose it.",
        "The same screen switches audio languages."] },
      { icon: "🎙️", title: "Name a voice note", tag: "free", sub: "Who is talking?", steps: [
        "In <b>Music</b>, tap the <b>WhatsApp audio</b> chip.", "Tap ⋮ on a voice note, then <b>Who is this?</b> and type the name.",
        "With Pro, VisaPlay finds the other notes that sound like the same person."] },
    ],
  },
  compare: {
    kicker: "Free vs Pro", title: "Free plays it all. Pro takes it everywhere.",
    lede: "The free version plays every format with no limits. Pro adds the radio, your TV and your PC.",
    rows: [
      "Playing",
      ["Every video & music format, Dolby & DTS sound", true, true], ["Subtitles & audio tracks", true, true],
      ["Background music, lock screen & Bluetooth controls", true, true], ["Playlists & favourites", true, true],
      ["Continue where you stopped", "Last 5", "Every file"],
      "Pro powers",
      ["Thousands of internet radio stations", false, true], ["Cast to your TV", false, true], ["Play from PC, NAS, Plex, Kodi", false, true],
      ["Play any link or live stream", false, true], ["Picture-in-picture", false, true], ["Equaliser with presets & bass boost", false, true],
      ["Speed, sleep timer, A-B repeat, screen lock", false, true], ["Find voice notes by person", false, true], ["Import & export .m3u playlists", false, true],
      ["No ads", false, true],
    ],
  },
  pitch: {
    title: "Your phone, your TV, the world's radio.",
    fine: "Google Play shows the exact price for your country. No subscription, ever.",
    list: ["Thousands of radio stations", "Cast to your TV", "Play from your PC or NAS", "Play any link", "Picture-in-picture", "Equaliser & bass boost", "Sleep timer & A-B repeat", "No ads"],
    how: "In the app: Settings → VisaPlay Pro",
    why: [["Pay once", "No monthly fee for radio or streaming – it's yours."], ["Yours to keep", "New phone? Same Google account, tap Restore purchase."], ["Made in South Africa", "By one developer, tested on real phones and car radios."]],
  },
  privacy: { title: "Your videos stay yours.", text: "No account, no sign-up, nothing uploaded. Logins for your own computers are kept encrypted on your phone only." },
  faq: [
    ["Will it play my MKV / AVI files?", "Almost certainly. VisaPlay uses the LibVLC engine by VideoLAN, which plays nearly every video and audio format – no codec packs needed."],
    ["Is the radio free?", "Internet radio is part of VisaPlay Pro (a once-off purchase). Radio uses mobile data or Wi-Fi like any stream."],
    ["Does it work in my car?", "Yes – music carries on with the screen off and works with Bluetooth controls. VisaPlay also fits 9-inch car radio screens."],
    ["Do I pay again on a new phone?", "No. Use the same Google account and tap Restore purchase in Settings."],
  ],
};
