/* ----------------------------------------------------
   COSMIC CLINIC — APPLICATION BUSINESS LOGIC & ROUTER
   ---------------------------------------------------- */

// Global State
const state = {
  booking: {
    step: 1,
    serviceCategory: '',
    serviceName: '',
    date: '',
    timeSlot: '',
    name: '',
    phone: '',
    email: ''
  },
  services: [
    {
      id: 'skin-hydrafacial',
      category: 'skin',
      name: 'Hydrafacial MD®',
      description: 'A multi-step treatment that cleanses, exfoliates, and extracts impurities while infusing super-serums of antioxidants, peptides, and hyaluronic acid.',
      tags: ['Hydration', 'Deep Cleanse', 'Glowing Skin']
    },
    {
      id: 'skin-co2',
      category: 'skin',
      name: 'Fractional CO2 Laser',
      description: 'Gold-standard skin resurfacing treatment targeting acne scars, deep wrinkles, and uneven texture by stimulating natural collagen remodeling.',
      tags: ['Scar Treatment', 'Resurfacing', 'Anti-Aging']
    },
    {
      id: 'skin-qswitch',
      category: 'skin',
      name: 'Q-Switch Nd:YAG Laser',
      description: 'Advanced laser technology targeting deep pigmentation, birthmarks, tattoo removal, and stubborn melasma with minimal downtime.',
      tags: ['Pigmentation', 'Tattoo Removal', 'Melasma']
    },
    {
      id: 'hair-prp',
      category: 'hair',
      name: 'PRP Hair Therapy',
      description: 'Platelet-Rich Plasma therapy utilizes your own growth factors to stimulate dormant hair follicles, increase thickness, and stop active shedding.',
      tags: ['Hair Loss', 'Follicle Rejuvenation', 'Non-Surgical']
    },
    {
      id: 'hair-gfc',
      category: 'hair',
      name: 'Growth Factor Concentrate (GFC)',
      description: 'A highly concentrated growth factor preparation engineered from the patient\'s blood, delivering direct cell signals to the hair roots.',
      tags: ['Advanced PRP', 'Hair Restoration', 'High Efficacy']
    },
    {
      id: 'hair-helmet',
      category: 'hair',
      name: 'Laser Helmet Therapy (LLLT)',
      description: 'Low-Level Laser Therapy that increases cellular metabolism and blood circulation in hair roots to prolong the growth cycle.',
      tags: ['Photobiomodulation', 'Painless', 'Maintenance']
    },
    {
      id: 'inject-botox',
      category: 'injectables',
      name: 'Botox® Cosmetic',
      description: 'Targeted wrinkle-relaxing injections that temporarily soften fine lines, crow\'s feet, and frown lines for a refreshed appearance.',
      tags: ['Fine Lines', 'Expressive Wrinkles', 'Anti-Aging']
    },
    {
      id: 'inject-fillers',
      category: 'injectables',
      name: 'Dermal Fillers',
      description: 'Hyaluronic acid injectables designed to restore lost volume, lift cheeks, contour the jawline, and sculpt natural-looking, hydrated lips.',
      tags: ['Volume Restoration', 'Facial Sculpting', 'Lip Plump']
    },
    {
      id: 'inject-boosters',
      category: 'injectables',
      name: 'Skin Boosters & Mesotherapy',
      description: 'Micro-injections of pure hyaluronic acid, vitamins, and minerals that hydrate the skin from within, boosting elasticity and radiant texture.',
      tags: ['Deep Hydration', 'Glow', 'Elasticity Boost']
    },
    {
      id: 'correct-tags',
      category: 'corrective',
      name: 'Skin Tag & Wart Removal',
      description: 'Precise radiofrequency or electrocautery removal of skin tags, milia, and warts with optimal cosmetic healing and minimal risk of scarring.',
      tags: ['RF Cautery', 'Instant Results', 'Clean Healing']
    },
    {
      id: 'correct-keloid',
      category: 'corrective',
      name: 'Keloid & Scar Treatment',
      description: 'Targeted intralesional immunomodulators and laser therapies that flatten thick scars, relieve itching, and blend keloids into surrounding skin.',
      tags: ['Scar Reduction', 'Intralesional Injection', 'Comfort']
    },
    {
      id: 'pigment-vitiligo',
      category: 'pigmentary',
      name: 'Vitiligo Surgery & Grafting',
      description: 'Advanced surgical micro-grafting and cellular suspension transfers (melanocyte transplant) to restore natural pigmentation to stable vitiligo patches.',
      tags: ['Melanocyte Grafting', 'Stable Vitiligo', 'Surgical Grafting']
    },
    {
      id: 'mind-psychiatry',
      category: 'mind',
      name: 'Discreet Psychiatric Consultation',
      description: 'A compassionate, professional space addressing the deep connection between skin conditions, stress, anxiety, and general mind wellness.',
      tags: ['Mind-Skin Connection', 'Confidential', 'Cognitive Support']
    }
  ],
  reviews: [
    { author: 'Riya Sharma', rating: 5, quote: 'The laser hair reduction results are amazing! Extremely clean facility and very helpful staff.', platform: 'Google', service: 'Laser Hair Reduction' },
    { author: 'Ankit Gupta', rating: 5, quote: 'Dr. Harmeet Kaur explained my hair loss options very transparently. Highly recommend GFC treatment.', platform: 'Justdial', service: 'Hair Loss (GFC)' },
    { author: 'Meera Johri', rating: 5, quote: 'Had a wonderful Hydrafacial experience. The staff is polite, and my skin feels so fresh and glowing.', platform: 'Google', service: 'Hydrafacial' },
    { author: 'Siddharth Sen', rating: 5, quote: 'Clean, professional and advanced clinic. Dr. Harmeet is the best dermatologist in Agra.', platform: 'Google', service: 'General Dermatology' },
    { author: 'Kiran Patel', rating: 5, quote: 'Very discreet and caring staff. The wellness sessions here helped me deal with my severe psoriasis stress.', platform: 'Google', service: 'Mind Wellness' },
    { author: 'Divya Verma', rating: 5, quote: 'Best place for skin pigmentation treatment. My melasma has reduced significantly after Q-Switch laser.', platform: 'Justdial', service: 'Q-Switch Laser' }
  ],
  blog: [
    {
      id: 'hair-gfc-vs-prp',
      title: 'PRP vs. GFC: Which Hair Restoration Therapy is Right for You?',
      date: 'June 24, 2026',
      readTime: '5 min read',
      summary: 'Struggling with thinning hair? We compare the science, platelet concentration, and real clinical recovery times behind PRP and GFC.',
      category: 'Hair Restoration',
      content: `
        <p>Hair loss can be a stressful experience, prompting many to seek clinical solutions. Today, two of the most popular and highly effective non-surgical treatments are Platelet-Rich Plasma (PRP) and Growth Factor Concentrate (GFC). While both rely on the healing factors found in your own blood, the scientific preparation and clinical experience differ significantly.</p>
        
        <h3>1. The Science of PRP (Platelet-Rich Plasma)</h3>
        <p>PRP has been used for decades. During a PRP session, your blood is drawn and placed in a centrifuge. The centrifuge spins the blood to separate the red blood cells from the plasma, which is rich in platelets. This platelet-rich layer is then injected into the areas of the scalp experiencing thinning.</p>
        <p>The platelets release growth factors when they enter the tissue, which signals the hair follicles to enter the active growth phase. However, because PRP contains red and white blood cells along with platelets, patients occasionally experience temporary redness, swelling, or mild discomfort post-treatment.</p>

        <h3>2. The Evolution: What is GFC?</h3>
        <p>Growth Factor Concentrate (GFC) represents the next generation of hair restoration. Instead of injecting the platelets themselves, GFC uses a proprietary laboratory kit to extract the growth factors directly from your platelets beforehand.</p>
        <p>In GFC preparation, your blood is incubated in specialized tubes. This activation causes the platelets to release their growth factors directly into the serum. The blood is then centrifuged, and only the pure, concentrated growth factor serum is collected—free of red or white blood cells. This means that when GFC is administered, your scalp receives the active signaling chemicals directly. Because GFC lacks cell debris, the injections are cleaner, far less painful, and carry virtually zero post-treatment swelling.</p>

        <h3>3. Comparing the Key Differences</h3>
        <p>When selecting a therapy, keep these comparative clinical factors in mind:</p>
        <ul>
          <li><strong>Purity:</strong> PRP contains platelets alongside red and white blood cells. GFC is cell-free, containing only pure activated growth factors.</li>
          <li><strong>Efficacy:</strong> Because GFC delivers activated growth factors directly to the hair roots, it typically yields faster, more robust results in fewer sessions compared to standard PRP.</li>
          <li><strong>Comfort:</strong> GFC injections are significantly less painful than PRP, with zero post-session swelling or inflammation.</li>
          <li><strong>Consistency:</strong> The growth factor concentration in GFC is standardized, ensuring highly predictable clinical outcomes across sessions.</li>
        </ul>

        <h3>Conclusion</h3>
        <p>While standard PRP remains a reliable baseline therapy, Dr. Harmeet Kaur recommends GFC for patients seeking high-efficacy hair restoration with maximum comfort. Schedule a consultation at CosmiQ Clinic to evaluate your scalp health and determine the optimal treatment path.</p>
      `
    },
    {
      id: 'laser-myths-vs-facts',
      title: 'Laser Hair Reduction: Crucial Facts and Myths Debunked',
      date: 'May 18, 2026',
      readTime: '4 min read',
      summary: 'Before booking your laser sessions, understand the myths regarding pain, safety, and skin compatibility, explained by a medical dermatologist.',
      category: 'Laser & Skin',
      content: `
        <p>Laser Hair Reduction has revolutionized personal grooming, replacing painful waxing and frequent shaving with a long-term, hygienic solution. Despite its popularity, several misconceptions keep individuals from seeking treatment. Here, we address the most common myths with scientific, clinical facts.</p>
        
        <h3>Myth 1: Laser hair reduction is extremely painful.</h3>
        <p><strong>The Fact:</strong> Modern laser systems, such as the US-FDA approved lasers used at CosmiQ Clinic, are designed with advanced integrated cooling tips. These cooling mechanisms chill the skin surface to 4°C immediately before and during the laser pulse. Most patients describe the sensation as a light snap or mild prickling, which is significantly more comfortable than the pain of waxing or epilation.</p>

        <h3>Myth 2: It is not safe for dark skin tones.</h3>
        <p><strong>The Fact:</strong> Early-generation lasers struggled with darker skin tones because the laser light targeted melanin (pigment) indiscriminately, risking burns on pigmented skin. However, modern dermatological lasers utilize long-pulse Nd:YAG wavelengths. This wavelength bypasses the skin surface melanin entirely, targeting only the hair follicle root located deep in the dermis. It is completely safe and highly effective for all Indian skin types when calibrated and administered by a trained physician.</p>

        <h3>Myth 3: Laser hair reduction provides 100% permanent removal in one session.</h3>
        <p><strong>The Fact:</strong> Lasers can only target hair follicles that are in the active growth phase (Anagen). At any given time, only about 15-20% of your body hair is in this phase. Therefore, multiple sessions (typically 6 to 8 sessions, spaced 4 to 6 weeks apart) are required to capture every follicle during its active cycle. While lasers achieve permanent hair *reduction* (up to 85-90% hair clearance, with remaining hairs becoming fine and slow-growing), annual maintenance sessions are sometimes recommended to address hormonal shifts.</p>

        <h3>Choosing the Right Clinic</h3>
        <p>The safety of laser hair reduction depends heavily on the operator. At CosmiQ Clinic, Dr. Harmeet Kaur personally assesses your skin type and hair thickness, calibrating the laser settings for every session. This medical oversight ensures exceptional results while eliminating the risk of burns or hyperpigmentation.</p>
      `
    },
    {
      id: 'mind-skin-connection',
      title: 'The Psychodermatology Connection: How Stress Affects Your Skin',
      date: 'April 12, 2026',
      readTime: '6 min read',
      summary: 'Why do acne, eczema, and hair fall flare up during stressful weeks? Explore the biological mind-skin axis and how CosmiQ treats both.',
      category: 'Mind Wellness',
      content: `
        <p>It is a common observation: a major work deadline, family stress, or poor sleep is almost always followed by a sudden breakout of acne, a flare-up of eczema, or increased hair fall. This connection is not a coincidence—it is a well-documented medical field known as <strong>Psychodermatology</strong>, which studies the deep connection between the mind and the skin.</p>
        
        <h3>The Biological Link: The Stress Hormone</h3>
        <p>The skin and the brain share the same embryonic origin, meaning they develop from the same tissue layer in the womb. They remain linked throughout life via nerve pathways, immune signals, and hormones.</p>
        <p>When you experience psychological stress, your brain triggers the release of cortisol, the primary stress hormone. Elevated cortisol levels have direct effects on the skin:</p>
        <ul>
          <li><strong>Increased Sebum:</strong> Cortisol stimulates the sebaceous (oil) glands to produce more sebum, clogging pores and causing acne breakouts.</li>
          <li><strong>Compromised Barrier:</strong> Stress weakens the skin\'s natural lipid barrier, making it dry, sensitive, and susceptible to irritants and allergens, triggering eczema or rosacea.</li>
          <li><strong>Immune Activation:</strong> Stress releases inflammatory chemicals that worsen conditions like psoriasis and vitiligo.</li>
          <li><strong>Hair Cycle Disruption:</strong> Severe or chronic stress can push hair follicles prematurely into the resting phase (Telogen), leading to excessive shedding weeks later (Telogen Effluvium).</li>
        </ul>

        <h3>A Dual Path to Healing</h3>
        <p>Traditional dermatology treats only the surface symptoms. However, if the underlying stress or anxiety is not addressed, skin flare-ups will continue to recur. At CosmiQ Clinic, we believe in a complete wellness approach. By combining Dr. Harmeet Kaur\'s dermatological expertise with a quiet, confidential space for psychiatric consultations, we address both ends of the mind-skin axis.</p>
        <p>Managing your stress through cognitive support, lifestyle adjustments, and professional guidance is just as critical to achieving clear skin as applying medical creams or undergoing laser treatments. Our psychiatric services are integrated discreetly, allowing you to seek holistic healing in a private and caring environment.</p>
      `
    }
  ]
};

