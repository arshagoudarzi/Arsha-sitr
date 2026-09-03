import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'khodrobin',
    slug: 'khodrobin-smart-car-discovery',
    title: {
      fa: 'خودرو بین',
      en: 'KhodroBin',
    },
    subtitle: {
      fa: 'پلتفرم هوشمند مقایسه و کشف خودرو',
      en: 'Smart Car Discovery & Comparison Platform',
    },
    category: 'web-app',
    categoryLabel: {
      fa: 'وب‌اپلیکیشن',
      en: 'Web Application',
    },
    year: '2024',
    featured: true,
    technologies: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Recharts'],
    accentColor: '#14B8A6',
    bgGradient: 'from-teal-500/10 via-purple-500/5 to-pink-500/10',
    mockup: {
      type: 'car-platform',
      badge: 'Car Market Analytics',
    },
    description: {
      fa: 'سامانه تحلیل قیمت، مشخصات فنی و مقایسه جامع خودروها با فیلترهای آنی، نمودار هوشمند و سیستم جستجوی چندمعیاره.',
      en: 'A high-performance vehicle exploration engine featuring live market trend charts, multi-parameter filtering, and real-time specs comparison.',
    },
    overview: {
      fa: '«خودرو بین» یک وب‌اپلیکیشن مدرن برای خریداران و علاقه‌مندان به خودرو است که امکان جستجو، مقایسه دو به دو و بررسی نوسانات قیمت بازار را به سادگی در اختیار کاربر قرار می‌دهد.',
      en: 'KhodroBin simplifies the complex vehicle purchasing journey with interactive visual specs, instant side-by-side comparisons, and live market price telemetry.',
    },
    problem: {
      fa: 'سایت‌های موجود در بازار معمولاً سرعت پایینی دارند، در نمایشگرهای موبایل شلوغ و غیرقابل استفاده هستند و مقایسه فنی بین دو خودرو را به شکلی نامنظم و گیج‌کننده نشان می‌دهند.',
      en: 'Most automotive classifieds suffer from bloated legacy layouts, sluggish search latencies, and confusing technical tables that fall apart on mobile displays.',
    },
    solution: {
      fa: 'طراحی یک رابط کاربری مینیمال و کارت‌محور با Next.js 14 و Server Components که بارگذاری اولیه را به زیر ۸۰۰ میلی‌ثانیه رساند، همراه با جدول مقایسه واکنش‌گرا و نمودارهای تعاملی Recharts.',
      en: 'Engineered a clean card-based UI powered by Next.js 14 App Router and Supabase, achieving sub-second load times, instant visual diffing, and intuitive responsive charts.',
    },
    role: {
      fa: 'طراح سرتاسر محصول (UI/UX در فیگما) و توسعه‌دهنده فرانت‌اند و بک‌اند با Supabase',
      en: 'Lead UI/UX Designer (Figma) & Full-Stack Frontend Developer (Next.js & Supabase)',
    },
    features: {
      fa: [
        'جستجو و فیلتر بر اساس برند، بودجه، سال ساخت و گیربکس به صورت بدون رفرش',
        'جدول مقایسه هوشمند با برجسته‌سازی خودکار نقاط برتری هر خودرو',
        'نمودار تاریخچه قیمت ۶ ماهه با تفکیک مدل‌ها',
        'طراحی کاملاً هماهنگ با موبایل و پشتیبانی از حالت دارک مود',
        'سیستم کشینگ هوشمند و بهینه‌سازی رندر با Next.js',
      ],
      en: [
        'Instant zero-latency filtering by brand, budget, transmission, and fuel type',
        'Smart comparative table highlighting key advantages automatically',
        '6-month interactive price history charts with tooltip breakdowns',
        'Mobile-first ergonomic layout with subtle haptic-style transitions',
        'Incremental static revalidation (ISR) for blazing fast catalog pages',
      ],
    },
    results: [
      {
        metric: '< ۰.۸s',
        label: {
          fa: 'سرعت لودینگ صفحات',
          en: 'Average Page Load',
        },
      },
      {
        metric: '۹۹/۱۰۰',
        label: {
          fa: 'امتیاز لایت‌هاوس',
          en: 'Lighthouse Score',
        },
      },
      {
        metric: '+۸۵٪',
        label: {
          fa: 'نرخ رضایت کاربران',
          en: 'User Engagement Lift',
        },
      },
    ],
    liveUrl: 'https://arsha-jet.vercel.app/',
    githubUrl: 'https://github.com/arshagoudarzi/khodrobin',
  },
];

