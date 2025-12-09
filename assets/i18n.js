// ... existing code (if any) ...

// Basic translations map (expand with all your site texts)
const translations = {
  ar: {
    siteName: "Dream Media",
    siteCaption: "التسويق والحلول الإعلامية",
    "nav.about": "من هو مصطفى؟",
    "nav.experience": "الخبرة",
    "nav.companies": "الشركات",
    "nav.training": "التدريب",
    "nav.services": "الخدمات",
    "nav.contact": "تواصل",
    "nav.locations": "أماكن الورش",
    "nav.home": "الرئيسية",

    "hero.title": "مصطفى موفق ",
    "hero.subtitle": "مدرّب أعمال – مستشار تسويق – رائد أعمال، مؤسس دريم ميديا و Forsa Academy وشريك مؤسس في فخامة.",
    "tags.0": "التسويق الرقمي",
    "tags.1": "تطوير الأعمال",
    "tags.2": "بناء الأنظمة",
    "tags.3": "الذكاء الاصطناعي في التسويق",
    "cta.book": "احجز جلسة استشارية الآن",
    "cta.team": "اطلب تدريب لفريقك",
    "cta.contact": "تواصل مباشرة",
    "cta.testimonials": "آراء العملاء",
    "stats.exp.number": "+10",
    "stats.exp.label": "سنوات خبرة",
    "stats.fb.number": "114K+",
    "stats.fb.label": "متابع على فيس بوك",
    "stats.ig.number": "64K+",
    "stats.ig.label": "متابع على إنستغرام",
    "stats.linkedin.number": "لينكدن",
    "stats.linkedin.label": "مدرّب تسويق رقمي على لينكدن في العراق",

    "profile.name": "مصطفى موفق",
    "profile.role": "مؤسس ومستشار تسويق",
    "profile.desc": "يساعد الشركات والفرق على بناء استراتيجيات نمو تعتمد على البيانات والذكاء الاصطناعي مع تركيز على التنفيذ.",

    "section.about.title": "من هو مصطفى موفق؟",
    "section.about.p1": "مصطفى موفق عبد الرسول هو أحد أبرز الأسماء في مجال التسويق الرقمي في العراق، يمتلك خبرة عملية تمتد لأكثر من 10 سنوات.",
    "section.about.p2": "ساعد عشرات الشركات والوزارات والمؤسسات في بناء أنظمة تسويق متكاملة تعتمد على البيانات.",
    "section.experience.title": "الخبرة والمسيرة المهنية",
    "experience.item1": "أكثر من 10 سنوات خبرة في التسويق الرقمي، تطوير الأعمال، إدارة المشاريع، والقيادة.",
    "experience.item2": "مستشار لعدد من الشركات في مجالات التجارة، التقنية، التعليم، والعقار.",
    "experience.item3": "مدرّب معتمد قدّم عشرات الورش، البرامج، والـBootcamps في بغداد والمحافظات.",
    "experience.item4": "قدّم استشارات عملية لشركات، مطاعم، مراكز تدريب، تطبيقات، ووزارات عراقية.",
    "experience.item5": "قاد فرق تسويق ومبيعات، وبنى أنظمة تسويق ومبيعات تعتمد على الذكاء الاصطناعي والنمو السريع.",

    "section.companies.title": "الشركات التي أسسها ويقودها",
    "companies.dream.title": "Dream Media – دريم ميديا",
    "companies.dream.desc": "شركة متخصصة بالتسويق، صناعة المحتوى، إدارة الحملات الإعلانية، التدريب، والاستشارات التسويقية للشركات والأفراد.",
    "companies.forsa.title": "Forsa Academy – أكاديمية فرصة",
    "companies.forsa.desc": "أكاديمية تدريبية تقدّم برامج عملية في التسويق، المبيعات، وريادة الأعمال، مع تركيز على التطبيق العملي وربط التدريب بسوق العمل.",
    "companies.fakhama.title": "Fakhama – فخامة للتسويق العقاري",
    "companies.fakhama.desc": "شركة ناشئة متخصصة بالوساطة والتسويق العقاري، تعتمد على الأنظمة الرقمية، التحليل الذكي، وبناء حملات تسويق عقاري فعّالة.",

    "section.sectors.title": "القطاعات التي درّبها وعمل معها",
    "sectors.tech": "شركات تقنية وإنترنت (ISP – FTTH)",
    "sectors.training": "مؤسسات تدريبية وتعليمية",
    "sectors.realestate": "شركات عقارية",
    "sectors.restaurants": "مطاعم وكافيات",
    "sectors.marketing": "شركات تسويق وإعلام",
    "sectors.trade": "شركات تجارية وصناعية",
    "sectors.sales": "فرق مبيعات داخل الشركات",
    "sectors.government": "وزارات عراقية (الاتصالات – التعليم – الشباب وغيرها)",

    "section.training.title": "أنواع التدريبات التي يقدمها مصطفى موفق",
    "training.item1": "1. التسويق الرقمي (Digital Marketing)",
    "training.digital.strategy": "بناء الاستراتيجية التسويقية.",
    "training.digital.content": "إدارة المحتوى والسوشيال ميديا.",
    "training.digital.ai": "التسويق بالذكاء الاصطناعي.",
    "training.digital.campaigns": "إدارة الحملات الإعلانية.",
    "training.digital.reputation": "إدارة السمعة وتطوير العلامة الشخصية.",
    "training.item2": "2. المبيعات وتطوير الأعمال",
    "training.sales.systems": "بناء أنظمة المبيعات.",
    "training.sales.skills": "مهارات الإقناع والتفاوض.",
    "training.sales.conversion": "آليات تحويل العملاء (Conversion Systems).",
    "training.sales.journey": "تصميم رحلة العميل (Customer Journey Design).",
    "training.sales.performance": "تحسين أداء فرق المبيعات.",
    "training.item3": "3. ريادة الأعمال والإدارة",
    "training.leadership.model": "بناء نموذج العمل.",
    "training.leadership.planning": "التخطيط الاستراتيجي.",
    "training.leadership.launch": "إطلاق وتطوير المشاريع.",
    "training.leadership.team": "إدارة الفريق وبناء الأنظمة التشغيلية.",
    "training.leadership.decision": "التفكير الإبداعي واتخاذ القرار.",
    "training.item4": "4. تدريب الشركات (Corporate Training)",
    "training.corporate.marketing": "تدريب فرق التسويق.",
    "training.corporate.sales": "تدريب فرق المبيعات.",
    "training.corporate.customers": "تدريب فرق خدمة العملاء.",
    "training.corporate.operations": "بناء دليل العمليات والوصف الوظيفي.",
    "training.item5": "5. تدريبات متقدمة",
    "training.advanced.realestate": "التسويق العقاري.",
    "training.advanced.restaurants": "التسويق للمطاعم.",
    "training.advanced.apps": "تسويق التطبيقات والمنصات.",
    "training.advanced.campaigns": "بناء الحملات الضخمة.",
    "training.advanced.personal": "Personal Branding للمديرين التنفيذيين والمدربين.",

    "section.services.title": "الخدمات التي يقدمها للمؤسسات والأفراد",
    "services.consult": "استشارات متقدمة",
    "services.consult.strategy": "بناء استراتيجية النمو.",
    "services.consult.identity": "تطوير الهوية التسويقية.",
    "services.consult.campaigns": "إدارة ومراجعة الحملات الإعلانية.",
    "services.consult.sales": "تحسين المبيعات وأنظمة المتابعة.",
    "services.consult.crisis": "إدارة الأزمات التسويقية.",
    "services.personal": "خدمات شخصية (1-to-1)",
    "services.personal.sessions": "جلسات استشارية فردية.",
    "services.personal.plan": "إعداد خطة تسويقية متكاملة.",
    "services.personal.brand": "بناء Personal Brand.",
    "services.personal.review": "مراجعة المحتوى والحملات الإعلانية.",
    "services.corp": "التعاون مع المؤسسات",
    "services.corp.programs": "تصميم برامج تدريبية داخلية.",
    "services.corp.assessments": "تقييم فرق التسويق والمبيعات.",
    "services.corp.policies": "إعداد سياسات ودليل إجراءات تسويقية.",

    "section.testimonials.title": "نماذج من آراء العملاء",
    "testimonials.quote1": "“بعد تدريب مصطفى، تضاعف أداء فريق التسويق عندنا، وصار الشغل أوضح والنتائج أسرع.”",
    "testimonials.quote2": "“أسلوبه عملي، تفكيره استراتيجي، يعطي حلول جاهزة للتطبيق مو بس كلام.”",
    "testimonials.quote3": "“ورشة الذكاء الاصطناعي اللي قدمها غيرت طريقة شغل فريقنا بالكامل.”",
    "testimonials.quote4": "“استشرناه بإطلاق مشروع جديد، والنتائج فاقت توقعاتنا خلال أقل من شهرين.”",
    "testimonials.quote5": "“من أفضل المدربين اللي تعاملت وياهم بالعراق. واضح، مرتّب، ومركّز على التنفيذ.”",

    "section.contact.title": "احجز جلستك أو درّب فريقك الآن",
    "section.contact.text": "إذا كنت صاحب شركة، مدير فريق، أو رائد أعمال وتبحث عن شريك يساعدك في بناء استراتيجية تسويق ومبيعات قوية تعتمد على الأرقام والذكاء الاصطناعي، بإمكانك البدء الآن.",
    "contact.whatsapp": "تواصل عبر واتساب",
    "contact.email": "تواصل عبر البريد الإلكتروني",
    "contact.phone": "تواصل عبر الهاتف",

    "locations.title": "أماكن ورش العمل التي قُدمت",
    "locations.caption": "قائمة بالأماكن والمؤسسات التي قدّمتُ فيها ورش عمل وبرامج تدريبية — للاطلاع على التفاصيل أو طلب تكرار الورشة تواصل معي.",
    "location.1.title": "جامعة بغداد",
    "location.1.date": "مارس 2024",
    "location.1.venue": "كلية الإدارة/قاعة المحاضرات الرئيسية",
    "location.1.desc": "ورشة تدريبية مكثفة في التسويق الرقمي وتطبيقات الذكاء الاصطناعي لتحسين أداء فرق التسويق.",
    "location.2.title": "مركز فرصة للتدريب",
    "location.2.date": "أكتوبر 2023",
    "location.2.venue": "بغداد - شارع الرشيد",
    "location.2.desc": "سلسلة ورش تطبيقية لبناء أنظمة تسويق ومبيعات داخل الشركات الناشئة.",
    "location.3.title": "شركة XYZ للاتصالات",
    "location.3.date": "نوفمبر 2022",
    "location.3.venue": "البصرة - مقر الشركة",
    "location.3.desc": "ورشة داخلية لتحويل فرق التسويق للعمل بمنهجية تعتمد على البيانات وتحليل الحملات.",
    "location.map": "عرض على الخريطة",
    "location.request": "اطلب إعادة الورشة",

    "footer.copy": "© جميع الحقوق محفوظة لـ مصطفى موفق – دريم ميديا."
  },
  en: {
    siteName: "Dream Media",
    siteCaption: "Marketing & Media Solutions",
    "nav.about": "About Mustafa",
    "nav.experience": "Experience",
    "nav.companies": "Companies",
    "nav.training": "Training",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.locations": "Workshop Locations",
    "nav.home": "Home",

    "hero.title": "Mostafa Muwafaq ",
    "hero.subtitle": "Business Trainer · Marketing Consultant · Entrepreneur — Founder of Dream Media and Forsa Academy; co‑founder at Fakhama.",
    "tags.0": "Digital Marketing",
    "tags.1": "Business Development",
    "tags.2": "Systems Building",
    "tags.3": "AI in Marketing",
    "cta.book": "Book a Consultation",
    "cta.team": "Request Team Training",
    "cta.contact": "Contact Directly",
    "cta.testimonials": "Client Reviews",
    "stats.exp.number": "+10",
    "stats.exp.label": "Years Experience",
    "stats.fb.number": "114K+",
    "stats.fb.label": "Followers on Facebook",
    "stats.ig.number": "64K+",
    "stats.ig.label": "Followers on Instagram",
    "stats.linkedin.number": "LinkedIn",
    "stats.linkedin.label": "#1 Digital Marketing Trainer on LinkedIn in Iraq",

    "profile.name": "Mostafa Muwafaq",
    "profile.role": "Founder & Marketing Consultant",
    "profile.desc": "Helps companies and marketing teams build data‑driven growth strategies using AI and market testing with a strong focus on execution.",

    "section.about.title": "About Mostafa Muwafaq",
    "section.about.p1": "Mostafa Muwafaq Abdul‑Rasool is a leading digital marketing professional in Iraq with over 10 years of practical experience.",
    "section.about.p2": "He has helped dozens of companies, ministries and institutions build integrated marketing systems based on data.",
    "section.experience.title": "Experience & Career",
    "experience.item1": "Over 10 years of experience in digital marketing, business development, project management, and leadership.",
    "experience.item2": "Consultant for companies in trade, tech, education, and real estate sectors.",
    "experience.item3": "Certified trainer who has delivered dozens of workshops, programs, and bootcamps in Baghdad and other provinces.",
    "experience.item4": "Provided practical consultations to Iraqi companies, restaurants, training centers, apps, and ministries.",
    "experience.item5": "Led marketing and sales teams, building systems based on AI and rapid growth.",

    "section.companies.title": "Companies He Founded and Leads",
    "companies.dream.title": "Dream Media",
    "companies.dream.desc": "A full‑service marketing agency specializing in content, campaigns, training, and consulting.",
    "companies.forsa.title": "Forsa Academy",
    "companies.forsa.desc": "A practical training academy focused on linking training to the job market.",
    "companies.fakhama.title": "Fakhama – Real Estate Marketing",
    "companies.fakhama.desc": "A startup specializing in real estate brokerage and marketing, leveraging digital systems and smart analytics.",

    "section.sectors.title": "Sectors He Has Trained and Worked With",
    "sectors.tech": "Tech & Internet Companies (ISP – FTTH)",
    "sectors.training": "Training & Educational Institutions",
    "sectors.realestate": "Real Estate Companies",
    "sectors.restaurants": "Restaurants & Cafes",
    "sectors.marketing": "Marketing & Media Companies",
    "sectors.trade": "Commercial & Industrial Companies",
    "sectors.sales": "Corporate Sales Teams",
    "sectors.government": "Iraqi Ministries (Communications, Education, Youth, etc.)",

    "section.training.title": "Types of Training Offered by Mostafa Muwafaq",
    "training.item1": "1. Digital Marketing",
    "training.digital.strategy": "Marketing strategy development.",
    "training.digital.content": "Content and social media management.",
    "training.digital.ai": "Marketing with Artificial Intelligence.",
    "training.digital.campaigns": "Advertising campaign management.",
    "training.digital.reputation": "Reputation management and personal branding.",
    "training.item2": "2. Sales & Business Development",
    "training.sales.systems": "Sales systems building.",
    "training.sales.skills": "Persuasion and negotiation skills.",
    "training.sales.conversion": "Conversion systems.",
    "training.sales.journey": "Customer journey design.",
    "training.sales.performance": "Sales team performance enhancement.",
    "training.item3": "3. Entrepreneurship & Management",
    "training.leadership.model": "Business model creation.",
    "training.leadership.planning": "Strategic planning.",
    "training.leadership.launch": "Project launch and development.",
    "training.leadership.team": "Team management and operational systems.",
    "training.leadership.decision": "Creative thinking and decision making.",
    "training.item4": "4. Corporate Training",
    "training.corporate.marketing": "Training for marketing teams.",
    "training.corporate.sales": "Training for sales teams.",
    "training.corporate.customers": "Training for customer service teams.",
    "training.corporate.operations": "Building operations manuals and job descriptions.",
    "training.item5": "5. Advanced Training",
    "training.advanced.realestate": "Real estate marketing.",
    "training.advanced.restaurants": "Restaurant marketing.",
    "training.advanced.apps": "Marketing for apps and platforms.",
    "training.advanced.campaigns": "Building large-scale campaigns.",
    "training.advanced.personal": "Personal branding for executives and trainers.",

    "section.services.title": "Services for Organizations and Individuals",
    "services.consult": "Advanced Consulting",
    "services.consult.strategy": "Growth strategy development.",
    "services.consult.identity": "Marketing identity development.",
    "services.consult.campaigns": "Ad campaign management and review.",
    "services.consult.sales": "Sales and follow-up systems improvement.",
    "services.consult.crisis": "Marketing crisis management.",
    "services.personal": "1-to-1 Services",
    "services.personal.sessions": "Individual consulting sessions.",
    "services.personal.plan": "Comprehensive marketing plan creation.",
    "services.personal.brand": "Personal brand building.",
    "services.personal.review": "Content and ad campaign review.",
    "services.corp": "Collaboration with Organizations",
    "services.corp.programs": "Designing internal training programs.",
    "services.corp.assessments": "Assessing marketing and sales teams.",
    "services.corp.policies": "Developing marketing policies and procedures.",

    "section.testimonials.title": "Client Testimonials",
    "testimonials.quote1": "“After Mostafa's training, our marketing team's performance doubled. Work is clearer and results are faster.”",
    "testimonials.quote2": "“His approach is practical, his thinking is strategic. He gives ready-to-implement solutions, not just talk.”",
    "testimonials.quote3": "“The AI workshop he delivered completely changed how our team works.”",
    "testimonials.quote4": "“We consulted him for a new project launch, and the results exceeded our expectations in less than two months.”",
    "testimonials.quote5": "“One of the best trainers I've worked with in Iraq. Clear, organized, and focused on execution.”",

    "section.contact.title": "Book Your Session or Train Your Team",
    "section.contact.text": "If you're a company owner, team lead, or entrepreneur looking for a partner to build a data & AI-driven marketing and sales strategy, start now.",
    "contact.whatsapp": "Contact via WhatsApp",
    "contact.email": "Contact via Email",
    "contact.phone": "Contact via Phone",

    "locations.title": "Workshop Locations — Past Events",
    "locations.caption": "List of venues and organizations where workshops and training programs were delivered. Contact to request a repeat.",
    "location.1.title": "University of Baghdad",
    "location.1.date": "Mar 2024",
    "location.1.venue": "Faculty of Management / Main Lecture Hall",
    "location.1.desc": "Intensive workshop on digital marketing and AI applications to improve marketing teams' performance.",
    "location.2.title": "Forsa Training Center",
    "location.2.date": "Oct 2023",
    "location.2.venue": "Baghdad - Al‑Rasheed St.",
    "location.2.desc": "Applied workshop series to build marketing & sales systems for startups.",
    "location.3.title": "XYZ Telecommunications",
    "location.3.date": "Nov 2022",
    "location.3.venue": "Basra - Company HQ",
    "location.3.desc": "Internal workshop to move marketing teams to a data‑driven approach.",
    "location.map": "View on map",
    "location.request": "Request this workshop",

    "footer.copy": "© All rights reserved — Mostafa Muwafaq / Dream Media"
  }
};

