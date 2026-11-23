// VisaRelax page words. Run: node _tools/make-app-pages.js visarelax
// Own game names only (no Tetris / Connect 4 / Bejeweled …). No "kids" wording (target audience 13+).
module.exports = {
  id: "visagie.philip.visarelax",
  title: "VisaRelax – 22 family games in one app",
  description: "Chess, checkers, puzzles and arcade fun in one small app. Play the phone, a friend, or 2 phones in the same room – no internet needed. Beat the Boss and collect 150 gel stickers.",
  hero: {
    kicker: "Board games · Puzzles · Arcade",
    title: '22 games, <span class="shine">one app.</span>',
    lede: "A whole games cupboard in your pocket. Play the phone, hand it across the table, or link 2 phones in the same room. Win keys, beat the Boss, collect stickers.",
    chips: ["♟️ Chess & checkers", "🧩 Sudoku & puzzles", "💎 Arcade", "📶 2 phones, no data", "😈 Boss battles", "🦊 150 stickers"],
    stage: [["s1.webp", "s2.webp", "s5.webp", "s7.webp"], "s6.webp", "s8.webp"],
    orbits: [
      { t: "😈 Boss key ready", pos: "left:2%;top:12%" },
      { t: "♟️ Your turn (white)", c: "g", pos: "right:0;top:56%" },
      { t: "🦊 New sticker!", c: "c", pos: "left:6%;bottom:8%" },
    ],
  },
  ticker: ["Chess", "Checkers", "Four in a Row", "Sudoku", "Word Search", "Number Merge", "Box Pusher", "Memory Match",
    "Snake", "Blocks", "Gem Swap", "Road Hopper", "Pool", "Pinball", "Mud Racers"],
  stats: [
    { n: 22, label: "games in one app" },
    { n: 150, label: "gel stickers to collect" },
    { n: 3, label: "levels – Easy, Normal, Hard" },
    { t: "Once", label: "Pro is a once-off – no subscription" },
  ],
  showcase: {
    kicker: "What's inside", title: "Something for everyone at the table.",
    lede: "Quick puzzles for the queue, board games for the evening, arcade for the kid in you.",
    tiles: [
      { title: "Board games", tag: "free", img: "s2.webp", text: "Chess, checkers, Four in a Row, Tic-Tac-Toe, Dots & Boxes, Snakes & Ladders – the computer thinks hard on Hard." },
      { title: "Play on 2 phones", tag: "free", img: "s3.webp", text: "Board games link by Bluetooth and Wi-Fi in the same room. No internet, no data used." },
      { title: "Arcade fun", tag: "free", img: "s5.webp", text: "Gem Swap, Snake, Blocks, Pool, Pinball, Mud Racers and more – sound, music and confetti." },
    ],
  },
  walk: {
    kicker: "Tutorial · 1 minute", title: "From first game to first sticker.",
    lede: "Win games, earn keys, beat the Boss.",
    steps: [
      { shot: "s1.webp", title: "Pick a game", text: "Tap any game on the home screen. Choose <b>Easy</b>, <b>Normal</b> or <b>Hard</b>." },
      { shot: "s4.webp", title: "Play the phone – or a friend", text: "Play the computer, pass the phone, or tap <b>2 Phones</b>: one phone hosts, the other joins." },
      { shot: "s7.webp", title: "Win keys, fight the Boss", text: "Wins fill your <b>Boss Key</b>. Then pick the game you want to fight the Boss at." },
      { shot: "s6.webp", title: "Collect the sticker", text: "Beat the Boss and a shiny gel sticker goes into your album – 150 to collect." },
    ],
  },
  feats: {
    kicker: "Made for families", title: "Relaxed – and a little bit competitive.",
    items: [
      { icon: "👪", title: "A player for everyone", text: "Own name, avatar, hearts and stickers for each person on the phone." },
      { icon: "🏆", title: "Leaderboard", text: "See who's on top – stickers, wins and Hard wins." },
      { icon: "❤️", title: "Hearts", text: "Lose to the computer and a heart goes. They come back by themselves." },
      { icon: "💡", title: "Hints & undo", text: "Stuck? A hint or an undo – unlimited with Pro." },
      { icon: "📺", title: "Phone, tablet, car screen", text: "Big glossy boards that fit any screen." },
      { icon: "✈️", title: "No internet needed", text: "Play on the plane, in the car or out in the bush." },
      { icon: "🧠", title: "Hard, any time", tag: "pro", text: "Free gets one try of Hard a day per game. Pro: always." },
      { icon: "🎁", title: "Bonus games", tag: "pro", text: "Extra games that are only in Pro – free gets one try a day." },
      { icon: "💖", title: "10 hearts", tag: "pro", text: "Double the hearts and a faster refill." },
    ],
  },
  howto: {
    kicker: "How to", title: "Good to know.",
    items: [
      { icon: "📶", title: "Play on 2 phones", tag: "free", sub: "Same room, no data", steps: [
        "Both phones open the same board game and tap <b>2 Phones</b>.", "One phone taps <b>Host</b>, the other taps <b>Join</b>.",
        "Allow Nearby devices when asked. Play!"], tip: "2-phone games are just for fun – they don't count on the leaderboard." },
      { icon: "👪", title: "Add a player", tag: "free", sub: "Everyone gets their own", steps: [
        "Open the <b>Leaderboard</b> and tap <b>Add a player</b>.", "Pick a name and an avatar.",
        "Tap the name at the top of the home screen to switch players."] },
      { icon: "😈", title: "Fight the Boss", tag: "free", sub: "Win a sticker", steps: [
        "Win games until the Boss Key is full.", "Tap <b>Boss Battle</b> and pick the game you want to play.",
        "Beat the Boss on Hard – no hints – to win the mystery sticker."] },
    ],
  },
  compare: {
    kicker: "Free vs Pro", title: "Free to play. Pro to master.",
    rows: [
      "The basics",
      ["All free games on Easy and Normal", true, true], ["Play on 2 phones", true, true], ["Boss battles and 150 stickers", true, true],
      ["Players and leaderboard", true, true],
      "Pro",
      ["Hard level", "1 try a day", "Always"], ["Bonus games", "1 try a day", "Always"], ["Hearts", "5", "10, faster refill"],
      ["Hints and undo per game", "3", "Unlimited"], ["No ads", false, true],
    ],
  },
  pitch: {
    title: "The whole games cupboard, unlocked.",
    price: "R49.99", once: "once-off · about $2.99",
    fine: "Google Play shows the exact price for your country. No subscription, ever.",
    list: ["Hard level in every game", "Bonus games", "10 hearts and a faster refill", "Unlimited hints and undo", "No ads"],
    how: "In the app: Settings → VisaRelax Pro",
    why: [["Pay once", "No coins, no gems, no subscriptions."], ["Yours to keep", "New phone? Same Google account, tap Restore purchase."], ["The whole family", "One purchase covers every player on the phone."]],
  },
  privacy: { title: "Play without an account.", text: "No sign-up, no internet needed to play. Players, scores and stickers stay on your phone. 2-phone games talk directly between the two phones." },
  faq: [
    ["Do I need internet?", "No. Every game plays offline, including 2-phone games in the same room."],
    ["How do 2 phones connect?", "Phone to phone over Bluetooth and Wi-Fi. Android asks once for permission to find nearby devices."],
    ["Do hearts cost money?", "No. Hearts come back by themselves over time. Pro just gives you more and refills faster."],
    ["Do I pay again on a new phone?", "No. Use the same Google account and tap Restore purchase in Settings."],
  ],
};