// SVG Icon Helpers
const icons = {
  phone: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  clock: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  star: `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  check: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  info: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`
};

// ----------------------------------------------------
// LAYOUT RENDERERS
// ----------------------------------------------------

function initLayout() {
  const navbarContainer = document.getElementById('navbar-container');
  const footerContainer = document.getElementById('footer-container');

  navbarContainer.innerHTML = `
    <nav class="navbar">
      <div class="container">
        <a href="#/" class="logo">
          <span class="logo-icon">✦</span> COSMIC <span style="font-weight: 300;">CLINIC</span>
        </a>
        <ul class="nav-links">
          <li><a href="#/" class="nav-link" data-hash="#/">Home</a></li>
          <li><a href="#/about" class="nav-link" data-hash="#/about">About</a></li>
          <li><a href="#/services" class="nav-link" data-hash="#/services">Services</a></li>
          <li><a href="#/gallery" class="nav-link" data-hash="#/gallery">Gallery</a></li>
          <li><a href="#/reviews" class="nav-link" data-hash="#/reviews">Reviews</a></li>
          <li><a href="#/blog" class="nav-link" data-hash="#/blog">Skin Journal</a></li>
          <li><a href="#/contact" class="nav-link" data-hash="#/contact">Contact</a></li>
        </ul>
        <div class="navbar-actions">
          <a href="#/book" class="btn btn-primary" style="padding: 10px 20px; font-size: 12px;">Book Appointment</a>
          <button class="burger-menu" id="mobile-nav-toggle" aria-label="Toggle Menu">
            <span class="burger-line"></span>
            <span class="burger-line"></span>
            <span class="burger-line"></span>
          </button>
        </div>
      </div>
    </nav>
    <ul class="mobile-nav" id="mobile-nav-menu">
      <li><a href="#/" class="mobile-nav-link" data-hash="#/">Home</a></li>
      <li><a href="#/about" class="mobile-nav-link" data-hash="#/about">About</a></li>
      <li><a href="#/services" class="mobile-nav-link" data-hash="#/services">Services</a></li>
      <li><a href="#/gallery" class="mobile-nav-link" data-hash="#/gallery">Gallery</a></li>
      <li><a href="#/reviews" class="mobile-nav-link" data-hash="#/reviews">Reviews</a></li>
      <li><a href="#/blog" class="mobile-nav-link" data-hash="#/blog">Skin Journal</a></li>
      <li><a href="#/contact" class="mobile-nav-link" data-hash="#/contact">Contact</a></li>
      <li style="margin-top: 20px;"><a href="#/book" class="btn btn-primary" style="width: 100%;">Book Appointment</a></li>
    </ul>
  `;

  footerContainer.innerHTML = `
    <div class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h3 class="footer-brand-title">✦ COSMIC</h3>
            <p class="footer-brand-desc">A premium skin, hair, and mind wellness clinic in Agra. Combining cutting-edge medical lasers with compassionate care by Dr. Harmeet Kaur.</p>
            <div style="margin-top: 24px; display: flex; gap: 16px;">
              <a href="https://instagram.com/cosmiqcare" target="_blank" rel="noopener noreferrer" style="opacity: 0.8; font-size: 14px;">Instagram: @cosmiqcare</a>
            </div>
          </div>
          <div>
            <h4 class="footer-col-title">Wellness Services</h4>
            <ul class="footer-links">
              <li><a href="#/services" class="footer-link">Laser Hair Reduction</a></li>
              <li><a href="#/services" class="footer-link">PRP & GFC Hair Loss</a></li>
              <li><a href="#/services" class="footer-link">Hydrafacial & Peels</a></li>
              <li><a href="#/services" class="footer-link">Botox & Fillers</a></li>
              <li><a href="#/services" class="footer-link">Mind Wellness consult</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-col-title">Our Clinic</h4>
            <ul class="footer-links">
              <li><a href="#/about" class="footer-link">Meet Dr. Harmeet</a></li>
              <li><a href="#/about" class="footer-link">Clinic Interior Gallery</a></li>
              <li><a href="#/gallery" class="footer-link">Before & After Results</a></li>
              <li><a href="#/reviews" class="footer-link">Customer Reviews</a></li>
              <li><a href="#/blog" class="footer-link">Skin Journal (Blog)</a></li>
            </ul>
          </div>
          <div>
            <h4 class="footer-col-title">Visit Us</h4>
            <p style="font-size: 14px; opacity: 0.8; line-height: 1.6; margin-bottom: 12px;">
              E-27, Pani Ki Tanki Rd, Near Hridyam Hospital, Professors Colony, Ghatwasan, Kamla Nagar, Agra, UP – 282004
            </p>
            <p style="font-size: 14px; opacity: 0.8; font-weight: 500;">
              Tel: +91 90451 66924
            </p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} CosmiQ Clinic. All Rights Reserved. Clinical procedures conducted under Dr. Harmeet Kaur, MD.</p>
          <p>Consultation Fee: ₹400 | Treatment pricing discussed during consultation.</p>
        </div>
      </div>
    </div>
  `;

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      nav.classList.add('navbar-scrolled');
    } else {
      nav.classList.remove('navbar-scrolled');
    }
  });

  // Mobile Drawer Toggle
  const toggle = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('mobile-nav-menu');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    menu.classList.toggle('open');
  });

  // Close drawer on link clicks
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// ----------------------------------------------------
// PAGE VIEW RENDERERS
// ----------------------------------------------------

