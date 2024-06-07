// scripts.js
const emojis = [
    { symbol: '😀', description: 'grinning face', category: 'Emotions' },
    { symbol: '😁', description: 'beaming face with smiling eyes', category: 'Emotions' },
    { symbol: '😂', description: 'face with tears of joy', category: 'Emotions' },
    { symbol: '🤣', description: 'rolling on the floor laughing', category: 'Emotions' },
    { symbol: '😃', description: 'grinning face with big eyes', category: 'Emotions' },
    { symbol: '😄', description: 'grinning face with smiling eyes', category: 'Emotions' },
    { symbol: '😅', description: 'grinning face with sweat', category: 'Emotions' },
    { symbol: '😆', description: 'grinning squinting face', category: 'Emotions' },
    { symbol: '😉', description: 'winking face', category: 'Emotions' },
    { symbol: '😊', description: 'smiling face with smiling eyes', category: 'Emotions' },
    { symbol: '😋', description: 'face savoring food', category: 'Food / Drink' },
    { symbol: '😎', description: 'smiling face with sunglasses', category: 'Emotions' },
    { symbol: '😍', description: 'smiling face with heart-eyes', category: 'Emotions' },
    { symbol: '😘', description: 'face blowing a kiss', category: 'Emotions' },
    { symbol: '😗', description: 'kissing face', category: 'Emotions' },
    { symbol: '😙', description: 'kissing face with smiling eyes', category: 'Emotions' },
    { symbol: '😚', description: 'kissing face with closed eyes', category: 'Emotions' },
    { symbol: '☺️', description: 'smiling face', category: 'Emotions' },
    { symbol: '🙂', description: 'slightly smiling face', category: 'Emotions' },
    { symbol: '🤗', description: 'hugging face', category: 'Emotions' },
    { symbol: '🤔', description: 'thinking face', category: 'Emotions' },
    { symbol: '😐', description: 'neutral face', category: 'Emotions' },
    { symbol: '😑', description: 'expressionless face', category: 'Emotions' },
    { symbol: '😶', description: 'face without mouth', category: 'Emotions' },
    { symbol: '🙄', description: 'face with rolling eyes', category: 'Emotions' },
    { symbol: '😏', description: 'smirking face', category: 'Emotions' },
    { symbol: '😣', description: 'persevering face', category: 'Emotions' },
    { symbol: '😥', description: 'sad but relieved face', category: 'Emotions' },
    { symbol: '😮', description: 'face with open mouth', category: 'Emotions' },
    { symbol: '🤐', description: 'zipper-mouth face', category: 'Emotions' },
    { symbol: '😯', description: 'hushed face', category: 'Emotions' },
    { symbol: '😪', description: 'sleepy face', category: 'Emotions' },
    { symbol: '😫', description: 'tired face', category: 'Emotions' },
    { symbol: '😴', description: 'sleeping face', category: 'Emotions' },
    { symbol: '😌', description: 'relieved face', category: 'Emotions' },
    { symbol: '😛', description: 'face with tongue', category: 'Emotions' },
    { symbol: '😜', description: 'winking face with tongue', category: 'Emotions' },
    { symbol: '😝', description: 'squinting face with tongue', category: 'Emotions' },
    { symbol: '🤤', description: 'drooling face', category: 'Emotions' },
    { symbol: '😒', description: 'unamused face', category: 'Emotions' },
    { symbol: '😓', description: 'downcast face with sweat', category: 'Emotions' },
    { symbol: '😔', description: 'pensive face', category: 'Emotions' },
    { symbol: '😕', description: 'confused face', category: 'Emotions' },
    { symbol: '🙃', description: 'upside-down face', category: 'Emotions' },
    { symbol: '🤑', description: 'money-mouth face', category: 'Emotions' },
    { symbol: '😲', description: 'astonished face', category: 'Emotions' },
    { symbol: '☹️', description: 'frowning face', category: 'Emotions' },
    { symbol: '🙁', description: 'slightly frowning face', category: 'Emotions' },
    { symbol: '😖', description: 'confounded face', category: 'Emotions' },
    { symbol: '😞', description: 'disappointed face', category: 'Emotions' },
    { symbol: '😟', description: 'worried face', category: 'Emotions' },
    { symbol: '😤', description: 'face with steam from nose', category: 'Emotions' },
    { symbol: '😢', description: 'crying face', category: 'Emotions' },
    { symbol: '😭', description: 'loudly crying face', category: 'Emotions' },
    { symbol: '😦', description: 'frowning face with open mouth', category: 'Emotions' },
    { symbol: '😧', description: 'anguished face', category: 'Emotions' },
    { symbol: '😨', description: 'fearful face', category: 'Emotions' },
    { symbol: '😩', description: 'weary face', category: 'Emotions' },
    { symbol: '😬', description: 'grimacing face', category: 'Emotions' },
    { symbol: '😰', description: 'anxious face with sweat', category: 'Emotions' },
    { symbol: '😱', description: 'face screaming in fear', category: 'Emotions' },
    { symbol: '😳', description: 'flushed face', category: 'Emotions' },
    { symbol: '😵', description: 'dizzy face', category: 'Emotions' },
    { symbol: '😡', description: 'pouting face', category: 'Emotions' },
    { symbol: '😠', description: 'angry face', category: 'Emotions' },
    { symbol: '🤬', description: 'face with symbols on mouth', category: 'Emotions' },
    { symbol: '😷', description: 'face with medical mask', category: 'Emotions' },
    { symbol: '🤒', description: 'face with thermometer', category: 'Emotions' },
    { symbol: '🤕', description: 'face with head-bandage', category: 'Emotions' },
    { symbol: '🤢', description: 'nauseated face', category: 'Emotions' },
    { symbol: '🤮', description: 'face vomiting', category: 'Emotions' },
    { symbol: '🤧', description: 'sneezing face', category: 'Emotions' },
    { symbol: '😇', description: 'smiling face with halo', category: 'Emotions' },
    { symbol: '🥰', description: 'smiling face with hearts', category: 'Emotions' },
    { symbol: '🥵', description: 'hot face', category: 'Emotions' },
    { symbol: '🥶', description: 'cold face', category: 'Emotions' },
    { symbol: '🥳', description: 'partying face', category: 'Emotions' },
    { symbol: '🤠', description: 'cowboy hat face', category: 'Emotions' },
    { symbol: '🤡', description: 'clown face', category: 'Emotions' },
    { symbol: '🤥', description: 'lying face', category: 'Emotions' },
    { symbol: '🤫', description: 'shushing face', category: 'Emotions' },
    { symbol: '🤭', description: 'face with hand over mouth', category: 'Emotions' },
    { symbol: '🧐', description: 'face with monocle', category: 'Emotions' },
    { symbol: '🤓', description: 'nerd face', category: 'Emotions' },
    { symbol: '😈', description: 'smiling face with horns', category: 'Emotions' },
    { symbol: '👿', description: 'angry face with horns', category: 'Emotions' },
    { symbol: '👹', description: 'ogre', category: 'Emotions' },
    { symbol: '👺', description: 'goblin', category: 'Emotions' },
    { symbol: '💀', description: 'skull', category: 'Emotions' },
    { symbol: '👻', description: 'ghost', category: 'Emotions' },
    { symbol: '👽', description: 'alien', category: 'Emotions' },
    { symbol: '👾', description: 'alien monster', category: 'Emotions' },
    { symbol: '🤖', description: 'robot', category: 'Emotions' },
    { symbol: '😺', description: 'grinning cat', category: 'Animals / Nature' },
    { symbol: '😸', description: 'grinning cat with smiling eyes', category: 'Animals / Nature' },
    { symbol: '😹', description: 'cat with tears of joy', category: 'Animals / Nature' },
    { symbol: '😻', description: 'smiling cat with heart-eyes', category: 'Animals / Nature' },
    { symbol: '😼', description: 'cat with wry smile', category: 'Animals / Nature' },
    { symbol: '😽', description: 'kissing cat', category: 'Animals / Nature' },
    { symbol: '🙀', description: 'weary cat', category: 'Animals / Nature' },
    { symbol: '😿', description: 'crying cat', category: 'Animals / Nature' },
    { symbol: '😾', description: 'pouting cat', category: 'Animals / Nature' },
   {
      "symbol": "🦍",
      "description": "gorilla",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦧",
      "description": "orangutan",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦮",
      "description": "guide dog",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐕‍🦺",
      "description": "service dog",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦊",
      "description": "fox",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦝",
      "description": "raccoon",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐈",
      "description": "cat",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐈‍⬛",
      "description": "black cat",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦁",
      "description": "lion",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐯",
      "description": "tiger face",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐅",
      "description": "tiger",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐆",
      "description": "leopard",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐴",
      "description": "horse face",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🫎",
      "description": "moose",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🫏",
      "description": "donkey",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐎",
      "description": "horse",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦄",
      "description": "unicorn",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦓",
      "description": "zebra",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦌",
      "description": "deer",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦬",
      "description": "bison",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐮",
      "description": "cow face",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐂",
      "description": "ox",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐃",
      "description": "water buffalo",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐄",
      "description": "cow",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐷",
      "description": "pig face",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐖",
      "description": "pig",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐗",
      "description": "boar",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐽",
      "description": "pig nose",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐏",
      "description": "ram",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐑",
      "description": "ewe",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐐",
      "description": "goat",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐪",
      "description": "camel",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐫",
      "description": "two-hump camel",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦙",
      "description": "llama",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦒",
      "description": "giraffe",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐘",
      "description": "elephant",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦣",
      "description": "mammoth",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦏",
      "description": "rhinoceros",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦛",
      "description": "hippopotamus",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐭",
      "description": "mouse face",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐁",
      "description": "mouse",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐀",
      "description": "rat",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐹",
      "description": "hamster face",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐰",
      "description": "rabbit face",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐇",
      "description": "rabbit",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐿️",
      "description": "chipmunk",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦫",
      "description": "beaver",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦔",
      "description": "hedgehog",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦇",
      "description": "bat",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐻",
      "description": "bear",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐨",
      "description": "koala",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐼",
      "description": "panda",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦥",
      "description": "sloth",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦦",
      "description": "otter",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦨",
      "description": "skunk",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦘",
      "description": "kangaroo",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦡",
      "description": "badger",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐾",
      "description": "paw prints",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦃",
      "description": "turkey",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐔",
      "description": "chicken",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐓",
      "description": "rooster",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐣",
      "description": "hatching chick",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐤",
      "description": "baby chick",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐥",
      "description": "front-facing baby chick",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐦",
      "description": "bird",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐧",
      "description": "penguin",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🕊️",
      "description": "dove",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦢",
      "description": "swan",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦉",
      "description": "owl",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦩",
      "description": "flamingo",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦚",
      "description": "peacock",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦜",
      "description": "parrot",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐸",
      "description": "frog",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐊",
      "description": "crocodile",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐢",
      "description": "turtle",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦎",
      "description": "lizard",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐍",
      "description": "snake",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐲",
      "description": "dragon face",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐉",
      "description": "dragon",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦕",
      "description": "sauropod",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦖",
      "description": "T-Rex",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐳",
      "description": "spouting whale",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐋",
      "description": "whale",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐬",
      "description": "dolphin",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦭",
      "description": "seal",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐟",
      "description": "fish",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐠",
      "description": "tropical fish",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐡",
      "description": "blowfish",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦈",
      "description": "shark",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐙",
      "description": "octopus",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐚",
      "description": "spiral shell",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐌",
      "description": "snail",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦋",
      "description": "butterfly",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐛",
      "description": "bug",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐜",
      "description": "ant",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐝",
      "description": "honeybee",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🪲",
      "description": "beetle",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🐞",
      "description": "lady beetle",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦗",
      "description": "cricket",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🕷️",
      "description": "spider",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🕸️",
      "description": "spider web",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦂",
      "description": "scorpion",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🦟",
      "description": "mosquito",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🪰",
      "description": "fly",
      "category": "Animals / Nature"
    },
    {
      "symbol": "🪱",
      "description": "worm",
      "category": "Animals / Nature"
    },
  {
      "symbol": "🍇",
      "description": "grapes",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍈",
      "description": "melon",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍉",
      "description": "watermelon",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍊",
      "description": "tangerine",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍋",
      "description": "lemon",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍌",
      "description": "banana",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍍",
      "description": "pineapple",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥭",
      "description": "mango",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍎",
      "description": "apple",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍏",
      "description": "green apple",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍐",
      "description": "pear",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍑",
      "description": "peach",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍒",
      "description": "cherries",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍓",
      "description": "strawberry",
      "category": "Food / Drink"
    },
    {
      "symbol": "🫐",
      "description": "blueberries",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥝",
      "description": "kiwi fruit",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍅",
      "description": "tomato",
      "category": "Food / Drink"
    },
    {
      "symbol": "🫒",
      "description": "olive",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥥",
      "description": "coconut",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥑",
      "description": "avocado",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍆",
      "description": "eggplant",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥔",
      "description": "potato",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥕",
      "description": "carrot",
      "category": "Food / Drink"
    },
    {
      "symbol": "🌽",
      "description": "ear of corn",
      "category": "Food / Drink"
    },
    {
      "symbol": "🌶️",
      "description": "hot pepper",
      "category": "Food / Drink"
    },
    {
      "symbol": "🫑",
      "description": "bell pepper",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥒",
      "description": "cucumber",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥬",
      "description": "leafy green",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥦",
      "description": "broccoli",
      "category": "Food / Drink"
    },
    {
      "symbol": "🧄",
      "description": "garlic",
      "category": "Food / Drink"
    },
    {
      "symbol": "🧅",
      "description": "onion",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍄",
      "description": "mushroom",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥜",
      "description": "peanuts",
      "category": "Food / Drink"
    },
    {
      "symbol": "🌰",
      "description": "chestnut",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍞",
      "description": "bread",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥐",
      "description": "croissant",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥖",
      "description": "baguette bread",
      "category": "Food / Drink"
    },
    {
      "symbol": "🫓",
      "description": "flatbread",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥨",
      "description": "pretzel",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥯",
      "description": "bagel",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥞",
      "description": "pancakes",
      "category": "Food / Drink"
    },
    {
      "symbol": "🧇",
      "description": "waffle",
      "category": "Food / Drink"
    },
    {
      "symbol": "🧀",
      "description": "cheese wedge",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍖",
      "description": "meat on bone",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍗",
      "description": "poultry leg",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥩",
      "description": "cut of meat",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥓",
      "description": "bacon",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍔",
      "description": "hamburger",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍟",
      "description": "fries",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍕",
      "description": "pizza",
      "category": "Food / Drink"
    },
    {
      "symbol": "🌭",
      "description": "hot dog",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥪",
      "description": "sandwich",
      "category": "Food / Drink"
    },
    {
      "symbol": "🌮",
      "description": "taco",
      "category": "Food / Drink"
    },
    {
      "symbol": "🌯",
      "description": "burrito",
      "category": "Food / Drink"
    },
    {
      "symbol": "🫔",
      "description": "tamale",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥙",
      "description": "stuffed flatbread",
      "category": "Food / Drink"
    },
    {
      "symbol": "🧆",
      "description": "falafel",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥚",
      "description": "egg",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍳",
      "description": "cooking",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥘",
      "description": "shallow pan of food",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍲",
      "description": "pot of food",
      "category": "Food / Drink"
    },
    {
      "symbol": "🫕",
      "description": "fondue",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥣",
      "description": "bowl with spoon",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥗",
      "description": "green salad",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍿",
      "description": "popcorn",
      "category": "Food / Drink"
    },
    {
      "symbol": "🧈",
      "description": "butter",
      "category": "Food / Drink"
    },
    {
      "symbol": "🧂",
      "description": "salt",
      "category": "Food / Drink"
    },
    {
      "symbol": "🫔",
      "description": "tamales",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍱",
      "description": "bento box",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍘",
      "description": "rice cracker",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍙",
      "description": "rice ball",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍚",
      "description": "cooked rice",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍛",
      "description": "curry rice",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍜",
      "description": "steaming bowl",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍝",
      "description": "spaghetti",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍠",
      "description": "roasted sweet potato",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍢",
      "description": "oden",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍣",
      "description": "sushi",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍤",
      "description": "fried shrimp",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍥",
      "description": "fish cake with swirl",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥮",
      "description": "moon cake",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍡",
      "description": "dango",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥟",
      "description": "dumpling",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥠",
      "description": "fortune cookie",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥡",
      "description": "takeout box",
      "category": "Food / Drink"
    },
    {
      "symbol": "🦀",
      "description": "crab",
      "category": "Food / Drink"
    },
    {
      "symbol": "🦞",
      "description": "lobster",
      "category": "Food / Drink"
    },
    {
      "symbol": "🦐",
      "description": "shrimp",
      "category": "Food / Drink"
    },
    {
      "symbol": "🦑",
      "description": "squid",
      "category": "Food / Drink"
    },
    {
      "symbol": "🦪",
      "description": "oyster",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍦",
      "description": "soft ice cream",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍧",
      "description": "shaved ice",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍨",
      "description": "ice cream",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍩",
      "description": "doughnut",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍪",
      "description": "cookie",
      "category": "Food / Drink"
    },
    {
      "symbol": "🎂",
      "description": "birthday cake",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍰",
      "description": "shortcake",
      "category": "Food / Drink"
    },
    {
      "symbol": "🧁",
      "description": "cupcake",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥧",
      "description": "pie",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍫",
      "description": "chocolate bar",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍬",
      "description": "candy",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍭",
      "description": "lollipop",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍮",
      "description": "custard",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍯",
      "description": "honey pot",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍼",
      "description": "baby bottle",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥛",
      "description": "glass of milk",
      "category": "Food / Drink"
    },
    {
      "symbol": "☕",
      "description": "hot beverage",
      "category": "Food / Drink"
    },
    {
      "symbol": "🫖",
      "description": "teapot",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍵",
      "description": "teacup without handle",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍶",
      "description": "sake",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍾",
      "description": "bottle with popping cork",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍷",
      "description": "wine glass",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍸",
      "description": "cocktail glass",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍹",
      "description": "tropical drink",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍺",
      "description": "beer mug",
      "category": "Food / Drink"
    },
    {
      "symbol": "🍻",
      "description": "clinking beer mugs",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥂",
      "description": "clinking glasses",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥃",
      "description": "tumbler glass",
      "category": "Food / Drink"
    },
    {
      "symbol": "🥤",
      "description": "cup with straw",
      "category": "Food / Drink"
    },
  {
    "symbol": "🚗",
    "description": "automobile",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚕",
    "description": "taxi",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚙",
    "description": "sport utility vehicle",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚌",
    "description": "bus",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚎",
    "description": "trolleybus",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏎️",
    "description": "racing car",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚓",
    "description": "police car",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚑",
    "description": "ambulance",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚒",
    "description": "fire engine",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚐",
    "description": "minibus",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚚",
    "description": "delivery truck",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚛",
    "description": "articulated lorry",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏍️",
    "description": "motorcycle",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛵",
    "description": "motor scooter",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚲",
    "description": "bicycle",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛴",
    "description": "kick scooter",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛹",
    "description": "skateboard",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚏",
    "description": "bus stop",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛣️",
    "description": "motorway",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛤️",
    "description": "railway track",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛢️",
    "description": "oil drum",
    "category": "Travel / Places"
  },
  {
    "symbol": "⛽",
    "description": "fuel pump",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚨",
    "description": "police car light",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚥",
    "description": "horizontal traffic light",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚦",
    "description": "vertical traffic light",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛑",
    "description": "stop sign",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚧",
    "description": "construction",
    "category": "Travel / Places"
  },
  {
    "symbol": "⚓",
    "description": "anchor",
    "category": "Travel / Places"
  },
  {
    "symbol": "⛵",
    "description": "sailboat",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛶",
    "description": "canoe",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚤",
    "description": "speedboat",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛳️",
    "description": "passenger ship",
    "category": "Travel / Places"
  },
  {
    "symbol": "⛴️",
    "description": "ferry",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛥️",
    "description": "motor boat",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚢",
    "description": "ship",
    "category": "Travel / Places"
  },
  {
    "symbol": "✈️",
    "description": "airplane",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛩️",
    "description": "small airplane",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛫",
    "description": "airplane departure",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛬",
    "description": "airplane arrival",
    "category": "Travel / Places"
  },
  {
    "symbol": "🪂",
    "description": "parachute",
    "category": "Travel / Places"
  },
  {
    "symbol": "💺",
    "description": "seat",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚁",
    "description": "helicopter",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚟",
    "description": "suspension railway",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚠",
    "description": "mountain cableway",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚡",
    "description": "aerial tramway",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛰️",
    "description": "satellite",
    "category": "Travel / Places"
  },
  {
    "symbol": "🚀",
    "description": "rocket",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛸",
    "description": "flying saucer",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛰️",
    "description": "satellite",
    "category": "Travel / Places"
  },
  {
    "symbol": "🌍",
    "description": "globe showing Europe-Africa",
    "category": "Travel / Places"
  },
  {
    "symbol": "🌎",
    "description": "globe showing Americas",
    "category": "Travel / Places"
  },
  {
    "symbol": "🌏",
    "description": "globe showing Asia-Australia",
    "category": "Travel / Places"
  },
  {
    "symbol": "🌐",
    "description": "globe with meridians",
    "category": "Travel / Places"
  },
  {
    "symbol": "🗺️",
    "description": "world map",
    "category": "Travel / Places"
  },
  {
    "symbol": "🗾",
    "description": "map of Japan",
    "category": "Travel / Places"
  },
  {
    "symbol": "🧭",
    "description": "compass",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏔️",
    "description": "snow-capped mountain",
    "category": "Travel / Places"
  },
  {
    "symbol": "⛰️",
    "description": "mountain",
    "category": "Travel / Places"
  },
  {
    "symbol": "🌋",
    "description": "volcano",
    "category": "Travel / Places"
  },
  {
    "symbol": "🗻",
    "description": "mount fuji",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏕️",
    "description": "camping",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏖️",
    "description": "beach with umbrella",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏜️",
    "description": "desert",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏝️",
    "description": "desert island",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏞️",
    "description": "national park",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏟️",
    "description": "stadium",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏛️",
    "description": "classical building",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏗️",
    "description": "building construction",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏘️",
    "description": "houses",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏚️",
    "description": "derelict house",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏠",
    "description": "house",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏡",
    "description": "house with garden",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏢",
    "description": "office building",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏣",
    "description": "Japanese post office",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏤",
    "description": "post office",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏥",
    "description": "hospital",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏦",
    "description": "bank",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏨",
    "description": "hotel",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏩",
    "description": "love hotel",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏪",
    "description": "convenience store",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏫",
    "description": "school",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏬",
    "description": "department store",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏭",
    "description": "factory",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏯",
    "description": "Japanese castle",
    "category": "Travel / Places"
  },
  {
    "symbol": "🏰",
    "description": "castle",
    "category": "Travel / Places"
  },
  {
    "symbol": "💒",
    "description": "wedding",
    "category": "Travel / Places"
  },
  {
    "symbol": "🗼",
    "description": "Tokyo tower",
    "category": "Travel / Places"
  },
  {
    "symbol": "🗽",
    "description": "Statue of Liberty",
    "category": "Travel / Places"
  },
  {
    "symbol": "⛪",
    "description": "church",
    "category": "Travel / Places"
  },
  {
    "symbol": "🕌",
    "description": "mosque",
    "category": "Travel / Places"
  },
  {
    "symbol": "🕍",
    "description": "synagogue",
    "category": "Travel / Places"
  },
  {
    "symbol": "⛩️",
    "description": "shinto shrine",
    "category": "Travel / Places"
  },
  {
    "symbol": "🕋",
    "description": "kaaba",
    "category": "Travel / Places"
  },
  {
    "symbol": "⛲",
    "description": "fountain",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛕",
    "description": "hindu temple",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛖",
    "description": "hut",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛤️",
    "description": "railway track",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛣️",
    "description": "motorway",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛤️",
    "description": "railway track",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛳️",
    "description": "passenger ship",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛰️",
    "description": "satellite",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛩️",
    "description": "small airplane",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛫",
    "description": "airplane departure",
    "category": "Travel / Places"
  },
  {
    "symbol": "🛬",
    "description": "airplane arrival",
    "category": "Travel / Places"
  },
  {
    "symbol": "⚽",
    "description": "soccer ball",
    "category": "Activities"
  },
  {
    "symbol": "🏀",
    "description": "basketball",
    "category": "Activities"
  },
  {
    "symbol": "🏈",
    "description": "american football",
    "category": "Activities"
  },
  {
    "symbol": "⚾",
    "description": "baseball",
    "category": "Activities"
  },
  {
    "symbol": "🎾",
    "description": "tennis",
    "category": "Activities"
  },
  {
    "symbol": "🏐",
    "description": "volleyball",
    "category": "Activities"
  },
  {
    "symbol": "🏉",
    "description": "rugby football",
    "category": "Activities"
  },
  {
    "symbol": "🎱",
    "description": "pool 8 ball",
    "category": "Activities"
  },
  {
    "symbol": "🏓",
    "description": "ping pong",
    "category": "Activities"
  },
  {
    "symbol": "🏸",
    "description": "badminton",
    "category": "Activities"
  },
  {
    "symbol": "🥅",
    "description": "goal net",
    "category": "Activities"
  },
  {
    "symbol": "🏒",
    "description": "ice hockey",
    "category": "Activities"
  },
  {
    "symbol": "🏑",
    "description": "field hockey",
    "category": "Activities"
  },
  {
    "symbol": "🥍",
    "description": "lacrosse",
    "category": "Activities"
  },
  {
    "symbol": "🏏",
    "description": "cricket game",
    "category": "Activities"
  },
  {
    "symbol": "🥊",
    "description": "boxing glove",
    "category": "Activities"
  },
  {
    "symbol": "🥋",
    "description": "martial arts uniform",
    "category": "Activities"
  },
  {
    "symbol": "⛸️",
    "description": "ice skate",
    "category": "Activities"
  },
  {
    "symbol": "🎣",
    "description": "fishing pole",
    "category": "Activities"
  },
  {
    "symbol": "🤿",
    "description": "diving mask",
    "category": "Activities"
  },
  {
    "symbol": "🎽",
    "description": "running shirt",
    "category": "Activities"
  },
  {
    "symbol": "🛹",
    "description": "skateboard",
    "category": "Activities"
  },
  {
    "symbol": "🛷",
    "description": "sled",
    "category": "Activities"
  },
  {
    "symbol": "⛷️",
    "description": "skier",
    "category": "Activities"
  },
  {
    "symbol": "🏂",
    "description": "snowboarder",
    "category": "Activities"
  },
  {
    "symbol": "🪂",
    "description": "parachute",
    "category": "Activities"
  },
  {
    "symbol": "🏋️",
    "description": "weightlifting",
    "category": "Activities"
  },
  {
    "symbol": "🏋️‍♂️",
    "description": "man lifting weights",
    "category": "Activities"
  },
  {
    "symbol": "🏋️‍♀️",
    "description": "woman lifting weights",
    "category": "Activities"
  },
  {
    "symbol": "🏌️",
    "description": "golfing",
    "category": "Activities"
  },
  {
    "symbol": "🏌️‍♂️",
    "description": "man golfing",
    "category": "Activities"
  },
  {
    "symbol": "🏌️‍♀️",
    "description": "woman golfing",
    "category": "Activities"
  },
  {
    "symbol": "🏄",
    "description": "surfing",
    "category": "Activities"
  },
  {
    "symbol": "🏄‍♂️",
    "description": "man surfing",
    "category": "Activities"
  },
  {
    "symbol": "🏄‍♀️",
    "description": "woman surfing",
    "category": "Activities"
  },
  {
    "symbol": "🚣",
    "description": "rowing boat",
    "category": "Activities"
  },
  {
    "symbol": "🚣‍♂️",
    "description": "man rowing boat",
    "category": "Activities"
  },
  {
    "symbol": "🚣‍♀️",
    "description": "woman rowing boat",
    "category": "Activities"
  },
  {
    "symbol": "🏊",
    "description": "swimming",
    "category": "Activities"
  },
  {
    "symbol": "🏊‍♂️",
    "description": "man swimming",
    "category": "Activities"
  },
  {
    "symbol": "🏊‍♀️",
    "description": "woman swimming",
    "category": "Activities"
  },
  {
    "symbol": "⛹️",
    "description": "person bouncing ball",
    "category": "Activities"
  },
  {
    "symbol": "⛹️‍♂️",
    "description": "man bouncing ball",
    "category": "Activities"
  },
  {
    "symbol": "⛹️‍♀️",
    "description": "woman bouncing ball",
    "category": "Activities"
  },
  {
    "symbol": "🏋️",
    "description": "weightlifting",
    "category": "Activities"
  },
  {
    "symbol": "🏋️‍♂️",
    "description": "man lifting weights",
    "category": "Activities"
  },
  {
    "symbol": "🏋️‍♀️",
    "description": "woman lifting weights",
    "category": "Activities"
  },
  {
    "symbol": "🚴",
    "description": "biking",
    "category": "Activities"
  },
  {
    "symbol": "🚴‍♂️",
    "description": "man biking",
    "category": "Activities"
  },
  {
    "symbol": "🚴‍♀️",
    "description": "woman biking",
    "category": "Activities"
  },
  {
    "symbol": "🚵",
    "description": "mountain biking",
    "category": "Activities"
  },
  {
    "symbol": "🚵‍♂️",
    "description": "man mountain biking",
    "category": "Activities"
  },
  {
    "symbol": "🚵‍♀️",
    "description": "woman mountain biking",
    "category": "Activities"
  },
  {
    "symbol": "🏇",
    "description": "horse racing",
    "category": "Activities"
  },
  {
    "symbol": "🧘",
    "description": "person in lotus position",
    "category": "Activities"
  },
  {
    "symbol": "🧘‍♂️",
    "description": "man in lotus position",
    "category": "Activities"
  },
  {
    "symbol": "🧘‍♀️",
    "description": "woman in lotus position",
    "category": "Activities"
  },
  {
    "symbol": "🏄",
    "description": "surfing",
    "category": "Activities"
  },
  {
    "symbol": "🏄‍♂️",
    "description": "man surfing",
    "category": "Activities"
  },
  {
    "symbol": "🏄‍♀️",
    "description": "woman surfing",
    "category": "Activities"
  },
  {
    "symbol": "🏂",
    "description": "snowboarder",
    "category": "Activities"
  },
  {
    "symbol": "🏂‍♂️",
    "description": "man snowboarding",
    "category": "Activities"
  },
  {
    "symbol": "🏂‍♀️",
    "description": "woman snowboarding",
    "category": "Activities"
  },
  {
    "symbol": "🏋️",
    "description": "weightlifting",
    "category": "Activities"
  },
  {
    "symbol": "🏋️‍♂️",
    "description": "man lifting weights",
    "category": "Activities"
  },
  {
    "symbol": "🏋️‍♀️",
    "description": "woman lifting weights",
    "category": "Activities"
  },
  {
    "symbol": "🚴",
    "description": "biking",
    "category": "Activities"
  },
  {
    "symbol": "🚴‍♂️",
    "description": "man biking",
    "category": "Activities"
  },
  {
    "symbol": "🚴‍♀️",
    "description": "woman biking",
    "category": "Activities"
  },
  {
    "symbol": "🚵",
    "description": "mountain biking",
    "category": "Activities"
  },
  {
    "symbol": "🚵‍♂️",
    "description": "man mountain biking",
    "category": "Activities"
  },
  {
    "symbol": "🚵‍♀️",
    "description": "woman mountain biking",
    "category": "Activities"
  },
  {
    "symbol": "🏇",
    "description": "horse racing",
    "category": "Activities"
  },
  {
    "symbol": "🧘",
    "description": "person in lotus position",
    "category": "Activities"
  },
  {
    "symbol": "🧘‍♂️",
    "description": "man in lotus position",
    "category": "Activities"
  },
  {
    "symbol": "🧘‍♀️",
    "description": "woman in lotus position",
    "category": "Activities"
  },
  {
    "symbol": "🇦🇨",
    "description": "Ascension Island flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇩",
    "description": "Andorra flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇪",
    "description": "United Arab Emirates flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇫",
    "description": "Afghanistan flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇬",
    "description": "Antigua & Barbuda flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇮",
    "description": "Anguilla flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇱",
    "description": "Albania flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇲",
    "description": "Armenia flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇴",
    "description": "Angola flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇶",
    "description": "Antarctica flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇷",
    "description": "Argentina flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇸",
    "description": "American Samoa flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇹",
    "description": "Austria flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇺",
    "description": "Australia flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇼",
    "description": "Aruba flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇽",
    "description": "Åland Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇦🇿",
    "description": "Azerbaijan flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇦",
    "description": "Bosnia & Herzegovina flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇧",
    "description": "Barbados flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇩",
    "description": "Bangladesh flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇪",
    "description": "Belgium flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇫",
    "description": "Burkina Faso flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇬",
    "description": "Bulgaria flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇭",
    "description": "Bahrain flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇮",
    "description": "Burundi flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇯",
    "description": "Benin flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇱",
    "description": "St. Barthélemy flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇲",
    "description": "Bermuda flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇳",
    "description": "Brunei flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇴",
    "description": "Bolivia flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇶",
    "description": "Caribbean Netherlands flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇷",
    "description": "Brazil flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇸",
    "description": "Bahamas flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇹",
    "description": "Bhutan flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇻",
    "description": "Bouvet Island flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇼",
    "description": "Botswana flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇾",
    "description": "Belarus flag",
    "category": "Flags"
},
{
    "symbol": "🇧🇿",
    "description": "Belize flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇦",
    "description": "Canada flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇨",
    "description": "Cocos (Keeling) Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇩",
    "description": "Congo - Kinshasa flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇫",
    "description": "Central African Republic flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇬",
    "description": "Congo - Brazzaville flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇭",
    "description": "Switzerland flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇮",
    "description": "Côte d’Ivoire flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇰",
    "description": "Cook Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇱",
    "description": "Chile flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇲",
    "description": "Cameroon flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇳",
    "description": "China flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇴",
    "description": "Colombia flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇵",
    "description": "Clipperton Island flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇷",
    "description": "Costa Rica flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇺",
    "description": "Cuba flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇻",
    "description": "Cape Verde flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇼",
    "description": "Curaçao flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇽",
    "description": "Christmas Island flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇾",
    "description": "Cyprus flag",
    "category": "Flags"
},
{
    "symbol": "🇨🇿",
    "description": "Czechia flag",
    "category": "Flags"
},
{
    "symbol": "🇩🇪",
    "description": "Germany flag",
    "category": "Flags"
},
{
    "symbol": "🇩🇬",
    "description": "Diego Garcia flag",
    "category": "Flags"
},
{
    "symbol": "🇩🇯",
    "description": "Djibouti flag",
    "category": "Flags"
},
{
    "symbol": "🇩🇰",
    "description": "Denmark flag",
    "category": "Flags"
},
{
    "symbol": "🇩🇲",
    "description": "Dominica flag",
    "category": "Flags"
},
{
    "symbol": "🇩🇴",
    "description": "Dominican Republic flag",
    "category": "Flags"
},
{
    "symbol": "🇩🇿",
    "description": "Algeria flag",
    "category": "Flags"
},
{
    "symbol": "🇪🇦",
    "description": "Ceuta & Melilla flag",
    "category": "Flags"
},
{
    "symbol": "🇪🇨",
    "description": "Ecuador flag",
    "category": "Flags"
},
{
    "symbol": "🇪🇪",
    "description": "Estonia flag",
    "category": "Flags"
},
{
    "symbol": "🇪🇬",
    "description": "Egypt flag",
    "category": "Flags"
},
{
    "symbol": "🇪🇭",
    "description": "Western Sahara flag",
    "category": "Flags"
},
{
    "symbol": "🇪🇷",
    "description": "Eritrea flag",
    "category": "Flags"
},
{
    "symbol": "🇪🇸",
    "description": "Spain flag",
    "category": "Flags"
},
{
    "symbol": "🇪🇹",
    "description": "Ethiopia flag",
    "category": "Flags"
},
{
    "symbol": "🇪🇺",
    "description": "European Union flag",
    "category": "Flags"
},
{
    "symbol": "🇫🇮",
    "description": "Finland flag",
    "category": "Flags"
},
{
    "symbol": "🇫🇯",
    "description": "Fiji flag",
    "category": "Flags"
},
{
    "symbol": "🇫🇰",
    "description": "Falkland Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇫🇲",
    "description": "Micronesia flag",
    "category": "Flags"
},
{
    "symbol": "🇫🇴",
    "description": "Faroe Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇫🇷",
    "description": "France flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇦",
    "description": "Gabon flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇧",
    "description": "United Kingdom flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇩",
    "description": "Grenada flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇪",
    "description": "Georgia flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇫",
    "description": "French Guiana flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇬",
    "description": "Guernsey flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇭",
    "description": "Ghana flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇮",
    "description": "Gibraltar flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇱",
    "description": "Greenland flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇲",
    "description": "Gambia flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇳",
    "description": "Guinea flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇵",
    "description": "Guadeloupe flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇶",
    "description": "Equatorial Guinea flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇷",
    "description": "Greece flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇸",
    "description": "South Georgia & South Sandwich Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇹",
    "description": "Guatemala flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇺",
    "description": "Guam flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇼",
    "description": "Guinea-Bissau flag",
    "category": "Flags"
},
{
    "symbol": "🇬🇾",
    "description": "Guyana flag",
    "category": "Flags"
},
{
    "symbol": "🇭🇰",
    "description": "Hong Kong SAR China flag",
    "category": "Flags"
},
{
    "symbol": "🇭🇲",
    "description": "Heard & McDonald Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇭🇳",
    "description": "Honduras flag",
    "category": "Flags"
},
{
    "symbol": "🇭🇷",
    "description": "Croatia flag",
    "category": "Flags"
},
{
    "symbol": "🇭🇹",
    "description": "Haiti flag",
    "category": "Flags"
},
{
    "symbol": "🇭🇺",
    "description": "Hungary flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇨",
    "description": "Canary Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇩",
    "description": "Indonesia flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇪",
    "description": "Ireland flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇱",
    "description": "Israel flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇲",
    "description": "Isle of Man flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇳",
    "description": "India flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇴",
    "description": "British Indian Ocean Territory flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇶",
    "description": "Iraq flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇷",
    "description": "Iran flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇸",
    "description": "Iceland flag",
    "category": "Flags"
},
{
    "symbol": "🇮🇹",
    "description": "Italy flag",
    "category": "Flags"
},
{
    "symbol": "🇯🇪",
    "description": "Jersey flag",
    "category": "Flags"
},
{
    "symbol": "🇯🇲",
    "description": "Jamaica flag",
    "category": "Flags"
},
{
    "symbol": "🇯🇴",
    "description": "Jordan flag",
    "category": "Flags"
},
{
    "symbol": "🇯🇵",
    "description": "Japan flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇪",
    "description": "Kenya flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇬",
    "description": "Kyrgyzstan flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇭",
    "description": "Cambodia flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇮",
    "description": "Kiribati flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇲",
    "description": "Comoros flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇳",
    "description": "St. Kitts & Nevis flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇵",
    "description": "North Korea flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇷",
    "description": "South Korea flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇼",
    "description": "Kuwait flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇾",
    "description": "Cayman Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇰🇿",
    "description": "Kazakhstan flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇦",
    "description": "Laos flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇧",
    "description": "Lebanon flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇨",
    "description": "St. Lucia flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇮",
    "description": "Liechtenstein flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇰",
    "description": "Sri Lanka flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇷",
    "description": "Liberia flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇸",
    "description": "Lesotho flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇹",
    "description": "Lithuania flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇺",
    "description": "Luxembourg flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇻",
    "description": "Latvia flag",
    "category": "Flags"
},
{
    "symbol": "🇱🇾",
    "description": "Libya flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇦",
    "description": "Morocco flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇨",
    "description": "Monaco flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇩",
    "description": "Moldova flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇪",
    "description": "Montenegro flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇫",
    "description": "St. Martin flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇬",
    "description": "Madagascar flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇭",
    "description": "Marshall Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇰",
    "description": "North Macedonia flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇱",
    "description": "Mali flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇲",
    "description": "Myanmar (Burma) flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇳",
    "description": "Mongolia flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇴",
    "description": "Macau SAR China flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇵",
    "description": "Northern Mariana Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇶",
    "description": "Martinique flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇷",
    "description": "Mauritania flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇸",
    "description": "Montserrat flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇹",
    "description": "Malta flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇺",
    "description": "Mauritius flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇻",
    "description": "Maldives flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇼",
    "description": "Malawi flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇽",
    "description": "Mexico flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇾",
    "description": "Malaysia flag",
    "category": "Flags"
},
{
    "symbol": "🇲🇿",
    "description": "Mozambique flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇦",
    "description": "Namibia flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇨",
    "description": "New Caledonia flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇪",
    "description": "Niger flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇫",
    "description": "Norfolk Island flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇬",
    "description": "Nigeria flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇮",
    "description": "Nicaragua flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇱",
    "description": "Netherlands flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇴",
    "description": "Norway flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇵",
    "description": "Nepal flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇷",
    "description": "Nauru flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇺",
    "description": "Niue flag",
    "category": "Flags"
},
{
    "symbol": "🇳🇿",
    "description": "New Zealand flag",
    "category": "Flags"
},
{
    "symbol": "🇴🇲",
    "description": "Oman flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇦",
    "description": "Panama flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇪",
    "description": "Peru flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇫",
    "description": "French Polynesia flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇬",
    "description": "Papua New Guinea flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇭",
    "description": "Philippines flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇰",
    "description": "Pakistan flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇱",
    "description": "Poland flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇲",
    "description": "St. Pierre & Miquelon flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇳",
    "description": "Pitcairn Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇷",
    "description": "Puerto Rico flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇸",
    "description": "Palestinian Territories flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇹",
    "description": "Portugal flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇼",
    "description": "Palau flag",
    "category": "Flags"
},
{
    "symbol": "🇵🇾",
    "description": "Paraguay flag",
    "category": "Flags"
},
{
    "symbol": "🇶🇦",
    "description": "Qatar flag",
    "category": "Flags"
},
{
    "symbol": "🇷🇪",
    "description": "Réunion flag",
    "category": "Flags"
},
{
    "symbol": "🇷🇴",
    "description": "Romania flag",
    "category": "Flags"
},
{
    "symbol": "🇷🇸",
    "description": "Serbia flag",
    "category": "Flags"
},
{
    "symbol": "🇷🇺",
    "description": "Russia flag",
    "category": "Flags"
},
{
    "symbol": "🇷🇼",
    "description": "Rwanda flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇦",
    "description": "Saudi Arabia flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇧",
    "description": "Solomon Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇨",
    "description": "Seychelles flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇩",
    "description": "Sudan flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇪",
    "description": "Sweden flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇬",
    "description": "Singapore flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇭",
    "description": "St. Helena flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇮",
    "description": "Slovenia flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇯",
    "description": "Svalbard & Jan Mayen flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇰",
    "description": "Slovakia flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇱",
    "description": "Sierra Leone flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇲",
    "description": "San Marino flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇳",
    "description": "Senegal flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇴",
    "description": "Somalia flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇷",
    "description": "Suriname flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇸",
    "description": "South Sudan flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇹",
    "description": "São Tomé & Príncipe flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇻",
    "description": "El Salvador flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇽",
    "description": "Sint Maarten flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇾",
    "description": "Syria flag",
    "category": "Flags"
},
{
    "symbol": "🇸🇿",
    "description": "Eswatini flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇦",
    "description": "Tristan da Cunha flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇨",
    "description": "Turks & Caicos Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇩",
    "description": "Chad flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇫",
    "description": "French Southern Territories flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇬",
    "description": "Togo flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇭",
    "description": "Thailand flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇯",
    "description": "Tajikistan flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇰",
    "description": "Tokelau flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇱",
    "description": "Timor-Leste flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇲",
    "description": "Turkmenistan flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇳",
    "description": "Tunisia flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇴",
    "description": "Tonga flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇷",
    "description": "Turkey flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇹",
    "description": "Trinidad & Tobago flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇻",
    "description": "Tuvalu flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇼",
    "description": "Taiwan flag",
    "category": "Flags"
},
{
    "symbol": "🇹🇿",
    "description": "Tanzania flag",
    "category": "Flags"
},
{
    "symbol": "🇺🇦",
    "description": "Ukraine flag",
    "category": "Flags"
},
{
    "symbol": "🇺🇬",
    "description": "Uganda flag",
    "category": "Flags"
},
{
    "symbol": "🇺🇲",
    "description": "U.S. Outlying Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇺🇳",
    "description": "United Nations flag",
    "category": "Flags"
},
{
    "symbol": "🇺🇸",
    "description": "United States flag",
    "category": "Flags"
},
{
    "symbol": "🇺🇾",
    "description": "Uruguay flag",
    "category": "Flags"
},
{
    "symbol": "🇺🇿",
    "description": "Uzbekistan flag",
    "category": "Flags"
},
{
    "symbol": "🇻🇦",
    "description": "Vatican City flag",
    "category": "Flags"
},
{
    "symbol": "🇻🇨",
    "description": "St. Vincent & Grenadines flag",
    "category": "Flags"
},
{
    "symbol": "🇻🇪",
    "description": "Venezuela flag",
    "category": "Flags"
},
{
    "symbol": "🇻🇬",
    "description": "British Virgin Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇻🇮",
    "description": "U.S. Virgin Islands flag",
    "category": "Flags"
},
{
    "symbol": "🇻🇳",
    "description": "Vietnam flag",
    "category": "Flags"
},
{
    "symbol": "🇻🇺",
    "description": "Vanuatu flag",
    "category": "Flags"
},
{
    "symbol": "🇼🇫",
    "description": "Wallis & Futuna flag",
    "category": "Flags"
},
{
    "symbol": "🇼🇸",
    "description": "Samoa flag",
    "category": "Flags"
},
{
    "symbol": "🇽🇰",
    "description": "Kosovo flag",
    "category": "Flags"
},
{
    "symbol": "🇾🇪",
    "description": "Yemen flag",
    "category": "Flags"
},
{
    "symbol": "🇾🇹",
    "description": "Mayotte flag",
    "category": "Flags"
},
{
    "symbol": "🇿🇦",
    "description": "South Africa flag",
    "category": "Flags"
},
{
    "symbol": "🇿🇲",
    "description": "Zambia flag",
    "category": "Flags"
},
{
    "symbol": "🇿🇼",
    "description": "Zimbabwe flag",
    "category": "Flags"
}
  
];

