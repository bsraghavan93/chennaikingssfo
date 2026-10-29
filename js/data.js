/* ==========================================================
   Chennai Kings – all editable content lives in this file.
   ========================================================== */

const SITE = {
  name: "Chennai Kings",
  address: "418 Beach Street, San Francisco, CA 94133",
  area: "Fisherman's Wharf",
  phone: "(415) 529-0934",
  phoneTel: "+14155290934",
  email: "chennaikingssfo@gmail.com",
  contacts: [
    { name: "Guna – Catering & Events", phone: "(408) 771-6277", tel: "+14087716277" },
    { name: "Raja", phone: "(510) 396-4963", tel: "+15103964963" }
  ],
  mapsLink: "https://www.google.com/maps/search/?api=1&query=Chennai+Kings+418+Beach+Street+San+Francisco+CA+94133",
  mapsEmbed: "https://www.google.com/maps?q=Chennai+Kings+418+Beach+Street+San+Francisco+CA+94133&output=embed",
  // TODO: add the Google review link / Order Online link / social handles. Empty = hidden.
  reviewsUrl: "",
  orderUrl: "",
  social: { instagram: "", facebook: "", youtube: "", tiktok: "" },
  // Hours from a public directory listing – VERIFY against Google Maps.
  // Day index: 0 = Sunday … 6 = Saturday. Times are 24h "HH:MM".
  hours: [
    ["11:30", "22:00"], // Sun
    ["11:30", "22:00"], // Mon
    ["11:30", "22:00"], // Tue
    ["11:30", "22:00"], // Wed
    ["11:30", "22:00"], // Thu
    ["11:00", "23:00"], // Fri
    ["11:00", "23:00"]  // Sat
  ],
  timezone: "America/Los_Angeles"
};

/* Highlights shown on the home page stat strip */
const STATS = [
  { n: "800+", l: "guests at one Salesforce event" },
  { n: "250+", l: "guests at an international squash event" },
  { n: "150+", l: "guests at weddings & receptions" },
  { n: "15+", l: "singers in SFO Vaanampadies" }
];

/* Catering packages. Set price to a number (per person) to show it; null = "Request a quote". */
const PACKAGES = [
  {
    name: "Team Lunch", tag: "Offices & small teams", guests: "15 – 75 guests", price: null,
    items: ["Choice of 2 veg + 1 non-veg curry", "Rice, bread & sambar", "Appetizer platter", "Dessert", "Delivery & setup"]
  },
  {
    name: "Live Dosa Station", tag: "Most popular", guests: "50 – 300 guests", price: null, featured: true,
    items: ["Live chef making dosas & uthappam", "Chutneys, sambar & podi", "Idly & vada add-on", "Chef, griddles & serving staff", "At your home, office or venue"]
  },
  {
    name: "Corporate Feast", tag: "Large events", guests: "200 – 800+ guests", price: null,
    items: ["Two stations, 15+ dishes (as at Salesforce)", "Veg, non-veg & vegan options", "Full serving team", "Chafing, signage & cleanup", "Dedicated event coordinator"]
  },
  {
    name: "Wedding & Party", tag: "Celebrations", guests: "50 – 250 guests", price: null,
    items: ["Party hall at 418 Beach St", "Custom multi-course menu", "Décor, lighting & sofa seating", "Optional DJ, live music or dance", "Bar & happy-hour style add-ons"]
  }
];

/* Event calendar. Add / edit rows. sample:true shows a "Sample" badge – delete once real. */
const EVENTS = [
  { date: "2026-11-08", type: "cricket", title: "Cricket on the big screen", time: "Check score times", note: "Ask us for the match schedule.", sample: true },
  { date: "2026-11-14", type: "music", title: "Live music & dinner night", time: "7:00 PM", note: "Indian live music with SFO Vaanampadies.", sample: true },
  { date: "2026-11-21", type: "karaoke", title: "Karaoke night", time: "8:00 PM", note: "Sing your favourite Tamil & Hindi hits.", sample: true },
  { date: "2026-11-28", type: "dj", title: "DJ & dance party", time: "9:00 PM", note: "Colourful lights and dancing.", sample: true },
  { date: "2026-12-31", type: "party", title: "New Year's Eve dinner & party", time: "From 8:00 PM", note: "Dinner, music and countdown.", sample: true }
];

