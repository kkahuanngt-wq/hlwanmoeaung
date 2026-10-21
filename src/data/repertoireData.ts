export interface RepertoireItem {
  id: string;
  title: string;
  titleMm: string;
  category: 'solo' | 'band' | 'traditional' | 'orchestral';
  year: string;
  keySignature: string;
  tempo: string;
  image: string;
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
    year: '2024',
    keySignature: 'E Minor / Pentatonic',
    tempo: '72 BPM (Andante)',
    image: './images/artist-hero.jpg',
    description: 'Soulful concert grand piano composition highlighting traditional Myanmar pentatonic ornaments harmonized with modern impressionistic chords.',
    descriptionMm: 'မြန်မာ့ရိုးရာစန္ဒရားလက်ကွက် အဆစ်အပေါက်များကို ခေတ်မီ ဂန္ထဝင်ဟာမိုနီဖြင့် လှပစွာပေါင်းစပ်ဖန်တီးထားသော တစ်ကိုယ်တော်လက်ရာ။',
    tags: ['Concert Grand', 'Signature Piece', 'Pentatonic']
  },
  {
    id: 'rep-2',
    title: 'Hlwan Music Band Live: Grand Gala Overture',
    titleMm: 'လွှမ်း Music Band - မဟာဂုဏ်ပြုဖျော်ဖြေပွဲ စင်တင်တေးသံစုံ',
    category: 'band',
    year: '2025',
    keySignature: 'A Minor / D Funk',
    tempo: '116 BPM (Allegro)',
    image: './images/band-live.jpg',
    description: 'Dynamic 7-piece live band overture featuring tight rhythm pocket playing, blazing brass stabs, and virtuosic keyboard solos.',
    descriptionMm: 'ပရိသတ်အကြိုက် အပြင်းစား ကီးဘုတ်လက်သံနှင့် တူရိယာလက်စုံ စင်တင်တိုက်ရိုက် ဖျော်ဖြေမှုတေး။',
    tags: ['Live Band', 'Full Ensemble', 'Brass & Keys']
  },
  {
    id: 'rep-3',
    title: 'Royal Wedding March-In & Vows Suite',
    titleMm: 'ခမ်းနားသော မင်္ဂလာဦး စန္ဒရားသံစဉ်နှင့် အကူးစတစ်ဆယ်လို',
    category: 'traditional',
    year: '2025',
    keySignature: 'C Major / Romantic',
    tempo: '76 BPM (Maestoso)',
    image: './images/wedding-stage.jpg',
    description: 'Bespoke acoustic piano, cello, and vocal suite arranged exclusively for walk-down-the-aisle moments and royal celebrations.',
    descriptionMm: 'မင်္ဂလာမောင်နှံ စင်ပေါ်တက်ရောက်ချိန်အတွက် အထူးသီးသန့် ဖန်တီးခဲ့သော ကြည်နူးဖွယ် စန္ဒရားနှင့် တူရိယာလက်ရာ။',
    tags: ['Wedding Suite', 'Acoustic Trio', 'Romantic']
  },
  {
    id: 'rep-4',
    title: 'Mandalay Moon Serenade',
    titleMm: 'မန္တလေးလရောင်အောက်က သံစဉ်ဟောင်းများ စန္ဒရားပြန်လည်ဆန်းသစ်မှု',
    category: 'traditional',
    year: '2023',
    keySignature: 'D Major / Classical',
    tempo: '68 BPM (Adagio)',
    image: './images/piano-keys.jpg',
    description: 'Honoring Myanmar\'s classical melodic literature through the rich acoustic resonance and delicate touch of a concert grand.',
    descriptionMm: 'မြန်မာ့မဟာဂီတ အငွေ့အသက်များကို ကမ္ဘာ့အဆင့်မီ စန္ဒရားလက်သံဖြင့် ပြန်လည်အသက်သွင်း တင်ဆက်ထားခြင်း။',
    tags: ['Traditional Heritage', 'Classical Study', 'Acoustic']
  },
  {
    id: 'rep-5',
    title: 'Yangon Midnight Groove (Studio Sessions)',
    titleMm: 'ရန်ကုန်ညချမ်း စတူဒီယို တိုက်ရိုက် ကီးဘုတ်စွမ်းရည်ပြသမှု',
    category: 'solo',
    year: '2024',
    keySignature: 'D Minor / Neo-Soul',
    tempo: '104 BPM (Groove)',
    image: './images/studio-session.jpg',
    description: 'Improvised neo-soul and vintage Rhodes piano arrangements captured live at Hlwan Music Studio Bahan.',
    descriptionMm: 'Hlwan Music Studio တွင် ဖမ်းယူခဲ့သော အလန်းစား Neo-Soul နှင့် Rhodes စန္ဒရား အစွမ်းပြ တီးခတ်မှု။',
    tags: ['Rhodes Keys', 'Studio Session', 'Jazz-Funk']
  },
  {
    id: 'rep-6',
    title: 'Symphony of the Golden Pagoda',
    titleMm: 'ရွှေတိဂုံ အလင်းရောင်အောက်က သံစုံတေးသရုပ်ဖော်',
    category: 'orchestral',
    year: '2025',
    keySignature: 'G Major / Symphonic',
    tempo: '84 BPM (Moderato)',
    image: './images/concert-hall.jpg',
    description: 'Grand piano and brass orchestral tone poem celebrating the spiritual serenity and cultural magnificence of Yangon.',
    descriptionMm: 'စန္ဒရားနှင့် တူရိယာသံစုံတွဲဖက်ကာ ခမ်းနားစွာ တင်ဆက်ထားသော ဂုဏ်ပြုတေး။',
    tags: ['Orchestral', 'Grand Brass', 'Ceremonial']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Grand Concert Headline',
    titleMm: 'ရန်ကုန် ကဇာတ်ရုံကြီး စင်တင်ဖျော်ဖြေပွဲ',
    category: 'concert',
    image: './images/concert-hall.jpg',
    caption: 'KB Hlwan Moe Aung performing live with the full Hlwan Music Band in front of an arena audience.',
    captionMm: 'ပရိသတ် ၂,၀၀၀ ကျော်ရှေ့မှောက်တွင် လွှမ်း Music Band နှင့်အတူ စင်တင်ဖျော်ဖြေမှု။',
    date: '2026 Tour'
  },
  {
    id: 'gal-2',
    title: 'Hlwan Music Band Live on Stage',
    titleMm: 'လွှမ်း Music Band စင်တင် တိုက်ရိုက်ဖျော်ဖြေမှု',
    category: 'concert',
    image: './images/band-live.jpg',
    caption: 'Full 7-piece ensemble delivering a high-energy overture at the Grand Ballroom.',
    captionMm: 'ဂုဏ်ပြုညစာစားပွဲကြီးတွင် တီးဝိုင်းလက်စုံဖြင့် အပြင်းစား တင်ဆက်နေစဉ်။',
    date: '2026 Tour'
  },
  {
    id: 'gal-3',
    title: 'Royal Wedding Symphony',
    titleMm: 'နန်းဆန်သော မင်္ဂလာအခမ်းအနား တီးခတ်မှု',
    category: 'wedding',
    image: './images/wedding-stage.jpg',
    caption: 'Leading the acoustic romance trio during a prestigious ballroom ceremony in Yangon.',
    captionMm: 'ကြယ်ငါးပွင့်ဟိုတယ် ခန်းမကြီးအတွင်း မင်္ဂလာမောင်နှံအတွက် စန္ဒရားတီးခတ်နေပုံ။',
    date: '2026 Season'
  },
  {
    id: 'gal-4',
    title: 'Hlwan Music Studio Tracking',
    titleMm: 'စတူဒီယိုအတွင်း တေးသီချင်း အသံသွင်းနေစဉ်',
    category: 'studio',
    image: './images/studio-session.jpg',
    caption: 'Multi-keyboard recording and sound arrangement session at Bahan Studio.',
    captionMm: 'ဗဟန်းမြို့နယ်ရှိ Hlwan Music Studio တွင် အသံသွင်း အချောသတ်နေစဉ်။',
    date: '2025 Sessions'
  },
  {
    id: 'gal-5',
    title: 'Concert Grand Piano Virtuosity',
    titleMm: 'စန္ဒရားလက်သံ အနီးကပ် မှတ်တမ်း',
    category: 'concert',
    image: './images/piano-keys.jpg',
    caption: 'Capturing dynamic acoustic touch and delicate ornamentation on the 88 keys.',
    captionMm: 'စန္ဒရားခလုတ်များပေါ်တွင် ကျွမ်းကျင်စွာ တီးခတ်ပြသနေစဉ်။',
    date: '2025 Sessions'
  },
  {
    id: 'gal-6',
    title: 'Full Band Rehearsal & Arranging',
    titleMm: 'တီးဝိုင်းအဖွဲ့ဝင်များ လေ့ကျင့်ပြင်ဆင်နေစဉ်',
    category: 'backstage',
    image: './images/rehearsal.jpg',
    caption: 'Fine-tuning brass harmonies and dynamic transitions before the National Showcase.',
    captionMm: 'ဖျော်ဖြေပွဲကြီး မတိုင်မီ တီးဝိုင်းအဖွဲ့သားများ အသေးစိတ် အစမ်းလေ့ကျင့်နေကြပုံ။',
    date: '2025 Sessions'
  },
  {
    id: 'gal-7',
    title: 'KB Hlwan Moe Aung Maestro Portrait',
    titleMm: 'စန္ဒရားပညာရှင် လွှမ်းမိုးအောင် အနုပညာပုံရိပ်',
    category: 'studio',
    image: './images/artist-hero.jpg',
    caption: 'Dedicated to the heritage and modern evolution of Myanmar piano music.',
    captionMm: 'မြန်မာ့စန္ဒရားဂီတကို နိုင်ငံတကာအဆင့် ရောက်ရှိစေရန် ဖန်တီးသူ။',
    date: 'Official Portrait'
  },
  {
    id: 'gal-8',
    title: 'Keyboard Masterclass Workshop',
    titleMm: 'တပည့်များနှင့် တွေ့ဆုံသင်ကြားမှု အခမ်းအနား',
    category: 'studio',
    image: './images/academy.jpg',
    caption: 'Interactive mentoring session teaching emerging pianists chord theory and stage performance.',
    captionMm: 'ဝါသနာရှင် လူငယ်စန္ဒရားသမားများအား လက်တွေ့ သင်ကြားပြသပေးနေစဉ်။',
    date: 'Masterclass'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Kyaw Zin Latt & Thiri May',
    nameMm: 'ဒေါက်တာကျော်ဇင်လတ် နှင့် သီရိမေ',
    role: 'Novotel Yangon Max Wedding Couple',
    roleMm: 'Novotel Yangon မင်္ဂလာမောင်နှံ',
    avatar: './images/wedding-stage.jpg',
    quote: 'Having KB Hlwan Moe Aung and the Hlwan Music Band at our wedding made it truly magical. When he played our custom walk-in ballad on the grand piano, our guests were deeply moved. Truly world-class artistry!',
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
    avatar: './images/concert-hall.jpg',
    quote: 'The full 7-piece Hlwan Music Band owned the entire stage. Hlwan Moe Aung\'s leadership and stage presence kept 1,200 VIP guests captivated throughout the entire evening. Flawless acoustic fidelity.',
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
    avatar: './images/artist-hero.jpg',
    quote: 'Teacher Hlwan Moe Aung unlocked piano chord theories for me that I struggled with for years. His lessons on traditional Myanmar melody inflections are pure cultural gold.',
    quoteMm: 'ဆရာလွှမ်းမိုးအောင်ရဲ့ သင်ကြားပြသပေးမှုကြောင့် နားလည်ရခက်တဲ့ Chord တွဲစပ်မှုတွေကို ချက်ချင်းသဘောပေါက်သွားပါတယ်။ မြန်မာသံစဉ် လက်ကွက်ဖမ်းနည်းတွေက တကယ့်ကို အဖိုးမဖြတ်နိုင်တဲ့ အသိပညာတွေပါ။',
    rating: 5,
    event: 'Advanced Keyboard Masterclass'
  }
];
