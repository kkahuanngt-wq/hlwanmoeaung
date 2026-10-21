export type Language = 'en' | 'mm';

export const translations = {
  en: {
    nav: {
      artist: 'Maestro',
      band: 'Hlwan Music Band',
      piano: 'Virtual Piano',
      repertoire: 'Music & Videos',
      academy: 'Academy & Studio',
      booking: 'Book The Band',
      contact: 'Contact',
      langToggle: 'မြန်မာ',
      listenNow: 'Listen Live',
    },
    hero: {
      statusBadge: 'Now Booking 2026/2027 Concerts, Weddings & Tours',
      titlePrefix: 'KB',
      titleName: 'Hlwan Moe Aung',
      tagline: 'Concert Pianist • Music Producer • Founder & Leader of Hlwan Music Band',
      subtext: 'Harmonizing Myanmar\'s timeless melodic soul with modern classical grandeur and electrifying live band performances across Southeast Asia.',
      playPianoBtn: 'Play Virtual Piano',
      bookBandBtn: 'Book Hlwan Music Band',
      listenTrack: 'Play Signature Music',
      activeListeners: '250,000+ Music Enthusiasts & Followers Worldwide',
    },
    stats: {
      experience: 'Years Stage Mastery',
      shows: 'Live Concerts & Weddings',
      community: 'YouTube Community',
      studio: 'Studio Masterpieces',
    },
    about: {
      badge: 'The Maestro\'s Journey',
      title: 'A Soul Expressed in 88 Keys',
      p1: 'KB Hlwan Moe Aung (လွှမ်းမိုးအောင်) stands as one of Myanmar\'s most distinguished and versatile contemporary pianists. Starting with rigorous classical piano foundations and deep immersion in authentic traditional Burmese melodic scales (သံစဉ်စစ်စစ်), he developed a signature acoustic touch that captures both delicate romance and grand symphonic power.',
      p2: 'Recognizing that music shines brightest when shared as an ensemble, Hlwan Moe Aung founded "Hlwan Music Band" — a premier collective of elite instrumentalists, brass players, and vocalists renowned for electrifying wedding galas, state banquets, and music festivals.',
      p3: 'As a passionate music educator, his keyboard tutorials and harmonic masterclasses have guided over a quarter million aspiring pianists and music lovers across Myanmar and around the world.',
      quote: '"The piano is not merely wood and steel strings; it is the bridge between human sentiment and the eternal language of harmony."',
      milestoneTitle: 'Artistic Milestones',
      milestones: [
        { year: '2010', title: 'Classical Conservatory Honors', desc: 'Advanced keyboard and harmonic analysis certification.' },
        { year: '2015', title: 'Founding Hlwan Music Band', desc: 'Assembled Myanmar’s top live musicians for elite events.' },
        { year: '2019', title: 'YouTube Digital Milestone', desc: 'Surpassed 100k subscribers for piano & keyboard coaching.' },
        { year: '2023', title: 'Hlwan Music Studio Launch', desc: 'Premier acoustic recording & music production facility.' },
        { year: '2026', title: 'National & Regional Tours', desc: 'Over 500 headline live band appearances.' }
      ]
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
    piano: {
      badge: 'Interactive Experience',
      title: 'Touch the Keys of Hlwan Moe Aung',
      subtitle: 'Play our real Web Audio synthesized Grand Piano keyboard directly in your browser. Click, touch, or use your computer keyboard keys.',
      presetLabel: 'Sound Preset',
      presets: {
        grand: 'Concert Grand Piano',
        rhodes: 'Electric Rhodes',
        ambient: 'Cinematic Ambient',
        musicbox: 'Celesta Music Box'
      },
      sustainLabel: 'Sustain Pedal',
      keyShortcuts: 'Computer Keys Enabled: Z to M & Q to U',
      playDemo: 'Play Signature Melody',
      playingDemo: 'Playing "Soul of Irrawaddy"...',
      stopDemo: 'Stop Melody'
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
      listenTrack: 'Play In Audio Bar',
      watchVideo: 'Watch Video Performance',
      sheetMusic: 'Sheet Music & Chords',
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
      badge: 'Reserve Your Date',
      title: 'Book Hlwan Moe Aung & The Band',
      subtitle: 'Inquire for upcoming weddings, corporate galas, concert tours, and private bookings across Myanmar and internationally.',
      calculatorTitle: 'Interactive Booking Calculator',
      selectEvent: 'Select Event Type',
      selectPackage: 'Choose Band Arrangement',
      dateLabel: 'Event Date',
      locationLabel: 'Event City / Location',
      nameLabel: 'Your Full Name / Organization',
      phoneLabel: 'Phone / Viber Number',
      emailLabel: 'Email Address',
      notesLabel: 'Special Requests / Preferred Songs',
      estPrice: 'Estimated Investment Range',
      submitBtn: 'Send Booking Inquiry via Viber / WhatsApp',
      instantContact: 'Need Immediate Confirmation? Call Direct:',
      successTitle: 'Inquiry Prepared Successfully!',
      successDesc: 'Thank you for choosing KB Hlwan Moe Aung & Hlwan Music Band. We will review your date and connect with you shortly.'
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
    nav: {
      artist: 'စန္ဒရားပညာရှင်',
      band: 'လွှမ်း Music Band',
      piano: 'စန္ဒရားတီးခတ်ရန်',
      repertoire: 'တေးသီချင်းနှင့် ဗီဒီယိုများ',
      academy: 'သင်တန်းနှင့် စတူဒီယို',
      booking: 'ငှားရမ်းရန်',
      contact: 'ဆက်သွယ်ရန်',
      langToggle: 'English',
      listenNow: 'တိုက်ရိုက်နားဆင်ရန်',
    },
    hero: {
      statusBadge: '၂၀၂၆ / ၂၀၂၇ မင်္ဂလာဆောင်နှင့် ဖျော်ဖြေပွဲများ စတင်လက်ခံနေပါပြီ',
      titlePrefix: 'KB',
      titleName: 'လွှမ်းမိုးအောင်',
      tagline: 'စန္ဒရားပညာရှင် • တေးဂီတဖန်တီးသူ • လွှမ်း Music Band အဖွဲ့ခေါင်းဆောင်',
      subtext: 'မြန်မာ့ရိုးရာ သံစဉ်နူးညံ့မှုနှင့် ခေတ်မီ နိုင်ငံတကာ စန္ဒရားသံစဉ်များ၊ အကောင်းဆုံး Live Band တူရိယာလက်စုံ ဖျော်ဖြေမှုများဖြင့် ပရိသတ်တို့၏ နှလုံးသားကို ဖမ်းစားသူ။',
      playPianoBtn: 'စန္ဒရားကိုယ်တိုင်တီးကြည့်ရန်',
      bookBandBtn: 'လွှမ်း Music Band ငှားရမ်းရန်',
      listenTrack: 'လက်ရွေးစင်တေးများ နားဆင်ရန်',
      activeListeners: 'YouTube & လူမှုကွန်ရက် ပရိသတ် ၂ သိန်းခွဲကျော်နှင့် အတူ',
    },
    stats: {
      experience: 'နှစ်ပေါင်းများစွာ စင်တင်အတွေ့အကြုံ',
      shows: 'ဖျော်ဖြေပွဲနှင့် မင်္ဂလာပွဲပေါင်း',
      community: 'YouTube ဖော်လိုဝါ ပရိသတ်',
      studio: 'စတူဒီယို တေးသံသွင်း လက်ရာများ',
    },
    about: {
      badge: 'အနုပညာခရီးစဉ်',
      title: 'ကီးဘုတ် ၈၈ လုံးပေါ်က အနုပညာ အသက်ရှူသံ',
      p1: 'KB လွှမ်းမိုးအောင် သည် မြန်မာနိုင်ငံ၏ လူကြိုက်အများဆုံးနှင့် အထူးချွန်ဆုံး စန္ဒရား/ကီးဘုတ်ပညာရှင်များထဲတွင် ထင်ရှားသူဖြစ်ပါသည်။ ဂန္ထဝင် စန္ဒရားပညာ အခြေခံခိုင်မာမှုနှင့်အတူ မြန်မာသံစဉ် မဟာဂီတ အဆစ်အပေါက်များကို ခေတ်ပေါ် ဟာမိုနီများနှင့် လှပစွာ ပေါင်းစပ်ဖန်တီးနိုင်သူ ဖြစ်သည်။',
      p2: 'ဂီတ၏ စွမ်းအားကို ပိုမိုပြည့်စုံစွာ ဖော်ကျူးနိုင်ရန် "လွှမ်း Music Band" ကို ကိုယ်တိုင်တည်ထောင်ကာ အကောင်းဆုံး တူရိယာပညာရှင်များ၊ Saxophone/Brass အဖွဲ့၊ တေးသံရှင်များနှင့်အတူ မင်္ဂလာအခမ်းအနားကြီးများ၊ နိုင်ငံတော်အဆင့် ဧည့်ခံပွဲများနှင့် တေးဂီတဖျော်ဖြေပွဲများစွာကို ဦးဆောင်တင်ဆက်လျက်ရှိသည်။',
      p3: 'ဂီတမျိုးဆက်သစ်များအတွက် သူ၏ YouTube Channel (KB Hlwan Moe Aung) မှတစ်ဆင့် စန္ဒရား/ကီးဘုတ် လက်ကွက်သင်ခန်းစာများ၊ Chord သီအိုရီများကို စေတနာအပြည့်ဖြင့် မျှဝေလျက်ရှိသည်။',
      quote: '"စန္ဒရားဆိုတာ သစ်သားနဲ့ သံကြိုးတွေချည်း သက်သက်မဟုတ်ပါဘူး၊ လူသားတို့ရဲ့ ခံစားချက်ကို ထာဝရဂီတနဲ့ ဆက်သွယ်ပေးတဲ့ တံတားတစ်စင်းပါပဲ။"',
      milestoneTitle: 'မှတ်တိုင်များ',
      milestones: [
        { year: '၂၀၁၀', title: 'ဂန္ထဝင် စန္ဒရားသင်ရိုး ပြီးမြောက်ခြင်း', desc: 'စန္ဒရားနှင့် ကီးဘုတ် အဆင့်မြင့် ဟာမိုနီ လက်မှတ်ရရှိ။' },
        { year: '၂၀၁၅', title: 'လွှမ်း Music Band စတင်ဖွဲ့စည်းခြင်း', desc: 'အဆင့်မြင့် တူရိယာလက်စုံ တိုက်ရိုက်ဖျော်ဖြေရေး တီးဝိုင်း စတင်။' },
        { year: '၂၀၁၉', title: 'YouTube ပရိသတ် ၁ သိန်းကျော် မှတ်တိုင်', desc: 'စန္ဒရားသင်ခန်းစာများဖြင့် Silver Play Button ရရှိ။' },
        { year: '၂၀၂၃', title: 'Hlwan Music Studio စတင်ဖွင့်လှစ်ခြင်း', desc: 'ခေတ်မီ အသံသွင်းနှင့် တေးသံစဉ် ဖန်တီးရေး စတူဒီယို။' },
        { year: '၂၀၂၆', title: 'ပွဲပေါင်း ၅၀၀ ကျော် အောင်မြင်စွာ တင်ဆက်', desc: 'မြန်မာတစ်နိုင်ငံလုံးနှင့် ပြည်ပ အခမ်းအနားများ တင်ဆက်။' }
      ]
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
    piano: {
      badge: 'ကိုယ်တိုင်တီးခတ်ကြည့်ရန်',
      title: 'လွှမ်းမိုးအောင်၏ စန္ဒရားခလုတ်များကို စမ်းသပ်ပါ',
      subtitle: 'သင့် Browser ပေါ်တွင် အသံထွက်အစစ်အမှန် စန္ဒရားကို Mouse၊ လက်ချောင်း (Touch) သို့မဟုတ် ကွန်ပျူတာ Keyboard ခလုတ်များဖြင့် တီးခတ်နိုင်ပါသည်။',
      presetLabel: 'အသံစတိုင်လ် ရွေးချယ်ရန်',
      presets: {
        grand: 'Concert Grand Piano',
        rhodes: 'Electric Rhodes',
        ambient: 'Cinematic Ambient',
        musicbox: 'Celesta Music Box'
      },
      sustainLabel: 'Sustain အသံဆွဲဆိုင်းခလုတ်',
      keyShortcuts: 'ကီးဘုတ် ခလုတ်များ: Z မှ M နှင့် Q မှ U အထိ',
      playDemo: 'စံပြ သံစဉ်နားဆင်ရန်',
      playingDemo: '"ဧရာဝတီသံစဉ်" တီးခတ်နေပါသည်...',
      stopDemo: 'ရပ်တန့်ရန်'
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
      listenTrack: 'အသံဖွင့် နားဆင်ရန်',
      watchVideo: 'ဗီဒီယိုကြည့်ရှုရန်',
      sheetMusic: 'စန္ဒရား သင်္ကေတနှင့် Chord များ',
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
      badge: 'ရက်ချိန်း ရယူရန်',
      title: 'လွှမ်းမိုးအောင်နှင့် တီးဝိုင်းကို ငှားရမ်းရန်',
      subtitle: 'မင်္ဂလာဆောင်၊ နှစ်ပတ်လည်ပွဲ၊ တေးဂီတပွဲကြီးများနှင့် သီးသန့်ပွဲများအတွက် ဆက်သွယ်စုံစမ်းနိုင်ပါသည်။',
      calculatorTitle: 'ကုန်ကျစရိတ်နှင့် ပက်ကေ့ချ် တွက်ချက်ရန်',
      selectEvent: 'အခမ်းအနား အမျိုးအစား',
      selectPackage: 'တီးဝိုင်း ပက်ကေ့ချ် ရွေးချယ်ပါ',
      dateLabel: 'ကျင်းပမည့် နေ့ရက်',
      locationLabel: 'ကျင်းပမည့် မြို့ / နေရာ',
      nameLabel: 'သင့်အမည် / ကုမ္ပဏီအမည်',
      phoneLabel: 'ဖုန်း / Viber နံပါတ်',
      emailLabel: 'အီးမေးလ် လိပ်စာ',
      notesLabel: 'အထူးမှာကြားလိုသည်များ / သီချင်းရွေးချယ်မှု',
      estPrice: 'ခန့်မှန်း ကုန်ကျစရိတ်',
      submitBtn: 'Viber / WhatsApp မှတစ်ဆင့် တိုက်ရိုက်ဆက်သွယ်မည်',
      instantContact: 'အရေးပေါ် ရက်ချိန်းများအတွက် တိုက်ရိုက်ဖုန်းခေါ်ဆိုရန်:',
      successTitle: 'အချက်အလက် ပို့ဆောင်ရန် အဆင်သင့်ဖြစ်ပါပြီ!',
      successDesc: 'KB လွှမ်းမိုးအောင် နှင့် လွှမ်း Music Band ကို ရွေးချယ်သည့်အတွက် ကျေးဇူးတင်ရှိပါသည်။ မကြာမီ အကြောင်းပြန်ပေးပါမည်။'
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
