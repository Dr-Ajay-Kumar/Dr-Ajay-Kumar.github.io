/* ═══════════════════════════════════════════════════════
   Prof. (Dr.) Ajay Kumar — Official Portfolio JavaScript
   Vice President, IETE New Delhi | HoD (CSE), RTCIT Ranchi
   ═══════════════════════════════════════════════════════ */

'use strict';

// ── Verified Certificates Database ─────────────────────────────────────────────
const CERTS_DB = {
  'cert-page-02.jpg': {
    title: 'Doctor of Philosophy (Ph.D.) in Computer Science',
    issuer: 'Usha Martin University, Ranchi (UGC Recognized)',
    date: 'Awarded: 10 Feb 2023 | Issued: 04 May 2023',
    credential: 'Serial No: 000561 | Grade: A+',
    tag: 'Doctorate',
    desc: 'Awarded Ph.D. in Computer Science & Engineering on thesis "IoT Based Vehicle Accident Monitoring System using Raspberry Pi".'
  },
  'cert-page-03.jpg': {
    title: 'Fellow of IETE (FIETE)',
    issuer: 'The Institution of Electronics and Telecommunication Engineers, New Delhi',
    date: 'Elected: 11 Dec 2012 | Sealed: 31 Dec 2012',
    credential: 'Membership No: F-037192 | Certificate No: 3215',
    tag: 'Apex Fellowship',
    desc: 'Elected as Lifetime Fellow of IETE — India’s premier national professional society for electronics and telecommunications.'
  },
  'cert-page-17.jpg': {
    title: 'Chartered Engineer (IETE)',
    issuer: 'The Institution of Electronics and Telecommunication Engineers, New Delhi',
    date: 'Conferred: 23 Sep 2022 | Sealed: 26 Sep 2022',
    credential: 'Certificate No: CE/0275 | Membership No: F-037192',
    tag: 'Chartered Status',
    desc: 'Conferred the prestigious title of Chartered Engineer (CEng) by virtue of corporate membership, professional training and engineering experience.'
  },
  'cert-page-04.jpg': {
    title: 'AMIETCE — M.Tech Equivalence in Computer Science',
    issuer: 'The Institution of Electronics and Telecommunication Engineers, New Delhi',
    date: 'Completed: July 2000 | Awarded: 04 October 2000',
    credential: 'Reg No: 96123 | Cert No: 236 | 1st Division (72%)',
    tag: 'M.Tech Equiv',
    desc: 'Advanced Level Course in Computer Science, recognized by Govt. of India as equivalent to M.Tech (CS) for Central Government posts (Notification F.1-56/88-T.13/TD-V).'
  },
  'cert-page-12.jpg': {
    title: '5G Mobile Communications Certificate Course',
    issuer: 'NTIPRIT, Department of Telecommunications (DoT), Govt. of India, Ghaziabad',
    date: '10th – 14th April 2023 | Issued: 17 April 2023',
    credential: 'Certificate No: 2023WA5GCB4009 | DigiLocker Verified',
    tag: 'Master Trainer 5G',
    desc: 'Completed 1-Week / 15-Hour Online Certificate Course in 5G Mobile Communications as Master Trainer, Telecom Sector Skill Council (TSSC), Ranchi.'
  },
  'cert-page-13.jpg': {
    title: 'Certified Network Engineer for IPv6 (Gold)',
    issuer: 'NLTVC Education / Global IPv6 Forum Logo Program',
    date: 'Awarded: 25 February 2021',
    credential: 'Verification No: CNE6 2170020115',
    tag: 'IPv6 Gold',
    desc: 'Successfully certified as Network Engineer for IPv6 (Gold Level) under the international Global IPv6 Forum Education Program.'
  },
  'cert-page-15.jpg': {
    title: 'Certified Network Engineer for IPv6 (Silver)',
    issuer: 'NLTVC Education / Global IPv6 Forum Logo Program',
    date: 'Awarded: 04 February 2021',
    credential: 'Verification No: CNE6 2170020111',
    tag: 'IPv6 Silver',
    desc: 'Certified Network Engineer for IPv6 (Silver Level) covering IPv6 addressing, routing protocols, and dual-stack architecture.'
  },
  'cert-page-11.jpg': {
    title: 'Advisory Board Member — Blockchain For Productivity Forum',
    issuer: 'Blockchain For Productivity Forum (BFPF), New Delhi',
    date: 'Effective from: 08 May 2023',
    credential: 'Apex Advisory Board Level',
    tag: 'Advisory Board',
    desc: 'Inducted as Apex Advisory Board Member for Policy Research, Article Publication, Advocacy, R&D, and Strategic Project Execution.'
  },
  'cert-page-10.jpg': {
    title: 'Invited Talk Speaker — 5th IETE Innovators Industry Meet',
    issuer: 'The Institution of Electronics and Telecommunication Engineers, New Delhi',
    date: '26th & 27th August 2021',
    credential: 'Theme: Aerospace & Defence (Atmanirbhar Bharat)',
    tag: 'Invited Speaker',
    desc: 'Delivered Invited Keynote Talk on "Modern Communication — Broadband Access Technology for Defense Networks" at IETE Headquarters, Lodi Road, New Delhi.'
  },
  'cert-page-05.jpg': {
    title: 'Chief General Manager Commendation & Service Letter',
    issuer: 'Chief General Manager, BSNL Jharkhand Telecom Circle, Ranchi',
    date: 'Official Commendation Order',
    credential: 'Executive Commendation — Exemplary Character',
    tag: 'BSNL Leadership',
    desc: 'Certifying 26 years 11 months of loyal, dependable, and exemplary service in DoT/BSNL as Faculty Head of Broadband & Access Technology and AGM HR/Admin.'
  },
  'cert-page-06.jpg': {
    title: 'BSNL 27-Year Service Chronological Record',
    issuer: 'Department of Telecommunications (DoT) & BSNL Jharkhand',
    date: 'Chronological Posting Record (1995 – 2020)',
    credential: 'DoT / BSNL Official Record',
    tag: 'Official Record',
    desc: 'Official service record documenting key roles: DOTSOFT development core team, NIB A1 Node, Apex Training Centre faculty, and AGM Network Planning.'
  },
  'cert-page-01.jpg': {
    title: 'Military College of EME (MCEME) Experience Certificate',
    issuer: 'Corps of Electrical & Mechanical Engineers (EME), Indian Army, Secunderabad',
    date: '09 January 1992',
    credential: 'Corps of EME / MCEME Secunderabad',
    tag: 'Defence & Teaching',
    desc: 'Certified technical instructor & supervisor experience in telecommunication, microprocessors, computer software (Assembly, BASIC), and defence communication systems.'
  },
  'cert-page-07.jpg': {
    title: 'IETE Hyderabad Centre — IoT Knowledge Webinar',
    issuer: 'IETE Hyderabad Centre',
    date: '02 August 2020',
    credential: 'Cert ID: HS02NO-CE000033 | Governing Council Member',
    tag: 'Webinar',
    desc: 'Participated as IETE Governing Council Member in "IoT — Its Evolution, Objectives and Implementation".'
  },
  'cert-page-08.jpg': {
    title: 'IETE Ahmedabad & LDCE — Recommendation Systems & NLP',
    issuer: 'IETE Ahmedabad Centre & L.D. College of Engineering',
    date: '12 July 2020',
    credential: 'IETE Governing Council Member',
    tag: 'AI / NLP Webinar',
    desc: 'Participated in Webinar on Online Recommendation Systems & Natural Language Processing.'
  }
};