export const skillsData = [
  {
    name: 'Next.js',
    category: 'frontend' as const,
    level: 'Advanced',
    icon: 'Layers',
    highlight: true,
    description: {
      fa: 'فریمورک اصلی من برای وب‌اپلیکیشن‌ها؛ مسلط به App Router، Server Components و بهینه‌سازی سئو.',
      en: 'My go-to framework for modern web apps; expert in App Router, SSR/SSG, and Core Web Vitals.',
    },
  },
  {
    name: 'React 18 / 19',
    category: 'frontend' as const,
    level: 'Advanced',
    icon: 'Atom',
    highlight: true,
    description: {
      fa: 'توسعه کامپوننت‌های ماژولار، هوک‌های اختصاصی، مدیریت استیت و ساخت رابط‌های تعاملی.',
      en: 'Modular component architecture, custom hooks, reactive state, and fluid UI composition.',
    },
  },
  {
    name: 'TypeScript',
    category: 'frontend' as const,
    level: 'Advanced',
    icon: 'FileCode2',
    highlight: true,
    description: {
      fa: 'کدنویسی امن و تایپ‌سیف برای جلوگیری از باگ‌ها و تسهیل نگهداری و گسترش پروژه‌ها در آینده.',
      en: 'Type-safe codebase ensuring zero runtime surprises and seamless long-term maintainability.',
    },
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend' as const,
    level: 'Expert',
    icon: 'Palette',
    highlight: true,
    description: {
      fa: 'پیاده‌سازی سریع دیزاین سیستم‌ها، واکنش‌گرایی بدون نقص و انیمیشن‌های روان با کمترین حجم استایل.',
      en: 'Rapid design system implementation, pixel-perfect responsive utility grids, and theme tokens.',
    },
  },
  {
    name: 'Framer Motion',
    category: 'frontend' as const,
    level: 'Advanced',
    icon: 'Sparkles',
    highlight: false,
    description: {
      fa: 'خلق انیمیشن‌های روان، جابجایی صفحات، تعاملات اسکرول و حس زنده بودن در سراسر وب‌سایت.',
      en: 'Crafting fluid page transitions, spring physics, scroll triggers, and delightful micro-interactions.',
    },
  },
  {
    name: 'Supabase',
    category: 'backend' as const,
    level: 'Proficient',
    icon: 'Database',
    highlight: true,
    description: {
      fa: 'پایگاه داده PostgreSQL ابری، احراز هویت کاربران، ذخیره‌سازی فایل‌ها و همگام‌سازی لحظه‌ای.',
      en: 'Managed PostgreSQL, secure user authentication, storage buckets, and real-time listeners.',
    },
  },
  {
    name: 'Node.js & Express',
    category: 'backend' as const,
    level: 'Proficient',
    icon: 'Server',
    highlight: false,
    description: {
      fa: 'ساخت REST APIهای سبک و امن برای برقراری ارتباط فرانت‌اند با سرویس‌های جانبی.',
      en: 'Building lightweight, reliable RESTful API proxies and webhook integration endpoints.',
    },
  },
  {
    name: 'Figma',
    category: 'design' as const,
    level: 'Advanced',
    icon: 'Figma',
    highlight: true,
    description: {
      fa: 'وایرفریمینگ، دیزاین سیستم، اتولایه‌اوت و پروتوتایپ‌های تعاملی برای اشتراک سریع با کارفرما.',
      en: 'Interactive prototyping, scalable auto-layout components, tokens, and comprehensive wireframes.',
    },
  },
  {
    name: 'UI/UX & Accessibility',
    category: 'design' as const,
    level: 'Advanced',
    icon: 'Eye',
    highlight: false,
    description: {
      fa: 'رعایت استانداردهای دسترسی‌پذیری وب (WCAG)، تایپوگرافی فارسی، کنتراست رنگ و تجربه کاربری انسانی.',
      en: 'WCAG compliance, human-centric design, bilingual typographic mastery, and frictionless flows.',
    },
  },
  {
    name: 'Git & GitHub',
    category: 'tools' as const,
    level: 'Advanced',
    icon: 'GitBranch',
    highlight: false,
    description: {
      fa: 'مدیریت حرفه‌ای نسخه‌های کد، شاخه‌بندی اصولی و راه‌اندازی پایپ‌لاین‌های استقرار خودکار.',
      en: 'Structured version control, branch workflows, and continuous deployment setups on Vercel/Cloud.',
    },
  },
];

