// Site content: weekly classes, remote events, videos and products.
// Edit freely — every section renders from these lists.

// Weekly live classes, one per photo card on the home page.
// day: 0 = Sunday … 6 = Saturday; time is 24h in CONFIG.timezone.
// photo / photoPos: the card's background picture and which part of it to show.
export const CLASSES = [
  { id: 'soca-sweat', title: 'Soca Sweat HIIT', kicker: 'Intervals', day: 1, time: '19:00', minutes: 45, platform: 'zoom', level: 'All levels', blurb: 'Intervals timed to the drop. Bring water and a towel.', photo: 'img/power-split.jpg', photoPos: '76% 30%' },
  { id: 'wine-core', title: 'Wine & Core', kicker: 'Lunch break', day: 2, time: '12:15', minutes: 30, platform: 'ig', level: 'All levels', blurb: 'Thirty minutes of waistline work on your lunch break.', photo: 'img/wine-down.jpg', photoPos: '58% 40%' },
  { id: 'road-march', title: 'Road March Cardio', kicker: 'Cardio', day: 3, time: '19:30', minutes: 60, platform: 'zoom', level: 'Intermediate', blurb: 'Chip, jump and wave — stamina for the full parade route.', photo: 'img/mas-queen.jpg', photoPos: '50% 28%' },
  { id: 'choreo-lab', title: 'Feather Flow', kicker: 'Choreo lab', day: 4, time: '20:00', minutes: 45, platform: 'ig', level: 'Beginner friendly', blurb: 'Learn this week’s routine count by count.', photo: 'img/led-mas.jpg', photoPos: '50% 30%' },
];

// One-off interactive events. date is local to CONFIG.timezone.
export const EVENTS = [
  { id: 'jouvert-jam', title: "Virtual J'ouvert Jam", date: '2026-11-14T10:00', platform: 'zoom', blurb: 'Paint up at home and dance with queens worldwide.' },
  { id: 'fete-challenge', title: '30-Day Fete Ready Challenge', date: '2027-01-04T19:00', platform: 'zoom', blurb: 'Daily workouts, weekly check-ins and a crowned winner.' },
  { id: 'countdown-bootcamp', title: 'Carnival Countdown Bootcamp', date: '2027-01-30T10:00', platform: 'zoom', blurb: 'Four weekends of road-march conditioning.' },
];

export const VIDEOS = [
  { id: 'v1', title: 'Soca Sweat HIIT: Full Fete Burn', cat: 'workout', minutes: 32, level: 'All levels', thumb: 'img/power-split.jpg', pos: '80% 30%', youtubeId: '' },
  { id: 'v2', title: 'Wine & Core: 20-Minute Waistline', cat: 'workout', minutes: 20, level: 'Intermediate', thumb: 'img/wine-down.jpg', pos: '45% 45%', youtubeId: '' },
  { id: 'v3', title: 'Road March Stamina Builder', cat: 'workout', minutes: 45, level: 'Advanced', thumb: 'img/night-mas.jpg', pos: '50% 85%', youtubeId: '' },
  { id: 'v4', title: 'Choreo Breakdown: The Feather Flow', cat: 'choreo', minutes: 18, level: 'Beginner', thumb: 'img/feather-red.jpg', pos: '50% 35%', youtubeId: '' },
  { id: 'v5', title: 'Choreo Breakdown: Jab Jab Energy', cat: 'choreo', minutes: 15, level: 'Intermediate', thumb: 'img/jab-splash.jpg', pos: '50% 30%', youtubeId: '' },
  { id: 'v6', title: 'Wining 101: Hips, Isolation & Control', cat: 'choreo', minutes: 22, level: 'Beginner', thumb: 'img/mas-queen.jpg', pos: '50% 72%', youtubeId: '' },
  { id: 'v7', title: "J'ouvert Morning: Paint, Powder & Power", cat: 'recap', minutes: 6, level: 'Event recap', thumb: 'img/eye-fete.jpg', pos: '50% 55%', youtubeId: '' },
  { id: 'v8', title: 'Road Queen Takeover: Parade Day', cat: 'recap', minutes: 8, level: 'Event recap', thumb: 'img/led-mas.jpg', pos: '55% 35%', youtubeId: '' },
  { id: 'v9', title: 'Midnight Fete Meetup', cat: 'recap', minutes: 5, level: 'Meetup recap', thumb: 'img/night-mas.jpg', pos: '50% 8%', youtubeId: '' },
];

export const CATEGORY_LABELS = { workout: 'Workout', choreo: 'Choreo Breakdown', recap: 'Road March Recap' };

const APPAREL_SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

// art: which illustration in shop-art.js draws the product (front + back views).
export const PRODUCTS = [
  { id: 'crop-tee', name: 'Road Queen Crop Tee', cat: 'apparel', price: 34, sizes: APPAREL_SIZES, art: 'tee', badge: 'Best seller', blurb: 'Boxy cropped cotton tee with the gold crown up front.' },
  { id: 'leggings', name: 'Midnight Carnival Leggings', cat: 'apparel', price: 58, sizes: APPAREL_SIZES, art: 'leggings', blurb: 'High-rise, squat-proof, with a crimson side stripe.' },
  { id: 'sports-bra', name: 'Strappy Reign Sports Bra', cat: 'apparel', price: 42, sizes: APPAREL_SIZES, art: 'bra', badge: 'New', blurb: 'Medium support with a criss-cross back made to wine in.' },
  { id: 'waist-trainer', name: 'Soca Sculpt Waist Trainer', cat: 'trainers', price: 65, sizes: APPAREL_SIZES, art: 'trainer', blurb: 'Steel-boned latex core with three rows of hooks.' },
  { id: 'sweat-belt', name: 'Road Ready Sweat Belt', cat: 'trainers', price: 32, sizes: ['S/M', 'L/XL', '2XL/3XL'], art: 'belt', blurb: 'Neoprene wrap with a grip lining for heat on every rep.' },
  { id: 'arm-cuffs', name: 'Feather Arm Cuffs (Pair)', cat: 'carnival', price: 38, sizes: null, art: 'cuffs', badge: 'Fete ready', blurb: 'Red and royal blue plumes on a stretch-gem band.' },
  { id: 'face-gems', name: 'Jewelled Face Gem Set', cat: 'carnival', price: 18, sizes: null, art: 'gems', blurb: 'Iridescent self-adhesive gems for brows, cheeks and crown.' },
  { id: 'road-cup', name: 'Road March Cup', cat: 'gear', price: 24, sizes: null, art: 'cup', blurb: '24 oz double-wall jar with a lid and reusable straw.' },
  { id: 'band-trio', name: 'Booty Band Trio', cat: 'gear', price: 29, sizes: null, art: 'bands', blurb: 'Light, medium and heavy fabric bands with a carry pouch.' },
];

// Sample messages for the pre-show chat preview.
export const CHAT_SEED = [
  { name: 'Keisha', text: 'Who ready to WINE?? 🔥' },
  { name: 'Marisol', text: 'Water bottle ✅ towel ✅ waistline ✅' },
  { name: 'Coach Tee', text: 'Warm up those hips, queens — we start on the drop 👑' },
];
