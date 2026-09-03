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
    accentColor: '#6366F1',
    bgGradient: 'from-indigo-500/10 via-purple-500/5 to-pink-500/10',
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
    liveUrl: 'https://khodrobin-demo.vercel.app',
    githubUrl: 'https://github.com/arshagoudarzi/khodrobin',
  },
  {
    id: 'nabat-coffee',
    slug: 'nabat-artisan-coffee',
    title: {
      fa: 'کافه نبات',
      en: 'Nabat Artisan',
    },
    subtitle: {
      fa: 'فروشگاه تخصصی قهوه و شیرینی دست‌ساز',
      en: 'Artisan Specialty Coffee & Bakery E-Shop',
    },
    category: 'ecommerce',
    categoryLabel: {
      fa: 'فروشگاه اینترنتی',
      en: 'E-Commerce',
    },
    year: '2024',
    featured: true,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
    accentColor: '#EC4899',
    bgGradient: 'from-pink-500/10 via-rose-500/5 to-amber-500/10',
    mockup: {
      type: 'coffee-shop',
      badge: 'Artisan Roast & Bakery',
    },
    description: {
      fa: 'فروشگاه آنلاین با تجربه حسی و تعاملی، سیستم سفارشی‌سازی آسیاب قهوه، انیمیشن‌های روان سبد خرید و فرآیند تسویه‌حساب ۳ مرحله‌ای.',
      en: 'An immersive specialty coffee storefront with interactive roast selector, custom grind customizer, and fluid slide-in cart animations.',
    },
    overview: {
      fa: 'پروژه کافه نبات با هدف ارائه یک تجربه دیجیتال گرم و صمیمی مثل فضای یک کافه دنج طراحی شد تا مشتریان بتوانند انواع دانه‌های تازه رست‌شده را با راهنمای طعمی انتخاب کنند.',
      en: 'Crafted to reflect the warm ambiance of a neighborhood artisanal cafe, Nabat allows coffee lovers to explore flavor profiles and subscribe to fresh roast deliveries.',
    },
    problem: {
      fa: 'فروشگاه‌های قهوه معمولاً بدون توضیح درباره نت‌های طعمی و میزان اسیدیته هستند و کاربران تازه‌کار در انتخاب قهوه مناسب احساس سردرگمی می‌کنند.',
      en: 'Traditional online coffee shops bury roast notes and flavor attributes inside dense text, confusing newcomers who simply want the right taste for their brewing setup.',
    },
    solution: {
      fa: 'ایجاد یک راهنمای انتخاب بصری بر اساس طعم‌سنج (Flavor Wheel)، انیمیشن‌های زنده برای انتخاب نوع دم‌آوری و سبد خرید شناور با Zustand.',
      en: 'Designed an interactive flavor-profile card matrix and an instant visual grind selector, backed by light Zustand state and micro-interactions.',
    },
    role: {
      fa: 'طراح هویت بصری، طراح UI/UX و برنامه‌نویس فرانت‌اند',
      en: 'Brand Visual Identity, UI/UX Designer & Frontend Engineer',
    },
    features: {
      fa: [
        'فیلتر طعمی قهوه (شکلاتی، میوه‌ای، آجیلی، ادویه‌ای)',
        'انتخاب درجه آسیاب (اسپرسو، فرنچ پرس، موکاپات، دمی)',
        'سبد خرید کشویی سریع با انیمیشن‌های Framer Motion',
        'محاسبه تخفیف آنی و کد هدیه با بازخورد بصری جذاب',
        'پشتیبانی دو زبانه و حالت بهینه‌شده برای خرید با گوشی',
      ],
      en: [
        'Flavor profile filtering (chocolate, fruity, nutty, floral)',
        'Brew-method grind customizer (Espresso, French Press, V60)',
        'Smooth slide-over drawer cart with Framer Motion transitions',
        'Instant discount code voucher engine with delightful feedback',
        'Fully bilingual and ultra-optimized for one-thumb mobile checkout',
      ],
    },
    results: [
      {
        metric: '+۴۲٪',
        label: {
          fa: 'افزایش نرخ تبدیل سبد خرید',
          en: 'Checkout Conversion Lift',
        },
      },
      {
        metric: '۳.۲x',
        label: {
          fa: 'افزایش زمان حضور کاربر',
          en: 'Average Session Time',
        },
      },
      {
        metric: '۱۰۰٪',
        label: {
          fa: 'رضایت کارفرما از دیزاین',
          en: 'Client Satisfaction',
        },
      },
    ],
    liveUrl: 'https://nabat-artisan.vercel.app',
    githubUrl: 'https://github.com/arshagoudarzi/nabat-coffee',
  },
  {
    id: 'pulse-studio',
    slug: 'pulse-creative-agency',
    title: {
      fa: 'پالس استودیو',
      en: 'Pulse Studio',
    },
    subtitle: {
      fa: 'وب‌سایت آژانس خلاقیت دیجیتال و برندیگ',
      en: 'Creative Digital Agency & Brand Showcase',
    },
    category: 'business',
    categoryLabel: {
      fa: 'سایت شرکتی',
      en: 'Brand & Corporate',
    },
    year: '2024',
    featured: false,
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Lucide'],
    accentColor: '#3B82F6',
    bgGradient: 'from-blue-500/10 via-cyan-500/5 to-indigo-500/10',
    mockup: {
      type: 'creative-studio',
      badge: 'Interactive Agency Portfolio',
    },
    description: {
      fa: 'یک وب‌سایت معرفی مدرن با گرید ادیتوریال، تایپوگرافی جسورانه و انیمیشن‌های پارالاکس جهت نمایش نمونه‌کارهای یک استودیوی دیزاین.',
      en: 'A high-impact agency website featuring editorial bento-grids, kinetic typography, and fluid cursor-follow micro-interactions.',
    },
    overview: {
      fa: 'استودیو پالس نیاز به ویترینی دیجیتال داشت که مشتریان سازمانی بزرگ را از بدو ورود تحت تاثیر خلاقیت و کیفیت کار تیم قرار دهد.',
      en: 'Pulse Studio needed a captivating digital showcase that instantly proves their creative caliber to high-ticket enterprise clients.',
    },
    problem: {
      fa: 'وب‌سایت قبلی بسیار ساده و شبیه قالب‌های معمولی وردپرس بود و حس نوآوری آژانس را منتقل نمی‌کرد.',
      en: 'The previous agency site felt static and templated, failing to communicate the energetic innovation of their actual client work.',
    },
    solution: {
      fa: 'پیاده‌سازی یک لایه‌بندی خلاقانه با کارت‌های شناور، لودینگ داینامیک و انیمیشن‌های تعاملی هنگام اسکرول.',
      en: 'Built an expressive bento-grid layout with smooth scroll triggers, magnetic buttons, and responsive case study reveals.',
    },
    role: {
      fa: 'طراح رابط کاربری و توسعه‌دهنده وب‌سایت',
      en: 'UI Designer & Frontend Motion Developer',
    },
    features: {
      fa: [
        'لایه‌بندی بنتو گرید اختصاصی برای پروژه‌های آژانس',
        'میکرواینتراکشن‌های واکنشی روی نشانگر ماوس',
        'فرم محاسبه‌گر آنلاین بودجه پروژه',
        'پشتیبانی کامل از سئوی تکنیکال و متاتگ‌های پیشرفته',
      ],
      en: [
        'Bespoke editorial bento layout for project showcases',
        'Subtle interactive cursor-aware highlights',
        'Interactive project budget and timeline estimator',
        'Comprehensive technical SEO schema and fast CDN caching',
      ],
    },
    results: [
      {
        metric: '+۳.۵x',
        label: {
          fa: 'افزایش درخواست‌های استعلام قیمت',
          en: 'Inbound Project Inquiries',
        },
      },
      {
        metric: '۰.۷s',
        label: {
          fa: 'زمان نمایش اولین محتوا (FCP)',
          en: 'First Contentful Paint',
        },
      },
    ],
    liveUrl: 'https://pulse-studio.vercel.app',
    githubUrl: 'https://github.com/arshagoudarzi/pulse-agency',
  },
  {
    id: 'taskmate',
    slug: 'taskmate-collaborative-workspace',
    title: {
      fa: 'تسک‌میت',
      en: 'TaskMate',
    },
    subtitle: {
      fa: 'فضای کاری مینیمال و چابک مدیریت وظایف',
      en: 'Minimalist Collaborative Workflow Suite',
    },
    category: 'web-app',
    categoryLabel: {
      fa: 'وب‌اپلیکیشن',
      en: 'Web Application',
    },
    year: '2023',
    featured: false,
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'dnd-kit'],
    accentColor: '#10B981',
    bgGradient: 'from-emerald-500/10 via-teal-500/5 to-cyan-500/10',
    mockup: {
      type: 'kanban-app',
      badge: 'Productivity & Kanban',
    },
    description: {
      fa: 'ابزار مدیریت پروژه با بردهای کانبان درگ‌اند‌دراپ، برچسب‌گذاری هوشمند، فیلترهای زمانی و همگام‌سازی لحظه‌ای.',
      en: 'A sleek productivity dashboard featuring smooth drag-and-drop kanban boards, priority tagging, and sub-task progress tracking.',
    },
    overview: {
      fa: 'تسک‌میت برای تیم‌های کوچک و فریلنسرها ساخته شد تا بدون پیچیدگی‌های ابزارهایی مثل جیرا، وظایف روزانه را با سرعت بالا پیگیری کنند.',
      en: 'Built for agile creators and boutique studios seeking a distraction-free alternative to bloated enterprise task managers.',
    },
    problem: {
      fa: 'ابزارهای موجود بیش از حد سنگین و پر از دکمه‌های غیرضروری هستند که تمرکز کاربر را به هم می‌زنند.',
      en: 'Most project trackers are overwhelmed with excessive menus, leading to decision fatigue rather than focused execution.',
    },
    solution: {
      fa: 'یک رابط کاربری متمرکز با کیبورد شورت‌کات‌ها، انیمیشن‌های روان کشیدن کارت‌ها با dnd-kit و ذخیره‌سازی ابری امن.',
      en: 'Implemented keyboard-first navigation, fluid physics-based card movements, and real-time syncing via Supabase.',
    },
    role: {
      fa: 'طراح محصول و برنامه‌نویس فرانت‌اند',
      en: 'Product Designer & Frontend Engineer',
    },
    features: {
      fa: [
        'بردهای درگ‌اند‌دراپ با لمس نرم و بدون لکنت',
        'کلیدهای میانبر کیبورد برای افزودن و جستجوی سریع تسک‌ها',
        'آمار پیشرفت پروژه با نمودار دایره‌ای',
        'ذخیره محلی آفلاین و همگام‌سازی ابری خودکار',
      ],
      en: [
        'Touch-optimized fluid drag-and-drop kanban columns',
        'Lightning fast keyboard shortcuts for instant task creation',
        'Visual sprint completion metrics and workload breakdown',
        'Offline-first optimistic updates with auto-sync',
      ],
    },
    results: [
      {
        metric: '۴.۹/۵',
        label: {
          fa: 'امتیاز رضایت در تست بتای کاربران',
          en: 'Beta User Rating',
        },
      },
      {
        metric: '۶۰fps',
        label: {
          fa: 'روانی انیمیشن‌های جابجایی کارت',
          en: 'Consistent Drag Frame Rate',
        },
      },
    ],
    liveUrl: 'https://taskmate-demo.vercel.app',
    githubUrl: 'https://github.com/arshagoudarzi/taskmate',
  },
  {
    id: 'nova-health',
    slug: 'nova-health-telemedicine',
    title: {
      fa: 'نواهلث',
      en: 'NovaHealth',
    },
    subtitle: {
      fa: 'سامانه نوبت‌دهی و پرونده آنلاین پزشکی',
      en: 'Telemedicine & Clinical Booking Portal',
    },
    category: 'ui-ux',
    categoryLabel: {
      fa: 'رابط کاربری',
      en: 'UI/UX Design',
    },
    year: '2023',
    featured: false,
    technologies: ['Figma', 'React', 'Tailwind CSS', 'Accessible WCAG'],
    accentColor: '#8B5CF6',
    bgGradient: 'from-violet-500/10 via-purple-500/5 to-indigo-500/10',
    mockup: {
      type: 'telehealth',
      badge: 'Healthcare & Booking',
    },
    description: {
      fa: 'طراحی سیستم نوبت‌دهی آنلاین با تمرکز بالا بر دسترس‌پذیری سالمندان، تایپوگرافی خوانا، کنتراست رنگی استاندارد و مراحل شفاف رزرو.',
      en: 'An empathetic healthcare booking portal designed with accessibility-first principles (WCAG AAA), high-contrast UI, and stress-free appointment flows.',
    },
    overview: {
      fa: 'هدف پروژه خلق سامانه‌ای بود که افراد در هر سنی بتوانند بدون تماس تلفنی در کمتر از ۲ دقیقه نوبت دکتر مورد نظر خود را رزرو کنند.',
      en: 'Aimed to make clinical scheduling effortless for patients of all ages, eliminating friction in appointment booking and lab results access.',
    },
    problem: {
      fa: 'سامانه‌های درمانی اغلب فونت‌های بسیار ریز و مراحل پیچیده دارند که بیماران به ویژه افراد مسن را ناامید می‌کند.',
      en: 'Existing clinical portals suffer from small target touch sizes, low color contrast, and ambiguous navigation during stressful medical moments.',
    },
    solution: {
      fa: 'رابط کاربری بزرگ، دکمه‌های واضح حداقل ۴۸ پیکسلی، راهنمای گام به گام و تست کاربردپذیری با گروه‌های سنی مختلف.',
      en: 'Engineered high-contrast visual cues, large 48px+ touch surfaces, and a linear 3-step confirmation flow with instant SMS verification.',
    },
    role: {
      fa: 'محقق و طراح UI/UX، تدوین سیستم طراحی (Design System)',
      en: 'UI/UX Lead & Design System Architect',
    },
    features: {
      fa: [
        'سیستم تقویم نوبت‌دهی شفاف با نمایش ساعت‌های خالی پزشک',
        'سازگاری کامل با استانداردهای دسترسی‌پذیری وب (WCAG AA/AAA)',
        'صفحه سوابق آزمایشگاهی با خلاصه گرافیکی شاخص‌ها',
        'طراحی نسخه کاملاً بهینه‌شده برای نمایشگرهای لمسی',
      ],
      en: [
        'Real-time doctor calendar with clear time-slot availability',
        'Full compliance with WCAG AA accessibility standards',
        'Visual lab results history with intuitive normal-range indicators',
        'Accessible touch layout tested with senior user focus groups',
      ],
    },
    results: [
      {
        metric: '-۶۵٪',
        label: {
          fa: 'کاهش تماس‌های لغو و پشتیبانی',
          en: 'Drop in Support Call Volume',
        },
      },
      {
        metric: '۹۸٪',
        label: {
          fa: 'تکمیل موفقیت‌آمیز رزرو',
          en: 'First-time Booking Success',
        },
      },
    ],
    liveUrl: 'https://novahealth-ui.vercel.app',
    githubUrl: 'https://github.com/arshagoudarzi/novahealth',
  },
  {
    id: 'kaghaz-blog',
    slug: 'kaghaz-minimal-publishing',
    title: {
      fa: 'کاغذ',
      en: 'Kaghaz',
    },
    subtitle: {
      fa: 'پلتفرم انتشار محتوا با تایپوگرافی فاخر',
      en: 'Minimalist Content Publishing Experience',
    },
    category: 'business',
    categoryLabel: {
      fa: 'شخصی و وبلاگ',
      en: 'Publishing & Editorial',
    },
    year: '2023',
    featured: false,
    technologies: ['Next.js', 'Tailwind CSS', 'Markdown', 'Vazirmatn'],
    accentColor: '#F59E0B',
    bgGradient: 'from-amber-500/10 via-orange-500/5 to-yellow-500/10',
    mockup: {
      type: 'minimal-blog',
      badge: 'Editorial & Read Mode',
    },
    description: {
      fa: 'قالب وبلاگ مدرن متمرکز بر تجربه مطالعه بدون حواس‌پرتی، تخمین زمان مطالعه، حالت خواندن شبانه و تایپوگرافی تمیز فارسی و انگلیسی.',
      en: 'A tranquil, typography-first publishing medium featuring distraction-free reading mode, reading-progress indicator, and warm ambient palettes.',
    },
    overview: {
      fa: 'یک بستر وبلاگی برای نویسندگان، طراحان و پژوهشگران که متن و محتوا در آن نقش اول را ایفا می‌کند.',
      en: 'Created for writers and thought leaders who prioritize typographic elegance, comfortable line heights, and thoughtful spacing.',
    },
    problem: {
      fa: 'بیشتر وبلاگ‌ها پر از بنرهای تبلیغاتی، پاپ‌آپ‌های آزاردهنده و قلم‌های نامناسب فارسی با خوانایی ضعیف هستند.',
      en: 'Modern blog platforms are plagued with intrusive banners and poor typographic proportions that cause reading fatigue.',
    },
    solution: {
      fa: 'طراحی مینیمال با تایپوگرافی فاخر وزیرمتن، فاصله‌گذاری خطوط استاندارد، نوار پیشرفت مطالعه و بارگذاری آنی با رندر استاتیک.',
      en: 'Designed with golden-ratio typography, subtle reading progress indicators, and pristine dark/light paper textures.',
    },
    role: {
      fa: 'طراح، تایپوگرافر و توسعه‌دهنده وب',
      en: 'Solo Designer & Frontend Engineer',
    },
    features: {
      fa: [
        'تایپوگرافی اصولی با تنظیم دقیق نسبت ارتفاع خط به اندازه قلم',
        'نوار پیشرفت اسکرول مقاله در بالای صفحه',
        'قابلیت بوکمارک مقالات در حافظه محلی مرورگر',
        'لود شدن فوق‌العاده سریع بدون حتی یک کیلوبایت کد اضافه',
      ],
      en: [
        'Harmonic typographic scale with comfortable 65ch line lengths',
        'Fluid reading progress bar anchored to viewport top',
        'Local client-side article bookmarking and save-for-later',
        '100/100 Lighthouse performance with zero redundant dependencies',
      ],
    },
    results: [
      {
        metric: '۱۰۰/۱۰۰',
        label: {
          fa: 'امتیاز لایت‌هاوس در تمام شاخص‌ها',
          en: 'Perfect Lighthouse Scores',
        },
      },
      {
        metric: '< ۰.۵s',
        label: {
          fa: 'سرعت لود کامل',
          en: 'Total Load Time',
        },
      },
    ],
    liveUrl: 'https://kaghaz-blog.vercel.app',
    githubUrl: 'https://github.com/arshagoudarzi/kaghaz',
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
    avatarColor: 'bg-indigo-100 text-indigo-700',
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