// ── Navbar & Scroll Behavior ───────────────────────────────────────────────────
const navbar  = document.getElementById('navbar');
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 30);
  if (backTop) backTop.classList.toggle('visible', y > 500);
});

if (backTop) {
  backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Mobile Dropdown Menu Navigation ──────────────────────────────────────────
const mobileMenuBtn     = document.getElementById('mobileMenuBtn') || document.getElementById('hamburger');
const mobileNav         = document.getElementById('mobileNav');
const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

function toggleMobileMenu(forceClose = false) {
  if (!mobileNav || !mobileMenuBtn) return;
  const shouldOpen = forceClose ? false : !mobileNav.classList.contains('open');
  mobileNav.classList.toggle('open', shouldOpen);
  mobileMenuBtn.classList.toggle('open', shouldOpen);
  mobileMenuBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
  if (mobileNavBackdrop) {
    mobileNavBackdrop.classList.toggle('open', shouldOpen);
  }
}

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMobileMenu();
  });

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', () => toggleMobileMenu(true));
  }

  document.querySelectorAll('.mob-link, .btn-mob-cv-primary, .btn-mob-cv-secondary').forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu(true);
    });
  });

  document.addEventListener('click', (e) => {
    if (navbar && !navbar.contains(e.target)) {
      toggleMobileMenu(true);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      toggleMobileMenu(true);
    }
  });
}

// ── Smooth Scroll for Anchor Links ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId === '#' || targetId === '') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  });
});

// ── Active Nav Highlighting ────────────────────────────────────────────────────
const navAnchors = document.querySelectorAll('.nav-links a');
const sections   = document.querySelectorAll('section[id]');

if (sections.length > 0) {
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const match = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (match) match.classList.add('active');
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });

  sections.forEach(s => sectionObs.observe(s));
}

// ── Scroll Reveal Animation ────────────────────────────────────────────────────
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// ── Skill Bar Fill Animation ───────────────────────────────────────────────────
const barObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.sbl-fill').forEach((fill) => {
        const w = fill.getAttribute('data-w') || '85';
        fill.style.setProperty('--w', w);
        fill.classList.add('animated');
      });
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('.skill-bar-list').forEach(el => barObs.observe(el));