export const testimonialsData = [
  {
    id: '1',
    quote: {
      fa: 'همکاری با آرشا یکی از لذت‌بخش‌ترین تجربه‌های تیم ما بود. وب‌سایتی که برامون ساخت فراتر از انتظارمون ظاهر شد؛ سرعت لود فوق‌العاده و کاربری بسیار آسون. مشتریانمون مدام از طراحی تعریف می‌کنند.',
      en: 'Working with Arsha was an absolute breeze. The platform he built exceeded our expectations in both aesthetic charm and speed. Our customers constantly praise how smooth and intuitive it feels.',
    },
    author: {
      fa: 'مهندس حسام نوری',
      en: 'Hesam Nouri',
    },
    role: {
      fa: 'بنیان‌گذار استارتاپ خودرویی',
      en: 'Founder, AutoTech Platform',
    },
    company: 'KhodroBin',
    avatarColor: 'bg-teal-100 text-teal-700',
    rating: 5,
  },
  {
    id: '2',
    quote: {
      fa: 'آرشا نه تنها یک برنامه‌نویس مسلط، بلکه یک طراح با سلیقه بصری کم‌نظیره. نکاتی که در مورد تجربه کاربر در نسخه موبایل گوشزد کرد باعث شد نرخ فروش آنلاین ما بیش از ۴۰ درصد رشد کنه.',
      en: 'Arsha is that rare blend of a meticulous engineer and a genuinely tasteful designer. His mobile-first UX adjustments alone helped us increase our online checkout rate by over 40%.',
    },
    author: {
      fa: 'سارا صادقی',
      en: 'Sara Sadeghi',
    },
    role: {
      fa: 'مدیر مارکتینگ و برند',
      en: 'Brand & Marketing Director',
    },
    company: 'Nabat Artisan',
    avatarColor: 'bg-pink-100 text-pink-700',
    rating: 5,
  },
  {
    id: '3',
    quote: {
      fa: 'تعهد زمانی و اخلاق حرفه‌ای آرشا ستودنی است. تمام مراحل پروژه شفاف و با پیش‌نمایش‌های منظم جلو رفت و در نهایت سایتی تمیز، سریع و بدون هیچ باگی تحویل گرفتیم. حتماً پروژه‌های بعدی رو هم با ایشون جلو می‌بریم.',
      en: 'Exceptional communication, transparent milestones, and zero delivery delays. Arsha handed over a clean, robust, and bug-free web presence that gives our agency massive credibility.',
    },
    author: {
      fa: 'امیرحسین پارسا',
      en: 'Amirhossein Parsa',
    },
    role: {
      fa: 'مدیر خلاقیت استودیو',
      en: 'Creative Studio Lead',
    },
    company: 'Pulse Studio',
    avatarColor: 'bg-emerald-100 text-emerald-700',
    rating: 5,
  },
];
