// Language translations (English + Kiswahili as "Kishalili")
const translations = {
  en: {
    "nav.home":"Home","nav.about":"About Us","nav.experience":"Experience","nav.education":"Education","nav.services":"Services",
    "nav.blog":"Our Blog","nav.careers":"Careers","nav.network":"Our Network","nav.api":"Developer API","nav.outside":"Outside",
    "nav.contact":"Contact",
    "home.title":"Hello — I’m Ichumar Paul","home.subtitle":"Web Developer | Designer | Tech Innovator","home.cta":"Learn more",
    "about.title":"About Us","about.text":"I build modern, accessible web experiences. I love translating product ideas into fast, polished interfaces — and mentoring junior developers along the way.","about.mission":"Mission: Deliver value through thoughtful design & code.","about.values":"Values: Simplicity, clarity, performance.","about.location":"Location: Moroto, Uganda",
    "experience.title":"Experience",
    "education.title":"Education",
    "services.title":"Services","services.web":"Web Development","services.webdesc":"Responsive websites with modern UX/UI.","services.design":"UI/UX Design","services.designdesc":"Design systems, prototypes, user testing.","services.consult":"Tech Consulting","services.consultdesc":"Architecture reviews and mentoring.",
    "blog.title":"Our Blog","blog.readmore":"Read more",
    "careers.title":"Careers","careers.text":"We're growing — see open roles and apply below.","careers.apply":"Apply",
    "network.title":"Our Network","network.text":"Strategic partners and community channels.",
    "api.title":"Developer API","api.text":"Simple example endpoints to get you started.","api.copy":"Copy snippet","api.note":"Note: these are sample endpoints — connect to your backend or serverless functions to make them real.",
    "outside.title":"Outside","outside.text":"Useful external resources and profiles.",
    "contact.title":"Contact","contact.send":"Send",
    "modal.title":"Apply for role","modal.submit":"Submit","modal.close":"Close"
  },
  sw: {
    // Swahili translations (replace if you prefer a different "Kishalili" dialect)
    "nav.home":"Mwanzo","nav.about":"Kuhusu Sisi","nav.experience":"Uzoefu","nav.education":"Elimu","nav.services":"Huduma",
    "nav.blog":"Blogu Yetu","nav.careers":"Ajira","nav.network":"Mtandao Wetu","nav.api":"API ya Developer","nav.outside":"Nje",
    "nav.contact":"Wasiliana",
    "home.title":"Hujambo — Mimi ni Ichumar Paul","home.subtitle":"Mtaalamu wa Wavuti | Mbunifu | Mvumbuzi wa Teknolojia","home.cta":"Jifunze zaidi",
    "about.title":"Kuhusu Sisi","about.text":"Naunda uzoefu wa wavuti wa kisasa na unaoweza kufikiwa. Napenda kubadilisha mawazo ya bidhaa kuwa interfaces za haraka na zenye urembo — pia kumsaidia waendelezaji wachanga.","about.mission":"Dhamira: Kuleta thamani kupitia muundo na msimbo wenye mawazo.","about.values":"Thamani: Urahisi, uwazi, utendaji.","about.location":"Mahali: Moroto, Uganda",
    "experience.title":"Uzoefu",
    "education.title":"Elimu",
    "services.title":"Huduma","services.web":"Uundaji wa Wavuti","services.webdesc":"Tovuti zinazojibu zenye UX/UI ya kisasa.","services.design":"UI/UX Ubunifu","services.designdesc":"Mifumo ya muundo, prototaipu, majaribio ya watumiaji.","services.consult":"Ushauri wa Teknolojia","services.consultdesc":"Mapitio ya usanifu na uongozi.",
    "blog.title":"Blogu Yetu","blog.readmore":"Soma zaidi",
    "careers.title":"Ajira","careers.text":"Tunayopanuka — angalia nafasi zilizo wazi na uombe.","careers.apply":"Omba",
    "network.title":"Mtandao Wetu","network.text":"Washirika wa kimkakati na njia za jamii.",
    "api.title":"API ya Developer","api.text":"Mfano wa endpoints kuanza nayo.","api.copy":"Nakili kificho","api.note":"Kumbuka: hizi ni endpoints za mfano — ungana na backend yako kuziweka hai.",
    "outside.title":"Nje","outside.text":"Rasilimali za nje na wasifu muhimu.",
    "contact.title":"Wasiliana","contact.send":"Tuma",
    "modal.title":"Ombi la nafasi","modal.submit":"Tuma","modal.close":"Funga"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.classList.toggle('show');
  });

  // Smooth scroll and active link
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href');
      document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
      navList.classList.remove('show');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Simple contact form (fake submit)
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  form.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.textContent = '';
    if (!form.name.value || !form.email.value || !form.message.value) {
      formMessage.textContent = (currentLang() === 'sw') ? 'Tafadhali jaza sehemu zote.' : 'Please fill all fields.';
      formMessage.style.color = 'crimson';
      return;
    }
    formMessage.style.color = 'green';
    formMessage.textContent = (currentLang() === 'sw') ? 'Asante — ujumbe umepelekwa!' : 'Thanks — your message was sent!';
    form.reset();
  });

  // Apply button -> open modal
  const applyBtns = document.querySelectorAll('.apply-btn');
  const modal = document.getElementById('applyModal');
  const modalRole = document.getElementById('modalRole');
  const modalClose = document.getElementById('modalClose');
  const applyForm = document.getElementById('applyForm');
  const applyMessage = document.getElementById('applyMessage');

  applyBtns.forEach(b => {
    b.addEventListener('click', () => {
      const role = b.getAttribute('data-role') || 'Role';
      modalRole.textContent = role;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden','false');
    });
  });

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Fake submit
    applyMessage.style.color = 'green';
    applyMessage.textContent = (currentLang()==='sw') ? 'Ombi limepokelewa — tutakuarifu.' : 'Application received — we will be in touch.';
    applyForm.reset();
    setTimeout(closeModal, 1500);
  });

  function closeModal(){
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden','true');
    applyMessage.textContent = '';
  }

  // Copy API snippet
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const snip = btn.getAttribute('data-snippet') || '';
      navigator.clipboard?.writeText(snip).then(() => {
        btn.textContent = translations[currentLang()]['api.copy'] || 'Copy snippet';
        btn.style.opacity = '0.9';
        setTimeout(()=>{ btn.textContent = translations[currentLang()]['api.copy']; btn.style.opacity = ''; }, 1200);
      }).catch(()=> {
        alert('Copy failed — please select and copy manually.');
      });
    });
  });

  // Simple copy for modal (if needed) - not necessary now

  // Language switching
  const langSelect = document.getElementById('langSelect');
  // remember previous
  const stored = localStorage.getItem('siteLang') || 'en';
  langSelect.value = stored;
  applyTranslations(stored);

  langSelect.addEventListener('change', () => {
    const v = langSelect.value;
    localStorage.setItem('siteLang', v);
    applyTranslations(v);
  });

  // Helper: which language currently
  window.currentLang = () => (localStorage.getItem('siteLang') || 'en');

  // IntersectionObserver for active nav highlight
  const sections = document.querySelectorAll('main .section');
  const navLinks = document.querySelectorAll('.nav-list a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      }
    });
  }, {threshold: 0.45});
  sections.forEach(s => observer.observe(s));
});

// Apply translations by data-key attributes
function applyTranslations(lang) {
  const dict = translations[lang] || translations['en'];
  // find all elements with data-key
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // update nav link text (they use data-key as well)
  document.querySelectorAll('#nav-list a').forEach(a => {
    const k = a.getAttribute('data-key');
    if (k && dict[k]) a.textContent = dict[k];
  });

  // update buttons that were plain text (copy buttons)
  document.querySelectorAll('.copy-btn').forEach(btn => {
    const k = 'api.copy';
    btn.textContent = dict[k] || btn.textContent;
  });

  // modal labels (submit/close)
  document.querySelectorAll('[data-key]').forEach(el => {
    // already handled above
  });
}
