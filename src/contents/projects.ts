export type Details = { label: string; items: string[] }[];
export type Pair = { title: string; sub: string; shipped: string; concept: string };
export type GalleryItem = { name: string; label: string; text: string; img: string };

export type Section = { title: string; sub?: string; subM?: string } & (
  | { kind: "flow"; img: string; alt: string; width: number }
  | { kind: "panel"; img: string; alt: string }
  | { kind: "two"; images: { img: string; alt: string }[] }
  | { kind: "phones"; imgs: string[]; alt: string; phones: { img: string; alt: string }[] }
  | { kind: "pairs"; pairs: Pair[] }
  | { kind: "triple"; items: { img: string; title: string; text: string }[] }
  | { kind: "gallery"; cols?: 1 | 2; items: GalleryItem[] }
);

export type Project = {
  slug: string;
  name: string;
  summary: string;
  cardTags: string[];
  cardAlt: string;
  concept?: boolean;
  /** Personal projects page through each other, separately from client work. */
  personal?: boolean;
  story: string[];
  details: Details;
  sections: Section[];
  measures?: string[];
};

const phones = (prefix: string, names: [string, string][]) =>
  names.map(([img, alt]) => ({ img: `${prefix}-${img}`, alt }));

export const projects: Project[] = [
  {
    slug: "brooky",
    name: "Brooky",
    summary:
      "A connected real-estate platform where inventory, buyers, reservations, documents and payments finally live together, for developers, agents and buyers.",
    cardTags: ["Web design"],
    cardAlt: "Brooky dashboard open on a laptop standing on a shelf.",
    concept: true,
    story: [
      "Sales teams coordinated changing inventory, buyer details, computations, reservations, documents and payments through spreadsheets, messages and paper forms. With several people on one transaction, a small gap could slow a sale or confuse a unit’s status.",
      "I mapped the whole transaction before designing screens, then shaped three experiences around one source of truth. This 2026 version keeps what worked in the shipped product and goes further, with ranked tasks, live status, and a full buyer journey through to turnover.",
    ],
    details: [
      { label: "Role", items: ["Product design", "User flows", "Web app", "Mobile"] },
      { label: "Period", items: ["Aug 2022 to Mar 2024"] },
    ],
    sections: [
      {
        kind: "flow",
        title: "How a unit gets reserved",
        sub: "One agent’s path from opening the inventory to a sold unit, with every branch along the way.",
        subM: "The key path, from a free unit to a reservation.",
        img: "brooky-flow",
        width: 1152,
        alt: "User flow for reserving a unit: an agent checks availability and places a hold, the buyer fills in details and signs, documents are reviewed, and the unit ends sold or back on the market.",
      },
      {
        kind: "panel",
        title: "A calm start to the day",
        sub: "The numbers and chart from the shipped product stay, joined by tasks ranked by what could cost a unit.",
        img: "brooky-p-dashboard",
        alt: "Brooky dashboard with sales numbers, an earnings chart and a ranked list of tasks.",
      },
      {
        kind: "two",
        title: "From project to unit",
        sub: "Photos and availability for each project, then a live map where every unit names its status.",
        images: [
          { img: "brooky-p-projects", alt: "Projects screen with photos and availability for each project." },
          { img: "brooky-p-inventory", alt: "Inventory map where each unit shows Available, Hold, Reserved or Sold." },
        ],
      },
      {
        kind: "two",
        title: "From offer to reservation",
        sub: "A computation that adds up as you go, and a form that keeps the deadline in view.",
        images: [
          { img: "brooky-p-computation", alt: "Computation screen with payment terms that total as they change." },
          { img: "brooky-p-reservation", alt: "Reservation form with the hold deadline kept in view." },
        ],
      },
      {
        kind: "two",
        title: "Every buyer, every step",
        sub: "See who’s stuck and why, down to one document, with one clear next step.",
        images: [
          { img: "brooky-p-buyers", alt: "Buyers list showing each buyer’s unit, stage and owner." },
          { img: "brooky-p-transaction", alt: "Transaction timeline for one buyer with the next step highlighted." },
        ],
      },
      {
        kind: "two",
        title: "The full picture for admins",
        sub: "A queue for approving work, and a project view for sharing availability.",
        images: [
          { img: "brooky-p-admin", alt: "Admin approval queue." },
          { img: "brooky-p-project-detail", alt: "Project detail view with availability to share." },
        ],
      },
      {
        kind: "panel",
        title: "Money, in one place",
        sub: "A statement of account that buyers and admins can both trust.",
        img: "brooky-p-statement",
        alt: "Statement of account listing payments and balances.",
      },
      {
        kind: "phones",
        title: "On the move",
        sub: "Agents can hold and reserve from a site visit. Buyers can follow progress and upload documents from their phone.",
        imgs: ["brooky-p-mobile-1", "brooky-p-mobile-2"],
        alt: "Four Brooky mobile screens: agent today, inventory, buyer progress and buyer upload.",
        phones: phones("phone-brooky", [
          ["today", "Agent’s today screen."],
          ["inventory", "Mobile inventory."],
          ["progress", "Buyer progress."],
          ["upload", "Buyer document upload."],
        ]),
      },
      {
        kind: "pairs",
        title: "What shipped, and what changed",
        sub: "The first image of each pair is the real shipped screen. The second is the 2026 concept.",
        subM: "Each pair shows the shipped screen first, then the 2026 concept.",
        pairs: [
          { title: "Also says what to do next", sub: "I kept the chart and numbers, and added tasks ranked by what could cost a unit.", shipped: "brooky-ba1-shipped", concept: "brooky-ba1-concept" },
          { title: "Status you can read at a glance", sub: "Similar blues carried the meaning. Each unit now names its status and who holds it.", shipped: "brooky-ba2-shipped", concept: "brooky-ba2-concept" },
          { title: "Buyers with progress", sub: "The list stopped at contact details. Each row now shows the unit, stage and owner.", shipped: "brooky-ba3-shipped", concept: "brooky-ba3-concept" },
        ],
      },
    ],
    measures: ["Holds that end without a reservation", "Time from hold to signed reservation", "Documents rejected on first upload"],
  },
  {
    slug: "venue4use",
    name: "Venue4Use",
    summary:
      "A mobile marketplace that helps organizers go from a broad venue search to a confident booking, and gives venue owners a better way to show their spaces.",
    cardTags: ["Web design", "Mobile app"],
    cardAlt: "A hand holding a phone showing the Venue4Use home screen.",
    concept: true,
    story: [
      "Organizers searched different websites, contacted venues one by one, compared incomplete information and waited for replies. Every event brought a new mix of capacity, location, budget and availability.",
      "I structured the product around the questions organizers ask in order, then designed the owner side so every inquiry arrives with what’s needed to answer. This 2026 version builds on what shipped, with a fuller journey from first search to post-event review.",
    ],
    details: [
      { label: "Role", items: ["UX research", "User flows", "Mobile UI", "Prototyping"] },
      { label: "Client", items: ["SoftCode 365, Singapore"] },
    ],
    sections: [
      {
        kind: "flow",
        title: "How a venue gets booked",
        sub: "An organizer and a venue owner, from the first search to a confirmed booking.",
        subM: "The key path, between an organizer and a venue owner.",
        img: "v4u-flow",
        width: 1152,
        alt: "User flow across an organizer and a venue owner, from opening the app through inquiry, price confirmation, deposit and the event.",
      },
      {
        kind: "phones",
        title: "Find the right space",
        sub: "Start from the event, not an endless directory. Search, map and filters narrow things down fast.",
        imgs: ["v4u-p-find-1", "v4u-p-find-2"],
        alt: "Five screens: welcome, explore, results, map and filters.",
        phones: phones("phone-v4u", [["welcome", "Welcome."], ["explore", "Explore."], ["results", "Results."], ["map", "Map."], ["filters", "Filters."]]),
      },
      {
        kind: "phones",
        title: "Decide with confidence",
        sub: "Fit, cost, photos and reviews, all before any commitment. Compare turns saving into deciding.",
        imgs: ["v4u-p-decide-1", "v4u-p-decide-2"],
        alt: "Six screens: detail, gallery, reviews, availability, saved and compare.",
        phones: phones("phone-v4u", [["detail", "Venue detail."], ["gallery", "Gallery."], ["reviews", "Reviews."], ["availability", "Availability."], ["saved", "Saved."], ["compare", "Compare."]]),
      },
      {
        kind: "phones",
        title: "Book without the back and forth",
        sub: "Event details go with the inquiry, the price is agreed in chat, and booking takes one clear step.",
        imgs: ["v4u-p-book-1", "v4u-p-book-2"],
        alt: "Five screens: inquiry, inquiries, chat, booking and confirmed.",
        phones: phones("phone-v4u", [["inquiry", "Inquiry."], ["inquiries", "Inquiries."], ["chat", "Chat."], ["booking", "Booking."], ["confirmed", "Confirmed."]]),
      },
      {
        kind: "phones",
        title: "Tools for venue owners",
        sub: "Listing a venue, seeing the month, answering inquiries and managing the calendar.",
        imgs: ["v4u-p-owners-1", "v4u-p-owners-2"],
        alt: "Four owner screens: add venue, today, inquiries and calendar.",
        phones: phones("phone-v4u", [["owner-add", "Add a venue."], ["owner-today", "Owner’s today."], ["owner-inquiries", "Owner inquiries."], ["owner-calendar", "Owner calendar."]]),
      },
      {
        kind: "triple",
        title: "What shipped, and what changed",
        sub: "The left of each pair is the real shipped screen. The right is the 2026 concept.",
        items: [
          { img: "v4u-ba1", title: "See fit before scrolling", text: "Availability and an estimated total now lead each card." },
          { img: "v4u-ba2", title: "Make the next step obvious", text: "“Inquire” no longer reads as disabled, and the price stays visible." },
          { img: "v4u-ba3", title: "Turn saving into deciding", text: "Compare puts cost, capacity and availability side by side." },
        ],
      },
    ],
    measures: ["Inquiries sent with complete details", "Time to an owner’s first reply", "Inquiries that become bookings"],
  },
  {
    slug: "blazesoft",
    name: "Blazesoft",
    summary:
      "Responsive partner experiences that turn complex gaming ecosystems into clear, engaging journeys, from first impression to discovery, reward and return.",
    cardTags: ["Landing pages"],
    cardAlt: "Five Blazesoft partner brand landing pages layered in a fan, with Fortune Wins in front.",
    story: [
      "Each partner needed a distinct personality, but every page still had to make dense game catalogs, rewards, promotions, trust signals and compliance content understandable. The shared approach combines scalable page patterns with enough visual freedom for every brand to feel like its own.",
    ],
    details: [
      { label: "Role", items: ["UI/UX", "Responsive web"] },
      { label: "Market", items: ["Canada, current client"] },
    ],
    sections: [
      {
        kind: "gallery",
        cols: 2,
        title: "Eight personalities, one foundation",
        items: [
          { name: "Luck Party", label: "Electric social casino", text: "A bright, character-led page balancing game discovery, rewards, trust and repeat play.", img: "blazesoft-p-luck-party" },
          { name: "Fortune Wins", label: "Premium fantasy", text: "A luxurious expression with rich storytelling and a clear path from discovery to play.", img: "blazesoft-p-fortune-wins" },
          { name: "Albumza", label: "Collect and play", text: "Explains a new reward mechanic through a simple, visual step-by-step journey.", img: "blazesoft-p-albumza" },
          { name: "Win Bonanza", label: "Neon entertainment", text: "Combines social proof, promotions, game providers and responsible-play information.", img: "blazesoft-p-win-bonanza" },
          { name: "Yay! Casino", label: "Comic-book energy", text: "A playful system that keeps a dense catalog, jackpots and referrals easy to scan.", img: "blazesoft-p-yay-casino" },
          { name: "American Luck", label: "Bold Americana", text: "Strong brand storytelling and modular promotions across a long-form page.", img: "blazesoft-p-american-luck" },
          { name: "Zula Casino", label: "High-energy discovery", text: "A catalog-first page connecting games, social rewards, referrals and jackpots.", img: "blazesoft-p-zula-casino" },
          { name: "Sportzino", label: "Sportsbook crossover", text: "Brings social casino, sports predictions, events and compliance into one journey.", img: "blazesoft-p-sportzino" },
        ],
      },
    ],
  },
  {
    slug: "kuhit",
    personal: true,
    name: "Kuhit",
    summary:
      "A Bisaya app for giving people nearby a friendly poke. A fresh selfie every day, and nobody can chat until both people kuhit each other.",
    cardTags: ["Mobile app"],
    cardAlt: "Two phones showing Kuhit: the welcome screen, and the sheet for choosing a friendly or crush kuhit.",
    story: [
      "“Kuhit” is Bisaya for a light poke on the shoulder, the move you make when you want someone’s attention without making a scene. Meeting new people is hard, especially when you’re shy, and most apps are swipe-heavy and full of old photos. Kuhit keeps it local, playful and low pressure.",
    ],
    details: [
      { label: "Role", items: ["Product design", "Design system"] },
      { label: "Market", items: ["Cagayan de Oro, Philippines"] },
    ],
    sections: [
      {
        kind: "gallery",
        cols: 2,
        title: "A poke first, a hello later",
        items: [
          { name: "Today’s selfie", label: "Fresh every day", text: "One new selfie a day, gone in 24 hours and blurred to others until a mutual kuhit.", img: "kuhit-p-selfie" },
          { name: "Nearby", label: "Five kuhits a day", text: "People close by right now, each with a short status, and a daily limit that keeps every kuhit meaningful.", img: "kuhit-p-nearby" },
          { name: "Send a kuhit", label: "Friendly or Crush", text: "Two kinds of kuhit make intent clear up front, and keep the app useful for people who only want friends.", img: "kuhit-p-send" },
          { name: "Kuhits", label: "Who stays hidden", text: "You see the kind of kuhit and how far away they are, but never who sent it until you kuhit back.", img: "kuhit-p-kuhits" },
          { name: "It’s a match", label: "The reveal", text: "Selfies stay blurred until both people kuhit. Nobody ever sees who turned them down.", img: "kuhit-p-match" },
          { name: "Chat", label: "Only for matches", text: "Only mutual matches can message, with block and report built in.", img: "kuhit-p-chat" },
        ],
      },
    ],
  },
  {
    slug: "homure",
    personal: true,
    name: "Homure",
    summary:
      "A Philippine property marketplace where buyers find verified brokers and salespersons, and professionals manage every listing, inquiry and follow-up in one place.",
    cardTags: ["Web design", "Mobile app"],
    cardAlt: "Homure on two devices on a dark wooden desk: the home page on a laptop, and a property page on a phone in front of it.",
    story: [
      "In the Philippines, every property sale starts with “Available pa po?”, and too many end there. Buyers wait on replies and can’t tell a licensed professional from a copied listing, while professionals answer the same question all day. Homure makes that first message one trusted conversation.",
    ],
    details: [
      { label: "Role", items: ["Product design", "Team lead", "Frontend"] },
      { label: "Market", items: ["Philippines"] },
    ],
    sections: [
      {
        kind: "gallery",
        cols: 1,
        title: "One conversation, start to close",
        items: [
          { name: "Search", label: "Find it on a map", text: "Buyers search by place, type and price, on a list or a map.", img: "homure-p-search" },
          { name: "Property", label: "Trust shown, not claimed", text: "Professionals verify their PRC credentials once, and the Verified seal is the only blue on a listing.", img: "homure-p-property" },
          { name: "Messages", label: "Tied to the listing", text: "Every conversation is about a property, so a professional always knows which listing and which buyer.", img: "homure-p-messages" },
          { name: "Leads", label: "A real pipeline", text: "From new inquiry to closed, with saved replies and follow-ups the professional controls.", img: "homure-p-leads" },
        ],
      },
    ],
  },
];