document.addEventListener('DOMContentLoaded', () => {
  const emojiGrid = document.querySelector('.emoji-grid');
  const searchInput = document.getElementById('search');
  const categoryButtons = document.querySelectorAll('.category-buttons button');
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  function displayEmojis(filterFn) {
      emojiGrid.innerHTML = '';
      emojis.filter(filterFn).forEach(emoji => {
          const emojiItem = document.createElement('div');
          emojiItem.classList.add('emoji-item');
          emojiItem.textContent = emoji.symbol;
          emojiItem.title = emoji.description;
          emojiItem.addEventListener('click', () => {
              navigator.clipboard.writeText(emoji.symbol).then(() => {
                  // Add animation effect on successful copy
                  emojiItem.classList.add('copied');
                  setTimeout(() => {
                      emojiItem.classList.remove('copied');
                  }, 1000);

                  // Show small notification
                  showNotification(`Copied: ${emoji.symbol}`);
              }).catch(err => {
                  console.error('Failed to copy:', err);
              });
          });
          emojiGrid.appendChild(emojiItem);
      });
  }

  function filterEmojisByCategory(category) {
      if (category === 'All') {
          displayEmojis(() => true);
      } else {
          displayEmojis(emoji => emoji.category === category);
      }
  }

  searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      displayEmojis(emoji => emoji.description.toLowerCase().includes(searchTerm));
  });

  categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
          const category = button.getAttribute('data-category');
          filterEmojisByCategory(category);
      });
  });

  function showNotification(message) {
      const notification = document.createElement('div');
      notification.classList.add('notification');
      notification.textContent = message;
      document.body.appendChild(notification);

      setTimeout(() => {
          notification.classList.add('show');
          setTimeout(() => {
              notification.classList.remove('show');
              setTimeout(() => {
                  document.body.removeChild(notification);
              }, 300);
          }, 2000);
      }, 100);
  }

  hamburger.addEventListener('click', () => {
      menu.querySelector('ul').classList.toggle('active');
  });

  // Initial display of all emojis
  filterEmojisByCategory('All');
});