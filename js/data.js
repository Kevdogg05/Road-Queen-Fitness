// Site content: gallery, weekly classes, remote events, videos and products.
// Edit freely — every section renders from these lists.

export const GALLERY = [
  { src: 'img/mas-queen.jpg', w: 922, h: 1152, title: 'Feathers up', caption: 'Red, blue and royal on the road.', alt: 'Laughing masquerader in a towering red and blue feathered headpiece, splashed with paint and holding a blue cup', size: 'tall' },
  { src: 'img/jab-splash.jpg', w: 922, h: 1152, title: 'Blue devil energy', caption: "J'ouvert paint, no apologies.", alt: 'Masquerader in blue paint and horns spraying a burst of red and pink paint', size: '' },
  { src: 'img/night-mas.jpg', w: 768, h: 1365, title: 'After-dark fete', caption: 'Palms on fire, paint in the air.', alt: 'Paint-covered revellers dancing under red-lit palm trees at night, a woman in a jewelled crown up front', size: 'tall' },
  { src: 'img/led-mas.jpg', w: 922, h: 1152, title: 'Lit up for the road', caption: 'Built to move in every costume.', alt: 'Carnival costume with glowing blue LED feathers and beadwork at night', size: '' },
  { src: 'img/wine-down.jpg', w: 1400, h: 764, title: 'Wine it down', caption: 'Sweat sessions that feel like a party.', alt: 'Smiling woman in a red crop top and blue shorts dancing in coloured smoke under stage lights', size: 'wide' },
  { src: 'img/eye-fete.jpg', w: 896, h: 1200, title: 'Eyes on the crown', caption: 'Focus. Fire. Finish.', alt: 'Blue painted eye reflecting a crowd of dancers, a red tear running into a crimson shoreline under palm trees', size: '' },
  { src: 'img/power-split.jpg', w: 976, h: 1077, title: 'Soca power', caption: 'Strength on one side, speed on the other.', alt: 'Split image: a high kick against red, and an athlete in red sprinting against blue', size: '' },
  { src: 'img/feather-red.jpg', w: 896, h: 1200, title: 'Rise up', caption: 'Light as a feather, strong on the road.', alt: 'Blue feather against a red background', size: '' },
];

// Weekly live classes. day: 0 = Sunday … 6 = Saturday; time is 24h in CONFIG.timezone.
export const CLASSES = [
  { id: 'soca-sweat', title: 'Soca Sweat HIIT', day: 1, time: '19:00', minutes: 45, platform: 'zoom', level: 'All levels', blurb: 'Intervals timed to the drop. Bring water and a towel.' },
  { id: 'wine-core', title: 'Lunch Break Wine & Core', day: 2, time: '12:15', minutes: 30, platform: 'ig', level: 'All levels', blurb: 'Thirty minutes of waistline work on your lunch break.' },
  { id: 'road-march', title: 'Road March Cardio', day: 3, time: '19:30', minutes: 60, platform: 'zoom', level: 'Intermediate', blurb: 'Chip, jump and wave — stamina for the full parade route.' },
  { id: 'choreo-lab', title: 'Choreo Lab: Feather Flow', day: 4, time: '20:00', minutes: 45, platform: 'ig', level: 'Beginner friendly', blurb: 'Learn this week’s routine count by count.' },
  { id: 'fete-bootcamp', title: 'Saturday Fete Bootcamp', day: 6, time: '10:00', minutes: 60, platform: 'zoom', level: 'Advanced', blurb: 'Strength circuits and soca sprints. Our biggest class.' },
  { id: 'queen-stretch', title: "Queen's Stretch & Recovery", day: 0, time: '17:00', minutes: 30, platform: 'ig', level: 'All levels', blurb: 'Mobility and deep stretch to reset for the week.' },
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
