/**
 * Audio Track definitions and synthesized dynamic multi-instrument playback
 * for KB Hlwan Moe Aung's music player.
 */

export interface Track {
  id: string;
  title: string;
  titleMm: string;
  category: 'Solo Piano' | 'Live Band' | 'Traditional' | 'Romantic Wedding' | 'Jazz-Fusion';
  duration: string;
  durationSec: number;
  description: string;
  descriptionMm: string;
  credits: string;
  bpm: number;
  melodyNotes: Array<{ note: string; octave: number; time: number; dur: number; type?: 'piano' | 'bass' | 'pad' }>;
}

export const TRACK_LIST: Track[] = [
  {
    id: 'track-1',
    title: 'Elegance of the Irrawaddy',
    titleMm: 'ဧရာဝတီ၏ ညှို့ဓာတ် စန္ဒရားသံစဉ်',
    category: 'Solo Piano',
    duration: '3:45',
    durationSec: 225,
    description: 'Soulful grand piano ballad combining traditional Myanmar pentatonic inflections with rich neo-classical harmony.',
    descriptionMm: 'မြန်မာ့ရိုးရာသံစဉ်ချိုချိုနှင့် နိုင်ငံတကာစန္ဒရား ဟာမိုနီပေါင်းစပ်ထားသော လက်ရာစစ်စစ်။',
    credits: 'Hlwan Moe Aung (Solo Grand Piano)',
    bpm: 72,
    melodyNotes: [
      { note: 'E4', octave: 4, time: 0, dur: 0.8, type: 'piano' },
      { note: 'G4', octave: 4, time: 0.8, dur: 0.8, type: 'piano' },
      { note: 'A4', octave: 4, time: 1.6, dur: 1.2, type: 'piano' },
      { note: 'B4', octave: 4, time: 2.8, dur: 0.6, type: 'piano' },
      { note: 'D5', octave: 5, time: 3.4, dur: 0.8, type: 'piano' },
      { note: 'E5', octave: 5, time: 4.2, dur: 2.0, type: 'piano' },
      { note: 'A2', octave: 2, time: 0, dur: 3.0, type: 'bass' },
      { note: 'C3', octave: 3, time: 3.0, dur: 3.0, type: 'bass' },
      { note: 'D5', octave: 5, time: 6.2, dur: 0.6, type: 'piano' },
      { note: 'B4', octave: 4, time: 6.8, dur: 0.6, type: 'piano' },
      { note: 'A4', octave: 4, time: 7.4, dur: 0.8, type: 'piano' },
      { note: 'G4', octave: 4, time: 8.2, dur: 1.0, type: 'piano' },
      { note: 'E4', octave: 4, time: 9.2, dur: 2.5, type: 'piano' },
      { note: 'E2', octave: 2, time: 6.0, dur: 5.0, type: 'bass' }
    ]
  },
  {
    id: 'track-2',
    title: 'Hlwan Music Band Live Overture',
    titleMm: 'လွှမ်း Music Band တိုက်ရိုက်ဖျော်ဖြေမှု မိတ်ဆက်',
    category: 'Live Band',
    duration: '4:18',
    durationSec: 258,
    description: 'High-octane full live band arrangement with dynamic brass stabs, driving drums, and energetic keyboard improvisation.',
    descriptionMm: 'လွှမ်း Music Band ၏ အကောင်းဆုံး တူရိယာလက်စုံ စင်တင်တေးသံစုံ ဖျော်ဖြေမှု။',
    credits: 'Hlwan Music Band (Full 7-Piece Ensemble)',
    bpm: 116,
    melodyNotes: [
      { note: 'A3', octave: 3, time: 0, dur: 0.3, type: 'piano' },
      { note: 'C4', octave: 4, time: 0.3, dur: 0.3, type: 'piano' },
      { note: 'E4', octave: 4, time: 0.6, dur: 0.4, type: 'piano' },
      { note: 'G4', octave: 4, time: 1.0, dur: 0.6, type: 'piano' },
      { note: 'A4', octave: 4, time: 1.6, dur: 0.8, type: 'piano' },
      { note: 'A2', octave: 2, time: 0, dur: 0.5, type: 'bass' },
      { note: 'A2', octave: 2, time: 0.8, dur: 0.5, type: 'bass' },
      { note: 'G2', octave: 2, time: 1.6, dur: 0.8, type: 'bass' },
      { note: 'F2', octave: 2, time: 2.4, dur: 1.2, type: 'bass' },
    ]
  },
  {
    id: 'track-3',
    title: 'Mandalay Moon Serenade',
    titleMm: 'မန္တလေးလရောင်အောက်က တေးလင်္ကာ',
    category: 'Traditional',
    duration: '3:30',
    durationSec: 210,
    description: 'Delicate acoustic piano textures celebrating Myanmar classical literature and traditional lullaby melodies.',
    descriptionMm: 'မြန်မာ့ဂန္ထဝင် အနုပညာ အငွေ့အသက် အပြည့်ပါဝင်သော စန္ဒရားတေးသွား။',
    credits: 'Hlwan Moe Aung (Arranger & Performer)',
    bpm: 68,
    melodyNotes: [
      { note: 'D4', octave: 4, time: 0, dur: 0.8, type: 'piano' },
      { note: 'F#4', octave: 4, time: 0.8, dur: 0.8, type: 'piano' },
      { note: 'A4', octave: 4, time: 1.6, dur: 1.2, type: 'piano' },
      { note: 'B4', octave: 4, time: 2.8, dur: 1.5, type: 'piano' },
      { note: 'D3', octave: 3, time: 0, dur: 4.0, type: 'bass' }
    ]
  },
  {
    id: 'track-4',
    title: 'Aura of Love (Royal Wedding March)',
    titleMm: 'မင်္ဂလာအခမ်းအနား အမှတ်တရ စန္ဒရားတေး',
    category: 'Romantic Wedding',
    duration: '4:02',
    durationSec: 242,
    description: 'Signature romantic wedding processional composed and played live for high-profile Myanmar couples and galas.',
    descriptionMm: 'ကြည်နူးဖွယ် မင်္ဂလာမောင်နှံတို့အတွက် အထူးဖန်တီးထားသော စန္ဒရားသံစဉ်။',
    credits: 'Hlwan Moe Aung & Hlwan Strings Trio',
    bpm: 76,
    melodyNotes: [
      { note: 'C4', octave: 4, time: 0, dur: 1.0, type: 'piano' },
      { note: 'G4', octave: 4, time: 1.0, dur: 1.0, type: 'piano' },
      { note: 'A4', octave: 4, time: 2.0, dur: 1.0, type: 'piano' },
      { note: 'F4', octave: 4, time: 3.0, dur: 1.5, type: 'piano' },
      { note: 'C3', octave: 3, time: 0, dur: 4.0, type: 'bass' }
    ]
  },
  {
    id: 'track-5',
    title: 'Yangon Midnight Groove',
    titleMm: 'ရန်ကုန်ညချမ်း ဂျက်ဇ်ခေါ်သံ',
    category: 'Jazz-Fusion',
    duration: '3:54',
    durationSec: 234,
    description: 'Electric rhodes, synthesizers, and walking bass lines capturing the vibrant nighttime spirit of the city.',
    descriptionMm: 'ခေတ်မီဆန်းသစ်သော ဂျက်ဇ်နှင့် ကီးဘုတ်စတိုင်လ် ဖျော်ဖြေမှု။',
    credits: 'Hlwan Moe Aung (Keyboards & Synth Solos)',
    bpm: 104,
    melodyNotes: [
      { note: 'D4', octave: 4, time: 0, dur: 0.4, type: 'piano' },
      { note: 'F4', octave: 4, time: 0.4, dur: 0.4, type: 'piano' },
      { note: 'G#4', octave: 4, time: 0.8, dur: 0.4, type: 'piano' },
      { note: 'A4', octave: 4, time: 1.2, dur: 0.8, type: 'piano' },
      { note: 'D3', octave: 3, time: 0, dur: 1.0, type: 'bass' }
    ]
  }
];

class JukeboxAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentTrackIndex: number = 0;
  private timer: number | null = null;
  private loopInterval: number | null = null;
  private onStateChangeCallback: ((isPlaying: boolean, track: Track, currentTime: number) => void) | null = null;
  private trackCurrentTime: number = 0;
  private progressInterval: number | null = null;
  private masterGain: GainNode | null = null;
  private volume: number = 0.75;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public subscribe(cb: (isPlaying: boolean, track: Track, currentTime: number) => void) {
    this.onStateChangeCallback = cb;
  }

  public getCurrentTrack(): Track {
    return TRACK_LIST[this.currentTrackIndex];
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public playTrack(index: number) {
    this.stopPlayback();
    this.currentTrackIndex = (index + TRACK_LIST.length) % TRACK_LIST.length;
    this.trackCurrentTime = 0;
    this.isPlaying = true;
    this.initCtx();
    this.startSynthesizedTrack();
  }

  public togglePlay() {
    if (this.isPlaying) {
      this.pausePlayback();
    } else {
      this.initCtx();
      this.isPlaying = true;
      this.startSynthesizedTrack();
    }
  }

  public nextTrack() {
    const nextIdx = (this.currentTrackIndex + 1) % TRACK_LIST.length;
    this.playTrack(nextIdx);
  }

  public prevTrack() {
    const prevIdx = (this.currentTrackIndex - 1 + TRACK_LIST.length) % TRACK_LIST.length;
    this.playTrack(prevIdx);
  }

  public pausePlayback() {
    this.isPlaying = false;
    this.stopLoopTimer();
    this.notifyState();
  }

  public seek(seconds: number) {
    this.trackCurrentTime = Math.max(0, Math.min(seconds, this.getCurrentTrack().durationSec));
    this.notifyState();
  }

  private stopPlayback() {
    this.isPlaying = false;
    this.stopLoopTimer();
    this.trackCurrentTime = 0;
    this.notifyState();
  }

  private stopLoopTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.loopInterval) {
      window.clearInterval(this.loopInterval);
      this.loopInterval = null;
    }
    if (this.progressInterval) {
      window.clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  private notifyState() {
    if (this.onStateChangeCallback) {
      this.onStateChangeCallback(this.isPlaying, this.getCurrentTrack(), this.trackCurrentTime);
    }
  }

  private startSynthesizedTrack() {
    const track = this.getCurrentTrack();
    this.notifyState();

    // Progress counter
    this.progressInterval = window.setInterval(() => {
      if (!this.isPlaying) return;
      this.trackCurrentTime += 1;
      if (this.trackCurrentTime >= track.durationSec) {
        this.nextTrack();
        return;
      }
      this.notifyState();
    }, 1000);

    // Continuous music synthesis loop for the selected track
    const playLoop = () => {
      if (!this.isPlaying || !this.ctx || !this.masterGain) return;

      const now = this.ctx.currentTime;
      const notes = track.melodyNotes;

      notes.forEach(n => {
        if (!this.ctx || !this.masterGain) return;
        const noteFreq = this.noteToFreq(n.note);
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        if (n.type === 'bass') {
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(noteFreq * 0.5, now + n.time);
          gain.gain.setValueAtTime(0.001, now + n.time);
          gain.gain.linearRampToValueAtTime(0.35, now + n.time + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + n.time + n.dur);
        } else {
          osc.type = 'sine';
          osc.frequency.setValueAtTime(noteFreq, now + n.time);

          // Second harmonic for warmth
          const osc2 = this.ctx.createOscillator();
          const g2 = this.ctx.createGain();
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(noteFreq * 2, now + n.time);
          g2.gain.setValueAtTime(0.15, now + n.time);
          g2.gain.exponentialRampToValueAtTime(0.0001, now + n.time + n.dur * 0.8);
          osc2.connect(g2);
          g2.connect(gain);
          osc2.start(now + n.time);
          osc2.stop(now + n.time + n.dur);

          gain.gain.setValueAtTime(0.001, now + n.time);
          gain.gain.linearRampToValueAtTime(0.4, now + n.time + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + n.time + n.dur);
        }

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now + n.time);
        osc.stop(now + n.time + n.dur);
      });
    };

    playLoop();
    this.loopInterval = window.setInterval(() => {
      if (this.isPlaying) {
        playLoop();
      }
    }, 10000);
  }

  private noteToFreq(note: string): number {
    const freqs: Record<string, number> = {
      'C2': 65.41, 'D2': 73.42, 'E2': 82.41, 'F2': 87.31, 'G2': 98.00, 'A2': 110.00, 'B2': 123.47,
      'C3': 130.81, 'D3': 146.83, 'E3': 164.81, 'F3': 174.61, 'G3': 196.00, 'A3': 220.00, 'B3': 246.94,
      'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'B4': 493.88,
      'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F5': 698.46, 'G5': 783.99, 'A5': 880.00
    };
    return freqs[note] || 440;
  }
}

export const jukeboxAudio = new JukeboxAudioEngine();
