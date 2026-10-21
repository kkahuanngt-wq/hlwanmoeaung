/**
 * Web Audio API Sound Engine for Hlwan Moe Aung Portfolio
 * Polyphonic acoustic piano synthesizer, presets, and audio synthesis.
 */

export type InstrumentPreset = 'grand' | 'rhodes' | 'ambient' | 'musicbox';

// Note frequencies map (C3 to B5)
const NOTE_FREQUENCIES: Record<string, number> = {
  // Octave 3
  'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81, 'F3': 174.61,
  'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'B3': 246.94,
  // Octave 4 (Middle C)
  'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23,
  'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
  // Octave 5
  'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46,
  'F#5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'B5': 987.77,
  // Octave 6
  'C6': 1046.50
};

class SoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private compressor: DynamicsCompressorNode | null = null;
  private activeVoices: Map<string, { stop: () => void }> = new Map();
  public sustainPedal: boolean = false;
  public currentPreset: InstrumentPreset = 'grand';
  public volume: number = 0.8;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master compressor to prevent clipping
      this.compressor = this.ctx.createDynamicsCompressor();
      this.compressor.threshold.setValueAtTime(-18, this.ctx.currentTime);
      this.compressor.knee.setValueAtTime(12, this.ctx.currentTime);
      this.compressor.ratio.setValueAtTime(6, this.ctx.currentTime);
      this.compressor.attack.setValueAtTime(0.003, this.ctx.currentTime);
      this.compressor.release.setValueAtTime(0.25, this.ctx.currentTime);

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      this.compressor.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public setPreset(preset: InstrumentPreset) {
    this.currentPreset = preset;
  }

  public setSustain(active: boolean) {
    this.sustainPedal = active;
    if (!active) {
      // Release any sustained voices that were released by keys
      this.activeVoices.forEach((voice) => {
        voice.stop();
      });
      this.activeVoices.clear();
    }
  }

  public playNote(note: string, velocity: number = 0.8): () => void {
    try {
      this.initContext();
      if (!this.ctx || !this.compressor) return () => {};

      const freq = NOTE_FREQUENCIES[note] || 440;
      const now = this.ctx.currentTime;

      // Stop previous instance of this note if still ringing
      if (this.activeVoices.has(note)) {
        this.activeVoices.get(note)?.stop();
        this.activeVoices.delete(note);
      }

      const voiceGain = this.ctx.createGain();
      voiceGain.connect(this.compressor);

      let stopFn = () => {};

      switch (this.currentPreset) {
        case 'grand': {
          // Acoustic Grand Piano Synthesis:
          // Multiple harmonics with dynamic overtone damping + hammer transient
          const harmonics = [
            { fMult: 1, gain: 0.8 },
            { fMult: 2, gain: 0.45 },
            { fMult: 3, gain: 0.22 },
            { fMult: 4, gain: 0.12 },
            { fMult: 5, gain: 0.06 },
            { fMult: 6, gain: 0.03 },
          ];

          const oscNodes: OscillatorNode[] = [];

          harmonics.forEach(h => {
            if (!this.ctx) return;
            const osc = this.ctx.createOscillator();
            const hGain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq * h.fMult, now);

            // Slightly detune higher harmonics for acoustic string shimmer
            if (h.fMult > 1) {
              osc.detune.setValueAtTime((Math.random() - 0.5) * 6, now);
            }

            hGain.gain.setValueAtTime(h.gain * velocity, now);
            osc.connect(hGain);
            hGain.connect(voiceGain);
            osc.start(now);
            oscNodes.push(osc);
          });

          // Felt Hammer Strike Transient (White noise short burst)
          const bufferSize = this.ctx.sampleRate * 0.02; // 20ms
          const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
          const data = buffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
          }
          const noise = this.ctx.createBufferSource();
          noise.buffer = buffer;
          const noiseFilter = this.ctx.createBiquadFilter();
          noiseFilter.type = 'bandpass';
          noiseFilter.frequency.setValueAtTime(freq * 1.5, now);
          noiseFilter.Q.setValueAtTime(2, now);

          const noiseGain = this.ctx.createGain();
          noiseGain.gain.setValueAtTime(0.2 * velocity, now);
          noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

          noise.connect(noiseFilter);
          noiseFilter.connect(noiseGain);
          noiseGain.connect(voiceGain);
          noise.start(now);

          // Natural Piano Decay Envelope:
          // Instant attack, fast decay to warm sustain, gentle release
          voiceGain.gain.setValueAtTime(0.001, now);
          voiceGain.gain.linearRampToValueAtTime(velocity, now + 0.005);
          // Initial string decay
          voiceGain.gain.exponentialRampToValueAtTime(velocity * 0.45, now + 0.35);
          // Long acoustic tail
          const maxDecayTime = this.sustainPedal ? 4.5 : 2.5;
          voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + maxDecayTime);

          stopFn = () => {
            if (!this.ctx) return;
            const releaseTime = this.sustainPedal ? 1.5 : 0.2;
            const curTime = this.ctx.currentTime;
            voiceGain.gain.cancelScheduledValues(curTime);
            voiceGain.gain.setValueAtTime(voiceGain.gain.value, curTime);
            voiceGain.gain.exponentialRampToValueAtTime(0.0001, curTime + releaseTime);

            setTimeout(() => {
              oscNodes.forEach(o => {
                try { o.stop(); o.disconnect(); } catch {}
              });
              try { voiceGain.disconnect(); } catch {}
            }, releaseTime * 1000 + 50);
          };

          break;
        }

        case 'rhodes': {
          // Electric Piano / Rhodes: Bell chime + warm tone
          const osc1 = this.ctx.createOscillator();
          const osc2 = this.ctx.createOscillator();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(freq, now);

          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(freq * 2, now); // Octave overtone

          const g2 = this.ctx.createGain();
          g2.gain.setValueAtTime(0.35 * velocity, now);
          g2.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

          osc1.connect(voiceGain);
          osc2.connect(g2);
          g2.connect(voiceGain);

          voiceGain.gain.setValueAtTime(0.001, now);
          voiceGain.gain.linearRampToValueAtTime(velocity * 0.9, now + 0.008);
          voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + (this.sustainPedal ? 4.0 : 2.0));

          osc1.start(now);
          osc2.start(now);

          stopFn = () => {
            if (!this.ctx) return;
            const curTime = this.ctx.currentTime;
            voiceGain.gain.cancelScheduledValues(curTime);
            voiceGain.gain.exponentialRampToValueAtTime(0.0001, curTime + 0.25);
            setTimeout(() => {
              try { osc1.stop(); osc2.stop(); osc1.disconnect(); osc2.disconnect(); } catch {}
            }, 300);
          };
          break;
        }

        case 'ambient': {
          // Cinematic Ambient Pad
          const osc1 = this.ctx.createOscillator();
          const osc2 = this.ctx.createOscillator();
          osc1.type = 'sawtooth';
          osc2.type = 'sine';
          osc1.frequency.setValueAtTime(freq, now);
          osc2.frequency.setValueAtTime(freq * 1.003, now); // Chorus detune

          const filter = this.ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(400, now);
          filter.frequency.exponentialRampToValueAtTime(2200, now + 1.2);

          osc1.connect(filter);
          osc2.connect(filter);
          filter.connect(voiceGain);

          voiceGain.gain.setValueAtTime(0.001, now);
          voiceGain.gain.linearRampToValueAtTime(velocity * 0.5, now + 0.4); // Slow lush attack
          voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 5.0);

          osc1.start(now);
          osc2.start(now);

          stopFn = () => {
            if (!this.ctx) return;
            const curTime = this.ctx.currentTime;
            voiceGain.gain.cancelScheduledValues(curTime);
            voiceGain.gain.exponentialRampToValueAtTime(0.0001, curTime + 1.0);
            setTimeout(() => {
              try { osc1.stop(); osc2.stop(); osc1.disconnect(); osc2.disconnect(); } catch {}
            }, 1100);
          };
          break;
        }

        case 'musicbox': {
          // Celesta / Music Box chime
          const osc = this.ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);

          const harmonic = this.ctx.createOscillator();
          harmonic.type = 'sine';
          harmonic.frequency.setValueAtTime(freq * 3, now); // 3rd harmonic bell

          const hGain = this.ctx.createGain();
          hGain.gain.setValueAtTime(0.25 * velocity, now);
          hGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

          harmonic.connect(hGain);
          hGain.connect(voiceGain);
          osc.connect(voiceGain);

          voiceGain.gain.setValueAtTime(velocity * 0.9, now);
          voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);

          osc.start(now);
          harmonic.start(now);

          stopFn = () => {
            if (!this.ctx) return;
            const curTime = this.ctx.currentTime;
            voiceGain.gain.cancelScheduledValues(curTime);
            voiceGain.gain.exponentialRampToValueAtTime(0.0001, curTime + 0.3);
            setTimeout(() => {
              try { osc.stop(); harmonic.stop(); osc.disconnect(); harmonic.disconnect(); } catch {}
            }, 350);
          };
          break;
        }
      }

      const voice = { stop: stopFn };
      this.activeVoices.set(note, voice);
      return stopFn;
    } catch {
      return () => {};
    }
  }

  public releaseNote(note: string) {
    if (!this.sustainPedal && this.activeVoices.has(note)) {
      this.activeVoices.get(note)?.stop();
      this.activeVoices.delete(note);
    }
  }

  // Pre-programmed signature piano demonstration melodies
  public playDemoMelody(onNoteActive?: (note: string) => void, onComplete?: () => void): () => void {
    let cancelled = false;

    // "Elegance of the Irrawaddy" Piano Motif (KB Hlwan Moe Aung style)
    const melody: Array<{ note: string; duration: number; delay: number }> = [
      { note: 'E4', duration: 450, delay: 0 },
      { note: 'G4', duration: 450, delay: 350 },
      { note: 'A4', duration: 750, delay: 700 },
      { note: 'B4', duration: 400, delay: 1450 },
      { note: 'D5', duration: 450, delay: 1850 },
      { note: 'E5', duration: 1100, delay: 2300 },
      // Descending grace run
      { note: 'D5', duration: 350, delay: 3400 },
      { note: 'B4', duration: 350, delay: 3750 },
      { note: 'A4', duration: 450, delay: 4100 },
      { note: 'G4', duration: 600, delay: 4550 },
      { note: 'E4', duration: 1200, delay: 5150 },
      // Harmonized resolution chord
      { note: 'C4', duration: 1500, delay: 6350 },
      { note: 'E4', duration: 1500, delay: 6400 },
      { note: 'G4', duration: 1500, delay: 6450 },
      { note: 'C5', duration: 2000, delay: 6500 },
    ];

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    melody.forEach(item => {
      const t = setTimeout(() => {
        if (cancelled) return;
        this.playNote(item.note, 0.85);
        if (onNoteActive) onNoteActive(item.note);
      }, item.delay);
      timeouts.push(t);
    });

    const finishTimeout = setTimeout(() => {
      if (!cancelled && onComplete) {
        onComplete();
      }
    }, 8700);
    timeouts.push(finishTimeout);

    return () => {
      cancelled = true;
      timeouts.forEach(t => clearTimeout(t));
    };
  }
}

export const soundEngine = new SoundEngine();
