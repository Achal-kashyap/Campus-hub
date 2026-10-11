/**
 * CampusPulse — Smart Campus Resource & Event Coordination Hub
 * Pure Vanilla JavaScript SPA • Golden Noir Engine • Offline-First
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INITIAL SEED DATA (25+ REALISTIC CAMPUS OPPORTUNITIES)
     ========================================================================== */
  const SEED_CAMPUS_ITEMS = [
    {
      id: "cp-1",
      title: "AI & Robotics 36-Hour Hackathon 2026",
      category: "Tech",
      type: "event",
      date: "2026-10-17",
      time: "9:00 AM – Sunday 9:00 PM",
      venue: "Turing Engineering Hall & Robotics Lab B",
      organizer: "Robotics & Artificial Intelligence Society",
      description: "Build cutting-edge autonomous agents and robotics control pipelines with peer developers. Includes hardware components, GPU cloud vouchers, hardware mentors, and $6,000 in sponsor prize pools. Open to all majors and experience levels.",
      tags: ["hackathon", "robotics", "ai", "hardware", "prizes", "free-meals"],
      popularity: 98,
      seats: 120,
      rsvpd: false,
      contact: "hackathon@campus.edu",
      details: "Hardware kits will be provided on Saturday morning. Bring your student ID, laptop, and charger. Catered meals and midnight coffee will be provided."
    },
    {
      id: "cp-2",
      title: "Undergraduate Quantum Lab Fellowship Grant",
      category: "Scholarships",
      type: "resource",
      date: "2026-10-25",
      time: "Application Closes 11:59 PM",
      venue: "Physics & Nanotechnology Complex 401",
      organizer: "National Science Foundation Campus Chapter",
      description: "Direct faculty-mentored lab placement offering $4,500 semester stipends for research in quantum error mitigation, photonics, and solid-state materials. No prior publication history required.",
      tags: ["fellowship", "physics", "stipend", "quantum", "undergrad-research"],
      popularity: 94,
      seats: 15,
      rsvpd: false,
      contact: "quantum-grants@campus.edu",
      details: "Open to sophomores and juniors with a passion for experimental physics. Prepare your CV and a 1-page statement of research interest."
    },
    {
      id: "cp-3",
      title: "Big Tech & Fintech Fall Career Symposium",
      category: "Career",
      type: "event",
      date: "2026-10-15",
      time: "1:00 PM – 5:30 PM",
      venue: "Campus Grand Alumni Ballroom",
      organizer: "University Career Development Center",
      description: "Connect with 45+ premier employers recruiting for Summer 2027 software engineering, product management, data science, and quantitative finance internships. Free professional headshots provided.",
      tags: ["career-fair", "internships", "interviews", "networking", "headshots"],
      popularity: 96,
      seats: 400,
      rsvpd: false,
      contact: "careers@campus.edu",
      details: "Business casual attire recommended. Digital resume uploads will be sent directly to recruiter iPads during the event."
    },
    {
      id: "cp-4",
      title: "Midnight Deep-Work Study Lounge & Espresso Bar",
      category: "Study Groups",
      type: "resource",
      date: "2026-10-12",
      time: "Open 8:00 PM – 4:00 AM Daily",
      venue: "Science Library 3rd Floor East Wing",
      organizer: "University Library Student Advisory",
      description: "Silent study zones with ergonomic monitor desks, noise-canceling headphone rentals, whiteboards, and complimentary pour-over espresso during midterm examination cycles.",
      tags: ["study-lounge", "espresso", "silent-floor", "monitors", "midterms"],
      popularity: 91,
      seats: "Walk-in Open",
      rsvpd: false,
      contact: "library@campus.edu",
      details: "Swipe access with student ID. Whiteboard markers and USB-C monitors available at the help desk."
    },
    {
      id: "cp-5",
      title: "Biomedical Systems & CRISPR Journal Club",
      category: "Academic",
      type: "event",
      date: "2026-10-14",
      time: "5:00 PM – 6:30 PM",
      venue: "Life Sciences Center Room 112",
      organizer: "Bioengineering Undergraduate Society",
      description: "Weekly interactive paper teardown discussing breakthrough in vivo gene delivery and cellular therapeutics. Post-doc guest speakers facilitate breakdown of Nature/Cell publications.",
      tags: ["biology", "crispr", "genetics", "journal-club", "grad-prep"],
      popularity: 84,
      seats: 35,
      rsvpd: false,
      contact: "biosociety@campus.edu",
      details: "Read the preprint distributed via our digest before arriving. Pizza and refreshments provided."
    },
    {
      id: "cp-6",
      title: "Campus Wellness Sound Bath & Guided Meditation",
      category: "Wellness",
      type: "event",
      date: "2026-10-16",
      time: "6:30 PM – 7:45 PM",
      venue: "Recreation Center Studio 4",
      organizer: "Student Mental Health & Mindfulness Guild",
      description: "De-stress from midterm pressure with certified sound therapist instruments, Tibetan singing bowls, and focused breathing techniques. Yoga mats and eye cushions provided.",
      tags: ["wellness", "meditation", "mental-health", "destress", "yoga"],
      popularity: 88,
      seats: 40,
      rsvpd: false,
      contact: "mindful@campus.edu",
      details: "Wear comfortable attire. Shoes are removed at the studio entrance. Arrive 10 minutes early."
    },
    {
      id: "cp-7",
      title: "Algorithmic Trading & High-Frequency Systems Workshop",
      category: "Tech",
      type: "event",
      date: "2026-10-21",
      time: "6:00 PM – 8:00 PM",
      venue: "Finance Lab B, Business School",
      organizer: "Quantitative Trading & Alpha Guild",
      description: "Hands-on session building low-latency order book simulation in C++ and Python backtesting tools. Review historical market microstructure and execution strategies with industry quants.",
      tags: ["quant", "trading", "python", "cpp", "algorithms", "finance"],
      popularity: 93,
      seats: 50,
      rsvpd: false,
      contact: "quant@campus.edu",
      details: "Bring a laptop with Python 3.11+ installed. Repository template provided at start of workshop."
    },
    {
      id: "cp-8",
      title: "Pre-Law Mock Trial Championship Prep",
      category: "Clubs",
      type: "event",
      date: "2026-10-19",
      time: "7:00 PM – 9:00 PM",
      venue: "Law School Moot Court Room 101",
      organizer: "Undergraduate Mock Trial Association",
      description: "Intensive courtroom argument practice covering cross-examinations, witness credibility, and federal rules of evidence. Guest critique by practicing trial attorneys.",
      tags: ["pre-law", "mock-trial", "public-speaking", "advocacy", "debate"],
      popularity: 79,
      seats: 30,
      rsvpd: false,
      contact: "mocktrial@campus.edu",
      details: "Observers and prospective new club members welcome. Case brief packet handed out at the door."
    },
    {
      id: "cp-9",
      title: "3D Printing & Laser Cutter Rapid Prototyping Certification",
      category: "Resources",
      type: "resource",
      date: "2026-10-13",
      time: "2:00 PM – 4:00 PM (Every Tue & Thu)",
      venue: "Campus MakerSpace, Engineering Hub Ground Floor",
      organizer: "MakerSpace Innovation Staff",
      description: "Get trained and licensed to operate industrial resin 3D printers, CNC routers, and high-precision laser cutters for class projects or personal design endeavors.",
      tags: ["makerspace", "3d-printing", "laser-cutter", "certification", "prototyping"],
      popularity: 92,
      seats: 12,
      rsvpd: false,
      contact: "makerspace@campus.edu",
      details: "Closed-toe shoes and safety glasses mandatory. Filament and sheet acrylic provided for certification sample piece."
    },
    {
      id: "cp-10",
      title: "First-Gen College Student Mentorship Network",
      category: "Academic",
      type: "resource",
      date: "2026-10-18",
      time: "4:00 PM – 5:30 PM",
      venue: "Student Success Center Multi-Purpose Hall",
      organizer: "Office of Inclusive Student Excellence",
      description: "Pairing first-generation undergraduate students with graduate mentors, alumni, and campus leadership to navigate university bureaucracy, research opportunities, and career mapping.",
      tags: ["first-gen", "mentorship", "community", "academic-support", "equity"],
      popularity: 87,
      seats: 60,
      rsvpd: false,
      contact: "firstgen@campus.edu",
      details: "Snacks, beverage bar, and peer community directory distribution. All class years welcome."
    },
    {
      id: "cp-11",
      title: "Women in Cybersecurity (WiCyS) Threat Hunting Seminar",
      category: "Tech",
      type: "event",
      date: "2026-10-22",
      time: "5:30 PM – 7:30 PM",
      venue: "Cyber Defense Sandbox & Cyber Range",
      organizer: "Women in Cybersecurity Student Chapter",
      description: "Hands-on capture-the-flag (CTF) challenges exploring memory forensics, reverse engineering malicious payloads, and identifying zero-day vulnerability signatures.",
      tags: ["cybersecurity", "infosec", "wicys", "ctf", "forensics", "women-in-stem"],
      popularity: 90,
      seats: 45,
      rsvpd: false,
      contact: "wicys@campus.edu",
      details: "Beginner friendly walkthrough followed by intermediate challenge levels. Virtual machine environment provided."
    },
    {
      id: "cp-12",
      title: "Study Abroad & Global Exchange Grant Information Session",
      category: "Scholarships",
      type: "event",
      date: "2026-10-24",
      time: "3:00 PM – 4:30 PM",
      venue: "International Affairs Building Auditorium",
      organizer: "Global Education & Study Abroad Bureau",
      description: "Learn how to secure up to $8,000 in need-based and merit travel stipends for semester exchanges in Tokyo, Zurich, London, Singapore, and Berlin for Fall 2027.",
      tags: ["study-abroad", "travel-grants", "global-exchange", "scholarships"],
      popularity: 89,
      seats: 80,
      rsvpd: false,
      contact: "studyabroad@campus.edu",
      details: "Passport assistance and credit transfer guidance counselors on site. Application waivers available."
    },
    {
      id: "cp-13",
      title: "Solar Car Engineering Telemetry & Aerodynamics Review",
      category: "Clubs",
      type: "event",
      date: "2026-10-20",
      time: "6:00 PM – 8:00 PM",
      venue: "Automotive Hangar Bay 2",
      organizer: "Solar Racing Collegiate Team",
      description: "Deep dive into computational fluid dynamics (CFD) airflow simulations and real-time battery thermal management telemetry for our World Solar Challenge vehicle.",
      tags: ["solar-car", "ev", "aerodynamics", "cfd", "motorsports", "mechanical"],
      popularity: 86,
      seats: 30,
      rsvpd: false,
      contact: "solarracing@campus.edu",
      details: "Walkaround of our actual carbon fiber chassis. Recruiting mechanical, electrical, and software subteams."
    },
    {
      id: "cp-14",
      title: "Organic Chemistry 2 Peer-Led Problem Solving Clinic",
      category: "Study Groups",
      type: "event",
      date: "2026-10-15",
      time: "7:00 PM – 9:00 PM",
      venue: "Chemistry Annex Room 204",
      organizer: "Pre-Health Chemistry Collaborative",
      description: "Collaborative reaction mechanism walkthroughs focusing on electrophilic aromatic substitution, carbonyl chemistry, and NMR retrosynthesis analysis ahead of Exam 2.",
      tags: ["ochem", "chemistry", "study-group", "pre-med", "peer-tutoring"],
      popularity: 95,
      seats: 50,
      rsvpd: false,
      contact: "ochem-help@campus.edu",
      details: "Bring your model kits and practice problem sets. High-scoring student TAs lead small break-out tables."
    },
    {
      id: "cp-15",
      title: "Campus Food Pantry & Community Grocery Hub",
      category: "Resources",
      type: "resource",
      date: "2026-10-11",
      time: "Monday – Friday 10:00 AM – 6:00 PM",
      venue: "Student Services Building Lower Level",
      organizer: "Basic Needs Student Coalition",
      description: "Confidential, barrier-free access to fresh produce, pantry essentials, toiletries, and meal prep kits for all enrolled undergraduate and graduate students.",
      tags: ["basic-needs", "food-pantry", "groceries", "student-support", "free"],
      popularity: 88,
      seats: "No RSVP Needed",
      rsvpd: false,
      contact: "pantry@campus.edu",
      details: "Bring your own reusable tote bag. No financial proof or income verification required; completely confidential."
    },
    {
      id: "cp-16",
      title: "Resume & Portfolio Teardown by Senior FAANG Designers",
      category: "Career",
      type: "event",
      date: "2026-10-23",
      time: "4:00 PM – 6:00 PM",
      venue: "Design & Media Arts Studio 3",
      organizer: "UX/UI Design Guild & Product Club",
      description: "1-on-1 critique sessions with lead product designers and engineers from Figma, Google, and Apple. Receive actionable feedback on your design case studies and technical resumes.",
      tags: ["ux-design", "portfolio-review", "resume-clinic", "product-design"],
      popularity: 97,
      seats: 25,
      rsvpd: false,
      contact: "designguild@campus.edu",
      details: "Bring a tablet or laptop with your portfolio website ready to present. 15-minute dedicated slots per student."
    },
    {
      id: "cp-17",
      title: "Therapy Dogs Stress-Relief Afternoon",
      category: "Wellness",
      type: "event",
      date: "2026-10-21",
      time: "1:30 PM – 4:00 PM",
      venue: "Central Campus Quad Lawn",
      organizer: "Campus Counseling & Psychological Services",
      description: "Spend time with certified gentle therapy golden retrievers, labs, and corgis outdoors in the sunshine. Take a break from screen fatigue and academic stress.",
      tags: ["dogs", "therapy-animals", "wellness", "outdoor", "destress"],
      popularity: 99,
      seats: "Open Quad Access",
      rsvpd: false,
      contact: "caps@campus.edu",
      details: "Lawn blankets provided. Allergen-friendly spaces available nearby."
    },
    {
      id: "cp-18",
      title: "Debate & Public Speaking Society Open Parliamentary Showcase",
      category: "Clubs",
      type: "event",
      date: "2026-10-27",
      time: "6:30 PM – 8:30 PM",
      venue: "Humanities Hall Auditorium 1",
      organizer: "Collegiate Parliamentary Debate League",
      description: "Watch varsity debate competitors spar on contemporary economic and geopolitical motions. Interactive impromptu round open for audience participation.",
      tags: ["debate", "public-speaking", "politics", "rhetoric", "philosophy"],
      popularity: 81,
      seats: 90,
      rsvpd: false,
      contact: "debate@campus.edu",
      details: "Light refreshments will be served during the audience Q&A session."
    },
    {
      id: "cp-19",
      title: "Graduate School Admissions & Fellowship Roadmap",
      category: "Academic",
      type: "event",
      date: "2026-10-26",
      time: "5:00 PM – 6:30 PM",
      venue: "Graduate Studies Hall Room 200",
      organizer: "Graduate Student Association & Faculty Panel",
      description: "Faculty admissions committee members demystify statement of purpose writing, letters of recommendation, GRE waivers, and securing fully funded PhD stipends.",
      tags: ["grad-school", "phd", "masters", "admissions", "funding"],
      popularity: 88,
      seats: 75,
      rsvpd: false,
      contact: "gradstudies@campus.edu",
      details: "PDF packet with sample winning statements of purpose provided to attendees."
    },
    {
      id: "cp-20",
      title: "Sustainable Agriculture & Campus Garden Volunteer Day",
      category: "Wellness",
      type: "event",
      date: "2026-10-18",
      time: "10:00 AM – 1:00 PM",
      venue: "Campus Rooftop Greenhouse & Community Garden",
      organizer: "Ecological Sustainability Initiative",
      description: "Hands-on gardening, composting techniques, and hydroponic tower maintenance. All harvested organic vegetables are donated directly to the Campus Food Pantry.",
      tags: ["sustainability", "gardening", "environment", "volunteer", "community"],
      popularity: 82,
      seats: 25,
      rsvpd: false,
      contact: "eco-garden@campus.edu",
      details: "Gardening gloves and tools supplied. Bring a water bottle and wear sun protection."
    },
    {
      id: "cp-21",
      title: "Neuroscience Brain Imaging & EEG Hands-on Demo",
      category: "Academic",
      type: "event",
      date: "2026-10-28",
      time: "4:00 PM – 5:30 PM",
      venue: "Cognitive Science Lab 304",
      organizer: "Cognitive Science & Neurobiology Association",
      description: "Live demonstration of 64-channel wireless EEG cap recording real-time event-related brain potentials (ERP) while subjects complete attention tasks. Data analysis in Python.",
      tags: ["neuroscience", "eeg", "brain", "data-science", "cognition"],
      popularity: 89,
      seats: 20,
      rsvpd: false,
      contact: "neuro@campus.edu",
      details: "One attendee will be randomly chosen to wear the cap for live spectral waveform demo."
    },
    {
      id: "cp-22",
      title: "Campus Legal Clinic for Student Renters & Leases",
      category: "Resources",
      type: "resource",
      date: "2026-10-14",
      time: "1:00 PM – 4:00 PM (Every Wednesday)",
      venue: "Student Legal Assistance Suite 210",
      organizer: "Student Legal Services",
      description: "Confidential free legal review of off-campus apartment leases, landlord security deposit disputes, tenant rights guidance, and sublease contract reviews by licensed staff attorneys.",
      tags: ["legal-help", "housing", "tenant-rights", "leases", "free-consultation"],
      popularity: 85,
      seats: 18,
      rsvpd: false,
      contact: "legal@campus.edu",
      details: "Bring a copy of your housing lease agreement or email communication with landlords."
    },
    {
      id: "cp-23",
      title: "Clean Energy & Battery Materials Pitch Competition",
      category: "Career",
      type: "event",
      date: "2026-10-29",
      time: "6:00 PM – 8:30 PM",
      venue: "Innovation Hub Stage",
      organizer: "Cleantech Venture Fund & Energy Institute",
      description: "Student startup teams present novel battery chemistry, solar grid software, and carbon capture solutions to venture capital judges. Winner receives $10,000 non-dilutive grant.",
      tags: ["entrepreneurship", "cleantech", "pitch-competition", "venture-capital"],
      popularity: 91,
      seats: 100,
      rsvpd: false,
      contact: "energyhub@campus.edu",
      details: "Audience choice vote award presented at conclusion of the night. Reception to follow."
    },
    {
      id: "cp-24",
      title: "Late-Night Calculus & Linear Algebra Cram Sessions",
      category: "Study Groups",
      type: "resource",
      date: "2026-10-13",
      time: "8:00 PM – 11:30 PM Daily",
      venue: "Math Building Commons Floor 1",
      organizer: "Department of Mathematics Tutoring Service",
      description: "TAs and high-achieving math undergrads available to assist with differential equations, multivariable calculus, proofs, and matrix diagonalization problem sets.",
      tags: ["math", "calculus", "linear-algebra", "tutoring", "study-group"],
      popularity: 93,
      seats: 60,
      rsvpd: false,
      contact: "mathtutors@campus.edu",
      details: "Walk-ins warmly welcome. Whiteboard problem walls available across the commons."
    },
    {
      id: "cp-25",
      title: "Fulbright & Rhodes Global Scholarship Masterclass",
      category: "Scholarships",
      type: "event",
      date: "2026-10-30",
      time: "5:00 PM – 7:00 PM",
      venue: "Honors College Hall 150",
      organizer: "Distinguished Fellowships Advising Office",
      description: "Detailed step-by-step masterclass by past Fulbright recipients and Rhodes scholars on essay development, institutional endorsements, and faculty recommendation strategies.",
      tags: ["fulbright", "rhodes", "prestigious-scholarships", "global-study"],
      popularity: 90,
      seats: 50,
      rsvpd: false,
      contact: "fellowships@campus.edu",
      details: "Open to sophomores, juniors, and seniors interested in funded international postgraduate study."
    }
  ];

  /* =========================================================
     2. APPLICATION STATE & STORAGE HELPERS
     ========================================================= */
  const STORAGE_KEYS = {
    THEME: "campuspulse_theme",
    BOOKMARKS: "campuspulse_bookmarks",
    SUBMISSIONS: "campuspulse_submissions",
    JOURNEY: "campuspulse_journey"
  };

  const state = {
    theme: "dark",
    currentRoute: "home",
    items: [],
    savedIds: new Set(),
    rsvpdIds: new Set(),
    userSubmissions: [],
    
    // Discover Filters
    discover: {
      search: "",
      category: "all",
      type: "all",
      thisWeekOnly: false,
      sort: "soonest",
      viewMode: "grid" // "grid" | "list"
    },

    // My Activities state
    activities: {
      tab: "saved", // "saved" | "upcoming" | "submitted"
      sort: "soonest"
    },

    // User Journey progress (4 stages)
    journey: {
      step1: true,  // Visited home
      step2: false, // Explored discover
      step3: false, // Saved an item
      step4: false  // Submitted an item
    },

    // Interactive Stepper
    stepperCurrent: 1,

    // Currently opened modal item
    modalItem: null
  };

  // Safe localStorage helper
  function safeStorageGet(key, defaultVal) {
    try {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : defaultVal;
    } catch (e) {
      console.warn("Storage read error for " + key, e);
      return defaultVal;
    }
  }

  function safeStorageSet(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn("Storage write error for " + key, e);
    }
  }

  // HTML entity escaper
  function escapeHTML(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* =========================================================
     3. THEME MANAGEMENT
     ========================================================= */
  function initTheme() {
    const saved = safeStorageGet(STORAGE_KEYS.THEME, null);
    if (saved === "light" || saved === "dark") {
      state.theme = saved;
    } else {
      // Check system preference
      const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
      state.theme = prefersLight ? "light" : "dark";
    }
    applyTheme();

    const toggleBtn = document.getElementById("themeToggleBtn");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        safeStorageSet(STORAGE_KEYS.THEME, state.theme);
        applyTheme();
        showToast(`Switched to ${state.theme === "dark" ? "Dark (Yellow on Black)" : "Light (Yellow on White)"} theme.`);
      });
    }
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", state.theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", state.theme === "dark" ? "#0A0A0A" : "#FFFEF7");
    }
  }

  /* =========================================================
     4. SPA HASH ROUTER
     ========================================================= */
  const VALID_ROUTES = ["home", "discover", "my-activities", "submit", "how-it-works", "about", "faq"];

  function initRouter() {
    window.addEventListener("hashchange", handleRouteChange);
    handleRouteChange();
  }

  function handleRouteChange() {
    let hash = window.location.hash.replace(/^#\/?/, "").toLowerCase().trim();
    if (!hash || !VALID_ROUTES.includes(hash)) {
      hash = "home";
      window.location.hash = "#/home";
      return;
    }

    state.currentRoute = hash;

    // Switch visible page section
    const pages = document.querySelectorAll(".page");
    pages.forEach(p => {
      p.classList.remove("active");
    });

    const targetPage = document.getElementById(`page-${hash}`);
    if (targetPage) {
      targetPage.classList.add("active");
      
      // Accessibility: focus page heading
      const heading = targetPage.querySelector("h1, h2");
      if (heading) {
        heading.setAttribute("tabindex", "-1");
        heading.focus();
      }
    }

    // Update active nav links
    updateNavActiveState(hash);

    // Update Document Title
    const titleMap = {
      home: "CampusPulse — Smart Campus Resource & Event Coordination Hub",
      discover: "Discover Campus Opportunities & Events | CampusPulse",
      "my-activities": "My Campus Activities Vault & Schedule | CampusPulse",
      submit: "Submit an Event or Resource | CampusPulse",
      "how-it-works": "How CampusPulse Works | CampusPulse",
      about: "About & Accessibility Mission | CampusPulse",
      faq: "Frequently Asked Questions | CampusPulse"
    };
    document.title = titleMap[hash] || "CampusPulse";

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Close mobile drawer if open
    closeMobileDrawer();

    // Route-specific triggers
    if (hash === "discover") {
      updateJourney(2);
      renderDiscoverPage();
    } else if (hash === "my-activities") {
      renderMyActivitiesPage();
    } else if (hash === "submit") {
      updateSubmitLivePreview();
    }
  }

  function updateNavActiveState(route) {
    // Desktop Nav
    const desktopLinks = document.querySelectorAll("#desktopNav .nav-link");
    desktopLinks.forEach(link => {
      const linkRoute = link.getAttribute("data-route");
      if (linkRoute === route) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Mobile Nav
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach(link => {
      const linkRoute = link.getAttribute("data-route");
      if (linkRoute === route) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  /* =========================================================
     5. TOAST NOTIFICATION SYSTEM
     ========================================================= */
  function showToast(message, type = "info", duration = 3600) {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.setAttribute("role", "status");

    toast.innerHTML = `
      <div class="toast-content">
        <svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span>${escapeHTML(message)}</span>
      </div>
      <button type="button" class="toast-close" aria-label="Close notification">&times;</button>
    `;

    const closeBtn = toast.querySelector(".toast-close");
    closeBtn.addEventListener("click", () => {
      removeToast(toast);
    });

    container.appendChild(toast);

    setTimeout(() => {
      removeToast(toast);
    }, duration);
  }

  function removeToast(toast) {
    if (!toast || !toast.parentNode) return;
    toast.classList.add("toast-exit");
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }

  /* =========================================================
     6. USER JOURNEY TRACKER
     ========================================================= */
  function initJourney() {
    const savedJourney = safeStorageGet(STORAGE_KEYS.JOURNEY, null);
    if (savedJourney) {
      state.journey = { ...state.journey, ...savedJourney };
    }
    renderJourneyDots();
  }

  function updateJourney(step) {
    if (step === 1) state.journey.step1 = true;
    if (step === 2) state.journey.step2 = true;
    if (step === 3) state.journey.step3 = true;
    if (step === 4) state.journey.step4 = true;
    safeStorageSet(STORAGE_KEYS.JOURNEY, state.journey);
    renderJourneyDots();
  }

  function renderJourneyDots() {
    const dots = document.querySelectorAll("#journeyDots .journey-dot");
    if (dots.length >= 4) {
      dots[0].classList.toggle("active", Boolean(state.journey.step1));
      dots[1].classList.toggle("active", Boolean(state.journey.step2));
      dots[2].classList.toggle("active", Boolean(state.journey.step3));
      dots[3].classList.toggle("active", Boolean(state.journey.step4));
    }
  }

  /* =========================================================
     7. DATA INITIALIZATION & BOOKMARK PERSISTENCE
     ========================================================= */
  function initData() {
    // Load Bookmarks
    const savedBookmarks = safeStorageGet(STORAGE_KEYS.BOOKMARKS, []);
    state.savedIds = new Set(savedBookmarks);

    // Load User Submissions
    const savedSubs = safeStorageGet(STORAGE_KEYS.SUBMISSIONS, []);
    state.userSubmissions = savedSubs;

    // Combine seed items with user submissions
    state.items = [...savedSubs, ...SEED_CAMPUS_ITEMS];

    updateSavedBadges();
  }

  function updateSavedBadges() {
    const count = state.savedIds.size;
    const desktopBadge = document.getElementById("navSavedBadge");
    const mobileBadge = document.getElementById("mobileNavSavedBadge");
    if (desktopBadge) desktopBadge.textContent = count;
    if (mobileBadge) mobileBadge.textContent = count;
  }

  function toggleBookmark(itemId) {
    const item = state.items.find(i => i.id === itemId);
    if (!item) return;

    if (state.savedIds.has(itemId)) {
      state.savedIds.delete(itemId);
      showToast(`Removed "${item.title.slice(0, 30)}..." from saved activities.`);
    } else {
      state.savedIds.add(itemId);
      updateJourney(3);
      showToast(`Saved "${item.title.slice(0, 30)}..." to My Activities.`);
    }

    safeStorageSet(STORAGE_KEYS.BOOKMARKS, Array.from(state.savedIds));
    updateSavedBadges();

    // Re-render current views
    if (state.currentRoute === "discover") {
      renderDiscoverCards();
    } else if (state.currentRoute === "my-activities") {
      renderMyActivitiesPage();
    }
    if (state.modalItem && state.modalItem.id === itemId) {
      updateModalBookmarkButton();
    }
  }

  /* =========================================================
     8. DISCOVER PAGE ENGINE (SEARCH, FILTER, SORT, VIEW)
     ========================================================= */
  function initDiscoverEvents() {
    // Search input with debounce
    const searchInput = document.getElementById("discoverSearchInput");
    const clearBtn = document.getElementById("searchClearBtn");
    let searchTimeout;

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value;
        if (clearBtn) clearBtn.style.display = query ? "block" : "none";

        searchTimeout = setTimeout(() => {
          state.discover.search = query.trim().toLowerCase();
          renderDiscoverCards();
        }, 180);
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (searchInput) {
          searchInput.value = "";
          searchInput.focus();
        }
        clearBtn.style.display = "none";
        state.discover.search = "";
        renderDiscoverCards();
      });
    }

    // Sort select
    const sortSelect = document.getElementById("discoverSortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        state.discover.sort = e.target.value;
        renderDiscoverCards();
      });
    }

    // Type segmented control
    const segButtons = document.querySelectorAll(".filter-sub-bar .seg-btn");
    segButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        segButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.discover.type = btn.getAttribute("data-type");
        renderDiscoverCards();
      });
    });

    // "This Week Only" checkbox
    const thisWeekCheckbox = document.getElementById("thisWeekCheckbox");
    if (thisWeekCheckbox) {
      thisWeekCheckbox.addEventListener("change", (e) => {
        state.discover.thisWeekOnly = e.target.checked;
        renderDiscoverCards();
      });
    }

    // View mode (Grid vs List)
    const btnGrid = document.getElementById("viewModeGrid");
    const btnList = document.getElementById("viewModeList");
    if (btnGrid && btnList) {
      btnGrid.addEventListener("click", () => {
        btnGrid.classList.add("active");
        btnList.classList.remove("active");
        state.discover.viewMode = "grid";
        applyViewMode();
      });
      btnList.addEventListener("click", () => {
        btnList.classList.add("active");
        btnGrid.classList.remove("active");
        state.discover.viewMode = "list";
        applyViewMode();
      });
    }

    // Reset filters buttons
    const clearFiltersBtn = document.getElementById("clearAllFiltersBtn");
    const emptyResetBtn = document.getElementById("emptyResetBtn");
    const resetAll = () => {
      state.discover.search = "";
      state.discover.category = "all";
      state.discover.type = "all";
      state.discover.thisWeekOnly = false;
      state.discover.sort = "soonest";

      if (searchInput) searchInput.value = "";
      if (clearBtn) clearBtn.style.display = "none";
      if (sortSelect) sortSelect.value = "soonest";
      if (thisWeekCheckbox) thisWeekCheckbox.checked = false;

      segButtons.forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-type") === "all");
      });

      renderDiscoverCategoryChips();
      renderDiscoverCards();
    };

    if (clearFiltersBtn) clearFiltersBtn.addEventListener("click", resetAll);
    if (emptyResetBtn) emptyResetBtn.addEventListener("click", resetAll);
  }

  function applyViewMode() {
    const grid = document.getElementById("discoverCardsGrid");
    if (!grid) return;
    if (state.discover.viewMode === "list") {
      grid.classList.add("list-view");
    } else {
      grid.classList.remove("list-view");
    }
  }

  function renderDiscoverPage() {
    renderDiscoverCategoryChips();
    renderDiscoverCards();
  }

  function renderDiscoverCategoryChips() {
    const container = document.getElementById("categoryChipsList");
    if (!container) return;

    const categories = [
      { id: "all", name: "All Opportunities" },
      { id: "Academic", name: "Academic" },
      { id: "Tech", name: "Tech & Coding" },
      { id: "Career", name: "Career & Internships" },
      { id: "Clubs", name: "Clubs & Orgs" },
      { id: "Wellness", name: "Wellness" },
      { id: "Scholarships", name: "Grants & Fellowships" },
      { id: "Study Groups", name: "Study Groups" },
      { id: "Resources", name: "Campus Services" }
    ];

    container.innerHTML = categories.map(cat => {
      let count = 0;
      if (cat.id === "all") {
        count = state.items.length;
      } else {
        count = state.items.filter(i => i.category.toLowerCase() === cat.id.toLowerCase()).length;
      }

      const isActive = state.discover.category.toLowerCase() === cat.id.toLowerCase();
      return `
        <button 
          type="button" 
          class="category-chip-btn ${isActive ? "active" : ""}" 
          data-category="${cat.id}"
          role="tab"
          aria-selected="${isActive ? "true" : "false"}"
        >
          <span>${cat.name}</span>
          <span class="chip-count">(${count})</span>
        </button>
      `;
    }).join("");

    const chipBtns = container.querySelectorAll(".category-chip-btn");
    chipBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        chipBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.discover.category = btn.getAttribute("data-category");
        renderDiscoverCards();
      });
    });
  }

  function isWithinThisWeek(dateStr) {
    if (!dateStr) return false;
    // For 2026 campus schedule, treat dates between 2026-10-10 and 2026-10-19 as "this week"
    try {
      const itemDate = new Date(dateStr);
      const minDate = new Date("2026-10-10");
      const maxDate = new Date("2026-10-19");
      return itemDate >= minDate && itemDate <= maxDate;
    } catch {
      return false;
    }
  }

  function getFilteredDiscoverItems() {
    let result = [...state.items];

    // Filter by category
    if (state.discover.category !== "all") {
      result = result.filter(item => 
        item.category.toLowerCase() === state.discover.category.toLowerCase()
      );
    }

    // Filter by type
    if (state.discover.type !== "all") {
      result = result.filter(item => 
        item.type.toLowerCase() === state.discover.type.toLowerCase()
      );
    }

    // Filter by this week
    if (state.discover.thisWeekOnly) {
      result = result.filter(item => isWithinThisWeek(item.date));
    }

    // Filter by search query
    if (state.discover.search) {
      const q = state.discover.search;
      result = result.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(q);
        const orgMatch = item.organizer.toLowerCase().includes(q);
        const venueMatch = item.venue.toLowerCase().includes(q);
        const descMatch = item.description.toLowerCase().includes(q);
        const tagMatch = item.tags && item.tags.some(t => t.toLowerCase().includes(q));
        return titleMatch || orgMatch || venueMatch || descMatch || tagMatch;
      });
    }

    // Sort results
    if (state.discover.sort === "soonest") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (state.discover.sort === "latest") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (state.discover.sort === "popular") {
      result.sort((a, b) => b.popularity - a.popularity);
    } else if (state.discover.sort === "alphabetical") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }

  function highlightText(text, query) {
    if (!query) return escapeHTML(text);
    const escapedText = escapeHTML(text);
    const escapedQuery = escapeHTML(query);
    const regex = new RegExp(`(${escapedQuery})`, "gi");
    return escapedText.replace(regex, '<mark class="search-highlight">$1</mark>');
  }

  function renderDiscoverCards() {
    const grid = document.getElementById("discoverCardsGrid");
    const countText = document.getElementById("resultsCountText");
    const emptyState = document.getElementById("discoverEmptyState");
    const clearBtn = document.getElementById("clearAllFiltersBtn");
    if (!grid) return;

    const items = getFilteredDiscoverItems();

    // Results count & reset button visibility
    const isFiltered = state.discover.search || state.discover.category !== "all" || state.discover.type !== "all" || state.discover.thisWeekOnly;
    if (clearBtn) clearBtn.style.display = isFiltered ? "inline-block" : "none";

    if (countText) {
      countText.innerHTML = `Showing <strong>${items.length}</strong> campus opportunities`;
    }

    if (items.length === 0) {
      grid.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    grid.innerHTML = items.map(item => createCardHTML(item, state.discover.search)).join("");

    attachCardEventListeners(grid);
    initTiltEffects();
  }

  function createCardHTML(item, searchQuery = "") {
    const isBookmarked = state.savedIds.has(item.id);
    const highlightedTitle = highlightText(item.title, searchQuery);
    const highlightedOrganizer = highlightText(item.organizer, searchQuery);
    const highlightedVenue = highlightText(item.venue, searchQuery);

    const isUserSubmitted = Boolean(item.userSubmitted);

    return `
      <article class="campus-card tilt-card" data-id="${item.id}" data-tilt>
        <div class="card-glare"></div>
        <div class="card-top-row">
          <div class="card-badges">
            <span class="badge-category">${escapeHTML(item.category)}</span>
            <span class="badge-type">${escapeHTML(item.type)}</span>
            ${isUserSubmitted ? '<span class="badge-type badge-user-submitted">Your Submission</span>' : ''}
          </div>
          <button 
            type="button" 
            class="bookmark-heart-btn ${isBookmarked ? "bookmarked" : ""}" 
            data-bookmark-id="${item.id}"
            aria-label="${isBookmarked ? "Remove from saved activities" : "Save to my activities"}"
            title="${isBookmarked ? "Bookmarked" : "Bookmark"}"
          >
            <svg viewBox="0 0 24 24" fill="${isBookmarked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>

        <h3 class="card-title">${highlightedTitle}</h3>
        
        <div class="card-organizer">
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
          </svg>
          <span>${highlightedOrganizer}</span>
        </div>

        <div class="card-meta-list">
          <div class="card-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span><strong>${escapeHTML(item.date)}</strong> &bull; ${escapeHTML(item.time)}</span>
          </div>

          <div class="card-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${highlightedVenue}</span>
          </div>
        </div>

        <p class="card-desc">${escapeHTML(item.description)}</p>

        <div class="card-tags">
          ${item.tags ? item.tags.slice(0, 4).map(t => `<span class="card-tag">#${escapeHTML(t)}</span>`).join("") : ""}
        </div>

        <div class="card-popularity-bar-wrap">
          <div class="popularity-meta">
            <span>POPULARITY PULSE</span>
            <span>${item.popularity}%</span>
          </div>
          <div class="popularity-track">
            <div class="popularity-fill" style="width: ${item.popularity}%;"></div>
          </div>
        </div>

        <div class="card-footer-actions">
          <button type="button" class="btn btn-secondary btn-sm view-details-btn" data-detail-id="${item.id}">
            <span>Inspect Details</span>
            <svg viewBox="0 0 20 20" fill="currentColor" class="btn-arrow-icon" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
            </svg>
          </button>
          
          <button type="button" class="btn-text-gold quick-rsvp-btn" data-rsvp-id="${item.id}">
            ${state.rsvpdIds.has(item.id) ? "Attending &#10003;" : "+ Fast RSVP"}
          </button>
        </div>
      </article>
    `;
  }

  function attachCardEventListeners(container) {
    // Bookmark hearts
    const bookmarkBtns = container.querySelectorAll(".bookmark-heart-btn");
    bookmarkBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-bookmark-id");
        toggleBookmark(id);
      });
    });

    // View details
    const detailBtns = container.querySelectorAll(".view-details-btn");
    detailBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-detail-id");
        openDetailModal(id);
      });
    });

    // Quick RSVP
    const rsvpBtns = container.querySelectorAll(".quick-rsvp-btn");
    rsvpBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-rsvp-id");
        toggleRSVP(id);
      });
    });

    // Card click opens detail modal
    const cards = container.querySelectorAll(".campus-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        openDetailModal(id);
      });
    });
  }

  function toggleRSVP(itemId) {
    const item = state.items.find(i => i.id === itemId);
    if (!item) return;

    if (state.rsvpdIds.has(itemId)) {
      state.rsvpdIds.delete(itemId);
      showToast(`Cancelled reservation for "${item.title.slice(0, 25)}..."`);
    } else {
      state.rsvpdIds.add(itemId);
      showToast(`Reservation confirmed for "${item.title.slice(0, 25)}..."!`);
      // Also automatically bookmark for convenience
      if (!state.savedIds.has(itemId)) {
        state.savedIds.add(itemId);
        safeStorageSet(STORAGE_KEYS.BOOKMARKS, Array.from(state.savedIds));
        updateSavedBadges();
      }
    }

    if (state.currentRoute === "discover") {
      renderDiscoverCards();
    } else if (state.currentRoute === "my-activities") {
      renderMyActivitiesPage();
    }
    if (state.modalItem && state.modalItem.id === itemId) {
      updateModalRSVPButton();
    }
  }

  /* =========================================================
     9. DETAIL MODAL DIALOG (FOCUS TRAP, ESC, SHARING)
     ========================================================= */
  let lastFocusedElement = null;

  function initDetailModal() {
    const backdrop = document.getElementById("detailModalBackdrop");
    const closeBtn = document.getElementById("modalCloseBtn");

    if (closeBtn) {
      closeBtn.addEventListener("click", closeDetailModal);
    }

    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeDetailModal();
      });
    }

    // Escape key closes modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && backdrop && backdrop.style.display !== "none") {
        closeDetailModal();
      }
    });
  }

  function openDetailModal(itemId) {
    const item = state.items.find(i => i.id === itemId);
    if (!item) return;

    state.modalItem = item;
    lastFocusedElement = document.activeElement;

    const backdrop = document.getElementById("detailModalBackdrop");
    const body = document.getElementById("modalDetailBody");
    if (!backdrop || !body) return;

    updateJourney(3);

    const isBookmarked = state.savedIds.has(item.id);
    const isRsvpd = state.rsvpdIds.has(item.id);

    // Find related items in same category
    const related = state.items
      .filter(i => i.id !== item.id && i.category === item.category)
      .slice(0, 2);

    body.innerHTML = `
      <div class="modal-category-strip">
        <span class="badge-category">${escapeHTML(item.category)}</span>
        <span class="badge-type">${escapeHTML(item.type)}</span>
        <span class="badge-type">${item.popularity}% Popularity</span>
      </div>

      <h2 class="modal-title" id="modalDetailTitle">${escapeHTML(item.title)}</h2>

      <div class="modal-organizer-row">
        <span>Organized by <strong>${escapeHTML(item.organizer)}</strong></span>
        <span>&bull;</span>
        <span>Contact: <a href="mailto:${escapeHTML(item.contact)}" class="btn-text-gold">${escapeHTML(item.contact)}</a></span>
      </div>

      <div class="modal-info-grid">
        <div class="modal-info-box">
          <span class="modal-info-lbl">Date & Schedule</span>
          <span class="modal-info-val">${escapeHTML(item.date)}</span>
          <span style="font-size:0.8rem; color:var(--color-text-muted);">${escapeHTML(item.time)}</span>
        </div>

        <div class="modal-info-box">
          <span class="modal-info-lbl">Campus Location</span>
          <span class="modal-info-val">${escapeHTML(item.venue)}</span>
        </div>

        <div class="modal-info-box">
          <span class="modal-info-lbl">Capacity / Seats</span>
          <span class="modal-info-val">${typeof item.seats === "number" ? item.seats + " Registered Seats" : escapeHTML(item.seats)}</span>
        </div>
      </div>

      <h3 class="modal-section-title">Overview</h3>
      <p class="modal-desc-full">${escapeHTML(item.description)}</p>

      <h3 class="modal-section-title">Preparation & Logistics</h3>
      <p class="modal-desc-full">${escapeHTML(item.details || "No special prerequisites required. Bring your student ID.")}</p>

      <div class="card-tags" style="margin-bottom:24px;">
        ${item.tags ? item.tags.map(t => `<span class="card-tag">#${escapeHTML(t)}</span>`).join("") : ""}
      </div>

      ${related.length > 0 ? `
        <h3 class="modal-section-title">Related In ${escapeHTML(item.category)}</h3>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:24px;">
          ${related.map(r => `
            <div class="related-card" style="background:var(--color-bg); padding:12px; border-radius:var(--radius-sm); border:1px solid var(--color-gold-border); cursor:pointer;" onclick="window.CampusPulse.openDetail('${r.id}')">
              <strong style="font-size:0.88rem; display:block; margin-bottom:4px;">${escapeHTML(r.title)}</strong>
              <span style="font-size:0.75rem; color:var(--color-text-muted);">${escapeHTML(r.date)} &bull; ${escapeHTML(r.venue)}</span>
            </div>
          `).join("")}
        </div>
      ` : ""}

      <div class="modal-actions-bar">
        <div class="modal-action-buttons">
          <button type="button" class="btn btn-primary" id="modalRsvpBtn">
            <span>${isRsvpd ? "Cancel RSVP" : "Confirm RSVP / Join"}</span>
          </button>
          
          <button type="button" class="btn btn-secondary" id="modalSaveBtn">
            <span>${isBookmarked ? "Saved in Activities &#10003;" : "Save to Activities"}</span>
          </button>

          <button type="button" class="btn btn-secondary" id="modalShareBtn" title="Copy opportunity link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon" aria-hidden="true">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
            <span>Share</span>
          </button>
        </div>

        <button type="button" class="btn-text-gold" id="modalCloseAction">Close</button>
      </div>
    `;

    // Attach actions
    const rsvpBtn = document.getElementById("modalRsvpBtn");
    if (rsvpBtn) {
      rsvpBtn.addEventListener("click", () => {
        toggleRSVP(item.id);
      });
    }

    const saveBtn = document.getElementById("modalSaveBtn");
    if (saveBtn) {
      saveBtn.addEventListener("click", () => {
        toggleBookmark(item.id);
      });
    }

    const shareBtn = document.getElementById("modalShareBtn");
    if (shareBtn) {
      shareBtn.addEventListener("click", () => {
        const shareUrl = `${window.location.origin}${window.location.pathname}#/discover`;
        const shareText = `Check out "${item.title}" on CampusPulse: ${shareUrl}`;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(shareText).then(() => {
            showToast("Copied opportunity summary to clipboard!");
          }).catch(() => {
            prompt("Copy event summary:", shareText);
          });
        } else {
          prompt("Copy event summary:", shareText);
        }
      });
    }

    const closeAction = document.getElementById("modalCloseAction");
    if (closeAction) closeAction.addEventListener("click", closeDetailModal);

    backdrop.style.display = "flex";
    backdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Focus close button for accessibility
    const closeBtn = document.getElementById("modalCloseBtn");
    if (closeBtn) closeBtn.focus();
  }

  function updateModalBookmarkButton() {
    const saveBtn = document.getElementById("modalSaveBtn");
    if (!saveBtn || !state.modalItem) return;
    const isBookmarked = state.savedIds.has(state.modalItem.id);
    saveBtn.innerHTML = `<span>${isBookmarked ? "Saved in Activities &#10003;" : "Save to Activities"}</span>`;
  }

  function updateModalRSVPButton() {
    const rsvpBtn = document.getElementById("modalRsvpBtn");
    if (!rsvpBtn || !state.modalItem) return;
    const isRsvpd = state.rsvpdIds.has(state.modalItem.id);
    rsvpBtn.innerHTML = `<span>${isRsvpd ? "Cancel RSVP" : "Confirm RSVP / Join"}</span>`;
  }

  function closeDetailModal() {
    const backdrop = document.getElementById("detailModalBackdrop");
    if (!backdrop) return;
    backdrop.style.display = "none";
    backdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    state.modalItem = null;

    if (lastFocusedElement && lastFocusedElement.focus) {
      lastFocusedElement.focus();
    }
  }

  /* =========================================================
     10. PAGE 3: MY ACTIVITIES (VAULT, STATS, CSS CHART, EXPORT)
     ========================================================= */
  function initMyActivitiesEvents() {
    // Tabs switching
    const tabSaved = document.getElementById("tabSaved");
    const tabUpcoming = document.getElementById("tabUpcoming");
    const tabSubmitted = document.getElementById("tabSubmitted");

    const tabs = [tabSaved, tabUpcoming, tabSubmitted];
    tabs.forEach(tab => {
      if (!tab) return;
      tab.addEventListener("click", () => {
        tabs.forEach(t => {
          if (t) {
            t.classList.remove("active");
            t.setAttribute("aria-selected", "false");
          }
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        state.activities.tab = tab.getAttribute("data-tab");
        renderMyActivitiesCards();
      });
    });

    // Activities sort select
    const sortSelect = document.getElementById("activitiesSortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        state.activities.sort = e.target.value;
        renderMyActivitiesCards();
      });
    }

    // Export Schedule (.txt Blob)
    const exportBtn = document.getElementById("exportScheduleBtn");
    if (exportBtn) {
      exportBtn.addEventListener("click", exportActivitiesSchedule);
    }

    // Clear all confirm modal triggers
    const clearBtn = document.getElementById("clearAllActivitiesBtn");
    const confirmModal = document.getElementById("confirmModalBackdrop");
    const cancelConfirmBtn = document.getElementById("confirmCancelBtn");
    const proceedConfirmBtn = document.getElementById("confirmProceedBtn");

    if (clearBtn && confirmModal) {
      clearBtn.addEventListener("click", () => {
        if (state.savedIds.size === 0) {
          showToast("Your saved activities vault is already empty.");
          return;
        }
        confirmModal.style.display = "flex";
      });
    }

    if (cancelConfirmBtn && confirmModal) {
      cancelConfirmBtn.addEventListener("click", () => {
        confirmModal.style.display = "none";
      });
    }

    if (proceedConfirmBtn && confirmModal) {
      proceedConfirmBtn.addEventListener("click", () => {
        state.savedIds.clear();
        safeStorageSet(STORAGE_KEYS.BOOKMARKS, []);
        updateSavedBadges();
        confirmModal.style.display = "none";
        showToast("Cleared all bookmarked activities.");
        renderMyActivitiesPage();
      });
    }
  }

  function renderMyActivitiesPage() {
    renderMyActivitiesStats();
    renderCSSCategoryBars();
    renderMyActivitiesCards();
  }

  function renderMyActivitiesStats() {
    const savedCount = state.savedIds.size;
    const savedItems = state.items.filter(i => state.savedIds.has(i.id));
    const upcomingCount = savedItems.filter(i => isWithinThisWeek(i.date)).length;
    const submittedCount = state.userSubmissions.length;

    const elSaved = document.getElementById("statsSavedCount");
    const elUpcoming = document.getElementById("statsUpcomingCount");
    const elSubmitted = document.getElementById("statsSubmittedCount");

    if (elSaved) elSaved.textContent = savedCount;
    if (elUpcoming) elUpcoming.textContent = upcomingCount;
    if (elSubmitted) elSubmitted.textContent = submittedCount;

    // Update tab counters
    const tabSavedCount = document.getElementById("tabSavedCount");
    const tabUpcomingCount = document.getElementById("tabUpcomingCount");
    const tabSubmittedCount = document.getElementById("tabSubmittedCount");

    if (tabSavedCount) tabSavedCount.textContent = savedCount;
    if (tabUpcomingCount) tabUpcomingCount.textContent = upcomingCount;
    if (tabSubmittedCount) tabSubmittedCount.textContent = submittedCount;
  }

  function renderCSSCategoryBars() {
    const container = document.getElementById("cssCategoryBarsContainer");
    const label = document.getElementById("chartTotalLabel");
    if (!container) return;

    const savedItems = state.items.filter(i => state.savedIds.has(i.id));
    if (label) label.textContent = `Based on ${savedItems.length} bookmarked opportunities`;

    if (savedItems.length === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:18px; color:var(--color-text-muted); font-size:0.9rem;">
          Bookmark events in Discover to visualize your semester category breakdown.
        </div>
      `;
      return;
    }

    // Tally categories
    const tallies = {};
    savedItems.forEach(item => {
      tallies[item.category] = (tallies[item.category] || 0) + 1;
    });

    const categories = Object.keys(tallies).sort((a, b) => tallies[b] - tallies[a]);

    container.innerHTML = categories.map(cat => {
      const count = tallies[cat];
      const pct = Math.round((count / savedItems.length) * 100);
      return `
        <div class="chart-bar-row">
          <span class="bar-label" title="${escapeHTML(cat)}">${escapeHTML(cat)}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${pct}%;"></div>
          </div>
          <span class="bar-value">${pct}% (${count})</span>
        </div>
      `;
    }).join("");
  }

  function renderMyActivitiesCards() {
    const container = document.getElementById("activitiesCardsContainer");
    const emptyState = document.getElementById("activitiesEmptyState");
    const emptyTitle = document.getElementById("activitiesEmptyTitle");
    const emptyDesc = document.getElementById("activitiesEmptyDesc");
    const emptyAction = document.getElementById("activitiesEmptyAction");
    if (!container) return;

    let items = [];
    if (state.activities.tab === "saved") {
      items = state.items.filter(i => state.savedIds.has(i.id));
    } else if (state.activities.tab === "upcoming") {
      items = state.items.filter(i => state.savedIds.has(i.id) && isWithinThisWeek(i.date));
    } else if (state.activities.tab === "submitted") {
      items = state.userSubmissions;
    }

    // Sort items
    if (state.activities.sort === "soonest") {
      items.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (state.activities.sort === "title") {
      items.sort((a, b) => a.title.localeCompare(b.title));
    } else if (state.activities.sort === "popular") {
      items.sort((a, b) => b.popularity - a.popularity);
    }

    if (items.length === 0) {
      container.innerHTML = "";
      if (emptyState) {
        emptyState.style.display = "block";
        if (state.activities.tab === "saved") {
          emptyTitle.textContent = "No Saved Activities Yet";
          emptyDesc.textContent = "You haven't bookmarked any events or study resources yet. Explore Discover to build your schedule.";
          emptyAction.textContent = "Browse Discover Hub";
          emptyAction.href = "#/discover";
        } else if (state.activities.tab === "upcoming") {
          emptyTitle.textContent = "No Activities Coming Up This Week";
          emptyDesc.textContent = "None of your currently saved items fall in the upcoming weekly timeline.";
          emptyAction.textContent = "Find Events This Week";
          emptyAction.href = "#/discover";
        } else if (state.activities.tab === "submitted") {
          emptyTitle.textContent = "No Opportunities Submitted Yet";
          emptyDesc.textContent = "You have not published any student events or resources yet. Have a club session or study group?";
          emptyAction.textContent = "Submit Your First Listing";
          emptyAction.href = "#/submit";
        }
      }
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    container.innerHTML = items.map(item => {
      const isSub = Boolean(item.userSubmitted);
      return `
        <article class="campus-card tilt-card" data-id="${item.id}" data-tilt>
          <div class="card-glare"></div>
          <div class="card-top-row">
            <div class="card-badges">
              <span class="badge-category">${escapeHTML(item.category)}</span>
              <span class="badge-type">${escapeHTML(item.type)}</span>
              ${isSub ? '<span class="badge-type badge-user-submitted">Author: You</span>' : ''}
            </div>

            ${isSub ? `
              <button type="button" class="btn-text-gold delete-sub-btn" data-delete-id="${item.id}" style="color:var(--color-danger);" title="Delete your submission">
                Delete
              </button>
            ` : `
              <button 
                type="button" 
                class="bookmark-heart-btn bookmarked" 
                data-bookmark-id="${item.id}"
                aria-label="Remove from saved activities"
                title="Remove from saved"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </button>
            `}
          </div>

          <h3 class="card-title">${escapeHTML(item.title)}</h3>
          <div class="card-organizer">${escapeHTML(item.organizer)}</div>

          <div class="card-meta-list">
            <div class="card-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span><strong>${escapeHTML(item.date)}</strong> &bull; ${escapeHTML(item.time)}</span>
            </div>

            <div class="card-meta-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${escapeHTML(item.venue)}</span>
            </div>
          </div>

          <p class="card-desc">${escapeHTML(item.description)}</p>

          <div class="card-footer-actions">
            <button type="button" class="btn btn-secondary btn-sm view-details-btn" data-detail-id="${item.id}">
              <span>Inspect Details</span>
            </button>

            ${state.rsvpdIds.has(item.id) ? `
              <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--color-gold-primary); font-weight:700;">RSVP CONFIRMED &#10003;</span>
            ` : ""}
          </div>
        </article>
      `;
    }).join("");

    attachCardEventListeners(container);

    // Delete submission buttons
    const deleteBtns = container.querySelectorAll(".delete-sub-btn");
    deleteBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-delete-id");
        deleteUserSubmission(id);
      });
    });

    initTiltEffects();
  }

  function deleteUserSubmission(id) {
    if (!confirm("Are you sure you want to delete this submission?")) return;
    state.userSubmissions = state.userSubmissions.filter(i => i.id !== id);
    state.items = state.items.filter(i => i.id !== id);
    state.savedIds.delete(id);

    safeStorageSet(STORAGE_KEYS.SUBMISSIONS, state.userSubmissions);
    safeStorageSet(STORAGE_KEYS.BOOKMARKS, Array.from(state.savedIds));
    updateSavedBadges();

    showToast("Deleted submission successfully.");
    renderMyActivitiesPage();
  }

  function exportActivitiesSchedule() {
    const savedItems = state.items.filter(i => state.savedIds.has(i.id));
    if (savedItems.length === 0) {
      showToast("No activities to export. Save some events in Discover first!");
      return;
    }

    // Sort chronologically
    savedItems.sort((a, b) => new Date(a.date) - new Date(b.date));

    let content = `====================================================\n`;
    content += `CAMPUSPULSE — PERSONAL SEMESTER ACTIVITY SCHEDULE\n`;
    content += `Generated: ${new Date().toLocaleDateString()} | Total Items: ${savedItems.length}\n`;
    content += `====================================================\n\n`;

    savedItems.forEach((item, idx) => {
      content += `[${idx + 1}] ${item.title.toUpperCase()}\n`;
      content += `    Category:    ${item.category} (${item.type})\n`;
      content += `    Date & Time: ${item.date} @ ${item.time}\n`;
      content += `    Location:    ${item.venue}\n`;
      content += `    Organizer:   ${item.organizer}\n`;
      content += `    Contact:     ${item.contact}\n`;
      content += `    Overview:    ${item.description}\n`;
      if (item.details) content += `    Notes:       ${item.details}\n`;
      content += `----------------------------------------------------\n\n`;
    });

    content += `Exported from CampusPulse Web Hub.\n`;

    // Create Blob and trigger download
    try {
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `campuspulse-schedule-${new Date().toISOString().slice(0, 10)}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Schedule successfully downloaded as .txt file!");
    } catch (e) {
      console.error(e);
      showToast("Download failed. Please check browser permissions.");
    }
  }

  /* =========================================================
     11. PAGE 4: SUBMIT OPPORTUNITY (FORM VALIDATION, LIVE PREVIEW, CONFETTI)
     ========================================================= */
  function initSubmitEvents() {
    const form = document.getElementById("submissionForm");
    const resetBtn = document.getElementById("resetFormBtn");
    const descInput = document.getElementById("submitDescription");
    const charCounter = document.getElementById("descCharCount");

    // Real-time character counter
    if (descInput && charCounter) {
      descInput.addEventListener("input", () => {
        const len = descInput.value.length;
        charCounter.textContent = `${len} / 30 min`;
        charCounter.style.color = len >= 30 ? "var(--color-gold-primary)" : "var(--color-text-muted)";
        updateSubmitLivePreview();
      });
    }

    // Input listeners to update preview live
    const inputs = form ? form.querySelectorAll("input, select, textarea") : [];
    inputs.forEach(input => {
      input.addEventListener("input", updateSubmitLivePreview);
      input.addEventListener("change", updateSubmitLivePreview);
    });

    // Reset button
    if (resetBtn && form) {
      resetBtn.addEventListener("click", () => {
        form.reset();
        clearSubmitErrors();
        updateSubmitLivePreview();
        showToast("Cleared submission form.");
      });
    }

    // Form submission
    if (form) {
      form.addEventListener("submit", handleFormSubmit);
    }
  }

  function clearSubmitErrors() {
    const errorEls = document.querySelectorAll(".form-error");
    errorEls.forEach(el => el.textContent = "");
  }

  function updateSubmitLivePreview() {
    const previewContainer = document.getElementById("livePreviewCard");
    if (!previewContainer) return;

    const title = document.getElementById("submitTitle")?.value.trim() || "Your Event Title Here";
    const category = document.getElementById("submitCategory")?.value || "Academic";
    const type = document.getElementById("submitType")?.value || "event";
    const date = document.getElementById("submitDate")?.value || "2026-10-25";
    const time = document.getElementById("submitTime")?.value.trim() || "6:00 PM – 8:00 PM";
    const venue = document.getElementById("submitVenue")?.value.trim() || "Turing Engineering Hall Room 302";
    const organizer = document.getElementById("submitOrganizer")?.value.trim() || "Your Organization / Club";
    const desc = document.getElementById("submitDescription")?.value.trim() || "Provide a detailed overview of what attendees will learn, who is eligible, and key takeaways.";
    const tagsRaw = document.getElementById("submitTags")?.value.trim() || "campus, workshop, free";

    const tags = tagsRaw.split(",").map(t => t.trim()).filter(Boolean);

    previewContainer.innerHTML = `
      <article class="campus-card" style="box-shadow:none; border-color:var(--color-gold-primary);">
        <div class="card-top-row">
          <div class="card-badges">
            <span class="badge-category">${escapeHTML(category)}</span>
            <span class="badge-type">${escapeHTML(type)}</span>
            <span class="badge-type badge-user-submitted">Live Preview</span>
          </div>
        </div>

        <h3 class="card-title">${escapeHTML(title)}</h3>
        <div class="card-organizer">${escapeHTML(organizer)}</div>

        <div class="card-meta-list">
          <div class="card-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            <span><strong>${escapeHTML(date)}</strong> &bull; ${escapeHTML(time)}</span>
          </div>
          <div class="card-meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="btn-icon" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${escapeHTML(venue)}</span>
          </div>
        </div>

        <p class="card-desc">${escapeHTML(desc)}</p>

        <div class="card-tags">
          ${tags.map(t => `<span class="card-tag">#${escapeHTML(t)}</span>`).join("")}
        </div>
      </article>
    `;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    clearSubmitErrors();

    const titleEl = document.getElementById("submitTitle");
    const typeEl = document.getElementById("submitType");
    const categoryEl = document.getElementById("submitCategory");
    const dateEl = document.getElementById("submitDate");
    const timeEl = document.getElementById("submitTime");
    const venueEl = document.getElementById("submitVenue");
    const organizerEl = document.getElementById("submitOrganizer");
    const descEl = document.getElementById("submitDescription");
    const contactEl = document.getElementById("submitContact");
    const tagsEl = document.getElementById("submitTags");

    let isValid = true;

    // Title validation
    if (!titleEl.value.trim() || titleEl.value.trim().length < 5) {
      document.getElementById("errorTitle").textContent = "Please enter an informative title (at least 5 characters).";
      isValid = false;
    }

    // Date validation
    if (!dateEl.value) {
      document.getElementById("errorDate").textContent = "Please select a date for the activity.";
      isValid = false;
    }

    // Time validation
    if (!timeEl.value.trim()) {
      document.getElementById("errorTime").textContent = "Please specify the time or open hours.";
      isValid = false;
    }

    // Venue validation
    if (!venueEl.value.trim()) {
      document.getElementById("errorVenue").textContent = "Please specify a building, room, or online link.";
      isValid = false;
    }

    // Organizer validation
    if (!organizerEl.value.trim()) {
      document.getElementById("errorOrganizer").textContent = "Please enter the club or organizing entity name.";
      isValid = false;
    }

    // Description validation (min 30 chars)
    if (!descEl.value.trim() || descEl.value.trim().length < 30) {
      document.getElementById("errorDescription").textContent = "Please provide an overview with at least 30 characters.";
      isValid = false;
    }

    // Contact Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!contactEl.value.trim() || !emailRegex.test(contactEl.value.trim())) {
      document.getElementById("errorContact").textContent = "Please provide a valid organizer contact email.";
      isValid = false;
    }

    if (!isValid) {
      showToast("Please correct the form fields highlighted in red.", "error");
      return;
    }

    // Build new campus item object
    const newItem = {
      id: "user-" + Date.now(),
      title: titleEl.value.trim(),
      type: typeEl.value,
      category: categoryEl.value,
      date: dateEl.value,
      time: timeEl.value.trim(),
      venue: venueEl.value.trim(),
      organizer: organizerEl.value.trim(),
      description: descEl.value.trim(),
      contact: contactEl.value.trim(),
      tags: tagsEl.value ? tagsEl.value.split(",").map(t => t.trim().toLowerCase()).filter(Boolean) : ["student-event"],
      popularity: 85,
      seats: 50,
      userSubmitted: true,
      details: "Published via CampusPulse Community Publishing Gateway."
    };

    // Save to user submissions
    state.userSubmissions.unshift(newItem);
    state.items.unshift(newItem);
    state.savedIds.add(newItem.id); // Also save to their own activities list

    safeStorageSet(STORAGE_KEYS.SUBMISSIONS, state.userSubmissions);
    safeStorageSet(STORAGE_KEYS.BOOKMARKS, Array.from(state.savedIds));

    updateSavedBadges();
    updateJourney(4);

    // Trigger Gold Confetti Burst
    spawnConfettiBurst();

    showToast("🎉 Successfully published to CampusPulse! Added to Discover & My Activities.");

    // Reset form
    e.target.reset();
    updateSubmitLivePreview();

    // After 1.2s route user to Discover to see their published event
    setTimeout(() => {
      window.location.hash = "#/discover";
    }, 1200);
  }

  /* =========================================================
     12. GOLD CONFETTI BURST EFFECT
     ========================================================= */
  function spawnConfettiBurst() {
    const colors = ["#FFD60A", "#F5B700", "#FF9F1C", "#FFF", "#FFE566"];
    const count = 45;

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      p.className = "confetti-particle";
      p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      p.style.left = "50vw";
      p.style.top = "50vh";

      document.body.appendChild(p);

      const angle = Math.random() * Math.PI * 2;
      const velocity = 80 + Math.random() * 220;
      const destX = Math.cos(angle) * velocity;
      const destY = Math.sin(angle) * velocity + 150; // gravity effect
      const rotation = Math.random() * 720;

      p.animate([
        { transform: "translate(0, 0) scale(1) rotate(0deg)", opacity: 1 },
        { transform: `translate(${destX}px, ${destY}px) scale(0.2) rotate(${rotation}deg)`, opacity: 0 }
      ], {
        duration: 1200 + Math.random() * 600,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        fill: "forwards"
      });

      setTimeout(() => {
        if (p.parentNode) p.parentNode.removeChild(p);
      }, 2000);
    }
  }

  /* =========================================================
     13. PAGE 5: HOW IT WORKS STEPPER
     ========================================================= */
  const STEPPER_DATA = [
    {
      step: 1,
      badge: "STEP 1 OF 5",
      title: "Discover Campus Opportunities in Real-Time",
      text: "Browse over 24 hand-curated listings spanning STEM workshops, student government townhalls, career fairs, and mental wellness retreats. Use instant debounce search to filter by major, venue, or urgency in microseconds.",
      actionText: "Explore Discover Hub &rarr;",
      actionRoute: "#/discover",
      visualHTML: `
        <div class="step-visual-mock">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--color-gold-primary);">LIVE DIRECTORY SCAN</div>
          <div style="background:var(--color-surface); padding:10px; border-radius:4px; font-size:0.85rem;">[Filter: Tech] &bull; 24 Matches Found</div>
          <div style="background:var(--color-surface); padding:10px; border-radius:4px; font-size:0.85rem;">&bull; AI & Robotics Hackathon (Sat)</div>
          <div style="background:var(--color-surface); padding:10px; border-radius:4px; font-size:0.85rem;">&bull; Quantum Fellowship ($4,500 Grant)</div>
        </div>
      `
    },
    {
      step: 2,
      badge: "STEP 2 OF 5",
      title: "Inspect Deep Details & Logistics",
      text: "Click any opportunity to pop open the 3D detail modal. View building maps, prerequisite checklists, seat quotas, organizer contact emails, and related opportunities in the same faculty.",
      actionText: "Try Clicking Any Card &rarr;",
      actionRoute: "#/discover",
      visualHTML: `
        <div class="step-visual-mock">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--color-gold-primary);">INSPECTION MODAL</div>
          <div style="border-left:3px solid var(--color-gold-primary); padding-left:8px;">
            <strong style="font-size:0.95rem;">Robotics Hackathon Prep</strong>
            <p style="font-size:0.8rem; color:var(--color-text-muted);">Turing Hall 302 &bull; 48 spots left &bull; Hardware kits provided</p>
          </div>
        </div>
      `
    },
    {
      step: 3,
      badge: "STEP 3 OF 5",
      title: "Save to Your Personal Activities Vault",
      text: "Tap the animated bookmark heart or click RSVP. CampusPulse instantly serializes the event into your browser's persistent LocalStorage with zero cloud accounts or passwords required.",
      actionText: "Go to My Activities &rarr;",
      actionRoute: "#/my-activities",
      visualHTML: `
        <div class="step-visual-mock">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--color-gold-primary);">LOCAL STORAGE VAULT</div>
          <div style="display:flex; justify-content:space-between; align-items:center; background:var(--color-surface); padding:10px; border-radius:4px;">
            <span style="font-size:0.85rem;">Bookmarked Events</span>
            <span style="background:var(--color-gold-primary); color:#0A0A0A; padding:2px 8px; border-radius:10px; font-weight:700; font-size:0.75rem;">SYNCHRONIZED</span>
          </div>
        </div>
      `
    },
    {
      step: 4,
      badge: "STEP 4 OF 5",
      title: "Publish for Your Peers & Student Club",
      text: "Leading a student organization? Use our instant publishing portal. Review your live preview card, input meeting times and descriptions, and broadcast your initiative to thousands across campus.",
      actionText: "Create a Submission &rarr;",
      actionRoute: "#/submit",
      visualHTML: `
        <div class="step-visual-mock">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--color-gold-primary);">PUBLISHING GATEWAY</div>
          <div style="font-size:0.85rem; color:var(--color-text-muted);">Form &gt; Live Preview Card &gt; 1-Click Broadcast</div>
          <div style="color:var(--color-gold-primary); font-size:0.85rem; font-weight:700;">Zero Review Lag &bull; Instant Visibility</div>
        </div>
      `
    },
    {
      step: 5,
      badge: "STEP 5 OF 5",
      title: "Export Clean Calendar Agendas",
      text: "Head to My Activities and click 'Export List (.txt)'. CampusPulse dynamically builds a clean text file of your semester itinerary via client Blob memory ready to paste into your calendar or print.",
      actionText: "Check Schedule Exporter &rarr;",
      actionRoute: "#/my-activities",
      visualHTML: `
        <div class="step-visual-mock">
          <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--color-gold-primary);">BLOB TXT DOWNLOAD</div>
          <div style="font-family:var(--font-mono); font-size:0.75rem; background:var(--color-surface); padding:8px; border-radius:4px;">
            campuspulse-schedule-2026.txt<br>
            [1] AI & ROBOTICS HACKATHON<br>
            [2] QUANTUM LAB FELLOWSHIP
          </div>
        </div>
      `
    }
  ];

  function initHowItWorks() {
    const stepBtns = document.querySelectorAll(".stepper-nav .step-btn");
    stepBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const stepNum = parseInt(btn.getAttribute("data-step"), 10);
        setStepperState(stepNum);
      });
    });

    setStepperState(1);
  }

  function setStepperState(num) {
    state.stepperCurrent = num;
    const stepBtns = document.querySelectorAll(".stepper-nav .step-btn");
    stepBtns.forEach(b => {
      b.classList.toggle("active", parseInt(b.getAttribute("data-step"), 10) === num);
    });

    const data = STEPPER_DATA.find(d => d.step === num) || STEPPER_DATA[0];

    const badge = document.getElementById("stepCurrentBadge");
    const title = document.getElementById("stepCurrentTitle");
    const text = document.getElementById("stepCurrentText");
    const actionBtn = document.getElementById("stepActionBtn");
    const visual = document.getElementById("stepCurrentVisual");

    if (badge) badge.textContent = data.badge;
    if (title) title.textContent = data.title;
    if (text) text.textContent = data.text;
    if (actionBtn) {
      actionBtn.innerHTML = `${data.actionText}`;
      actionBtn.setAttribute("href", data.actionRoute);
    }
    if (visual) visual.innerHTML = data.visualHTML;
  }

  /* =========================================================
     14. PAGE 7: FAQ ACCORDION ENGINE
     ========================================================= */
  function initFAQ() {
    const items = document.querySelectorAll(".faq-accordion-item");
    items.forEach(item => {
      const btn = item.querySelector(".faq-question-btn");
      const panel = item.querySelector(".faq-answer-panel");

      if (btn && panel) {
        btn.addEventListener("click", () => {
          const isOpen = item.classList.contains("open");
          
          // Close all others
          items.forEach(other => {
            if (other !== item) {
              other.classList.remove("open");
              const otherBtn = other.querySelector(".faq-question-btn");
              const otherPanel = other.querySelector(".faq-answer-panel");
              if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
              if (otherPanel) otherPanel.hidden = true;
            }
          });

          // Toggle current
          if (isOpen) {
            item.classList.remove("open");
            btn.setAttribute("aria-expanded", "false");
            panel.hidden = true;
          } else {
            item.classList.add("open");
            btn.setAttribute("aria-expanded", "true");
            panel.hidden = false;
          }
        });
      }
    });

    // FAQ search input
    const faqSearch = document.getElementById("faqSearchInput");
    const matchCount = document.getElementById("faqMatchCount");
    if (faqSearch) {
      faqSearch.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        let matches = 0;

        items.forEach(item => {
          const qText = item.querySelector(".faq-q-text")?.textContent.toLowerCase() || "";
          const aText = item.querySelector(".faq-answer-inner")?.textContent.toLowerCase() || "";

          if (!query || qText.includes(query) || aText.includes(query)) {
            item.style.display = "block";
            matches++;
          } else {
            item.style.display = "none";
          }
        });

        if (matchCount) matchCount.textContent = `${matches} Questions`;
      });
    }
  }

  /* =========================================================
     15. HOME PAGE INTERACTIVE MINI-DEMO
     ========================================================= */
  function initHomeDemo() {
    const chips = document.querySelectorAll("#homeDemoChips .chip");
    const searchInput = document.getElementById("homeDemoSearch");
    const previewGrid = document.getElementById("homeDemoPreviewGrid");

    let currentFilter = "all";
    let currentQuery = "";

    function renderHomeDemo() {
      if (!previewGrid) return;
      let filtered = [...state.items];

      if (currentFilter !== "all") {
        filtered = filtered.filter(i => i.category.toLowerCase().includes(currentFilter.toLowerCase()));
      }
      if (currentQuery) {
        filtered = filtered.filter(i => 
          i.title.toLowerCase().includes(currentQuery) || 
          i.venue.toLowerCase().includes(currentQuery) ||
          i.tags.some(t => t.toLowerCase().includes(currentQuery))
        );
      }

      const sample = filtered.slice(0, 3);
      if (sample.length === 0) {
        previewGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align:center; padding:24px; color:var(--color-text-muted);">
            No sample items found. <a href="#/discover" class="btn-text-gold">Browse all 24+ in Discover Hub &rarr;</a>
          </div>
        `;
        return;
      }

      previewGrid.innerHTML = sample.map(item => `
        <div class="campus-card" style="padding:18px; cursor:pointer;" onclick="window.CampusPulse.openDetail('${item.id}')">
          <div class="card-top-row" style="margin-bottom:8px;">
            <span class="badge-category">${escapeHTML(item.category)}</span>
            <span class="badge-type">${escapeHTML(item.type)}</span>
          </div>
          <h4 style="font-family:var(--font-display); font-size:1.1rem; margin-bottom:6px;">${escapeHTML(item.title)}</h4>
          <div style="font-size:0.8rem; color:var(--color-text-muted); margin-bottom:12px;">${escapeHTML(item.venue)} &bull; ${escapeHTML(item.date)}</div>
          <span class="btn-text-gold" style="font-size:0.82rem;">Inspect Details &rarr;</span>
        </div>
      `).join("");
    }

    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        chips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        currentFilter = chip.getAttribute("data-filter");
        renderHomeDemo();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        currentQuery = e.target.value.toLowerCase().trim();
        renderHomeDemo();
      });
    }

    renderHomeDemo();
  }

  /* =========================================================
     16. 3D SCENE PARALLAX & CARD TILT PHYSICS
     ========================================================= */
  function init3DHeroParallax() {
    const stage = document.getElementById("hero3dStage");
    const scene = document.getElementById("hero3dScene");
    if (!stage || !scene) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    stage.addEventListener("mousemove", (e) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const rotY = x * 36;
      const rotX = -y * 36;

      scene.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    });

    stage.addEventListener("mouseleave", () => {
      scene.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  }

  function initTiltEffects() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    // Disable heavy tilt on touch screens
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const cards = document.querySelectorAll("[data-tilt]");
    cards.forEach(card => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "true";

      const glare = card.querySelector(".card-glare");

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        if (glare) {
          glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 214, 10, 0.22) 0%, transparent 60%)`;
        }
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      });
    });
  }

  /* =========================================================
     17. GLITTER SPARKLE SPAWNER (PURE DOM + SVG)
     ========================================================= */
  function initGlitterSpawner() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const container = document.getElementById("glitterContainer");
    if (!container) return;

    // Spawn 18 subtle stars placed randomly across viewport
    const starCount = 16;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.className = "glitter-star";
      star.innerHTML = `
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"/>
        </svg>
      `;

      star.style.left = `${Math.random() * 96}vw`;
      star.style.top = `${Math.random() * 96}vh`;
      star.style.animationDelay = `${Math.random() * 4}s`;
      star.style.animationDuration = `${3 + Math.random() * 3}s`;

      container.appendChild(star);
    }
  }

  /* =========================================================
     18. MOBILE MENU DRAWER
     ========================================================= */
  function initMobileDrawer() {
    const btn = document.getElementById("mobileMenuBtn");
    const drawer = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("mobileDrawerOverlay");
    const closeBtn = document.getElementById("mobileDrawerClose");

    if (btn) {
      btn.addEventListener("click", openMobileDrawer);
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", closeMobileDrawer);
    }
    if (overlay) {
      overlay.addEventListener("click", closeMobileDrawer);
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer && drawer.classList.contains("active")) {
        closeMobileDrawer();
      }
    });
  }

  function openMobileDrawer() {
    const drawer = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("mobileDrawerOverlay");
    const btn = document.getElementById("mobileMenuBtn");

    if (drawer) {
      drawer.classList.add("active");
      drawer.setAttribute("aria-hidden", "false");
    }
    if (overlay) {
      overlay.classList.add("active");
      overlay.setAttribute("aria-hidden", "false");
    }
    if (btn) btn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMobileDrawer() {
    const drawer = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("mobileDrawerOverlay");
    const btn = document.getElementById("mobileMenuBtn");

    if (drawer) {
      drawer.classList.remove("active");
      drawer.setAttribute("aria-hidden", "true");
    }
    if (overlay) {
      overlay.classList.remove("active");
      overlay.setAttribute("aria-hidden", "true");
    }
    if (btn) btn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  /* =========================================================
     19. SCROLL TO TOP & TRUST STAT COUNTERS
     ========================================================= */
  function initBackToTop() {
    const btn = document.getElementById("backToTopBtn");
    if (btn) {
      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  function initStatCounters() {
    const statNums = document.querySelectorAll(".trust-stat-num[data-count]");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute("data-count"), 10);
            animateCounter(el, target);
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.5 });

      statNums.forEach(el => observer.observe(el));
    }
  }

  function animateCounter(el, target) {
    let start = 0;
    const duration = 1600;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(timer);
        el.textContent = target >= 1000 ? target.toLocaleString() + "+" : target + (target === 100 ? "%" : "+");
      } else {
        el.textContent = Math.floor(start).toLocaleString();
      }
    }, stepTime);
  }

  /* =========================================================
     20. BOOTSTRAP INITIALIZATION
     ========================================================= */
  function initApp() {
    initTheme();
    initData();
    initJourney();
    initRouter();
    initDiscoverEvents();
    initDetailModal();
    initMyActivitiesEvents();
    initSubmitEvents();
    initHowItWorks();
    initFAQ();
    initHomeDemo();
    init3DHeroParallax();
    initTiltEffects();
    initGlitterSpawner();
    initMobileDrawer();
    initBackToTop();
    initStatCounters();

    // Expose minimal safe public API for HTML inline handlers
    window.CampusPulse = {
      openDetail: openDetailModal,
      toggleSave: toggleBookmark
    };
  }

  // Run on DOM content loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }

})();