export const covers: Record<string, string> = { brooky: "cover-brooky", venue4use: "cover-v4u", blazesoft: "cover-blazesoft", kuhit: "cover-kuhit", homure: "cover-homure" };

/** Personal projects are hidden for now. Set to true to bring Kuhit and Homure back. */
export const showPersonal = false;
export const liveProjects = projects.filter((p) => showPersonal || !p.personal);

export const bySlug = (slug: string) => liveProjects.find((p) => p.slug === slug);

export const history = [
  ["exp-blazesoft", "UI/UX Designer", "at Blazesoft, Canada", "Feb 2025 - Present"],
  ["exp-softcode", "UI/UX Designer", "at SoftCode 365, Singapore", "May 2024 - Dec 2024"],
  ["exp-brooky", "UI/UX and Creative Designer", "at Brooky Technologies, Philippines", "Aug 2022 - Mar 2024"],
  ["exp-ck", "Quality Assurance Specialist", "at CK Children’s Publishing, Philippines", "Apr 2022 - Jun 2022"],
  ["exp-brooky", "UI/UX and Creative Designer Intern", "at Brooky Technologies, Philippines", "Feb 2022 - Jun 2022"],
  ["exp-fulcrum", "Layout Artist", "at Fulcrum Advertising", "2018 - 2019"],
];

export const principles = [
  ["UX research", "I dig into the users, the flows and the business behind the request, so the work starts with the real problem and not just the next feature on the list."],
  ["Prototyping", "Clickable flows give everyone something real to react to early on, so the useful conversations happen before anything is expensive to change."],
  ["UI design", "Web apps, mobile apps and landing pages, with the details that make the experience feel inevitable, not decorated."],
  ["Design systems", "Reusable components and clear rules, so your team can keep shipping new screens that still feel like one product."],
];

export const contact = {
  email: "redeemerolaivar03@gmail.com",
  phone: "+639616884863",
  phoneLabel: "+63 961 688 4863",
  linkedin: "https://www.linkedin.com/in/redeemer-olaivar-9a59b3156",
};