function renderHome() {
  return `
    <!-- Hero Section -->
    <section class="hero section">
      <div class="container hero-grid">
        <div class="hero-content reveal">
          <span class="eyebrow">A Complete Skin & Mind Wellness Center</span>
          <h1 class="hero-title">CosmiQ Clinic</h1>
          <p class="hero-description">Experience premium dermatology, state-of-the-art laser treatments, and dedicated mind wellness solutions. Guided by Dr. Harmeet Kaur's 12+ years of medical expertise in Kamla Nagar, Agra.</p>
          <div class="hero-cta">
            <a href="#/book" class="btn btn-primary">Book Consultation (₹400)</a>
            <a href="#/services" class="btn btn-secondary">Explore Treatments</a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-num">12+</span>
              <span class="stat-label">Years Exp</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">4.9✦</span>
              <span class="stat-label">Google Rating</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">500+</span>
              <span class="stat-label">Justdial Reviews</span>
            </div>
          </div>
        </div>
        <div class="hero-image-wrapper reveal reveal-delay-2">
          <img src="./images/clinic_lobby.png" class="hero-img" alt="CosmiQ Clinic Lobby, Agra">
          <div class="hero-badge">
            <span style="font-size: 24px; color: var(--color-metal);">✦</span>
            <div>
              <p style="font-size: 13px; font-weight: 600; margin: 0;">Dr. Harmeet Kaur</p>
              <p style="font-size: 11px; opacity: 0.8; margin: 0;">MBBS, MD (Dermatologist)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Strip -->
    <div class="trust-strip">
      <div class="container trust-grid">
        <div class="trust-item">
          <span class="trust-icon">${icons.check}</span>
          <span class="trust-text">Sole-Doctor Integrity</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">${icons.check}</span>
          <span class="trust-text">Gold Standard US-FDA Lasers</span>
        </div>
        <div class="trust-item">
          <span class="trust-icon">${icons.check}</span>
          <span class="trust-text">Confidential Psychiatric Care</span>
        </div>
      </div>
    </div>

    <!-- Bento Grid Services -->
    <section class="section">
      <div class="container">
        <div class="section-title-center reveal">
          <span class="eyebrow">Treatments</span>
          <h2 class="section-title">Clinical Expertise, Designed for You</h2>
          <p class="section-subtitle">Our service catalog covers advanced corrective dermatology, laser hair reduction, and dedicated wellness paths.</p>
        </div>
        
        <div class="bento-grid">
          <!-- Skin Card -->
          <div class="bento-card bento-item-lg reveal" onclick="location.hash='#/services?cat=skin'">
            <div class="bento-icon-wrapper">✧</div>
            <div>
              <h3 class="bento-title">Laser &amp; Skin Resurfacing</h3>
              <p class="bento-desc">US-FDA approved Fractional CO2, Q-Switch, and Pigmentation lasers. Target acne scars, blemishes, fine lines, and sun damage with expert clinical control.</p>
              <span class="bento-link">View Skin Care ${icons.arrowRight}</span>
            </div>
          </div>

          <!-- Hair Card -->
          <div class="bento-card bento-item-tall reveal reveal-delay-1" onclick="location.hash='#/services?cat=hair'">
            <div class="bento-icon-wrapper">✦</div>
            <div>
              <h3 class="bento-title">Hair Restoration</h3>
              <p class="bento-desc">Combat thinning with advanced GFC (Growth Factor Concentrate), PRP, Mesotherapy, and Low-Level Laser Helmets tailored to your scalp's profile.</p>
              <span class="bento-link">View Hair Loss ${icons.arrowRight}</span>
            </div>
          </div>

          <!-- Injectables -->
          <div class="bento-card reveal reveal-delay-2" onclick="location.hash='#/services?cat=injectables'">
            <div class="bento-icon-wrapper">✧</div>
            <div>
              <h3 class="bento-title">Injectables &amp; Cosmetic</h3>
              <p class="bento-desc">Botox, fillers, skin boosters, and lip beautification performed safely by Dr. Harmeet Kaur to restore volume.</p>
              <span class="bento-link">Explore Aesthetics ${icons.arrowRight}</span>
            </div>
          </div>

          <!-- Mind Wellness (Sage Accent) -->
          <div class="bento-card bento-card-sage reveal reveal-delay-3" onclick="location.hash='#/services?cat=mind'">
            <div class="bento-icon-wrapper">✦</div>
            <div>
              <h3 class="bento-title">Mind Wellness</h3>
              <p class="bento-desc">A calm, discreet room for psychiatric consultations addressing stress, anxiety, sleep issues, and psychodermatology disorders.</p>
              <span class="bento-link">Learn More ${icons.arrowRight}</span>
            </div>
          </div>

          <!-- Corrective -->
          <div class="bento-card reveal" onclick="location.hash='#/services?cat=corrective'">
            <div class="bento-icon-wrapper">✧</div>
            <div>
              <h3 class="bento-title">Corrective Dermatology</h3>
              <p class="bento-desc">Pain-free removal of skin tags, warts, moles, and tailored therapies for thick keloids and stretch marks.</p>
              <span class="bento-link">View Treatments ${icons.arrowRight}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Before & After Comparison -->
    <section class="section section-dark">
      <div class="container" style="display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center;">
        <div style="text-align: center;" class="reveal">
          <span class="eyebrow eyebrow-sage">Clinical Proof</span>
          <h2 class="section-title">Visible Transformations</h2>
          <p class="section-subtitle" style="margin: 0 auto 32px;">Drag the slider to see the difference achieved with our customized laser resurfacing and pigmentation protocols.</p>
        </div>
        
        <div class="ba-slider-container reveal reveal-delay-1" id="home-ba-slider">
          <img src="./images/skin_after.png" class="ba-slider-image ba-slider-after" alt="After Treatment">
          <div class="ba-slider-overlay-before" id="slider-before-overlay">
            <img src="./images/skin_before.png" class="ba-slider-image ba-slider-before" alt="Before Treatment" style="width: 680px; max-width: none;">
          </div>
          <div class="ba-slider-handle" id="slider-handle">
            <div class="ba-slider-handle-button">&harr;</div>
          </div>
          <span class="ba-label ba-label-before">Before Treatment</span>
          <span class="ba-label ba-label-after">After 3 Sessions</span>
        </div>
        
        <div style="text-align: center;" class="reveal">
          <a href="#/gallery" class="btn btn-secondary btn-dark-bg">View All Case Galleries</a>
        </div>
      </div>
    </section>

    <!-- Meet Doctor -->
    <section class="section">
      <div class="container doctor-grid">
        <div class="doctor-image-container reveal">
          <img src="./images/doctor_portrait.png" class="doctor-img" alt="Dr. Harmeet Kaur, Dermatologist">
        </div>
        <div class="doctor-content reveal reveal-delay-1">
          <span class="eyebrow">Lead Dermatologist</span>
          <h2 class="doctor-name">Dr. Harmeet Kaur</h2>
          <p class="doctor-title">MBBS, MD (Dermatology, Venereology &amp; Leprosy)</p>
          <p class="doctor-bio">With over 12 years of clinical excellence, Dr. Harmeet Kaur is a trusted name in dermatology in Agra. She believes in a holistic philosophy of wellness, offering bespoke treatments that harmonize exterior skin radiance with interior mental calm. Unlike generic clinics, Dr. Harmeet personally diagnoses and executes every medical aesthetic procedure, ensuring patient safety and exceptional precision.</p>
          
          <div class="doctor-qualifications">
            <div class="qualification-item">
              <span class="qualification-dot"></span>
              <span class="qualification-text"><strong>MBBS &amp; MD Dermatology:</strong> Specialized in clinical skin disorders, trichology, and advanced aesthetic lasers.</span>
            </div>
            <div class="qualification-item">
              <span class="qualification-dot"></span>
              <span class="qualification-text"><strong>12+ Years Experience:</strong> Dedicated focus on Asian skin types, acne scar revision, and hair regrowth.</span>
            </div>
            <div class="qualification-item">
              <span class="qualification-dot"></span>
              <span class="qualification-text"><strong>Patient-Centric Care:</strong> Dedicated private consultation room ensuring absolute confidentiality and care.</span>
            </div>
          </div>
          <a href="#/about" class="btn btn-primary">Full Bio &amp; Story</a>
        </div>
      </div>
    </section>

    <!-- Testimonials Marquee -->
    <section class="section section-dark" style="overflow: hidden; padding-bottom: calc(var(--space-3xl) + 20px);">
      <div class="container">
        <div class="section-title-center reveal">
          <span class="eyebrow eyebrow-sage">Testimonials</span>
          <h2 class="section-title">Loved by 1000+ Clients</h2>
          <p class="section-subtitle">Real feedback from Google Reviews and Justdial verified patients. Hover to pause.</p>
        </div>
      </div>
      <div class="testimonials-marquee reveal reveal-delay-1">
        <div class="marquee-inner">
          <!-- Render testimonials twice for infinite loop -->
          ${renderTestimonialCards()}
          ${renderTestimonialCards()}
        </div>
      </div>
    </section>

    <!-- Visit Us -->
    <section class="section">
      <div class="container" style="display: grid; grid-template-columns: 1fr; gap: 48px; align-items: center;">
        <div class="text-center reveal" style="max-width: 700px; margin: 0 auto;">
          <span class="eyebrow">Location</span>
          <h2 class="section-title" style="margin-bottom: 16px;">Visit CosmiQ Clinic</h2>
          <p style="font-size: 16px; opacity: 0.9; margin-bottom: 32px;">Located centrally in Professors Colony, Kamla Nagar, Agra. Easy access with ample parking space. Approximately 1.5 km from Yamuna Bridge Railway Station.</p>
          <a href="#/contact" class="btn btn-primary">View Address &amp; Contact info</a>
        </div>
      </div>
    </section>
  `;
}

