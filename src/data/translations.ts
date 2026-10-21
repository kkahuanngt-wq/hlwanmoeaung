export type Language = 'en' | 'mm';
export type ThemeMode = 'dark' | 'light' | 'royal';

export const translations = {
  en: {
    themes: {
      dark: 'Obsidian Dark',
      light: 'Concert Ivory',
      royal: 'Midnight Velvet',
    },
    nav: {
      artist: 'The Maestro',
      band: 'Hlwan Music Band',
      repertoire: 'Repertoire',
      gallery: 'Gallery',
      academy: 'Academy & Studio',
      booking: 'VIP Booking',
      contact: 'Contact',
      langToggle: 'မြန်မာ',
    },
    hero: {
      statusBadge: 'Now Booking 2026/2027 Concerts, Weddings & Tours',
      titlePrefix: 'KB',
      titleName: 'Hlwan Moe Aung',
      tagline: 'Concert Pianist • Music Producer • Founder & Leader of Hlwan Music Band',
      subtext: 'Harmonizing Myanmar\'s timeless melodic soul with modern classical grandeur and electrifying live band performances across Southeast Asia.',
      exploreRepertoireBtn: 'Explore Repertoire',
      bookBandBtn: 'Book Hlwan Music Band',
      meetArtistBtn: 'About The Maestro',
      activeListeners: '250,000+ Music Enthusiasts & Followers Worldwide',
    },
    stats: {
      experience: 'Years Stage Mastery',
      shows: 'Live Concerts & Weddings',
      community: 'YouTube Community',
      studio: 'Studio Masterpieces',
    },
    about: {
      badge: 'Artistry & Craft',
      title: 'What KB Hlwan Moe Aung Works On',
      subtitle: 'Concert performances, full ensemble arrangements, sound engineering, and multi-instrumental direction.',
      workItems: [
        {
          title: 'Live Concert & Grand Piano Performance',
          category: 'Stage Performance',
          desc: 'Headlining live concert stages, wedding march-ins, grand banquets, and acoustic piano recitals. Combining nuanced touch with dynamic stage presence across classical, contemporary pop, and jazz fusion.',
        },
        {
          title: 'Full Band Arrangement & Stage Direction',
          category: 'Ensemble Direction',
          desc: 'Directing the 7-piece Hlwan Music Band. Writing custom musical arrangements for rhythm sections, brass/sax ensembles, and guest vocalists to deliver high-energy, seamless live show programming.',
        },
        {
          title: 'Traditional Burmese Melodic Fusion',
          category: 'Cultural Heritage',
          desc: 'Arranging authentic Myanmar classical melodies (မဟာဂီတနှင့် ရှေးရိုးသံစဉ်စစ်စစ်) with modern piano voicing and symphonic textures, creating a bridge between Myanmar cultural heritage and contemporary music.',
        },
        {
          title: 'Studio Tracking, Scoring & Audio Production',
          category: 'Studio Works',
          desc: 'Operating Hlwan Music Studio Yangon for acoustic grand piano session tracking, vocal recording, film scoring, single track mixing, and commercial audio mastering.',
        },
        {
          title: 'Synthesizer Programming & Sound Design',
          category: 'Sound Engineering',
          desc: 'Custom crafting performance voices, multi-layer velocity patches, and custom acoustic grand piano profiles on flagship Yamaha Montage and Roland RD stage workstations.',
        },
        {
          title: 'Keyboard Masterclasses & Music Mentorship',
          category: 'Education & Community',
          desc: 'Producing systematic piano tutorials, chord progression analyses, and keyboard masterclasses, empowering over 250,000 musicians and students across YouTube and social platforms.',
        },
      ],
      disciplinesTitle: 'Core Working Disciplines',
      disciplinesSubtitle: 'The multifaceted professional roles KB Hlwan Moe Aung actively delivers.',
      disciplines: [
        { title: 'Concert Grand Soloist', desc: 'Live recitals, acoustic luxury wedding galas, and stage concertos.', tag: 'Concert Stage' },
        { title: 'Bandleader & Arranger', desc: 'Full ensemble orchestration, brass charts, and dynamic live set curation.', tag: 'Live Band' },
        { title: 'Studio Producer & Audio Engineer', desc: 'Acoustic multitrack recording, soundtrack scoring, and audio mixing.', tag: 'Studio Production' },
        { title: 'Synthesizer Sound Programmer', desc: 'Custom velocity-sensitive piano voicing for Yamaha & Roland stage workstations.', tag: 'Sound Design' },
        { title: 'Educator & Digital Creator', desc: 'Online keyboard tutorials, harmony breakdowns, and hands-on masterclasses.', tag: 'Mentorship' }
      ],
      quote: '"Every arrangement is built with meticulous precision — from acoustic piano attack to full band dynamic balance, music is our highest craft."',
    },
    band: {
      badge: 'The Ensemble',
      title: 'Hlwan Music Band',
      subtitle: 'The Premier Live Performance Experience for Prestigious Galas, Weddings & Concerts',
      description: 'Under the artistic direction and keyboard virtuosity of Hlwan Moe Aung, Hlwan Music Band delivers unparalleled acoustic excellence and stage charisma. From intimate romantic wedding marches to roaring high-energy concert overtures, every arrangement is tailored to elevate your milestone event.',
      lineupTitle: 'Ensemble Lineup & Key Members',
      packagesTitle: 'Live Performance Packages',
      riderTitle: 'Stage Engineering & Sound Quality',
      riderDesc: 'Equipped with top-tier Yamaha & Roland stage workstations, wireless Shure microphone rigs, and dedicated digital mixing engineers for broadcast-grade fidelity.',
      lineup: [
        { role: 'Grand Piano & Workstations', name: 'KB Hlwan Moe Aung', desc: 'Bandleader, primary arranger & keyboard soloist' },
        { role: 'Lead & Acoustic Guitars', name: 'Aung Min Thant', desc: 'Expressive acoustic fingerstyle & soaring electric leads' },
        { role: 'Bass & Groove Foundation', name: 'Sai Kyaw Thu', desc: 'Tight dynamic pocket playing for classic & modern tempos' },
        { role: 'Drums & Percussion', name: 'Min Hein Khant', desc: 'Acoustic drumkit & traditional Burmese percussion fusion' },
        { role: 'Saxophone & Brass', name: 'Ko Nay Lin', desc: 'Lush tenor and alto saxophone melodies for romantic ballads' },
        { role: 'Featured Vocalists', name: 'Guest Artists & Resident Singers', desc: 'Harmonized duets in Burmese classics and international pop' }
      ],
      packages: [
        {
          name: 'Maestro Solo Piano',
          badge: 'Intimate Elegance',
          suitedFor: 'Private Cocktail Galas, Art Openings & VIP Dinners',
          details: 'KB Hlwan Moe Aung performing on Grand Piano / Roland Digital Stage. Nuanced acoustic repertoire, customized romantic selections, ambient masterworks.',
          features: ['2-3 Sets Solo Performance', 'Tailored Custom Song Arrangements', 'High-end Stage Sound Setup', 'Masterclass / Q&A Option']
        },
        {
          name: 'Acoustic Romance Trio',
          badge: 'Most Popular for Weddings',
          suitedFor: 'Wedding Ceremonies, Receptions & Anniversary Banquets',
          details: 'Grand Piano, Acoustic Guitar / Cello, and Lead Vocalist. The gold standard for walk-down-the-aisle moments and heartfelt family receptions.',
          features: ['Live March-In Performance', 'Couple’s Custom Love Song', 'Full Reception Background & Features', 'Crystal Clear Wireless Audio']
        },
        {
          name: 'Full 7-Piece Hlwan Music Band',
          badge: 'The Ultimate Celebration',
          suitedFor: 'Grand Weddings, Corporate Year-End Galas & Festival Concerts',
          details: 'The flagship complete ensemble with Piano, Guitars, Bass, Drums, Brass/Sax, and Dual Vocalists. Transitions seamlessly from dinner romance to dance party.',
          features: ['Full Live 7-Piece Band', 'Up to 4 Hours Dynamic Entertainment', 'Full Light & Sound Coordination', 'Encore & Guest Performer Backing']
        },
        {
          name: 'Royal & Traditional Ensemble',
          badge: 'Cultural Heritage',
          suitedFor: 'Shinbyu Ceremonies, Auspicious Blessings & Traditional Galas',
          details: 'A magnificent blend of classical piano arrangements with traditional Myanmar music nuances (မင်္ဂလာသံစဉ်) for auspicious life milestones.',
          features: ['Traditional Auspicious Anthems', 'Harmonized Burmese Classic Medleys', 'Culturally Respectful Repertoire', 'Master Arranger Oversight']
        }
      ]
    },
    repertoire: {
      badge: 'Media & Discography',
      title: 'Signature Repertoire & Concert Media',
      subtitle: 'Explore piano solos, full band performances, tutorials, and traditional masterworks.',
      filterAll: 'All Works',
      filterSolo: 'Solo Piano',
      filterBand: 'Live Band',
      filterTutorial: 'Masterclasses',
      filterTraditional: 'Traditional Arrangements',
      watchVideo: 'Watch Video Performance',
    },
    academy: {
      badge: 'Education & Sound Production',
      title: 'KB Hlwan Moe Aung Academy & Studio',
      subtitle: 'Nurturing the next generation of pianists and crafting broadcast-grade musical productions.',
      academyTitle: 'Keyboard & Piano Academy',
      academyDesc: 'Comprehensive masterclasses covering classical sight-reading, modern chord progressions, Myanmar melodic ornamentation, and synthesizer performance techniques.',
      studioTitle: 'Hlwan Music Studio',
      studioDesc: 'Fully equipped recording facility for piano session tracking, live band mixing, vocal arrangement, custom film scores, and commercial production.',
      featuresA: ['Modern Chord Voicing & Substitution', 'Traditional Burmese Scales & Nuances', 'Live Band Arranging Techniques', 'Interactive One-on-One Masterclasses'],
      featuresS: ['Acoustic Grand Piano Tracking', 'Full Band Multitrack Live Recording', 'Custom Song Writing & Production', 'Digital Mixing & Mastering for Streaming']
    },
    booking: {
      badge: 'Official Booking & Management',
      title: 'Reserve Hlwan Moe Aung & The Band',
      subtitle: 'Direct management contacts for upcoming weddings, galas, concert tours, and private bookings across Myanmar and internationally.',
      directCall: 'Direct Call / Phone Booking',
      viberChat: 'Viber / WhatsApp Inquiries',
      emailInquiry: 'Official Management Email',
      studioLocation: 'Hlwan Music Studio (Yangon)',
      packageAssistance: 'Need help choosing between Solo Piano, Acoustic Trio, or Full 7-Piece Band? Our management team will tailor the musical program for your exact venue and guest list.',
      bookDirectBtn: 'Message on Viber / WhatsApp Now',
      officeHours: 'Monday – Sunday: 9:00 AM – 9:00 PM (MMT)',
    },
    testimonials: {
      badge: 'Accolades',
      title: 'Words from Organizers & Music Lovers',
      subtitle: 'Trusted by elite couples, music producers, and concert promoters.'
    },
    footer: {
      bio: 'KB Hlwan Moe Aung is Myanmar\'s distinguished concert pianist, producer, educator, and bandleader of Hlwan Music Band.',
      quickLinks: 'Navigation',
      contactInfo: 'Direct Inquiries',
      socials: 'Connect With The Maestro',
      copyright: '© 2026 KB Hlwan Moe Aung & Hlwan Music Band. All rights reserved.',
      studioAddress: 'Hlwan Music Studio, Bahan Township, Yangon, Myanmar'
    }
  },
  mm: {
    themes: {
      dark: 'အမှောင်ရောင် (Dark)',
      light: 'အလင်းရောင် (Light)',
      royal: 'စင်တင်ခရမ်းပြာ (Royal)',
    },
    nav: {
      artist: 'စန္ဒရားပညာရှင်',
      band: 'လွှမ်း Music Band',
      repertoire: 'တေးလက်ရာများ',
      gallery: 'ဓာတ်ပုံမှတ်တမ်း',
      academy: 'သင်တန်းနှင့် စတူဒီယို',
      booking: 'ငှားရမ်းဆက်သွယ်ရန်',
      contact: 'လိပ်စာ',
      langToggle: 'English',
    },
    hero: {
      statusBadge: '၂၀၂၆ / ၂၀၂၇ မင်္ဂလာဆောင်နှင့် ဖျော်ဖြေပွဲများ စတင်လက်ခံနေပါပြီ',
      titlePrefix: 'KB',
      titleName: 'လွှမ်းမိုးအောင်',
      tagline: 'စန္ဒရားပညာရှင် • တေးဂီတဖန်တီးသူ • လွှမ်း Music Band အဖွဲ့ခေါင်းဆောင်',
      subtext: 'မြန်မာ့ရိုးရာ သံစဉ်နူးညံ့မှုနှင့် ခေတ်မီ နိုင်ငံတကာ စန္ဒရားသံစဉ်များ၊ အကောင်းဆုံး Live Band တူရိယာလက်စုံ ဖျော်ဖြေမှုများဖြင့် ပရိသတ်တို့၏ နှလုံးသားကို ဖမ်းစားသူ။',
      exploreRepertoireBtn: 'တေးလက်ရာများ ကြည့်ရှုရန်',
      bookBandBtn: 'လွှမ်း Music Band ငှားရမ်းရန်',
      meetArtistBtn: 'အနုပညာခရီးစဉ်',
      activeListeners: 'YouTube & လူမှုကွန်ရက် ပရိသတ် ၂ သိန်းခွဲကျော်နှင့် အတူ',
    },
    stats: {
      experience: 'နှစ်ပေါင်းများစွာ စင်တင်အတွေ့အကြုံ',
      shows: 'ဖျော်ဖြေပွဲနှင့် မင်္ဂလာပွဲပေါင်း',
      community: 'YouTube ဖော်လိုဝါ ပရိသတ်',
      studio: 'စတူဒီယို တေးသံသွင်း လက်ရာများ',
    },
    about: {
      badge: 'အနုပညာနှင့် လုပ်ငန်းကဏ္ဍများ',
      title: 'KB လွှမ်းမိုးအောင် ၏ ဂီတလုပ်ငန်းနှင့် ဖန်တီးမှုလက်ရာများ',
      subtitle: 'စင်တင်ဖျော်ဖြေပွဲများ၊ တေးသံစဉ်ဖန်တီးမှု၊ စတူဒီယို အသံသွင်းခြင်းနှင့် တီးဝိုင်းဦးစီး တင်ဆက်မှုများ',
      workItems: [
        {
          title: 'စင်တင်ဖျော်ဖြေပွဲနှင့် စန္ဒရားတီးခတ်မှု (Concert Performance)',
          category: 'စင်တင်ဖျော်ဖြေမှု',
          desc: 'နိုင်ငံတကာအဆင့် အခမ်းအနားကြီးများ၊ မင်္ဂလာဧည့်ခံပွဲများ၊ ပွဲတော်စတိတ်စင်များနှင့် VIP ညစာစားပွဲများတွင် Grand Piano ဖြင့် နူးညံ့ငြိမ့်ညောင်းသော သံစဉ်များမှသည် တက်ကြွသော ခေတ်ပေါ်သံစဉ်များအထိ ကိုယ်တိုင်တီးခတ်ဖျော်ဖြေခြင်း။',
        },
        {
          title: 'တီးဝိုင်းဦးစီးမှုနှင့် တေးအစီအစဉ် ရေးဆွဲခြင်း (Band Arranging)',
          category: 'တီးဝိုင်းခေါင်းဆောင်',
          desc: 'လွှမ်း Music Band ၏ အဖွဲ့ဝင် ၇ ဦး (စန္ဒရား၊ ဂစ်တာ၊ ဘေ့စ်၊ ဒရမ်၊ ဆက်ဆိုဖုန်း၊ အဆို) တို့အတွက် တီးကွက်၊ ဟာမိုနီနှင့် တူရိယာပေါင်းစပ်မှုများကို ကိုယ်တိုင်စီစဉ်ညွှန်ကြားပြီး တစ်ခမ်းတစ်နား တင်ဆက်ပေးခြင်း။',
        },
        {
          title: 'မြန်မာသံစဉ် မဟာဂီတနှင့် ခေတ်ပေါ်ဂီတ ပေါင်းစပ်မှု (Melodic Fusion)',
          category: 'ရိုးရာနှင့် ခေတ်ပေါ်',
          desc: 'မြန်မာ့ရိုးရာ မဟာဂီတနှင့် ခေတ်ဟောင်းတေးသီချင်းများ၏ မူရင်းသံစဉ်စစ်စစ် မပျက်စေဘဲ ခေတ်မီ နိုင်ငံတကာ စန္ဒရား Chord များ၊ ဆန်းသစ်သော ဟာမိုနီများဖြင့် ပြန်လည်အသက်သွင်း တီးခတ်ဖန်တီးခြင်း။',
        },
        {
          title: 'စတူဒီယို တေးသံသွင်းနှင့် ဂီတဖန်တီးမှု (Studio Production)',
          category: 'စတူဒီယို လက်ရာများ',
          desc: 'Hlwan Music Studio (Yangon) တွင် စန္ဒရားတီးကွက်များ သီးသန့်အသံသွင်းခြင်း၊ တေးသီချင်း အသံသွင်း/အသံဖန်တီးခြင်း၊ ဇာတ်ဝင်တေးများ ရေးစပ်ခြင်းနှင့် Mixing & Mastering လုပ်ငန်းများ လုပ်ဆောင်ခြင်း။',
        },
        {
          title: 'ကီးဘုတ် အသံပိုင်းဆိုင်ရာ ဖန်တီးတီထွင်မှု (Sound Design)',
          category: 'အသံဖန်တီးမှု',
          desc: 'စင်တင်ပွဲတိုင်းတွင် အကောင်းဆုံး အသံထွက်ရရှိစေရန် Yamaha Montage နှင့် Roland RD ကီးဘုတ်ကြီးများတွင် စန္ဒရားအသံ၊ ကြိုးတူရိယာအသံများနှင့် Synthesizer အသံများကို ကိုယ်ပိုင်သီးသန့် Patch ပြုလုပ်အသုံးပြုခြင်း။',
        },
        {
          title: 'ဂီတပညာမျှဝေခြင်းနှင့် သင်တန်းများ (Music Education)',
          category: 'ပညာသင်ကြားရေး',
          desc: 'စန္ဒရားနှင့် ကီးဘုတ် တီးခတ်လိုသော လူငယ်မျိုးဆက်သစ်များအတွက် YouTube နှင့် လူမှုကွန်ရက်တို့တွင် လက်ကွက်သင်ခန်းစာများ၊ Chord သီအိုရီများနှင့် အခမဲ့/အဆင့်မြင့် မာစတာကလပ်စ်များ စဉ်ဆက်မပြတ် မျှဝေပို့ချခြင်း။',
        },
      ],
      disciplinesTitle: 'အဓိက ဆောင်ရွက်လျက်ရှိသော ဂီတလုပ်ငန်းများ',
      disciplinesSubtitle: 'KB လွှမ်းမိုးအောင် အချိန်ပြည့် တစိုက်မတ်မတ် ဖန်တီးဆောင်ရွက်နေသော ကဏ္ဍကြီးများ',
      disciplines: [
        { title: 'စန္ဒရား တစ်ကိုယ်တော် တီးခတ်ခြင်း', desc: 'ဂန္ထဝင် စန္ဒရားဖျော်ဖြေပွဲများ၊ မင်္ဂလာလျှောက်လမ်းတေးနှင့် VIP ဧည့်ခံပွဲများ တီးခတ်ခြင်း။', tag: 'စင်တင်' },
        { title: 'လွှမ်း Music Band ဦးစီးညွှန်ကြားခြင်း', desc: 'တီးဝိုင်းတစ်ဖွဲ့လုံးအတွက် တေးအစီအစဉ်များ ရေးဆွဲစီစဉ်ခြင်းနှင့် ဦးဆောင်ဖျော်ဖြေခြင်း။', tag: 'တီးဝိုင်း' },
        { title: 'တေးသံသွင်းနှင့် ထုတ်လုပ်ရေး', desc: 'Hlwan Music Studio တွင် စန္ဒရားလက်သံသွင်းခြင်း၊ တေးအယ်လ်ဘမ်များနှင့် ရုပ်ရှင်ဇာတ်ဝင်တေးများ ဖန်တီးခြင်း။', tag: 'စတူဒီယို' },
        { title: 'စင်တင် ကီးဘုတ်အသံ ဖန်တီးခြင်း', desc: 'Yamaha / Roland စတိတ်စင် ကီးဘုတ်ကြီးများအတွက် အသံသီးသန့် Patch ဖန်တီးမှုများ။', tag: 'အသံဖန်တီး' },
        { title: 'ဂီတပညာ သင်ကြားပို့ချခြင်း', desc: 'စန္ဒရားလက်ကွက်နှင့် သီအိုရီ သင်ခန်းစာများကို ပရိသတ် ၂ သိန်းခွဲကျော်ထံ မျှဝေသင်ကြားခြင်း။', tag: 'သင်တန်း' }
      ],
      quote: '"တေးသွားတစ်ခုစီတိုင်းကို စန္ဒရားခလုတ် ထိချက်ကအစ တီးဝိုင်းတစ်ခုလုံးရဲ့ အသံမျှတမှုအထိ အသေးစိတ် အနုစိတ် ဖန်တီးထားပါသည်။"',
    },
    band: {
      badge: 'တီးဝိုင်း မိတ်ဆက်',
      title: 'လွှမ်း Music Band (Live Band)',
      subtitle: 'မင်္ဂလာဧည့်ခံပွဲများ၊ ကုမ္ပဏီဂုဏ်ပြုပွဲများနှင့် နိုင်ငံတကာအဆင့် အခမ်းအနားများအတွက် အကောင်းဆုံး တီးဝိုင်း',
      description: 'စန္ဒရားပညာရှင် လွှမ်းမိုးအောင် ကိုယ်တိုင်ဦးစီးပြီး စန္ဒရား၊ ဂစ်တာ၊ ဘေ့စ်၊ ဒရမ်၊ ဆက်ဆိုဖုန်း နှင့် နာမည်ကျော် အဆိုတော်များ ပါဝင်သော လွှမ်း Music Band သည် အသံပိုင်းဆိုင်ရာ စံချိန်စံညွှန်းအမြင့်မားဆုံးဖြင့် ဖျော်ဖြေပေးပါသည်။',
      lineupTitle: 'တီးဝိုင်း အဖွဲ့ဝင်များနှင့် တူရိယာများ',
      packagesTitle: 'ငှားရမ်းနိုင်သော ပက်ကေ့ချ်များ',
      riderTitle: 'စင်တင် အသံစနစ်နှင့် အရည်အသွေး',
      riderDesc: 'Yamaha / Roland ထိပ်တန်း ကီးဘုတ်များ၊ Shure Wireless မိုက်ကရိုဖုန်းများနှင့် အဆင့်မြင့် Digital Mixing အသံထိန်းချုပ်မှုများ အသုံးပြုထားပါသည်။',
      lineup: [
        { role: 'စန္ဒရား & ကီးဘုတ်', name: 'KB လွှမ်းမိုးအောင်', desc: 'တီးဝိုင်းခေါင်းဆောင်၊ တေးအစီအစဉ် ဦးစီးသူ' },
        { role: 'လိဒ် & အကူးစတစ် ဂစ်တာ', name: 'အောင်မင်းသန့်', desc: 'နူးညံ့သော အကူးစတစ်နှင့် သွက်လက်သော လိဒ်သံများ' },
        { role: 'ဘေ့စ်ဂစ်တာ', name: 'စိုင်းကျော်သူ', desc: 'စည်းချက်ညီညာသော အောက်သံ စည်းချက်များ' },
        { role: 'ဒရမ် & ပါကာရှင်', name: 'မင်းဟိန်းခန့်', desc: 'အသံထွက်ကောင်းမွန်သော ဒရမ်လက်သံနှင့် စည်းချက်' },
        { role: 'ဆက်ဆိုဖုန်း & ဂျပန်ပုလွေ', name: 'ကိုနေလင်း', desc: 'ကြည်နူးဖွယ် မင်္ဂလာသံစဉ် ဆက်ဆိုဖုန်း သံများ' },
        { role: 'တေးသံရှင်များ', name: 'ဧည့်သည်နှင့် ပင်တိုင် အဆိုရှင်များ', desc: 'ခေတ်ဟောင်း၊ ခေတ်ပေါ် တေးသီချင်းများဖြင့် ဖျော်ဖြေ' }
      ],
      packages: [
        {
          name: 'စန္ဒရား တစ်ကိုယ်တော် (Solo Piano)',
          badge: 'သီးသန့် ညစာစားပွဲများအတွက်',
          suitedFor: 'VIP ဧည့်ခံပွဲများ၊ အနုပညာပြပွဲများနှင့် သီးသန့် ပါတီများ',
          details: 'KB လွှမ်းမိုးအောင် ကိုယ်တိုင် Grand Piano / Digital Stage ဖြင့် နူးညံ့ငြိမ့်ညောင်းသော တေးသံစဉ်များကို သီးသန့် တီးခတ်ဖျော်ဖြေမှု။',
          features: ['၂ နာရီမှ ၃ နာရီအထိ ဖျော်ဖြေခြင်း', 'ကြိုက်နှစ်သက်ရာ သီချင်းများ စိတ်ကြိုက်ရွေးချယ်နိုင်ခြင်း', 'အရည်အသွေးမြင့် စန္ဒရား အသံစနစ်', 'Masterclass လက်ဆောင်အစီအစဉ်']
        },
        {
          name: 'အကူးစတစ် မင်္ဂလာသံစဉ် (Acoustic Trio)',
          badge: 'မင်္ဂလာပွဲများအတွက် လူကြိုက်အများဆုံး',
          suitedFor: 'မင်္ဂလာဦးဆွမ်းကျွေး၊ လက်မှတ်ရေးထိုးပွဲနှင့် မင်္ဂလာဧည့်ခံပွဲများ',
          details: 'စန္ဒရား၊ အကူးစတစ်ဂစ်တာ၊ ဆယ်လို နှင့် အဆိုရှင်တို့ဖြင့် မင်္ဂလာမောင်နှံ စင်ပေါ်တက်ရောက်ချိန် အမှတ်တရ သီချင်းများကို တိုက်ရိုက်သီဆိုတီးခတ်ပေးခြင်း။',
          features: ['မင်္ဂလာလျှောက်လမ်း တိုက်ရိုက်သံစဉ်', 'သတို့သားသတို့သမီး ကြိုက်နှစ်သက်သော သီချင်းသီးသန့်', 'ဧည့်ခံချိန်တစ်လျှောက် ငြိမ့်ညောင်းသောအသံ', 'ကြိုးမဲ့ မိုက်ကရိုဖုန်းစနစ် ပြည့်စုံစွာပါဝင်']
        },
        {
          name: 'လွှမ်း Music Band အပြည့်အစုံ (Full 7-Piece Band)',
          badge: 'အကြီးကျယ်ဆုံး အခမ်းအနားများအတွက်',
          suitedFor: 'ခမ်းနားသော မင်္ဂလာညစာစားပွဲ၊ နှစ်ပတ်လည်ပွဲနှင့် ဖျော်ဖြေပွဲကြီးများ',
          details: 'စန္ဒရား၊ ဂစ်တာ၊ ဘေ့စ်၊ ဒရမ်၊ ဆက်ဆိုဖုန်း နှင့် အဆိုရှင် စုံလင်စွာပါဝင်သော အဖွဲ့ပြည့် ဖျော်ဖြေမှု။ အချစ်သီချင်းမှသည် အကတေးသီချင်းများအထိ ပါဝင်သည်။',
          features: ['အဖွဲ့ဝင် ၇ ဦး တိုက်ရိုက်ဖျော်ဖြေမှု', '၄ နာရီကြာ တက်ကြွလှပသော တင်ဆက်မှု', 'အလင်းအသံစနစ် အပြည့်အစုံ ချိတ်ဆက်မှု', 'စင်တင်ဧည့်သည်များ တွဲဖက်သီဆိုနိုင်ခြင်း']
        },
        {
          name: 'မဟာဂီတနှင့် ရိုးရာ မင်္ဂလာသံစုံ (Royal Heritage Ensemble)',
          badge: 'မြန်မာ့ယဉ်ကျေးမှု ရိုးရာအခမ်းအနား',
          suitedFor: 'ရှင်ပြုအလှူမင်္ဂလာ၊ ကထိန်နှင့် မင်္ဂလာမော်ကွန်းတင် အခမ်းအနားများ',
          details: 'မြန်မာ့ရိုးရာ မင်္ဂလာသံစဉ်များနှင့် စန္ဒရားသံစုံတေးများကို ခမ်းနားစွာ ရောယှက်တီးခတ်ပေးသော ရိုးရာအစီအစဉ်။',
          features: ['ရိုးရာမင်္ဂလာ မင်္ဂလာတေးများ', 'ဂန္ထဝင် စန္ဒရားလက်စွမ်းပြ တေးများ', 'ယဉ်ကျေးမှုနှင့် လျော်ညီသော ဝတ်စုံနှင့် အစီအစဉ်', 'ပညာရှင် ကိုယ်တိုင် ကြီးကြပ်တီးခတ်ခြင်း']
        }
      ]
    },
    repertoire: {
      badge: 'တေးလက်ရာများနှင့် ဗီဒီယိုများ',
      title: 'ထင်ရှားသော စန္ဒရားတေးများနှင့် ဖျော်ဖြေမှုများ',
      subtitle: 'တစ်ကိုယ်တော် စန္ဒရားလက်ရာများ၊ တီးဝိုင်းဖျော်ဖြေမှုများနှင့် သင်ခန်းစာများကို ရှုစားနားဆင်ပါ။',
      filterAll: 'အားလုံး',
      filterSolo: 'စန္ဒရား တစ်ကိုယ်တော်',
      filterBand: 'Live Band တီးဝိုင်း',
      filterTutorial: 'ကီးဘုတ် သင်ခန်းစာများ',
      filterTraditional: 'ရိုးရာသံစဉ်များ',
      watchVideo: 'ဗီဒီယိုကြည့်ရှုရန်',
    },
    academy: {
      badge: 'ဂီတပညာနှင့် တေးသံသွင်း',
      title: 'KB လွှမ်းမိုးအောင် သင်တန်းနှင့် စတူဒီယို',
      subtitle: 'စန္ဒရားချစ်သူများအတွက် အဆင့်မြင့် သင်တန်းများနှင့် နိုင်ငံတကာအဆင့် တေးသံသွင်း ဝန်ဆောင်မှု။',
      academyTitle: 'စန္ဒရားနှင့် ကီးဘုတ် အကယ်ဒမီ',
      academyDesc: 'အခြေခံမှစ၍ အဆင့်မြင့် Chord တွဲနည်းများ၊ မြန်မာသံစဉ် လက်ကွက်ဖမ်းနည်းများနှင့် စင်တင်တီးခတ်နည်းများကို သင်ကြားပေးပါသည်။',
      studioTitle: 'Hlwan Music Studio',
      studioDesc: 'စန္ဒရားသံသွင်းခြင်း၊ တေးသီချင်း အသံပိုင်းစီစဉ်ခြင်း (Arranging)၊ တီးဝိုင်း Multitrack ဖမ်းယူခြင်းနှင့် အသံရောစပ်ခြင်း ဝန်ဆောင်မှုများ။',
      featuresA: ['ခေတ်မီ Chord တွဲစပ်မှု သီအိုရီများ', 'မြန်မာသံစဉ် အဆစ်အပေါက် လေ့ကျင့်ခန်းများ', 'တီးဝိုင်းနှင့် တွဲဖက်တီးခတ်နည်းများ', 'လက်တွေ့ လေ့ကျင့်နိုင်သော ဗီဒီယိုသင်ခန်းစာများ'],
      featuresS: ['Acoustic စန္ဒရား တိုက်ရိုက်သံသွင်းမှု', 'Live Band အဖွဲ့စုံ သံသွင်းခြင်း', 'ရုပ်ရှင်နှင့် ကြော်ငြာ တေးဂီတ ဖန်တီးခြင်း', 'Streaming အတွက် အဆင့်မြင့် Mastering']
    },
    booking: {
      badge: 'တရားဝင် ငှားရမ်းဆက်သွယ်ရန်',
      title: 'လွှမ်းမိုးအောင်နှင့် တီးဝိုင်းကို ငှားရမ်းရန်',
      subtitle: 'မင်္ဂလာဆောင်၊ နှစ်ပတ်လည်ပွဲ၊ တေးဂီတပွဲကြီးများနှင့် သီးသန့်ပွဲများအတွက် တိုက်ရိုက် ဆက်သွယ်စုံစမ်းနိုင်ပါသည်။',
      directCall: 'တိုက်ရိုက် ဖုန်းခေါ်ဆို၍ စုံစမ်းရန်',
      viberChat: 'Viber / WhatsApp ဖြင့် စာပို့ရန်',
      emailInquiry: 'တရားဝင် အီးမေးလ် လိပ်စာ',
      studioLocation: 'လွှမ်း Music Studio (ရန်ကုန်မြို့)',
      packageAssistance: 'စန္ဒရားတစ်ကိုယ်တော်၊ Acoustic Trio သို့မဟုတ် လွှမ်း Music Band အဖွဲ့ပြည့် ရွေးချယ်မှုအတွက် သင့်လျော်သော အစီအစဉ်ကို ဆွေးနွေးတိုင်ပင်နိုင်ပါသည်။',
      bookDirectBtn: 'Viber / WhatsApp မှတစ်ဆင့် တိုက်ရိုက် မက်ဆေ့ခ်ျပို့ရန်',
      officeHours: 'တနင်္လာ မှ တနင်္ဂနွေ - နံနက် ၉:၀၀ မှ ည ၉:၀၀ အထိ',
    },
    testimonials: {
      badge: 'ပရိသတ်နှင့် ဖောက်သည်များ၏ စကားသံ',
      title: 'ဖျော်ဖြေပွဲ ပွဲစီစဉ်သူများနှင့် မင်္ဂလာမောင်နှံတို့၏ မှတ်ချက်များ',
      subtitle: 'ယုံကြည်စိတ်ချစွာ ရွေးချယ်ခဲ့ကြသော အနုပညာမှတ်တမ်းများ။'
    },
    footer: {
      bio: 'KB လွှမ်းမိုးအောင် သည် မြန်မာနိုင်ငံ၏ ထင်ရှားသော စန္ဒရားပညာရှင်၊ တေးသံစဉ်ဖန်တီးသူနှင့် လွှမ်း Music Band ၏ တည်ထောင်သူ ဖြစ်ပါသည်။',
      quickLinks: 'စာမျက်နှာ အညွှန်း',
      contactInfo: 'တိုက်ရိုက် ဆက်သွယ်ရန်',
      socials: 'လူမှုကွန်ရက် စာမျက်နှာများ',
      copyright: '© ၂၀၂၆ KB လွှမ်းမိုးအောင် & Hlwan Music Band. All rights reserved.',
      studioAddress: 'လွှမ်း Music Studio၊ ဗဟန်းမြို့နယ်၊ ရန်ကုန်မြို့။'
    }
  }
};