/* Menu. veg: true = vegetarian. note = small print. price: number | string */
const MENU = [
  { id: "soups", title: "Soups", items: [
    { n: "Navrattan Aattukal Soup", p: 8.99 }, { n: "Sweet Corn Veg Soup", p: 6.99, veg: 1 },
    { n: "Tomato Soup", p: 6.99, veg: 1 }, { n: "Kothamalli Rasam", p: 6.99, veg: 1 },
    { n: "Chicken Soup", p: 7.99 }, { n: "Crab Rasam", p: 9.99 } ] },
  { id: "veg-starters", title: "Vegetarian Appetizers", items: [
    { n: "Sesame Gobi Manchurian", p: 18.99, veg: 1 }, { n: "Chilli Paneer", p: 18.99, veg: 1 },
    { n: "Mushroom Pepper Fry", p: 18.99, veg: 1 }, { n: "Chilli Baby Corn", p: 18.99, veg: 1 },
    { n: "Veg Samosa", note: "4 pcs", p: 14.99, veg: 1 }, { n: "Assorted Bajji", p: 15.99, veg: 1 },
    { n: "Paneer Pakoda", p: 16.99, veg: 1 }, { n: "Marina Beach Milagai Bajji", p: 15.99, veg: 1 },
    { n: "Onion Pakora", p: 15.99, veg: 1 } ] },
  { id: "nonveg-starters", title: "Non-Vegetarian Appetizers", items: [
    { n: "Pepper Goat Sukka Varuval", p: 21.99 }, { n: "Buhari Chicken 65", p: 19.99 },
    { n: "Chilli Chicken", p: 19.99 }, { n: "Garlic Chicken", p: 19.99 },
    { n: "Grilled Mustard Shrimps", p: 21.99 }, { n: "Ginger Chilli Prawns", p: 21.99 },
    { n: "Grilled Fish", note: "3 pcs", p: 19.99 }, { n: "Whole Fish Fry", p: 29.99 } ] },
  { id: "idly", title: "Idly & Vadas", items: [
    { n: "Idly Vada Combo", p: 14.99, veg: 1 }, { n: "Medhu Vada", note: "2 pcs", p: 9.99, veg: 1 },
    { n: "Idly with Sambar & Chutney", note: "4 pcs", p: 14.99, veg: 1 } ] },
  { id: "uthappam", title: "Uthappam", items: [
    { n: "Mix Veg Uthappam", p: 16.99, veg: 1 }, { n: "Tomato Uthappam", p: 16.99, veg: 1 },
    { n: "Onion Uthappam", p: 16.99, veg: 1 } ] },
  { id: "dosas", title: "Dosas", items: [
    { n: "Plain Dosa", p: 15.99, veg: 1 }, { n: "Mysore Masala Dosa", p: 16.99, veg: 1 },
    { n: "Madras Masala Dosa", p: 16.99, veg: 1 }, { n: "Ghee Cone Dosa", p: 16.99, veg: 1 },
    { n: "Spring Dosa", p: 16.99, veg: 1 }, { n: "Kal Dosa", p: 16.99, veg: 1 },
    { n: "Paneer Dosa", p: 16.99, veg: 1 }, { n: "Parry's Corner Onion Dosa", p: 16.99, veg: 1 },
    { n: "Egg Pepper Dosa", p: 16.99 }, { n: "Masala Mushroom Dosa", p: 16.99, veg: 1 },
    { n: "Madurai Mutton Kari Dosa", p: 19.99 } ] },
  { id: "veg-curries", title: "Vegetable Curries", items: [
    { n: "Spinach Dhal", p: 18.99, veg: 1 }, { n: "Tomato Dhal", p: 18.99, veg: 1 },
    { n: "Vegetable Kurma", p: 18.99, veg: 1 }, { n: "Kadai Vegetable", p: 19.99, veg: 1 },
    { n: "Paneer Butter Masala", p: 19.99, veg: 1 }, { n: "Spinach Paneer Curry", p: 19.99, veg: 1 } ] },
  { id: "chicken", title: "Chicken Curries", items: [
    { n: "Chettinad Chicken Curry", p: 20.99 }, { n: "Kadai Chicken", p: 20.99 },
    { n: "Gongura Chicken Curry", p: 20.99 }, { n: "Butter Chicken", p: 20.99 } ] },
  { id: "mutton", title: "Mutton / Goat Curries", items: [
    { n: "Madras Mutton / Goat Curry", p: 21.99 }, { n: "Mutton / Goat Kurma", p: 21.99 },
    { n: "Gongura Mutton / Goat Curry", p: 21.99 } ] },
  { id: "seafood", title: "Seafood Specials", items: [
    { n: "Chennai Fish Curry", p: 20.99 }, { n: "Kerala Fish Curry", p: 20.99 },
    { n: "Chettinad Shrimp Curry", p: 21.99 }, { n: "Kerala Prawn Curry", p: 21.99 },
    { n: "Crab Masala – Half Crab", p: "Market price", note: "Ask for availability" },
    { n: "Crab Masala – Whole Crab", p: "Ask", note: "Ask for availability" } ] },
  { id: "kothu", title: "Kothu Parotta", items: [
    { n: "Veg Kothu Parotta", p: 18.99, veg: 1 }, { n: "Egg Kothu Parotta", p: 19.99 },
    { n: "Chicken Kothu Parotta", p: 19.99 }, { n: "Mutton Kothu Parotta", p: 21.99 } ] },
  { id: "breads", title: "Indian Breads", items: [
    { n: "Poori Masala", note: "3 pcs", p: 15.99, veg: 1 }, { n: "Poori Channa", note: "3 pcs", p: 15.99, veg: 1 },
    { n: "Chapathi", note: "2 pcs", p: 6.99, veg: 1 }, { n: "Plain / Butter Naan", note: "2 pcs", p: 6.99, veg: 1 },
    { n: "Garlic Naan", note: "2 pcs", p: 6.99, veg: 1 }, { n: "Parotta", note: "2 pcs", p: 6.99, veg: 1 },
    { n: "Poori", note: "2 pcs", p: 6.99, veg: 1 } ] },
  { id: "sides", title: "Sides", items: [
    { n: "Basmati Rice", note: "16 oz", p: 6.99, veg: 1 }, { n: "Sambar", note: "8 oz", p: 6.99, veg: 1 },
    { n: "Madras Paapad", note: "4 pcs", p: 6.99, veg: 1 }, { n: "Potato Masala", p: 6.99, veg: 1 },
    { n: "Yogurt / Raita", p: 6.99, veg: 1 } ] },
  { id: "desserts", title: "Desserts & Drinks", items: [
    { n: "Gulab Jamun", p: 6.99, veg: 1 }, { n: "Rasamalai", p: 6.99, veg: 1 },
    { n: "Mango Lassi", p: 5.99, veg: 1 }, { n: "Buttermilk", p: 4.99, veg: 1 },
    { n: "Rosemilk", p: 4.99, veg: 1 }, { n: "Filter Coffee", p: 3.99, veg: 1 },
    { n: "Masala Tea", p: 3.99, veg: 1 }, { n: "Soft Drinks", p: "Ask" } ] }
];