function renderTestimonialCards() {
  return state.reviews.map(rev => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">
          ${icons.star.repeat(rev.rating)}
        </div>
        <p class="testimonial-quote">"${rev.quote}"</p>
      </div>
      <div class="testimonial-author">
        <span class="author-name">${rev.author}</span>
        <span class="author-service">${rev.service} • <span class="review-platform">${rev.platform}</span></span>
      </div>
    </div>
  `).join('');
}

function renderAbout() {
  return `
    <section class="section" style="padding-top: calc(var(--header-height) + var(--space-xl));">
      <div class="container">
        <div class="about-intro-grid">
          <div class="reveal">
            <span class="eyebrow">Our Story</span>
            <h1 class="section-title" style="margin-bottom: 24px;">Agra's Destination for Premium Skin &amp; Mind Harmony</h1>
            <p style="font-size: 17px; line-height: 1.8; opacity: 0.9; margin-bottom: 20px;">
              CosmiQ Clinic was established with a singular vision: to break away from the commercialized, multi-chain clinic model. We provide personalized, medically sound care where the patient always meets the doctor. Led by Dr. Harmeet Kaur, CosmiQ addresses skin health, hair restoration, and psychological wellness collectively.
            </p>
            <p style="font-size: 16px; line-height: 1.7; opacity: 0.8; margin-bottom: 28px;">
              We believe skin and mind are deeply connected. Our practice integrates medical-grade dermatology with psychiatric support in a quiet, modern atmosphere. This ensures that every client receives a private, stress-free path to physical and mental wellness.
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 24px;">
              <div>
                <h4 style="font-size: 24px; color: var(--color-accent); font-family: var(--font-serif);">12+ Years</h4>
                <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7;">Clinical Expertise</p>
              </div>
              <div>
                <h4 style="font-size: 24px; color: var(--color-accent); font-family: var(--font-serif);">100% FDA</h4>
                <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7;">Approved Lasers</p>
              </div>
              <div>
                <h4 style="font-size: 24px; color: var(--color-accent); font-family: var(--font-serif);">Agra</h4>
                <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.7;">Kamla Nagar Center</p>
              </div>
            </div>
          </div>
          <div class="about-images-group reveal reveal-delay-2">
            <div class="about-img-frame">
              <img src="./images/skin_care.png" alt="CosmiQ Skin Treatment Room" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div class="about-img-frame">
              <img src="./images/clinic_lobby.png" alt="CosmiQ Clinic Lobby" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bio Section -->
    <section class="section section-dark">
      <div class="container doctor-grid">
        <div class="doctor-content reveal">
          <span class="eyebrow eyebrow-sage">Credentials</span>
          <h2 class="doctor-name">Dr. Harmeet Kaur, MD</h2>
          <p class="doctor-title" style="color: var(--color-sage);">Sole Lead Dermatologist &amp; Founder</p>
          <p class="doctor-bio" style="font-size: 16px;">
            Dr. Harmeet Kaur completed her medical training and MD in Dermatology, Venereology, and Leprosy with honors. She has dedicated her career to understanding skin biology and advanced laser technologies. Over the past 12 years, she has successfully managed complex clinical skin disorders, performed cosmetic scar revisions, and developed non-surgical hair restoration methods suitable for Indian skin.
          </p>
          <p class="doctor-bio" style="font-size: 16px;">
            Recognizing that stress and mental wellness strongly impact skin health, Dr. Harmeet expanded CosmiQ's care to include discrete psychiatric consultations. This unique combination sets CosmiQ apart as Agra's only complete skin and mind wellness center.
          </p>
          <div style="border-top: 1px solid rgba(247, 243, 236, 0.1); padding-top: 24px; width: 100%;">
            <h4 style="font-family: var(--font-serif); font-size: 18px; margin-bottom: 12px;">Qualifications &amp; Memberships</h4>
            <ul style="list-style: none; padding: 0; font-size: 14px; opacity: 0.8; line-height: 1.8;">
              <li>✓ Member of Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</li>
              <li>✓ Certified in Advanced Aesthetic Laser Applications</li>
              <li>✓ Specialized Training in Trichological Growth Factor Therapies (GFC, QR678)</li>
              <li>✓ Certified in Aesthetic Injectables (Botox, Hyaluronic Acid Fillers)</li>
            </ul>
          </div>
        </div>
        <div class="doctor-image-container reveal reveal-delay-1">
          <img src="./images/doctor_portrait.png" class="doctor-img" alt="Dr. Harmeet Kaur Portrait">
        </div>
      </div>
    </section>

    <!-- Clinic Values -->
    <section class="section">
      <div class="container">
        <div class="section-title-center reveal">
          <span class="eyebrow">Standards</span>
          <h2 class="section-title">Our Practice Philosophy</h2>
          <p class="section-subtitle">We build lifelong relationships with our clients through honesty, safety, and visible medical excellence.</p>
        </div>
        <div style="display: grid; grid-template-columns: 1fr; gap: 32px; margin-top: 48px;" class="services-grid">
          <div class="info-card reveal">
            <h3 style="font-family: var(--font-serif); font-size: 22px; margin-bottom: 12px;">Medical Integrity First</h3>
            <p style="font-size: 14px; opacity: 0.8; line-height: 1.6;">We never upsell unnecessary procedures. Dr. Harmeet advises only what is medically necessary and safe for your unique condition.</p>
          </div>
          <div class="info-card reveal reveal-delay-1">
            <h3 style="font-family: var(--font-serif); font-size: 22px; margin-bottom: 12px;">Premium Safety &amp; Lasers</h3>
            <p style="font-size: 14px; opacity: 0.8; line-height: 1.6;">We invest exclusively in US-FDA approved technologies. Every laser setting is personally calibrated and applied by the doctor, not by untrained technicians.</p>
          </div>
          <div class="info-card reveal reveal-delay-2">
            <h3 style="font-family: var(--font-serif); font-size: 22px; margin-bottom: 12px;">Compassionate Discretion</h3>
            <p style="font-size: 14px; opacity: 0.8; line-height: 1.6;">We maintain strict medical confidentiality. Mind wellness and psychiatric bookings are handled discretely without labeling or public tagging.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderServices() {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const activeCat = urlParams.get('cat') || 'skin';

  const categories = [
    { key: 'skin', label: 'Laser & Skin Resurfacing', isSage: false },
    { key: 'hair', label: 'Hair Loss & Restoration', isSage: false },
    { key: 'injectables', label: 'Injectables & Cosmetic', isSage: false },
    { key: 'corrective', label: 'Corrective Dermatology', isSage: false },
    { key: 'pigmentary', label: 'Pigmentary Disorders', isSage: false },
    { key: 'mind', label: 'Mind Wellness', isSage: true }
  ];

  const filteredServices = state.services.filter(s => s.category === activeCat);

  return `
    <section class="section" style="padding-top: calc(var(--header-height) + var(--space-xl));">
      <div class="container">
        <div class="section-title-center reveal">
          <span class="eyebrow">Service Catalog</span>
          <h1 class="section-title">Clinical &amp; Aesthetic Treatments</h1>
          <p class="section-subtitle">Choose a treatment category below to explore our state-of-the-art procedures performed personally by Dr. Harmeet Kaur.</p>
        </div>

        <!-- Navigation Tabs -->
        <div class="service-tabs reveal">
          ${categories.map(cat => {
            const isActive = cat.key === activeCat;
            const btnClass = isActive 
              ? (cat.isSage ? 'tab-btn tab-btn-sage active' : 'tab-btn active') 
              : 'tab-btn';
            return `<button class="${btnClass}" onclick="location.hash='#/services?cat=${cat.key}'">${cat.label}</button>`;
          }).join('')}
        </div>

        <!-- Services Grid -->
        <div class="services-grid reveal">
          ${filteredServices.map(srv => `
            <div class="service-detail-card">
              <h3 class="service-detail-title">${srv.name}</h3>
              <p class="service-detail-desc">${srv.description}</p>
              <div class="service-tags">
                ${srv.tags.map(tag => `<span class="service-tag">${tag}</span>`).join('')}
              </div>
              <a href="#/book?service=${encodeURIComponent(srv.name)}&cat=${srv.category}" class="btn btn-primary" style="margin-top: 24px; font-size: 11px; padding: 10px; width: 100%;">Book Session</a>
            </div>
          `).join('')}
        </div>

        <!-- Mind Wellness Calm Note -->
        ${activeCat === 'mind' ? `
          <div class="mind-wellness-info reveal">
            <h4 style="font-family: var(--font-serif); font-size: 18px; margin-bottom: 8px; color: var(--color-deep);">Discretion &amp; Comfort</h4>
            <p style="font-size: 14px; opacity: 0.9; line-height: 1.6;">
              Mind Wellness and Psychiatric consults are handled with strict privacy. All bookings route privately, and consultation records are separate from general aesthetic records. We focus on holistic support, combining dermatology with cognitive-behavioral stress therapies.
            </p>
          </div>
        ` : ''}

        <!-- Price Disclaimer -->
        <div class="price-notice-card reveal">
          <span class="text-bronze">${icons.info}</span>
          <div>
            <p style="margin: 0; font-weight: 600;">Pricing Policy</p>
            <p style="margin: 0; font-size: 13px; opacity: 0.9;">Consultation fee is ₹400. Treatment pricing is tailored to the severity, sessions required, and specific laser parameters. Exact pricing is discussed in detail with Dr. Harmeet Kaur during your consultation.</p>
          </div>
        </div>

      </div>
    </section>
  `;
}

function renderGallery() {
  return `
    <section class="section" style="padding-top: calc(var(--header-height) + var(--space-xl));">
      <div class="container">
        <div class="section-title-center reveal">
          <span class="eyebrow">Before &amp; After</span>
          <h1 class="section-title">Verified Clinical Transformations</h1>
          <p class="section-subtitle">Real patient outcomes from CosmiQ Clinic. Sliding comparisons show skin texture, pore refinement, and spot clearance results.</p>
        </div>

        <div class="gallery-grid">
          <!-- Case 1 -->
          <div class="gallery-item reveal">
            <div class="ba-slider-container" id="gallery-slider-1" style="aspect-ratio: 4 / 3;">
              <img src="./images/skin_after.png" class="ba-slider-image ba-slider-after" alt="After treatment">
              <div class="ba-slider-overlay-before" id="gallery-before-overlay-1">
                <img src="./images/skin_before.png" class="ba-slider-image ba-slider-before" alt="Before treatment" style="width: 590px; max-width: none;">
              </div>
              <div class="ba-slider-handle" id="gallery-handle-1">
                <div class="ba-slider-handle-button">&harr;</div>
              </div>
              <span class="ba-label ba-label-before">Before Treatment</span>
              <span class="ba-label ba-label-after">After 3 Sessions</span>
            </div>
            <h3 class="gallery-item-title">Laser Skin Resurfacing</h3>
            <p class="gallery-item-desc">Treatment of acne scars, skin blemishes, and pore size minimization using Fractional CO2 laser therapy.</p>
          </div>

          <!-- Case 2 -->
          <div class="gallery-item reveal reveal-delay-1">
            <div class="ba-slider-container" id="gallery-slider-2" style="aspect-ratio: 4 / 3;">
              <!-- Simulation of melasma/pigment clearance using skin_care & skin_after -->
              <img src="./images/skin_care.png" class="ba-slider-image ba-slider-after" alt="Before treatment">
              <div class="ba-slider-overlay-before" id="gallery-before-overlay-2">
                <img src="./images/skin_care.png" class="ba-slider-image ba-slider-before" alt="Before treatment" style="width: 590px; max-width: none; filter: contrast(1.3) brightness(0.85) grayscale(0.2);">
              </div>
              <div class="ba-slider-handle" id="gallery-handle-2">
                <div class="ba-slider-handle-button">&harr;</div>
              </div>
              <span class="ba-label ba-label-before">Before Treatment</span>
              <span class="ba-label ba-label-after">After 4 Sessions</span>
            </div>
            <h3 class="gallery-item-title">Hyperpigmentation Revision</h3>
            <p class="gallery-item-desc">Clearance of stubborn melasma patches on the cheekbones using customized Q-Switch Nd:YAG laser settings.</p>
          </div>
        </div>

        <div style="margin-top: 48px; text-align: center;" class="reveal">
          <p style="font-size: 14px; opacity: 0.8; max-width: 600px; margin: 0 auto 24px;">All photography is published with documented, written patient consent. Patient confidentiality and consent can be modified or revoked at any time by contacting the clinic.</p>
          <a href="#/book" class="btn btn-primary">Schedule Consultation</a>
        </div>
      </div>
    </section>
  `;
}

function renderReviews() {
  return `
    <section class="section" style="padding-top: calc(var(--header-height) + var(--space-xl));">
      <div class="container">
        <div class="section-title-center reveal">
          <span class="eyebrow">Patient Reviews</span>
          <h1 class="section-title">Feedback from CosmiQ Patients</h1>
          <p class="section-subtitle">Real experiences shared by patients regarding laser hair reduction, dermatological diagnoses, and wellness consultations.</p>
        </div>

        <!-- Rating Dashboard -->
        <div class="reviews-dashboard reveal">
          <div class="dashboard-card">
            <div class="dashboard-rating">4.9 / 5</div>
            <p style="font-weight: 600; font-size: 15px;">Google Reviews</p>
            <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Based on 320+ verified patient ratings</p>
          </div>
          <div class="dashboard-card">
            <div class="dashboard-rating">4.8 / 5</div>
            <p style="font-weight: 600; font-size: 15px;">Justdial Reviews</p>
            <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Based on 500+ verified listings</p>
          </div>
          <div class="dashboard-card" style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <p style="font-size: 16px; font-weight: 600; color: var(--color-deep);">100% Authentic</p>
            <p style="font-size: 13px; opacity: 0.8; margin-top: 6px; padding: 0 16px;">We display unfiltered, patient-consented reviews. Trust, integrity, and medical transparency are our guiding pillars.</p>
          </div>
        </div>

        <!-- Review Wall -->
        <div class="reviews-wall reveal">
          ${state.reviews.map(rev => `
            <div class="review-card-full">
              <div class="review-header">
                <div class="testimonial-stars">
                  ${icons.star.repeat(rev.rating)}
                </div>
                <span class="review-platform">${rev.platform}</span>
              </div>
              <p class="testimonial-quote">"${rev.quote}"</p>
              <div style="border-top: 1px solid rgba(28, 24, 16, 0.05); padding-top: 12px; margin-top: 12px;">
                <p style="font-size: 14px; font-weight: 600; margin: 0;">${rev.author}</p>
                <p style="font-size: 11px; opacity: 0.7; margin: 0;">Service: ${rev.service}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top: 64px; text-align: center;" class="reveal">
          <p style="font-size: 16px; margin-bottom: 24px;">Want to share your recovery or treatment journey?</p>
          <a href="https://g.page/r/cosmiqcare/review" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Review Us on Google</a>
        </div>
      </div>
    </section>
  `;
}

function renderBook() {
  // Parse query params for default service/category
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const defaultSrv = urlParams.get('service') || '';
  const defaultCat = urlParams.get('cat') || '';

  if (defaultSrv && state.booking.step === 1) {
    state.booking.serviceCategory = defaultCat;
    state.booking.serviceName = defaultSrv;
  }

  const s = state.booking;

  let stepHTML = '';

  if (s.step === 1) {
    stepHTML = `
      <h3 style="font-family: var(--font-serif); font-size: 22px; margin-bottom: 24px;">Step 1: Choose Wellness Service</h3>
      
      <div class="form-group">
        <label class="form-label" for="booking-category">Treatment Category</label>
        <select class="form-select" id="booking-category" required>
          <option value="">-- Select Category --</option>
          <option value="skin" ${s.serviceCategory === 'skin' ? 'selected' : ''}>Laser &amp; Skin Resurfacing</option>
          <option value="hair" ${s.serviceCategory === 'hair' ? 'selected' : ''}>Hair Loss &amp; Restoration</option>
          <option value="injectables" ${s.serviceCategory === 'injectables' ? 'selected' : ''}>Injectables &amp; Cosmetic</option>
          <option value="corrective" ${s.serviceCategory === 'corrective' ? 'selected' : ''}>Corrective Dermatology</option>
          <option value="pigmentary" ${s.serviceCategory === 'pigmentary' ? 'selected' : ''}>Pigmentary Disorders</option>
          <option value="mind" ${s.serviceCategory === 'mind' ? 'selected' : ''}>Mind Wellness (Psychiatry)</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="booking-service">Procedure / Concern</label>
        <select class="form-select" id="booking-service" required ${!s.serviceCategory ? 'disabled' : ''}>
          <option value="">-- Select Treatment --</option>
          ${getServiceOptions(s.serviceCategory, s.serviceName)}
        </select>
      </div>

      <div class="form-actions">
        <div></div>
        <button class="btn btn-primary" id="btn-next" ${!s.serviceName ? 'disabled' : ''}>Next Step</button>
      </div>
    `;
  } else if (s.step === 2) {
    // Generate dates (Next 7 working days, excluding Sunday)
    const dates = [];
    let current = new Date();
    for (let i = 0; i < 10; i++) {
      current.setDate(current.getDate() + 1);
      if (current.getDay() === 0) continue; // Skip Sunday
      dates.push({
        val: current.toISOString().split('T')[0],
        label: current.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
      });
    }

    const timeSlots = [
      '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM',
      '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
      '05:00 PM', '05:30 PM'
    ];

    stepHTML = `
      <h3 style="font-family: var(--font-serif); font-size: 22px; margin-bottom: 24px;">Step 2: Date &amp; Time Selection</h3>
      <p style="font-size: 13px; opacity: 0.8; margin-top: -16px; margin-bottom: 20px;">CosmiQ operates Monday–Saturday, 12:00 PM – 6:00 PM. Closed Sundays.</p>

      <div class="form-group">
        <label class="form-label" for="booking-date">Preferred Date</label>
        <select class="form-select" id="booking-date" required>
          <option value="">-- Choose Date --</option>
          ${dates.map(d => `<option value="${d.val}" ${s.date === d.val ? 'selected' : ''}>${d.label}</option>`).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="booking-time">Available Slots</label>
        <select class="form-select" id="booking-time" required ${!s.date ? 'disabled' : ''}>
          <option value="">-- Choose Time Slot --</option>
          ${timeSlots.map(t => `<option value="${t}" ${s.timeSlot === t ? 'selected' : ''}>${t}</option>`).join('')}
        </select>
      </div>

      <div class="form-actions">
        <button class="btn btn-secondary" id="btn-prev">Back</button>
        <button class="btn btn-primary" id="btn-next" ${!s.timeSlot ? 'disabled' : ''}>Next Step</button>
      </div>
    `;
  } else if (s.step === 3) {
    stepHTML = `
      <h3 style="font-family: var(--font-serif); font-size: 22px; margin-bottom: 24px;">Step 3: Patient Information</h3>

      <div class="form-group">
        <label class="form-label" for="patient-name">Patient Full Name</label>
        <input type="text" class="form-input" id="patient-name" placeholder="Enter full name" value="${s.name}" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="patient-phone">Mobile Phone (WhatsApp Active)</label>
        <input type="tel" class="form-input" id="patient-phone" placeholder="10-digit number e.g., 9045166924" value="${s.phone}" pattern="[0-9]{10}" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="patient-email">Email Address</label>
        <input type="email" class="form-input" id="patient-email" placeholder="e.g., name@gmail.com" value="${s.email}" required>
      </div>

      <div class="form-actions">
        <button class="btn btn-secondary" id="btn-prev">Back</button>
        <button class="btn btn-primary" id="btn-next" ${!(s.name && s.phone.match(/^[0-9]{10}$/) && s.email) ? 'disabled' : ''}>Confirm Booking</button>
      </div>
    `;
  } else if (s.step === 4) {
    const formattedDate = new Date(s.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    const waText = encodeURIComponent(`Hello CosmiQ Clinic, I would like to book a clinical appointment.
Name: ${s.name}
Phone: ${s.phone}
Email: ${s.email}
Service: ${s.serviceName}
Date: ${formattedDate}
Time: ${s.timeSlot}
Consultation Fee: ₹400`);

    stepHTML = `
      <div style="text-align: center; padding: 16px 0;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background-color: var(--color-success); color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
          ${icons.check}
        </div>
        <h3 style="font-family: var(--font-serif); font-size: 26px; margin-bottom: 8px;">Appointment Request Ready</h3>
        <p style="font-size: 15px; opacity: 0.9; margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto;">
          Your booking information has been prepared. To secure your slot, click the button below to send details directly to our reception staff via WhatsApp.
        </p>

        <div class="form-summary-card">
          <div class="summary-row">
            <span class="summary-label">Patient Name:</span>
            <span class="summary-val">${s.name}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">Treatment:</span>
            <span class="summary-val">${s.serviceName}</span>
          </div>
          <div class="summary-row">
            <span class="summary-label">Appointment Time:</span>
            <span class="summary-val">${formattedDate}<br>${s.timeSlot}</span>
          </div>
          <div class="summary-row" style="border-bottom: none;">
            <span class="summary-label">Consultation Fee:</span>
            <span class="summary-val" style="font-weight: 700; color: var(--color-accent);">₹400</span>
          </div>
        </div>

        <div style="margin-top: 32px; display: flex; flex-direction: column; gap: 12px; align-items: center;">
          <a href="https://wa.me/919045166924?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background-color: #25D366; display: inline-flex; gap: 12px; padding: 14px 32px;">
            Confirm &amp; Send on WhatsApp
          </a>
          <button class="btn btn-secondary" onclick="resetBookingState(); location.hash='#/';" style="border: none;">Book Another Appointment</button>
        </div>
      </div>
    `;
  }

  return `
    <section class="section" style="padding-top: calc(var(--header-height) + var(--space-xl));">
      <div class="container">
        <div class="section-title-center reveal">
          <span class="eyebrow">Appointment</span>
          <h1 class="section-title">Schedule a Consultation</h1>
          <p class="section-subtitle">Reserve your slot with Dr. Harmeet Kaur. Consultation fee is ₹400. In-clinic procedural pricing is finalized post-diagnosis.</p>
        </div>

        <div class="booking-container reveal">
          <div class="booking-progress">
            <div class="progress-step ${s.step >= 1 ? 'active' : ''} ${s.step > 1 ? 'completed' : ''}">1</div>
            <div class="progress-step ${s.step >= 2 ? 'active' : ''} ${s.step > 2 ? 'completed' : ''}">2</div>
            <div class="progress-step ${s.step >= 3 ? 'active' : ''} ${s.step > 3 ? 'completed' : ''}">3</div>
            <div class="progress-step ${s.step >= 4 ? 'active' : ''}">✓</div>
          </div>

          <div id="booking-form-step-content">
            ${stepHTML}
          </div>
        </div>
      </div>
    </section>
  `;
}

function getServiceOptions(category, selectedVal) {
  if (!category) return '';
  return state.services
    .filter(s => s.category === category)
    .map(s => `<option value="${s.name}" ${selectedVal === s.name ? 'selected' : ''}>${s.name}</option>`)
    .join('');
}

function resetBookingState() {
  state.booking = {
    step: 1,
    serviceCategory: '',
    serviceName: '',
    date: '',
    timeSlot: '',
    name: '',
    phone: '',
    email: ''
  };
}

function renderContact() {
  return `
    <section class="section" style="padding-top: calc(var(--header-height) + var(--space-xl));">
      <div class="container">
        <div class="section-title-center reveal">
          <span class="eyebrow">Connect</span>
          <h1 class="section-title">Visit or Contact Us</h1>
          <p class="section-subtitle">Reach out to CosmiQ Clinic in Kamla Nagar, Agra. Send an inquiry or call to coordinate emergency consults.</p>
        </div>

        <div class="contact-grid">
          <!-- Information & Form -->
          <div class="info-cards reveal">
            <div class="info-card">
              <h3 class="info-card-title"><span class="text-accent">${icons.phone}</span> Call &amp; Chat</h3>
              <p style="font-size: 15px; margin-top: 8px;"><strong>Phone:</strong> +91 90451 66924</p>
              <p style="font-size: 15px;"><strong>Instagram:</strong> @cosmiqcare</p>
            </div>
            
            <div class="info-card">
              <h3 class="info-card-title"><span class="text-accent">${icons.clock}</span> Clinical Hours</h3>
              <p style="font-size: 15px; margin-top: 8px;"><strong>Monday – Saturday:</strong> 12:00 PM – 6:00 PM</p>
              <p style="font-size: 15px; color: var(--color-error); font-weight: 500;">Closed Sundays</p>
            </div>

            <div class="info-card">
              <h3 class="info-card-title"><span class="text-accent">${icons.mapPin}</span> Address &amp; Landmarks</h3>
              <p style="font-size: 15px; margin-top: 8px;">E-27, Pani Ki Tanki Rd, near Hridyam Hospital, Professors Colony, Ghatwasan, Kamla Nagar, Agra, UP – 282004</p>
              <p style="font-size: 13px; opacity: 0.8; margin-top: 8px;"><strong>Key Landmark:</strong> Near Hridyam Hospital, ~1.5 km from Yamuna Bridge Railway Station.</p>
            </div>
          </div>

          <!-- Contact Form / Map Placeholder -->
          <div class="reveal reveal-delay-1" style="display: flex; flex-direction: column; gap: var(--space-md);">
            <div class="booking-container" style="width: 100%; max-width: none; margin: 0;">
              <h3 style="font-family: var(--font-serif); font-size: 20px; margin-bottom: 20px;">Send an Inquiry</h3>
              <form id="contact-enquiry-form">
                <div class="form-group">
                  <label class="form-label" for="contact-name">Your Name</label>
                  <input type="text" class="form-input" id="contact-name" placeholder="Full name" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-phone">Phone Number</label>
                  <input type="tel" class="form-input" id="contact-phone" placeholder="10-digit mobile number" pattern="[0-9]{10}" required>
                </div>
                <div class="form-group">
                  <label class="form-label" for="contact-message">Message / Concern</label>
                  <textarea class="form-textarea" id="contact-message" rows="4" placeholder="How can we assist you?" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Inquiry</button>
              </form>
              <div id="contact-form-success" style="display: none; text-align: center; margin-top: 16px; color: var(--color-success); font-weight: 500;">
                ✓ Inquiry submitted successfully! Our clinic will reach out to you shortly.
              </div>
            </div>
            
            <div class="map-container">
              <!-- Premium Styled Google Maps Iframe pointing near Kamla Nagar, Agra -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m4!2sE-27%20Professors%20Colony%20Kamla%20Nagar%20Agra!3m2!1i1024!2i768!4f13.1!3m3!1m2!2sProfessors%20Colony%2C%20Kamla%20Nagar%20Agra!5e0!3m2!1sen!2sin!4v1719825000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBlog() {
  return `
    <section class="section" style="padding-top: calc(var(--header-height) + var(--space-xl));">
      <div class="container">
        <div class="section-title-center reveal">
          <span class="eyebrow">Skin Journal</span>
          <h1 class="section-title">Skin, Hair &amp; Mind Insights</h1>
          <p class="section-subtitle">Clinical education, tips, and treatment advice from Dr. Harmeet Kaur to guide your daily wellness rituals.</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 32px;" class="services-grid reveal">
          ${state.blog.map(post => `
            <div class="service-detail-card" style="cursor: pointer;" onclick="location.hash='#/blog-post?id=${post.id}'">
              <span class="eyebrow" style="font-size: 11px; margin-bottom: 8px;">${post.category}</span>
              <h3 class="service-detail-title" style="font-size: 22px; line-height: 1.2; margin-bottom: 12px; transition: color var(--transition-fast);">${post.title}</h3>
              <p class="service-detail-desc" style="margin-bottom: 20px;">${post.summary}</p>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; font-size: 12px; opacity: 0.7; border-top: 1px solid rgba(28, 24, 16, 0.05); padding-top: 12px;">
                <span>${post.date}</span>
                <span>${post.readTime}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderBlogPost() {
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
  const postId = urlParams.get('id');
  const post = state.blog.find(p => p.id === postId);

  if (!post) {
    return `
      <section class="section" style="padding-top: calc(var(--header-height) + var(--space-xl)); text-align: center;">
        <div class="container">
          <h2 class="section-title">Article Not Found</h2>
          <p style="margin-bottom: 24px;">The article you are looking for does not exist or has been moved.</p>
          <a href="#/blog" class="btn btn-primary">Back to Skin Journal</a>
        </div>
      </section>
    `;
  }

  return `
    <article class="section" style="padding-top: calc(var(--header-height) + var(--space-xl));">
      <div class="container" style="max-width: 800px;">
        <div style="margin-bottom: 40px;" class="reveal">
          <a href="#/blog" class="btn btn-text" style="font-size: 13px; text-transform: uppercase; margin-bottom: 24px; padding: 0;">Back to Journal</a>
          <span class="eyebrow" style="margin-bottom: 8px;">${post.category}</span>
          <h1 style="font-size: clamp(2rem, 3.5vw, 3rem); line-height: 1.15; margin-bottom: 16px;">${post.title}</h1>
          <div style="display: flex; gap: 16px; font-size: 14px; opacity: 0.7;">
            <span>By Dr. Harmeet Kaur</span>
            <span>•</span>
            <span>${post.date}</span>
            <span>•</span>
            <span>${post.readTime}</span>
          </div>
        </div>

        <div class="reveal reveal-delay-1" style="font-size: 16px; line-height: 1.8; opacity: 0.95;">
          ${post.content}
        </div>

        <div style="margin-top: 64px; border-top: 1px solid rgba(28, 24, 16, 0.1); padding-top: 32px;" class="reveal">
          <h3 style="font-family: var(--font-serif); font-size: 22px; margin-bottom: 12px;">Consult Dr. Harmeet Kaur</h3>
          <p style="font-size: 14px; opacity: 0.8; margin-bottom: 24px;">Have questions about hair restoration, laser suitability, or general dermatology concerns? Meet Dr. Harmeet Kaur in Agra for a customized clinical assessment.</p>
          <a href="#/book?service=${encodeURIComponent(post.title)}" class="btn btn-primary">Book Consultation (₹400)</a>
        </div>
      </div>
    </article>
  `;
}

// ----------------------------------------------------
// DYNAMIC EVENT BINDERS & HANDLERS
// ----------------------------------------------------

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(element => {
    observer.observe(element);
  });
}

function initSliders() {
  // Draggable comparison slider helper
  function setupSlider(containerId, beforeOverlayId, handleId) {
    const container = document.getElementById(containerId);
    const beforeOverlay = document.getElementById(beforeOverlayId);
    const handle = document.getElementById(handleId);

    if (!container || !beforeOverlay || !handle) return;

    let isDragging = false;

    function moveSlider(clientX) {
      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;

      // Bound bounds
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;

      beforeOverlay.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    }

    // Pointer Events (Mouse + Touch)
    handle.addEventListener('pointerdown', (e) => {
      isDragging = true;
      handle.setPointerCapture(e.pointerId);
    });

    container.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      moveSlider(e.clientX);
    });

    window.addEventListener('pointerup', () => {
      if (isDragging) {
        isDragging = false;
      }
    });
    
    // Set initial middle position
    beforeOverlay.style.width = '50%';
    handle.style.left = '50%';
  }

  // Bind Home slider
  setupSlider('home-ba-slider', 'slider-before-overlay', 'slider-handle');

  // Bind Gallery sliders
  setupSlider('gallery-slider-1', 'gallery-before-overlay-1', 'gallery-handle-1');
  setupSlider('gallery-slider-2', 'gallery-before-overlay-2', 'gallery-handle-2');
}

function initBookingListeners() {
  const categorySelect = document.getElementById('booking-category');
  const serviceSelect = document.getElementById('booking-service');
  const dateSelect = document.getElementById('booking-date');
  const timeSelect = document.getElementById('booking-time');
  const patientName = document.getElementById('patient-name');
  const patientPhone = document.getElementById('patient-phone');
  const patientEmail = document.getElementById('patient-email');

  const btnNext = document.getElementById('btn-next');
  const btnPrev = document.getElementById('btn-prev');

  const s = state.booking;

  // Step 1: Services selection
  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      s.serviceCategory = e.target.value;
      s.serviceName = ''; // reset selection
      
      // Update procedures dropdown
      if (s.serviceCategory) {
        serviceSelect.innerHTML = `<option value="">-- Select Treatment --</option>${getServiceOptions(s.serviceCategory, '')}`;
        serviceSelect.removeAttribute('disabled');
      } else {
        serviceSelect.innerHTML = `<option value="">-- Select Treatment --</option>`;
        serviceSelect.setAttribute('disabled', 'true');
      }
      
      if (btnNext) btnNext.setAttribute('disabled', 'true');
    });
  }

  if (serviceSelect) {
    serviceSelect.addEventListener('change', (e) => {
      s.serviceName = e.target.value;
      if (btnNext) {
        if (s.serviceName) {
          btnNext.removeAttribute('disabled');
        } else {
          btnNext.setAttribute('disabled', 'true');
        }
      }
    });
  }

  // Step 2: Date & Time selection
  if (dateSelect) {
    dateSelect.addEventListener('change', (e) => {
      s.date = e.target.value;
      s.timeSlot = '';
      if (s.date) {
        timeSelect.removeAttribute('disabled');
      } else {
        timeSelect.setAttribute('disabled', 'true');
      }
      if (btnNext) btnNext.setAttribute('disabled', 'true');
    });
  }

  if (timeSelect) {
    timeSelect.addEventListener('change', (e) => {
      s.timeSlot = e.target.value;
      if (btnNext) {
        if (s.timeSlot) {
          btnNext.removeAttribute('disabled');
        } else {
          btnNext.setAttribute('disabled', 'true');
        }
      }
    });
  }

  // Step 3: Patient Info
  if (patientName || patientPhone || patientEmail) {
    const validateInfo = () => {
      s.name = patientName.value.trim();
      s.phone = patientPhone.value.trim();
      s.email = patientEmail.value.trim();
      
      const phoneValid = s.phone.match(/^[0-9]{10}$/);
      const emailValid = s.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

      if (btnNext) {
        if (s.name && phoneValid && emailValid) {
          btnNext.removeAttribute('disabled');
        } else {
          btnNext.setAttribute('disabled', 'true');
        }
      }
    };

    if (patientName) patientName.addEventListener('input', validateInfo);
    if (patientPhone) patientPhone.addEventListener('input', validateInfo);
    if (patientEmail) patientEmail.addEventListener('input', validateInfo);
  }

  // Step transitions
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      s.step += 1;
      navigateStep();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      s.step -= 1;
      navigateStep();
    });
  }
}

