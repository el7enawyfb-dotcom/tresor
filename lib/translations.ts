export const translations = {
  header: {
    home: { ar: "الرئيسية", en: "Home" },
    services: { ar: "خدماتنا", en: "Services" },
    portfolio: { ar: "أعمالنا", en: "Portfolio" },
    about: { ar: "من نحن", en: "About" },
    contact: { ar: "تواصل معنا", en: "Contact" },
    startProject: { ar: "ابدأ مشروعك", en: "Start a Project" },
  },
  hero: {
    title1: { ar: "رؤيتك،", en: "Your Vision," },
    title2: { ar: "حرفتنا", en: "Our Craft" },
    description: {
      ar: "وكالة تريزور تقدم حلول تسويقية وإبداعية فاخرة. من البراندينج إلى التجارب الرقمية، نحول الأفكار إلى نتائج استثنائية عن بُعد، باحترافية ودقة.",
      en: "Trésor Agency delivers luxury marketing and creative solutions. From branding to digital experiences, we transform ideas into exceptional results—remotely, professionally, precisely.",
    },
    viewWork: { ar: "شاهد أعمالنا", en: "View Our Work" },
    companyName: { ar: "وكالة تريزور للتسويق والإبداع", en: "Trésor Agency - Marketing & Creative Solutions" },
    phone: { ar: "📞 01156990699", en: "📞 01156990699" },
    address: {
      ar: "📍 3053 المعراج العلوي، المعادي، القاهرة، مصر",
      en: "📍 3053 Al-Miraj Al-Ulwi, Maadi, Cairo, Egypt",
    },
  },
  services: {
    title: { ar: "خدماتنا", en: "Our Services" },
    subtitle: {
      ar: "أربع باقات شاملة مصممة لترقية علامتك التجارية",
      en: "Four comprehensive packages designed to elevate your brand",
    },
    design: {
      title: { ar: "التصميم والإنتاج", en: "Design & Production" },
      description: {
        ar: "تصميم بوسترات احترافي، إنشاء إعلانات، مونتاج فيديو، وجلسات تصوير تجاري. مثالي للحملات المرئية السريعة والموثوقة.",
        en: "Professional poster design, ad creation, video editing, and commercial photography sessions. Perfect for fast and reliable visual campaigns.",
      },
    },
    marketing: {
      title: { ar: "التسويق والإعلام", en: "Marketing & Media" },
      description: {
        ar: "إدارة الحملات المدفوعة (PPC، ميتا، جوجل)، استراتيجيات التسويق، وخدمة الدردشة الحية لإشراك عملائك وتحويلهم.",
        en: "Paid campaign management (PPC, Meta, Google), marketing strategies, and live chat service to engage and convert your customers.",
      },
    },
    web: {
      title: { ar: "إنشاء المواقع", en: "Website Creation" },
      description: {
        ar: "تصميم وتطوير مواقع احترافية (Next.js)، متجاوبة، محسّنة للأداء والسيو، مع إمكانية دمج نظام إدارة المحتوى.",
        en: "Design and development of professional websites (Next.js), responsive, optimized for performance and SEO, with optional CMS integration.",
      },
    },
    branding: {
      title: { ar: "الهوية التجارية", en: "Brand Identity" },
      description: {
        ar: "استراتيجية علامة تجارية كاملة (شعار، دليل الهوية، أنظمة الألوان، الخطوط) والتطبيق على المواد الرقمية والمطبوعة.",
        en: "Complete brand strategy (logo, identity guide, color systems, fonts) and application across digital and print materials.",
      },
    },
  },
  cta: {
    title: { ar: "مستعد لإنشاء شيء استثنائي؟", en: "Ready to Create Something Exceptional?" },
    subtitle: {
      ar: "دعنا نناقش مشروعك ونحقق رؤيتك مع فريقنا المتخصص.",
      en: "Let's discuss your project and bring your vision to life with our expert team.",
    },
    button: { ar: "تواصل معنا", en: "Get in Touch" },
  },
  footer: {
    description: {
      ar: "حلول تسويقية وإبداعية فاخرة ترتقي بعلامتك التجارية إلى التميز.",
      en: "Luxury marketing and creative solutions that elevate your brand to excellence.",
    },
    servicesTitle: { ar: "الخدمات", en: "Services" },
    companyTitle: { ar: "الشركة", en: "Company" },
    legalTitle: { ar: "قانوني", en: "Legal" },
    copyright: { ar: "© جميع الحقوق محفوظة", en: "All rights reserved" },
    developedBy: { ar: "حقوق البرمجة © Ahmed Elhenawy", en: "Developed by © Ahmed Elhenawy" },
  },
  trustedBy: {
    title: { ar: "موثوق به من قبل", en: "Trusted By" },
  },
  testimonials: {
    title: { ar: "ماذا يقول عملاؤنا", en: "What Our Clients Say" },
  },
}

export type TranslationKey = keyof typeof translations