// ── Animated Number Counters ───────────────────────────────────────────────────
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach((el) => {
        const target = parseInt(el.dataset.count, 10);
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target);
          el.textContent = cur;
          if (cur >= target) clearInterval(timer);
        }, 35);
      });
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });

const statsBar = document.querySelector('.hero-stats');
if (statsBar) counterObs.observe(statsBar);

// ── Typewriter Effect ──────────────────────────────────────────────────────────
const phrases = [
  'Vice President — IETE, New Delhi',
  'Professor & HoD (CSE) — RTCIT, Ranchi',
  'Ph.D. in Computer Science & Engineering (Awarded 2023)',
  'Former AGM — DoT / BSNL (27 Years Service)',
  'Chartered Engineer & Fellow IETE (F-037192)',
  'Master Trainer — IPv6 (Gold) & 5G (NTIPRIT / DoT)',
  'Conference Convener — ICACA 2026 (Springer Nature)',
  'Journal Reviewer — IETE Journal of Research (Taylor & Francis)'
];

let pIdx = 0, cIdx = 0, del = false;
const typedEl = document.getElementById('typed-text');

function typeStep() {
  if (!typedEl) return;
  const ph = phrases[pIdx];
  typedEl.textContent = del ? ph.slice(0, --cIdx) : ph.slice(0, ++cIdx);
  let delay = del ? 25 : 55;
  if (!del && cIdx === ph.length) { delay = 2200; del = true; }
  if (del && cIdx === 0)         { del = false; pIdx = (pIdx + 1) % phrases.length; delay = 350; }
  setTimeout(typeStep, delay);
}
typeStep();

// ── Projects Category Filter ───────────────────────────────────────────────────
const filterBtns = document.querySelectorAll('.pf-btn');
const projCards  = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projCards.forEach(card => {
      const cats = (card.dataset.category || '').split(' ');
      const show = filter === 'all' || cats.includes(filter);
      card.style.display = show ? '' : 'none';
    });
  });
});

// ── Authentic Certificate Modal Viewer ─────────────────────────────────────────
const modal      = document.getElementById('certModal');
const cmBackdrop = document.getElementById('cmBackdrop');
const cmClose    = document.getElementById('cmClose');
const cmCloseBtn = document.getElementById('cmCloseBtn');
const cmTitle    = document.getElementById('cm-title');
const cmBody     = document.getElementById('cmBody');
const cmDownload = document.getElementById('cmDownload');

function openCertModal(imageFile, customTitle) {
  if (!modal) return;
  const data = CERTS_DB[imageFile] || {
    title: customTitle || 'Official Certificate',
    issuer: 'Authorized Educational / Professional Body',
    date: 'Verified Official Record',
    credential: 'Dr. Ajay Kumar Portfolio',
    tag: 'Official Document',
    desc: 'Original verified scanned certificate document.'
  };

  const titleToDisplay = customTitle || data.title;
  if (cmTitle) cmTitle.textContent = titleToDisplay;

  if (cmBody) {
    cmBody.innerHTML = `
      <div class="cm-image-wrapper">
        <div class="cm-cert-meta-bar">
          <div>
            <strong>${data.issuer}</strong>
            <span>📅 ${data.date} &nbsp;•&nbsp; 🔖 ${data.credential}</span>
          </div>
          <span class="cm-badge">${data.tag || 'Verified'}</span>
        </div>
        <div class="cm-img-container">
          <img src="certificates/${imageFile}" alt="${titleToDisplay}" class="cm-cert-full-img" loading="eager" />
        </div>
        <p class="cm-caption">${data.desc}</p>
      </div>
    `;
  }

  if (cmDownload) {
    cmDownload.onclick = () => {
      const a = document.createElement('a');
      a.href = `certificates/${imageFile}`;
      const cleanName = titleToDisplay.replace(/[^a-zA-Z0-9_-]/g, '_');
      a.download = `${cleanName}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  if (!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

window.openCertModal = openCertModal;
window.closeCertModal = closeCertModal;

if (cmClose)    cmClose.addEventListener('click', closeCertModal);
if (cmCloseBtn) cmCloseBtn.addEventListener('click', closeCertModal);
if (cmBackdrop) cmBackdrop.addEventListener('click', closeCertModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
    closeCertModal();
  }
});

// ── CV Download Tracking & Notification ─────────────────────────────────────────
document.querySelectorAll('a[download*="CV"], .btn-nav-cv, #dlCvBtn, #dlCvHeroBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    const origText = btn.innerHTML;
    const downloadMsg = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:15px;height:15px;display:inline-block;vertical-align:middle;margin-right:4px;">
        <path d="M5 13l4 4L19 7"/>
      </svg>
      Downloading CV...
    `;
    btn.innerHTML = downloadMsg;
    setTimeout(() => {
      btn.innerHTML = origText;
    }, 2400);
  });
});

console.log('Prof. (Dr.) Ajay Kumar Portfolio initialized successfully.');
