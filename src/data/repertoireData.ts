export interface RepertoireItem {
  id: string;
  title: string;
  titleMm: string;
  category: 'solo' | 'band' | 'traditional' | 'duet';
  year: string;
  featuring?: string;
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
    title: 'Eain Mat Say Ta Man (အိပ်မက်စေတမန်)',
    titleMm: 'အိပ်မက်စေတမန် - ကျော်ကျော်အောင် x လွှမ်းမိုးအောင်',
    category: 'band',
    year: 'Official Release',
    featuring: 'Kyaw Kyaw Aung x Hlwan Moe Aung',
    keySignature: 'Contemporary Ballad / Pop-Rock',
    tempo: 'Live Band Arrangement',
    image: './images/activity-3.jpg',
    description: 'Special collaboration music project featuring Kyaw Kyaw Aung on vocals and KB Hlwan Moe Aung on grand keyboards and band arrangement.',
    descriptionMm: 'တေးသံရှင် ကျော်ကျော်အောင်နှင့် ဆရာလွှမ်းမိုးအောင်တို့၏ တူရိယာလက်စွမ်းပြ နာမည်ကျော် တေးသီချင်းလက်ရာ။',
    tags: ['Official Music', 'Live Band', 'Keyboards']
  },
  {
    id: 'rep-2',
    title: 'A Tu Twal Kar (အတူတွဲကာ)',
    titleMm: 'အတူတွဲကာ - လွှမ်းမိုးအောင် x ရွှေမွန်',
    category: 'duet',
    year: 'Romantic Suite',
    featuring: 'Hlwan Moe Aung x Shwe Mon',
    keySignature: 'Wedding Romance / Acoustic',
    tempo: 'Heartfelt Ballad',
    image: './images/activity-8.jpg',
    description: 'Heartfelt romantic ballad featuring vocalist Shwe Mon and signature acoustic keyboard accompaniment by KB Hlwan Moe Aung.',
    descriptionMm: 'တေးသံရှင် ရွှေမွန်နှင့်အတူ စန္ဒရားလက်သံဖြင့် သီဆိုတီးခတ်ထားသော ကြည်နူးဖွယ် မင်္ဂလာသံစဉ်။',
    tags: ['Wedding Ballad', 'Duet', 'Romantic Keys']
  },
  {
    id: 'rep-3',
    title: 'Shan Doe Myue Myue Lay (Instrumental)',
    titleMm: 'ရှမ်းဒိုးမြူးမြူးလေး - စန္ဒရားနှင့် တူရိယာသံစဉ်',
    category: 'traditional',
    year: 'Traditional Solo',
    keySignature: 'Shan Folk Melodic Nuance',
    tempo: 'Upbeat Lively Rhythm',
    image: './images/activity-1.jpg',
    description: 'Vibrant instrumental arrangement blending Shan folk rhythms with keyboard chord voicings and traditional percussion.',
    descriptionMm: 'ရှမ်းရိုးရာ တေးသံစဉ်မြူးမြူးကို ခေတ်မီကီးဘုတ်လက်ကွက်များဖြင့် ပေါင်းစပ်တီးခတ်ထားသော တေးလက်ရာ။',
    tags: ['Folk Rhythm', 'Instrumental', 'Keyboard Solo']
  },
  {
    id: 'rep-4',
    title: 'Yay Kin Than Lay Bouk Nae Phwint (Instrumental)',
    titleMm: 'ရေကင်းသံလေးဘောက်နဲ့ဖွင့် - စန္ဒရားလက်သံစစ်စစ်',
    category: 'traditional',
    year: 'Classical Heritage',
    keySignature: 'Myanmar Classical Pentatonic',
    tempo: 'Graceful Melody',
    image: './images/activity-2.jpg',
    description: 'Classical Myanmar melody performed with intricate keyboard phrasing, authentic Burmese ornaments, and soulful touch.',
    descriptionMm: 'မြန်မာ့ဂန္ထဝင် စန္ဒရားလက်ကွက် အဆစ်အပေါက်များကို အနုစိတ် ဖော်ကျူးထားသော သံစဉ်စစ်စစ်။',
    tags: ['Mahagita Nuance', 'Burmese Classical', 'Solo Keys']
  },
  {
    id: 'rep-5',
    title: 'Mya Man Ge Yi & Nan Bone Thi Har Bway',
    titleMm: 'မြမန်းဂီရိ နှင့် နန်းဘုံသီဟာဘွဲ့ - မဟာဂီတ တေးသံစဉ်',
    category: 'traditional',
    year: 'Mahagita Suite',
    keySignature: 'Royal Classical Scale',
    tempo: 'Traditional Grandeur',
    image: './images/activity-7.jpg',
    description: 'Two legendary royal court melodies harmonized on keyboards, honoring the historical depth of Myanmar musical literature.',
    descriptionMm: 'နန်းဆန်သော မဟာဂီတတေးများကို ကီးဘုတ်ခလုတ်များပေါ်တွင် ခမ်းနားစွာ တီးခတ်တင်ဆက်ထားခြင်း။',
    tags: ['Royal Court', 'Heritage Suite', 'Mahagita']
  },
  {
    id: 'rep-6',
    title: 'Kaung Kyo Lo Yar Sanda (ကောင်းကျိုးလိုရာဆန္ဒ)',
    titleMm: 'ကောင်းကျိုးလိုရာဆန္ဒ - မင်္ဂလာအလှူတော် သံစုံတေး',
    category: 'traditional',
    year: 'Ceremonial',
    keySignature: 'Auspicious Blessing Suite',
    tempo: 'Serene & Uplifting',
    image: './images/activity-5.jpg',
    description: 'Auspicious celebratory piece performed for Shinbyu ceremonies, auspicious donations, and wedding blessings across Myanmar.',
    descriptionMm: 'ရှင်ပြုအလှူတော် မင်္ဂလာများနှင့် မင်္ဂလာဧည့်ခံပွဲများတွင် ဖျော်ဖြေပေးသော ဆုတောင်းမင်္ဂလာတေး။',
    tags: ['Shinbyu Blessing', 'Auspicious', 'Live Band']
  },
  {
    id: 'rep-7',
    title: 'Lwan Nay Sal Par Nan Yal (လွမ်းနေဆဲပါနန်းရယ်)',
    titleMm: 'လွမ်းနေဆဲပါနန်းရယ် - စန္ဒရား အလွမ်းတေးသံစဉ်',
    category: 'solo',
    year: 'Emotional Solo',
    keySignature: 'Melancholic Piano Ballad',
    tempo: 'Slow Expressive',
    image: './images/activity-4.jpg',
    description: 'Expressive solo keyboard ballad capturing the deep nostalgic sentiment and poetic romance of Myanmar song traditions.',
    descriptionMm: 'ဆရာလွှမ်းမိုးအောင် ကိုယ်တိုင် နူးညံ့ငြိမ့်ညောင်းစွာ တီးခတ်ထားသော အမှတ်တရ စန္ဒရားတေး။',
    tags: ['Solo Piano', 'Nostalgia', 'Expressive']
  },
  {
    id: 'rep-8',
    title: 'A Sain Nay Ya Yay Kin (Instrumental)',
    titleMm: 'အစိမ်းနေရာ ရေကင်း - လက်စွမ်းပြ စန္ဒရားသံစဉ်',
    category: 'solo',
    year: 'Instrumental',
    keySignature: 'Acoustic Piano Virtuosity',
    tempo: 'Flowing & Delicate',
    image: './images/activity-6.jpg',
    description: 'Showcasing subtle finger drills, dynamic touch sensitivity, and harmonic control on the piano.',
    descriptionMm: 'စန္ဒရားခလုတ်များပေါ်တွင် လက်သံအထွက် သန့်ပြန့်ကြည်လင်စွာ တီးခတ်ပြသထားသော လက်ရာ။',
    tags: ['Piano Technique', 'Instrumental', 'Harmonics']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'KB Hlwan Moe Aung Official Portrait',
    titleMm: 'ဆရာ KB လွှမ်းမိုးအောင် ၏ အနုပညာပုံရိပ်',
    category: 'studio',
    image: './images/hlwan-moe-aung-profile.jpg',
    caption: 'Official portrait of pianist, instructor, and bandleader KB Hlwan Moe Aung.',
    captionMm: 'စန္ဒရားဆရာနှင့် တေးဂီတအဖွဲ့ ခေါင်းဆောင် KB လွှမ်းမိုးအောင် ၏ တရားဝင် အနုပညာမှတ်တမ်းပုံ။',
    date: 'Official Photo'
  },
  {
    id: 'gal-2',
    title: 'Eain Mat Say Ta Man Studio Project',
    titleMm: 'အိပ်မက်စေတမန် တေးသီချင်း ဖန်တီးမှု မှတ်တမ်း',
    category: 'concert',
    image: './images/activity-3.jpg',
    caption: 'Live performance and music video collaboration with vocalist Kyaw Kyaw Aung.',
    captionMm: 'တေးသံရှင် ကျော်ကျော်အောင်နှင့်အတူ စင်တင်ဖျော်ဖြေရေးနှင့် တေးသံသွင်း မှတ်တမ်း။',
    date: 'Studio & Stage'
  },
  {
    id: 'gal-3',
    title: 'Romantic Duet Collaboration with Shwe Mon',
    titleMm: 'တေးသံရှင် ရွှေမွန် နှင့်အတူ တေးသီချင်း ရိုက်ကူးမှု',
    category: 'wedding',
    image: './images/activity-8.jpg',
    caption: 'Romantic keyboard arrangement and performance for "A Tu Twal Kar".',
    captionMm: 'ကြည်နူးဖွယ် မင်္ဂလာတေး "အတူတွဲကာ" သီဆိုတီးခတ်နေစဉ်။',
    date: 'Wedding & Duet'
  },
  {
    id: 'gal-4',
    title: 'Shan Folk Keyboard Arrangement',
    titleMm: 'ရှမ်းရိုးရာ တေးဂီတ တီးခတ်မှု လှုပ်ရှားမှု',
    category: 'concert',
    image: './images/activity-1.jpg',
    caption: 'Performing the lively rhythm piece "Shan Doe Myue Myue Lay".',
    captionMm: 'တက်ကြွမြူးကြွသော ရှမ်းရိုးရာ စည်းချက်တေးကို ကီးဘုတ်ဖြင့် တီးခတ်ပြသနေစဉ်။',
    date: 'Live Performance'
  },
  {
    id: 'gal-5',
    title: 'Traditional Classical Melody Recording',
    titleMm: 'မြန်မာ့ရိုးရာ ဂန္ထဝင်တေးများ သံသွင်းတီးခတ်မှု',
    category: 'studio',
    image: './images/activity-2.jpg',
    caption: 'Focusing on classical Burmese ornamentation in "Yay Kin Than Lay Bouk Nae Phwint".',
    captionMm: 'ရှေးရိုးရာ မဟာဂီတ သံစဉ်များကို စန္ဒရားခလုတ်များပေါ်တွင် အနုစိတ် တီးခတ်နေပုံ။',
    date: 'Studio Masterclass'
  },
  {
    id: 'gal-6',
    title: 'Ceremonial Blessing & Shinbyu Performance',
    titleMm: 'အလှူတော်မင်္ဂလာနှင့် ရှင်ပြုပွဲ တီးခတ်မှုများ',
    category: 'wedding',
    image: './images/activity-5.jpg',
    caption: 'Keyboard performance for "Kaung Kyo Lo Yar Sanda" blessing ceremonies.',
    captionMm: 'မင်္ဂလာဆုတောင်းတေးနှင့် ရှင်ပြုအလှူတော် အခမ်းအနားများအတွက် ဖျော်ဖြေရေး။',
    date: 'Ceremony & Blessing'
  },
  {
    id: 'gal-7',
    title: 'Mahagita Royal Suite Session',
    titleMm: 'မဟာဂီတ နန်းဘုံသီဟာဘွဲ့ တီးခတ်တင်ဆက်မှု',
    category: 'studio',
    image: './images/activity-7.jpg',
    caption: 'Showcasing the historic suites "Mya Man Ge Yi" and "Nan Bone Thi Har Bway".',
    captionMm: 'မြန်မာ့ဂန္ထဝင် နန်းတွင်းမဟာဂီတ သီချင်းကြီးများကို ကီးဘုတ်ဖြင့် တင်ဆက်နေစဉ်။',
    date: 'Cultural Heritage'
  },
  {
    id: 'gal-8',
    title: 'Solo Ballad & Piano Teaching',
    titleMm: 'စန္ဒရားလက်ကွက်နှင့် အလွမ်းတေး တီးခတ်မှု',
    category: 'backstage',
    image: './images/activity-4.jpg',
    caption: 'Expressive keyboard coaching and performance of "Lwan Nay Sal Par Nan Yal".',
    captionMm: 'စန္ဒရားဝါသနာရှင်များအတွက် လက်ကွက်ဖမ်းနည်းနှင့် တေးသံစဉ် တီးခတ်ပြသနေစဉ်။',
    date: 'Education & Solo'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Kyaw Zin Latt & Thiri May',
    nameMm: 'ဒေါက်တာကျော်ဇင်လတ် နှင့် သီရိမေ',
    role: 'Wedding Reception Client',
    roleMm: 'မင်္ဂလာမောင်နှံ',
    avatar: './images/activity-8.jpg',
    quote: 'Having KB Hlwan Moe Aung and his band perform for our wedding ceremony made our special day unforgettable. His piano touch brought tears of joy to our families.',
    quoteMm: 'ကျွန်တော်တို့ရဲ့ မင်္ဂလာပွဲမှာ ဆရာလွှမ်းမိုးအောင် တေးဂီတအဖွဲ့က တီးခတ်ပေးခဲ့တာ တကယ်ကို အမှတ်တရ ဖြစ်ခဲ့ရပါတယ်။ စန္ဒရားလက်သံက သိပ်ကို ကြည်နူးစရာကောင်းပါတယ်။',
    rating: 5,
    event: 'Grand Wedding Reception'
  },
  {
    id: 'test-2',
    name: 'Kyaw Kyaw Aung',
    nameMm: 'ကျော်ကျော်အောင်',
    role: 'Vocal Artist & Collaborator',
    roleMm: 'တေးသံရှင်',
    avatar: './images/activity-3.jpg',
    quote: 'Working with KB Hlwan Moe Aung on "Eain Mat Say Ta Man" was an incredible musical experience. His chord choices and band directing elevate every song.',
    quoteMm: 'ဆရာလွှမ်းမိုးအောင်နဲ့ လက်တွဲပြီး သီချင်းဖန်တီးရတာ အရမ်းကို အားရကျေနပ်မှုရှိပါတယ်။ သူ့ရဲ့ ကီးဘုတ်လက်သံနဲ့ တီးဝိုင်းစီစဉ်မှုက တကယ်ကို ထူးချွန်ပါတယ်။',
    rating: 5,
    event: 'Official Music Collaboration'
  },
  {
    id: 'test-3',
    name: 'Ko Min Thuta',
    nameMm: 'ကိုမင်းသုတ',
    role: 'Piano & Keyboard Student',
    roleMm: 'စန္ဒရားတီးခတ်သူ & တပည့်',
    avatar: './images/hlwan-moe-aung-profile.jpg',
    quote: 'Teacher Hlwan Moe Aung unlocked piano chord theories and Burmese melodic ornaments that I struggled with for years. Over 250k subscribers learn from him for a reason!',
    quoteMm: 'ဆရာလွှမ်းမိုးအောင်ရဲ့ သင်ကြားပြသပေးမှုကြောင့် နားလည်ရခက်တဲ့ Chord တွဲစပ်မှုတွေကို ချက်ချင်းသဘောပေါက်သွားပါတယ်။ မြန်မာသံစဉ် လက်ကွက်ဖမ်းနည်းတွေက တကယ့်ကို အဖိုးမဖြတ်နိုင်ပါဘူး။',
    rating: 5,
    event: 'Keyboard Academy & YouTube'
  }
];