const SPECIALS = {
  intro: "Ask your server for today's availability and prices. Suvarotti and goat spleen are available Friday – Sunday only.",
  items: ["Suvarotti (8 oz)", "Madurai-style mutton chops", "Madurai mutton kari dosa", "Crab rasam",
          "Chennai-style crab masala", "Crab omelette", "Chennai-style egg kalakki", "Mutton & egg poriyal"]
};

/* Happy hour: every day 3–6 PM and 9 PM to close.
   TODO(owner): confirm Taj Mahal happy-hour prices – half of regular would be $7.50 / $4.50. */
const HAPPY = {
  times: "Every day · 3 – 6 PM and 9 PM – close",
  drinks: [
    { n: "Taj Mahal beer (650 ml)", p: 8, reg: 14.99 },
    { n: "Taj Mahal beer (350 ml)", p: 4, reg: 8.99 },
    { n: "House red or white wine (glass)", p: 8, reg: 15.99 }
  ],
  halfPrice: ["Chennai masala omelet", "Chennai milagai chilli bajji", "Chennai pakoda", "Gobi 65", "Chicken 65", "Goat chukka", "Fish fry", "Mustard prawn"],
  rules: "Half-price appetizers must be ordered with drinks."
};

const BEER_WINE = [
  { n: "Corona", p: 7.99 }, { n: "Heineken", p: 7.99 }, { n: "Blue Moon", p: 7.99 },
  { n: "Taj Mahal (Indian beer) – small", p: 8.99 }, { n: "Taj Mahal (Indian beer) – large", p: 14.99 },
  { n: "Red wine – Merlot, Pinot Noir, Cabernet (glass)", p: 15.99 }, { n: "White wine (glass)", p: 15.99 }
];

/* Media. cat keys must match the filter chips in gallery.html */
const M = "assets/";
const GALLERY_CATS = [
  ["all", "All"], ["corporate", "Corporate"], ["diwali", "Diwali"], ["wedding", "Weddings"],
  ["family", "Family & birthdays"], ["music", "Live music"], ["dj", "DJ & dance"],
  ["karaoke", "Karaoke & guests"], ["dosa", "Dosa stations"], ["venue", "Party hall"]
];

function photos(cat, folder, prefix, count, alt, start = 1) {
  return Array.from({ length: count }, (_, i) => ({ cat, type: "img", src: `${M}${folder}/${prefix}-${i + start}.jpg`, alt: `${alt} ${i + start}` }));
}
function vids(cat, folder, prefix, count, alt, posterPrefix) {
  return Array.from({ length: count }, (_, i) => ({
    cat, type: "video", src: `${M}${folder}/${prefix}-${i + 1}.mp4`,
    poster: `${M}${folder}/${posterPrefix || prefix}-${i + 1}.jpg`, alt: `${alt} ${i + 1}`
  }));
}