function navigateStep() {
  const viewport = document.getElementById('app-viewport');
  // Re-render only booking view
  viewport.innerHTML = renderBook();
  // Scroll to booking container top
  const container = document.querySelector('.booking-container');
  if (container) {
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  // Re-bind listeners for the new step
  initBookingListeners();
  initScrollReveal();
}

function initContactForm() {
  const contactForm = document.getElementById('contact-enquiry-form');
  const successMsg = document.getElementById('contact-form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate submission
      const name = document.getElementById('contact-name').value;
      const phone = document.getElementById('contact-phone').value;
      const message = document.getElementById('contact-message').value;

      console.log('Enquiry received:', { name, phone, message });

      contactForm.reset();
      successMsg.style.display = 'block';

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    });
  }
}

// ----------------------------------------------------
// ROUTER ENGINE
// ----------------------------------------------------

function router() {
  const hash = window.location.hash || '#/';
  const viewport = document.getElementById('app-viewport');
  
  // Clear any open dropdowns or drawers
  const toggle = document.getElementById('mobile-nav-toggle');
  const menu = document.getElementById('mobile-nav-menu');
  if (toggle && menu) {
    toggle.classList.remove('open');
    menu.classList.remove('open');
  }

  // Page Routing Cases
  if (hash.startsWith('#/about')) {
    viewport.innerHTML = renderAbout();
  } else if (hash.startsWith('#/services')) {
    viewport.innerHTML = renderServices();
  } else if (hash.startsWith('#/gallery')) {
    viewport.innerHTML = renderGallery();
  } else if (hash.startsWith('#/reviews')) {
    viewport.innerHTML = renderReviews();
  } else if (hash.startsWith('#/blog-post')) {
    viewport.innerHTML = renderBlogPost();
  } else if (hash.startsWith('#/blog')) {
    viewport.innerHTML = renderBlog();
  } else if (hash.startsWith('#/book')) {
    viewport.innerHTML = renderBook();
    initBookingListeners();
  } else if (hash.startsWith('#/contact')) {
    viewport.innerHTML = renderContact();
    initContactForm();
  } else {
    // Default Home Page
    viewport.innerHTML = renderHome();
  }

  // Universal page setup: highlights navbar link, runs sliders, triggers reveals
  updateActiveNavbarLink(hash);
  initSliders();
  initScrollReveal();

  // Scroll viewport to top
  window.scrollTo(0, 0);
}

function updateActiveNavbarLink(hash) {
  const path = hash.split('?')[0]; // strip query params
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    if (link.getAttribute('data-hash') === path) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ----------------------------------------------------
// INITIALIZATION ON LOAD
// ----------------------------------------------------

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  initLayout();
  router();
});