const DEFAULT_LANG = 'ar';
const STORAGE_KEY = 'dm_lang';

function setLanguage(lang) {
  // Add visual effects
  const langToggle = document.querySelector('#lang-toggle');
  if (langToggle) {
    langToggle.classList.add('switching');
    setTimeout(() => langToggle.classList.remove('switching'), 300);
  }
  
  // Add fade effect to all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.style.opacity = '0.7';
    el.style.transform = 'translateY(2px)';
  });
  
  // Apply language changes
  const isRTL = lang === 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  
  const langLabel = document.querySelector('#lang-toggle .lang-label');
  if(langLabel) langLabel.textContent = isRTL ? 'EN' : 'ع';

  const dict = translations[lang] || translations[DEFAULT_LANG];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if(el.dataset.html === "true") el.innerHTML = dict[key];
      else el.textContent = dict[key];
    }
  });

  // Restore opacity after a short delay for smooth transition
  setTimeout(() => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 100);

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    console.error("Failed to save language to localStorage", e);
  }
}

function getInitialLang() {
  try {
    // 1. Check localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (saved === 'ar' || saved === 'en')) return saved;
    // 2. Check browser language
    const browserLang = navigator.language.substring(0, 2);
    if (browserLang === 'en') return 'en';
  } catch (e) {
    // Fallback on error
    return DEFAULT_LANG;
  }
  // 3. Fallback to default
  return DEFAULT_LANG;
}

function toggleLanguage() {
  const current = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  const next = current === 'ar' ? 'en' : 'ar';
  setLanguage(next);
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', toggleLanguage);
  }
  setLanguage(getInitialLang());
});


// ... existing code (if any) ...