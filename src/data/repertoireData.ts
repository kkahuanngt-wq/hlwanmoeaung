export interface RepertoireItem {
  id: string;
  title: string;
  titleMm: string;
  category: 'solo' | 'band' | 'tutorial' | 'traditional';
  duration: string;
  views?: string;
  thumbnail: string;
  videoUrl?: string;
  audioTrackId?: string;
  description: string;
  descriptionMm: string;
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  titleMm: string;
  category: 'concert' | 'wedding' | 'studio' | 'backstage';
  image: string;
  caption: string;
  captionMm: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameMm: string;
  role: string;
  roleMm: string;
  avatar: string;
  quote: string;
  quoteMm: string;
  rating: number;
  event: string;
}

export const REPERTOIRE_ITEMS: RepertoireItem[] = [
  {
    id: 'rep-1',
    title: 'Elegance of the Irrawaddy (စန္ဒရားသံစဉ်)',
    titleMm: 'ဧရာဝတီ၏ ညှို့ဓာတ် စန္ဒရားလက်ရာ',
    category: 'solo',
    duration: '4:15',
    views: '420K views',
    thumbnail: 'https://images.unsplash.com/photo-1520523839898-507121c17240?auto=format&fit=crop&w=900&q=80',
    audioTrackId: 'track-1',
    description: 'Soulful solo concert grand piano performance highlighting traditional pentatonic ornaments with modern impressionistic chords.',
    descriptionMm: 'မြန်မာ့ရိုးရာစန္ဒရားလက်ကွက် အဆစ်အပေါက်များကို ခေတ်မီ ဂန္ထဝင်ဟာမိုနီဖြင့် လှပစွာပေါင်းစပ်ဖန်တီးထားသော တစ်ကိုယ်တော်လက်ရာ။',
    tags: ['Grand Piano', 'Original Composition', 'Concert']
  },
  {
    id: 'rep-2',
    title: 'Hlwan Music Band Live: Grand Gala Overture',
    titleMm: 'လွှမ်း Music Band - မဟာဂုဏ်ပြုဖျော်ဖြေပွဲ စင်တင်တေးသံစုံ',
    category: 'band',
    duration: '6:30',
    views: '850K views',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    audioTrackId: 'track-2',
    description: 'Electrifying 7-piece live band performance recorded at Sedona Grand Ballroom with blistering keyboard and brass solos.',
    descriptionMm: 'Sedona Ballroom တွင် ကျင်းပခဲ့သော ပရိသတ်အကြိုက် အပြင်းစား ကီးဘုတ်နှင့် တူရိယာလက်စုံ စင်တင်ဖျော်ဖြေမှု။',
    tags: ['Live Band', 'Brass Section', 'Keyboards', 'Ballroom']
  },
  {
    id: 'rep-3',
    title: 'Royal Wedding March-In & Vows Suite',
    titleMm: 'ခမ်းနားသော မင်္ဂလာဦး စန္ဒရားသံစဉ်နှင့် အကူးစတစ်ဆယ်လို',
    category: 'traditional',
    duration: '5:10',
    views: '310K views',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    audioTrackId: 'track-4',
    description: 'Custom acoustic piano and strings arrangement composed for an unforgettable walk down the aisle in Yangon.',
    descriptionMm: 'မင်္ဂလာမောင်နှံ စင်ပေါ်တက်ရောက်ချိန်အတွက် အထူးသီးသန့် ဖန်တီးခဲ့သော ကြည်နူးဖွယ် စန္ဒရားနှင့် တူရိယာလက်ရာ။',
    tags: ['Wedding', 'Romantic', 'Acoustic Trio']
  },
  {
    id: 'rep-4',
    title: 'Masterclass: Modern Chord Voicings & Substitutions',
    titleMm: 'ကီးဘုတ်သင်ခန်းစာ - ခေတ်မီ Chord တွဲစပ်မှုနှင့် လက်ကွက်လျှို့ဝှက်ချက်များ',
    category: 'tutorial',
    duration: '18:45',
    views: '620K views',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    description: 'Comprehensive breakdown on how to elevate simple pop chords into lush 9th, 11th, and re-harmonized progressions.',
    descriptionMm: 'ရိုးရိုး Chord များမှသည် အဆင့်မြင့် ဂျက်ဇ်နှင့် ပေါ့ပ် ဟာမိုနီများအဖြစ် ပြောင်းလဲတီးခတ်နည်း အသေးစိတ် ရှင်းပြချက်။',
    tags: ['Masterclass', 'YouTube Education', 'Chord Theory']
  },
  {
    id: 'rep-5',
    title: 'Mandalay Moon: Traditional Pentatonic Nuances',
    titleMm: 'မန္တလေးလရောင်အောက်က သံစဉ်ဟောင်းများ စန္ဒရားပြန်လည်ဆန်းသစ်မှု',
    category: 'traditional',
    duration: '4:50',
    views: '290K views',
    thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=900&q=80',
    audioTrackId: 'track-3',
    description: 'Honoring Myanmar\'s classical melodic heritage through the resonant acoustic sustain of a Steinway Concert Grand.',
    descriptionMm: 'မြန်မာ့မဟာဂီတ အငွေ့အသက်များကို ကမ္ဘာ့အဆင့်မီ စန္ဒရားလက်သံဖြင့် ပြန်လည်အသက်သွင်း တင်ဆက်ထားခြင်း။',
    tags: ['Traditional', 'Steinway', 'Heritage']
  },
  {
    id: 'rep-6',
    title: 'Yangon Midnight Groove (Live Studio Jam)',
    titleMm: 'ရန်ကုန်ညချမ်း စတူဒီယို တိုက်ရိုက် ကီးဘုတ်စွမ်းရည်ပြသမှု',
    category: 'solo',
    duration: '5:20',
    views: '185K views',
    thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80',
    audioTrackId: 'track-5',
    description: 'Improvised neo-soul and funk Rhodes piano solo session recorded live at Hlwan Music Studio.',
    descriptionMm: 'Hlwan Music Studio တွင် ဖမ်းယူခဲ့သော အလန်းစား Neo-Soul နှင့် Rhodes စန္ဒရား အစွမ်းပြ တီးခတ်မှု။',
    tags: ['Neo-Soul', 'Rhodes', 'Studio Jam']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Concert Headline',
    titleMm: 'ရန်ကုန် ကဇာတ်ရုံကြီး စင်တင်ဖျော်ဖြေပွဲ',
    category: 'concert',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=900&q=80',
    caption: 'Hlwan Moe Aung performing live with the Hlwan Music Band in front of 2,000 attendees.',
    captionMm: 'ပရိသတ် ၂,၀၀၀ ကျော်ရှေ့မှောက်တွင် လွှမ်း Music Band နှင့်အတူ စင်တင်ဖျော်ဖြေမှု။',
    date: 'February 2026'
  },
  {
    id: 'gal-2',
    title: 'Royal Wedding Symphony',
    titleMm: 'နန်းဆန်သော မင်္ဂလာအခမ်းအနား တီးခတ်မှု',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    caption: 'Leading the acoustic strings trio during a majestic hotel ballroom processional.',
    captionMm: 'ကြယ်ငါးပွင့်ဟိုတယ် ခန်းမကြီးအတွင်း မင်္ဂလာမောင်နှံအတွက် စန္ဒရားတီးခတ်နေပုံ။',
    date: 'January 2026'
  },
  {
    id: 'gal-3',
    title: 'Hlwan Music Studio Tracking',
    titleMm: 'စတူဒီယိုအတွင်း တေးသီချင်း အသံသွင်းနေစဉ်',
    category: 'studio',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=80',
    caption: 'Multi-keyboard recording session at Hlwan Music Studio Bahan.',
    captionMm: 'ဗဟန်းမြို့နယ်ရှိ Hlwan Music Studio တွင် အသံသွင်း အချောသတ်နေစဉ်။',
    date: 'December 2025'
  },
  {
    id: 'gal-4',
    title: 'Full Brass & Band Rehearsal',
    titleMm: 'တီးဝိုင်းအဖွဲ့ဝင်များ လေ့ကျင့်ပြင်ဆင်နေစဉ်',
    category: 'backstage',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=900&q=80',
    caption: 'Arranging the live brass and keyboard transitions before the National Theatre showcase.',
    captionMm: 'ဖျော်ဖြေပွဲကြီး မတိုင်မီ တီးဝိုင်းအဖွဲ့သားများ အသေးစိတ် အစမ်းလေ့ကျင့်နေကြပုံ။',
    date: 'November 2025'
  },
  {
    id: 'gal-5',
    title: 'Shinbyu Cultural Blessing',
    titleMm: 'ရိုးရာရှင်ပြု မင်္ဂလာ တေးသံစုံ ဖျော်ဖြေမှု',
    category: 'wedding',
    image: 'https://images.unsplash.com/photo-1520523839898-507121c17240?auto=format&fit=crop&w=900&q=80',
    caption: 'Traditional Burmese melodic suite harmonized on white concert grand piano.',
    captionMm: 'မင်္ဂလာအပေါင်းနှင့် ပြည့်စုံသော ရှင်ပြုအလှူတော်မင်္ဂလာ စန္ဒရားလက်ရာ။',
    date: 'October 2025'
  },
  {
    id: 'gal-6',
    title: 'Masterclass Workshop Live',
    titleMm: 'တပည့်များနှင့် တွေ့ဆုံသင်ကြားမှု အခမ်းအနား',
    category: 'studio',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    caption: 'Interactive masterclass coaching emerging pianists on stage voicings.',
    captionMm: 'ဝါသနာရှင် လူငယ်စန္ဒရားသမားများအား လက်တွေ့ သင်ကြားပြသပေးနေစဉ်။',
    date: 'September 2025'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Kyaw Zin Latt & Thiri May',
    nameMm: 'ဒေါက်တာကျော်ဇင်လတ် နှင့် သီရိမေ',
    role: 'Novotel Yangon Max Wedding Couple',
    roleMm: 'Novotel Yangon မင်္ဂလာမောင်နှံ',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Having KB Hlwan Moe Aung and the Hlwan Music Band at our wedding made it truly magical. When he played our custom walk-in ballad on the grand piano, half our guests had tears of joy. Truly world-class artistry!',
    quoteMm: 'ကျွန်တော်တို့ရဲ့ မင်္ဂလာပွဲမှာ ဆရာလွှမ်းမိုးအောင်နဲ့ လွှမ်း Music Band က တီးခတ်ပေးခဲ့တာ တကယ်ကို အမှတ်တရ ဖြစ်ခဲ့ရပါတယ်။ စန္ဒရားလက်သံက သိပ်ကို ကြည်နူးစရာကောင်းပြီး ဧည့်သည်တိုင်းက ချီးကျူးခဲ့ကြပါတယ်။',
    rating: 5,
    event: 'Grand Wedding Reception'
  },
  {
    id: 'test-2',
    name: 'Daw Sandar Win',
    nameMm: 'ဒေါ်စန္ဒာဝင်း',
    role: 'Event Director, Myanmar Apex Gala',
    roleMm: 'ပွဲစီစဉ်မှု ဒါရိုက်တာ၊ Myanmar Apex Gala',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    quote: 'The full 7-piece Hlwan Music Band owned the entire stage. Hlwan Moe Aung\'s leadership and stage presence kept 1,200 VIP guests captivated throughout the entire evening. Sound engineering was spotless.',
    quoteMm: 'လွှမ်း Music Band ရဲ့ ဖျော်ဖြေမှုက ဧည့်သည် ၁,၂၀၀ ကျော်ရှိတဲ့ အခမ်းအနားကြီးတစ်ခုလုံးကို အပြည့်အဝ ဆွဲဆောင်နိုင်ခဲ့ပါတယ်။ ဆရာလွှမ်းမိုးအောင်ရဲ့ ကီးဘုတ်လက်သံနဲ့ တီးဝိုင်းထိန်းချုပ်မှုက အရမ်းတော်ပါတယ်။',
    rating: 5,
    event: 'Corporate Annual Gala'
  },
  {
    id: 'test-3',
    name: 'Min Thuta',
    nameMm: 'မင်းသုတ',
    role: 'Pianist & YouTube Academy Student',
    roleMm: 'စန္ဒရားတီးခတ်သူ & အကယ်ဒမီ တပည့်',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Teacher Hlwan Moe Aung unlocked piano chord theories for me that I struggled with for years. His tutorials on traditional Myanmar melody inflections are pure cultural gold.',
    quoteMm: 'ဆရာလွှမ်းမိုးအောင်ရဲ့ သင်ကြားပြသပေးမှုကြောင့် နားလည်ရခက်တဲ့ Chord တွဲစပ်မှုတွေကို ချက်ချင်းသဘောပေါက်သွားပါတယ်။ မြန်မာသံစဉ် လက်ကွက်ဖမ်းနည်းတွေက တကယ့်ကို အဖိုးမဖြတ်နိုင်တဲ့ အသိပညာတွေပါ။',
    rating: 5,
    event: 'Advanced Keyboard Masterclass'
  }
];