const GALLERY = [
  ...photos("corporate", "01_Salesforce_Catering", "salesforce-event", 6, "Salesforce catering"),
  { cat: "corporate", type: "img", src: M + "01_Salesforce_Catering/salesforce-crowd.jpg", alt: "Guests at the Salesforce buffet" },
  { cat: "corporate", type: "img", src: M + "01_Salesforce_Catering/salesforce-gathering.jpg", alt: "Salesforce gathering" },
  { cat: "corporate", type: "img", src: M + "01_Salesforce_Catering/salesforce-guests.jpg", alt: "Salesforce guests" },
  { cat: "corporate", type: "img", src: M + "01_Salesforce_Catering/salesforce-catering.jpg", alt: "Salesforce catering spread" },
  ...photos("corporate", "03_Corporate_Team_Parties", "team-celebration", 4, "Team celebration"),
  { cat: "corporate", type: "video", src: M + "03_Corporate_Team_Parties/team-celebration.mp4", poster: M + "03_Corporate_Team_Parties/team-video-poster.jpg", alt: "Team celebration video" },
  ...vids("diwali", "02_Berkeley_Diwali", "berkeley-diwali", 3, "Berkeley Diwali"),
  ...vids("wedding", "04_Weddings_and_Receptions", "wedding-celebration", 2, "Wedding celebration"),
  ...photos("wedding", "04_Weddings_and_Receptions", "wedding-hall", 5, "Wedding hall"),
  ...photos("family", "05_Family_and_Birthday_Parties", "family-party", 4, "Family party"),
  ...vids("family", "05_Family_and_Birthday_Parties", "family-party", 3, "Family party video", "family-party-video"),
  ...vids("music", "06_Live_Music", "live-music-performance", 4, "Live music performance"),
  ...photos("music", "06_Live_Music", "live-music-atmosphere", 3, "Live music atmosphere"),
  ...vids("dj", "07_DJ_and_Dance", "private-dj-dance", 4, "DJ and dance party"),
  { cat: "dj", type: "video", src: M + "11_Belly_Dance_Shows/belly-dance-show.mp4", poster: M + "11_Belly_Dance_Shows/belly-dance-show.jpg", alt: "Belly dance show" },
  { cat: "karaoke", type: "video", src: M + "09_Karaoke_Nights/karaoke-night.mp4", poster: M + "09_Karaoke_Nights/karaoke-night.jpg", alt: "Karaoke night" },
  { cat: "karaoke", type: "video", src: M + "10_Celebrity_Visits/tamil-cinema-visit.mp4", poster: M + "10_Celebrity_Visits/tamil-cinema-visit.jpg", alt: "Tamil cinema guests visit" },
  ...photos("dosa", "08_Onsite_Dosa_Stations", "onsite-dosa", 2, "Live dosa station"),
  ...photos("venue", "12_Private_Party_Setups", "private-event-setup", 6, "Private event setup"),
  { cat: "venue", type: "img", src: M + "14_Other_Restaurant_Photos/restaurant-gathering.jpg", alt: "Gathering at Chennai Kings" },
  { cat: "venue", type: "img", src: M + "14_Other_Restaurant_Photos/restaurant-event.jpg", alt: "Event at Chennai Kings" },
  { cat: "venue", type: "img", src: M + "14_Other_Restaurant_Photos/group-dinner.jpg", alt: "Group dinner at Chennai Kings" }
];

/* Event timeline cards (Home + Catering) */
const PAST_EVENTS = [
  { t: "Salesforce Tower", s: "800+ guests · 15 dishes · 2 live stations", img: "01_Salesforce_Catering/salesforce-event-3.jpg", cat: "corporate" },
  { t: "Berkeley Diwali", s: "University Hall · live dosa stations", img: "02_Berkeley_Diwali/berkeley-diwali-1.jpg", cat: "diwali" },
  { t: "Weddings & receptions", s: "150+ guests in our party hall", img: "04_Weddings_and_Receptions/wedding-hall-2.jpg", cat: "wedding" },
  { t: "Live music nights", s: "SFO Vaanampadies · 15+ singers", img: "06_Live_Music/live-music-atmosphere-1.jpg", cat: "music" },
  { t: "Team lunches & dinners", s: "75+ guests · offices & teams", img: "03_Corporate_Team_Parties/team-celebration-1.jpg", cat: "corporate" },
  { t: "Karaoke, DJ & dance", s: "Music directors, singers & celebrity guests", img: "07_DJ_and_Dance/private-dj-dance-1.jpg", cat: "dj" }
];
