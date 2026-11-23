// VisaCook page words. Run: node _tools/make-app-pages.js visacook
// Free / Pro split from _VisaStoreListings/VisaCook/listing.md.
module.exports = {
  id: "visagie.philip.visacook",
  title: "VisaCook – recipes, cocktails & a grocery list with a budget",
  description: "Food and cocktail recipes from around the world, a servings calculator, scan your own recipes, hands-free Cook mode, a dinner plan and a grocery list with a budget. Made in South Africa.",
  hero: {
    kicker: "Recipes · Cocktails · Groceries",
    title: 'What\'s for dinner? <span class="shine">Sorted.</span>',
    lede: "Recipes and cocktails from around the world, amounts that work out themselves, Ouma's recipe card scanned in a snap – and a grocery list that keeps you on budget.",
    chips: ["🍝 Recipes", "🍹 Cocktails & mocktails", "⚖️ Servings calculator", "📷 Scan a recipe", "🗣️ Hands-free", "🛒 Budget list"],
    stage: [["s1.webp", "s4.webp", "s2.webp", "s5.webp", "s6.webp"], "s3.webp", "s7.webp"],
    orbits: [
      { t: "🍰 Dish of the day", pos: "left:2%;top:12%" },
      { t: "R 712 left of R 800", c: "g", pos: "right:0;top:56%" },
      { t: "“Next step”", c: "c", pos: "left:6%;bottom:8%" },
    ],
  },
  ticker: ["Recipes from 25+ countries", "Cocktails, shots & mocktails", "Cooking for 7? Amounts change by themselves", "Scan Ouma's recipe card", "Hands-free Cook mode",
    "Dinner plan for the month", "Grocery list with a budget", "Works offline", "Recipe to PDF"],
  stats: [
    { t: "Food + drinks", label: "recipes & cocktails in one app" },
    { n: 25, suf: "+", label: "countries' kitchens" },
    { n: 1, label: "photo to scan a whole recipe" },
    { t: "Once", label: "Pro is a once-off – no subscription" },
  ],
  showcase: {
    kicker: "What it can do", title: "Your kitchen's new best friend.",
    lede: "From a Tuesday-night lasagne to cocktails for the braai – VisaCook has it covered.",
    tiles: [
      { title: "Recipes from everywhere", tag: "free", img: "s1.webp", text: "Search by name, browse by category, country or the ingredient already in your fridge. Or tap Surprise me." },
      { title: "Cocktails & mocktails", tag: "free", img: "s2.webp", text: "Pick a spirit you have and see every cocktail you can make – plus alcohol-free drinks for everyone." },
      { title: "Servings calculator", tag: "free", img: "s4.webp", text: "Recipe for 4, feeding 7? Every amount works itself out – cups, spoons, grams and fractions." },
      { title: "Scan your own recipes", tag: "free", img: "s7.webp", text: "Photograph a cookbook page or Ouma's notes. VisaCook turns it into a recipe, read on your phone." },
      { title: "Hands-free Cook mode", tag: "pro", img: "s6.webp", text: "Big steps, screen stays on, every step read aloud. Just say “next”, “back” or “ingredients”." },
      { title: "Grocery list with a budget", tag: "pro", img: "s5.webp", text: "Set a budget, guess the prices, tick items into the trolley and see what's left – no surprises at the till." },
    ],
  },
  walk: {
    kicker: "Tutorial · 1 minute", title: "From “what's for dinner?” to dinner.",
    lede: "Here's a full cook, start to finish.",
    steps: [
      { shot: "s1.webp", title: "Find something good", text: "Search, browse by <b>Categories</b>, <b>Countries</b> or <b>Ingredients</b> – or tap <b>Surprise me</b>. The dish of the day waits at the top." },
      { shot: "s4.webp", title: "Set how many you're feeding", text: "Under <b>Servings</b>, change <b>I'm cooking for</b>. Every ingredient amount changes with it." },
      { shot: "s5.webp", title: "Shop on budget", text: "Tap the cart to add the ingredients to your <b>Shopping & groceries</b> list. Set a budget and tick items as they go into the trolley <span class=\"pro-tag\">Pro</span>." },
      { shot: "s6.webp", title: "Cook hands-free", text: "Tap <b>Cook</b>. One big step at a time, read aloud. Say <b>“next”</b> with flour on your hands <span class=\"pro-tag\">Pro</span>." },
      { shot: "s3.webp", title: "Then make the drinks", text: "Flip to <b>Cocktails</b>, pick a Mojito, set <b>Glasses to make</b> to 4 – the jug is sorted." },
    ],
  },
  feats: {
    kicker: "And there's more", title: "Thought of everything.",
    items: [
      { icon: "📅", title: "Dinner plan for the month", tag: "pro", text: "Plan dinners on a calendar. Tonight's dinner waits on the home screen." },
      { icon: "🧾", title: "Recipe to PDF", tag: "pro", text: "Turn any recipe or cocktail into a neat PDF to share or print." },
      { icon: "📶", title: "Works offline", text: "Favourites and every recipe you opened are saved on your phone." },
      { icon: "▶️", title: "Video recipes", text: "Many recipes and cocktails come with a video." },
      { icon: "💬", title: "Share on WhatsApp", text: "Send the shopping list to whoever's going to the shop." },
      { icon: "📉", title: "Save mobile data", text: "Switch off pictures when data is tight." },
    ],
  },
  howto: {
    kicker: "How to", title: "Step by step.",
    items: [
      { icon: "📷", title: "Scan Ouma's recipe card", tag: "free", sub: "Photo → recipe in the app", steps: [
        "On the home screen tap <b>Scan a recipe</b>.", "Take a photo of the recipe (or pick one from your gallery).",
        "VisaCook reads the text on your phone and fills in the name, ingredients and method.", "Check it, fix anything it misread, and tap <b>Save</b>. Find it under <b>My recipes</b>."],
        tip: "Free keeps 3 of your own recipes; Pro keeps as many as you like." },
      { icon: "⚖️", title: "Change the servings", tag: "free", sub: "For 2 or for 20", steps: [
        "Open a recipe.", "Under <b>Servings</b>, tap + or − next to <b>I'm cooking for</b>.", "Every amount in <b>Ingredients</b> changes – even fractions."] },
      { icon: "🍹", title: "Cocktails from what you have", tag: "free", sub: "Pick a spirit", steps: [
        "Tap <b>Cocktails</b> at the top.", "Open the <b>Spirits</b> tab and pick gin, vodka, rum, whiskey…", "Or open <b>Alcohol-free</b> for mocktails."] },
      { icon: "🛒", title: "Grocery list with a budget", tag: "pro", sub: "Know what you'll spend", steps: [
        "Tap <b>Shopping & groceries</b> on the home screen.", "Set your <b>Budget</b>.", "Add items with one tap (Butter, Cheese, Onions…) and type a price – VisaCook remembers it next time.",
        "Tick items as they go into the trolley. <b>Left</b> shows what you can still spend."] },
      { icon: "🗣️", title: "Cook hands-free", tag: "pro", sub: "Voice commands", steps: [
        "Open a recipe and tap <b>Cook</b>.", "Each step is read aloud and the screen stays on.", "Say <b>next</b>, <b>back</b>, <b>repeat</b> or <b>ingredients</b>."] },
      { icon: "📅", title: "Plan the month's dinners", tag: "pro", sub: "And shop for all of it", steps: [
        "Open a recipe and add it to the <b>Dinner plan</b> on a day.", "Tonight's dinner shows on the home screen.",
        "One tap puts every ingredient for the plan on your shopping list. Tap <b>I made it</b> afterwards."], tip: "With VisaSched, tonight's dinner can open by itself at 5 pm." },
    ],
  },
  compare: {
    kicker: "Free vs Pro", title: "Free feeds you. Pro runs the kitchen.",
    rows: [
      "Recipes",
      ["Recipes & cocktails from around the world, mocktails", true, true], ["Servings calculator", true, true], ["Scan your own recipes", true, true],
      ["Works offline", true, true], ["Favourites", "10", "Unlimited"], ["Own recipes", "3", "Unlimited"],
      "Pro powers",
      ["Hands-free Cook mode with voice", false, true], ["Dinner plan for the month", false, true], ["Grocery list with a budget", false, true],
      ["Recipe shopping list & WhatsApp", false, true], ["Recipe to PDF", false, true], ["No ads", false, true],
    ],
  },
  pitch: {
    title: "Cook smarter. Shop cheaper.",
    fine: "Google Play shows the exact price for your country. No subscription, ever.",
    list: ["Hands-free Cook mode", "Dinner plan for the month", "Grocery list with a budget", "Shopping list on WhatsApp", "Recipe to PDF", "Unlimited favourites & own recipes", "No ads"],
    how: "In the app: Settings → VisaCook Pro",
    why: [["Pays for itself", "One shop on budget saves more than Pro costs."], ["Yours to keep", "New phone? Same Google account, tap Restore purchase."], ["Made in South Africa", "Rands, maize meal and Ouma's malva pudding included."]],
  },
  privacy: { title: "Your recipes stay in your kitchen.", text: "No account, no sign-up. Scanned recipes are read on your phone, and your lists and plans never leave it." },
  faq: [
    ["Where do the recipes come from?", "Recipes and pictures come from TheMealDB.com and TheCocktailDB.com – plus your own scanned recipes."],
    ["Does it work without internet?", "Your favourites and every recipe you've opened are saved, so they open offline."],
    ["Is there alcohol in the app?", "There are cocktail recipes (no sales), so VisaCook is for adults 18+. Please enjoy responsibly – there are plenty of mocktails too."],
    ["Do I pay again on a new phone?", "No. Use the same Google account and tap Restore purchase in Settings."],
  ],
};
