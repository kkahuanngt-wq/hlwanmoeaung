import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Sparkles, Music, Volume2, Play, Square, Settings2, Sliders } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';
import type { InstrumentPreset } from '../utils/soundEngine';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

interface KeyConfig {
  note: string;
  isBlack: boolean;
  keyboardShortcut: string;
  solfege: string;
}

// 25 keys: C4 to C6
const PIANO_KEYS: KeyConfig[] = [
  // Octave 4
  { note: 'C4', isBlack: false, keyboardShortcut: 'Z', solfege: 'Do' },
  { note: 'C#4', isBlack: true, keyboardShortcut: 'S', solfege: 'Do#' },
  { note: 'D4', isBlack: false, keyboardShortcut: 'X', solfege: 'Re' },
  { note: 'D#4', isBlack: true, keyboardShortcut: 'D', solfege: 'Re#' },
  { note: 'E4', isBlack: false, keyboardShortcut: 'C', solfege: 'Mi' },
  { note: 'F4', isBlack: false, keyboardShortcut: 'V', solfege: 'Fa' },
  { note: 'F#4', isBlack: true, keyboardShortcut: 'G', solfege: 'Fa#' },
  { note: 'G4', isBlack: false, keyboardShortcut: 'B', solfege: 'Sol' },
  { note: 'G#4', isBlack: true, keyboardShortcut: 'H', solfege: 'Sol#' },
  { note: 'A4', isBlack: false, keyboardShortcut: 'N', solfege: 'La' },
  { note: 'A#4', isBlack: true, keyboardShortcut: 'J', solfege: 'La#' },
  { note: 'B4', isBlack: false, keyboardShortcut: 'M', solfege: 'Ti' },
  // Octave 5
  { note: 'C5', isBlack: false, keyboardShortcut: 'Q', solfege: 'Do' },
  { note: 'C#5', isBlack: true, keyboardShortcut: '2', solfege: 'Do#' },
  { note: 'D5', isBlack: false, keyboardShortcut: 'W', solfege: 'Re' },
  { note: 'D#5', isBlack: true, keyboardShortcut: '3', solfege: 'Re#' },
  { note: 'E5', isBlack: false, keyboardShortcut: 'E', solfege: 'Mi' },
  { note: 'F5', isBlack: false, keyboardShortcut: 'R', solfege: 'Fa' },
  { note: 'F#5', isBlack: true, keyboardShortcut: '5', solfege: 'Fa#' },
  { note: 'G5', isBlack: false, keyboardShortcut: 'T', solfege: 'Sol' },
  { note: 'G#5', isBlack: true, keyboardShortcut: '6', solfege: 'Sol#' },
  { note: 'A5', isBlack: false, keyboardShortcut: 'Y', solfege: 'La' },
  { note: 'A#5', isBlack: true, keyboardShortcut: '7', solfege: 'La#' },
  { note: 'B5', isBlack: false, keyboardShortcut: 'U', solfege: 'Ti' },
  // Top note
  { note: 'C6', isBlack: false, keyboardShortcut: 'I', solfege: 'Do' }
];

interface InteractivePianoProps {
  currentLang: Language;
}

export const InteractivePiano: React.FC<InteractivePianoProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [activeNotes, setActiveNotes] = useState<Set<string>>(new Set());
  const [preset, setPreset] = useState<InstrumentPreset>('grand');
  const [sustain, setSustain] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [showKeyLabels, setShowKeyLabels] = useState<boolean>(true);
  const [labelMode, setLabelMode] = useState<'note' | 'shortcut' | 'solfege'>('note');
  const [isPlayingDemo, setIsPlayingDemo] = useState<boolean>(false);
  const demoCancelRef = useRef<(() => void) | null>(null);

  // Key press handlers
  const handleNoteDown = useCallback((note: string) => {
    soundEngine.playNote(note);
    setActiveNotes(prev => new Set(prev).add(note));
  }, []);

  const handleNoteUp = useCallback((note: string) => {
    soundEngine.releaseNote(note);
    setActiveNotes(prev => {
      const next = new Set(prev);
      next.delete(note);
      return next;
    });
  }, []);

  // Keyboard shortcut listener
  useEffect(() => {
    const keyToNoteMap: Record<string, string> = {};
    PIANO_KEYS.forEach(k => {
      keyToNoteMap[k.keyboardShortcut.toLowerCase()] = k.note;
      keyToNoteMap[k.keyboardShortcut.toUpperCase()] = k.note;
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.repeat || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const note = keyToNoteMap[e.key];
      if (note && !activeNotes.has(note)) {
        handleNoteDown(note);
      }
      if (e.code === 'Space') {
        // Spacebar toggles sustain
        e.preventDefault();
        setSustain(prev => {
          const next = !prev;
          soundEngine.setSustain(next);
          return next;
        });
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      const note = keyToNoteMap[e.key];
      if (note) {
        handleNoteUp(note);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
    };
  }, [activeNotes, handleNoteDown, handleNoteUp]);

  // Handle Preset Change
  const handlePresetSelect = (p: InstrumentPreset) => {
    setPreset(p);
    soundEngine.setPreset(p);
  };

  // Handle Sustain Toggle
  const handleSustainToggle = () => {
    const next = !sustain;
    setSustain(next);
    soundEngine.setSustain(next);
  };

  // Handle Volume Change
  const handleVolumeChange = (v: number) => {
    setVolume(v);
    soundEngine.setVolume(v);
  };

  // Play demo song
  const triggerDemo = () => {
    if (isPlayingDemo) {
      if (demoCancelRef.current) {
        demoCancelRef.current();
        demoCancelRef.current = null;
      }
      setIsPlayingDemo(false);
      setActiveNotes(new Set());
    } else {
      setIsPlayingDemo(true);
      demoCancelRef.current = soundEngine.playDemoMelody(
        (note) => {
          setActiveNotes(new Set([note]));
          setTimeout(() => {
            setActiveNotes(prev => {
              const next = new Set(prev);
              next.delete(note);
              return next;
            });
          }, 350);
        },
        () => {
          setIsPlayingDemo(false);
          setActiveNotes(new Set());
        }
      );
    }
  };

  useEffect(() => {
    return () => {
      if (demoCancelRef.current) {
        demoCancelRef.current();
      }
    };
  }, []);

  return (
    <section id="piano" className="py-24 relative bg-[#090a10] border-y border-stone-800/80">
      {/* Background Grand Piano Curve Illumination */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-amber-600/5 via-[#e6c387]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#e6c387]/10 border border-[#e6c387]/25 text-[#fbe2a0] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.piano.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight mb-4">
            {t.piano.title}
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            {t.piano.subtitle}
          </p>
        </div>

        {/* Piano Console Shell */}
        <div className="bg-[#10121a]/90 backdrop-blur-xl border border-[#e6c387]/20 rounded-3xl p-4 sm:p-8 shadow-2xl gold-glow relative">
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-800/80 mb-6">
            {/* Presets Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-stone-400 font-medium hidden sm:inline">
                {t.piano.presetLabel}:
              </span>
              <div className="flex rounded-lg bg-stone-900/90 p-1 border border-stone-800">
                {(['grand', 'rhodes', 'ambient', 'musicbox'] as InstrumentPreset[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => handlePresetSelect(p)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      preset === p
                        ? 'bg-gradient-to-r from-[#fbe2a0] to-[#e6c387] text-stone-950 font-semibold shadow'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    {t.piano.presets[p]}
                  </button>
                ))}
              </div>
            </div>

            {/* Controls Right Side (Sustain, Labels, Volume, Demo) */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Sustain Pedal Toggle */}
              <button
                onClick={handleSustainToggle}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  sustain
                    ? 'bg-amber-500/20 border-amber-400/50 text-[#fbe2a0]'
                    : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
                title="Hold notes (Press Spacebar to toggle)"
              >
                <Sliders className="w-3.5 h-3.5 text-[#e6c387]" />
                <span>{t.piano.sustainLabel}</span>
                <span className={`w-2 h-2 rounded-full ${sustain ? 'bg-amber-400 shadow-sm' : 'bg-stone-600'}`}></span>
              </button>

              {/* Label Mode Switch */}
              <div className="flex items-center rounded-lg bg-stone-900 p-1 border border-stone-800 text-xs text-stone-400">
                <button
                  onClick={() => setShowKeyLabels(!showKeyLabels)}
                  className={`p-1.5 rounded hover:text-stone-200 ${!showKeyLabels ? 'text-stone-600' : 'text-[#e6c387]'}`}
                  title="Toggle Key Labels"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                </button>
                {showKeyLabels && (
                  <select
                    value={labelMode}
                    onChange={(e) => setLabelMode(e.target.value as 'note' | 'shortcut' | 'solfege')}
                    className="bg-transparent text-xs text-stone-300 focus:outline-none px-1 cursor-pointer"
                  >
                    <option value="note" className="bg-stone-900">Note (C4, D4)</option>
                    <option value="shortcut" className="bg-stone-900">Key (Z, X, C)</option>
                    <option value="solfege" className="bg-stone-900">Do-Re-Mi</option>
                  </select>
                )}
              </div>

              {/* Volume Slider */}
              <div className="hidden md:flex items-center gap-2 bg-stone-900 px-3 py-1.5 rounded-lg border border-stone-800">
                <Volume2 className="w-3.5 h-3.5 text-stone-400" />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={volume}
                  onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                  className="w-16 accent-[#e6c387] cursor-pointer"
                />
              </div>

              {/* Demo Song Button */}
              <button
                onClick={triggerDemo}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shadow ${
                  isPlayingDemo
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                    : 'bg-stone-800 hover:bg-stone-700 text-[#fbe2a0] border border-[#e6c387]/30'
                }`}
              >
                {isPlayingDemo ? <Square className="w-3.5 h-3.5 text-red-400" /> : <Play className="w-3.5 h-3.5 text-[#e6c387]" />}
                <span>{isPlayingDemo ? t.piano.stopDemo : t.piano.playDemo}</span>
              </button>
            </div>
          </div>

          {/* Piano Keyboard Bed */}
          <div className="overflow-x-auto pb-4 select-none scrollbar-thin">
            <div className="relative inline-flex min-w-[760px] sm:min-w-full justify-center pt-2 pb-6 px-4 bg-[#0a0b10] rounded-2xl border border-stone-800/90 shadow-inner">
              {/* Grand Piano Red Felt Dampener Strip */}
              <div className="absolute top-2 left-4 right-4 h-2.5 bg-gradient-to-r from-red-950 via-red-800 to-red-950 rounded-t-sm shadow-inner z-20 border-b border-red-900"></div>

              {/* White and Black Keys Rendering */}
              <div className="relative flex">
                {PIANO_KEYS.filter(k => !k.isBlack).map((whiteKey) => {
                  const isActive = activeNotes.has(whiteKey.note);
                  const labelText =
                    labelMode === 'note'
                      ? whiteKey.note
                      : labelMode === 'shortcut'
                      ? whiteKey.keyboardShortcut
                      : whiteKey.solfege;

                  return (
                    <button
                      key={whiteKey.note}
                      onMouseDown={() => handleNoteDown(whiteKey.note)}
                      onMouseUp={() => handleNoteUp(whiteKey.note)}
                      onMouseLeave={() => { if (activeNotes.has(whiteKey.note)) handleNoteUp(whiteKey.note); }}
                      onTouchStart={(e) => { e.preventDefault(); handleNoteDown(whiteKey.note); }}
                      onTouchEnd={(e) => { e.preventDefault(); handleNoteUp(whiteKey.note); }}
                      className={`relative w-10 sm:w-12 md:w-14 h-48 sm:h-56 rounded-b-md border-x border-b border-stone-300/80 transition-all flex flex-col justify-end items-center pb-3 cursor-pointer group ${
                        isActive
                          ? 'bg-gradient-to-b from-stone-200 via-[#e6c387] to-[#d8b066] shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)] translate-y-1'
                          : 'bg-gradient-to-b from-[#f3f1ec] via-[#faf8f5] to-[#ece7de] hover:bg-[#fffdf8] shadow-[0_5px_8px_rgba(0,0,0,0.6)]'
                      }`}
                      style={{
                        zIndex: 1,
                        marginLeft: '-1px'
                      }}
                      aria-label={`Piano Key ${whiteKey.note}`}
                    >
                      {/* Key bevel highlight */}
                      <span className="absolute inset-x-1 top-0 h-full border-l border-white/50 pointer-events-none"></span>

                      {/* Note Label */}
                      {showKeyLabels && (
                        <div className="flex flex-col items-center pointer-events-none">
                          <span className={`text-[10px] font-bold ${isActive ? 'text-stone-950' : 'text-stone-600 group-hover:text-stone-900'}`}>
                            {labelText}
                          </span>
                          <span className="text-[8px] text-stone-400 uppercase tracking-tighter">
                            {whiteKey.keyboardShortcut}
                          </span>
                        </div>
                      )}
                    </button>
                  );
                })}

                {/* Black Keys Positioned Above White Keys */}
                <div className="absolute top-0 left-0 right-0 h-32 sm:h-36 pointer-events-none flex">
                  {PIANO_KEYS.map((key, idx) => {
                    if (!key.isBlack) return null;

                    // Calculate black key left offset based on position of white keys
                    // White keys preceding this black key:
                    const precedingWhiteKeys = PIANO_KEYS.slice(0, idx).filter(k => !k.isBlack).length;
                    const isActive = activeNotes.has(key.note);

                    const labelText =
                      labelMode === 'note'
                        ? key.note
                        : labelMode === 'shortcut'
                        ? key.keyboardShortcut
                        : key.solfege;

                    return (
                      <button
                        key={key.note}
                        onMouseDown={() => handleNoteDown(key.note)}
                        onMouseUp={() => handleNoteUp(key.note)}
                        onMouseLeave={() => { if (activeNotes.has(key.note)) handleNoteUp(key.note); }}
                        onTouchStart={(e) => { e.preventDefault(); handleNoteDown(key.note); }}
                        onTouchEnd={(e) => { e.preventDefault(); handleNoteUp(key.note); }}
                        className={`pointer-events-auto absolute w-6 sm:w-7 md:w-8 h-32 sm:h-36 rounded-b-md transition-all flex flex-col justify-end items-center pb-2 cursor-pointer z-10 ${
                          isActive
                            ? 'bg-gradient-to-b from-[#b8934a] via-[#e6c387] to-[#8c6d31] shadow-[0_0_15px_rgba(230,195,135,0.7)] translate-y-0.5'
                            : 'bg-gradient-to-b from-[#202028] via-[#121217] to-[#08080a] hover:from-[#2e2e38] shadow-[0_4px_8px_rgba(0,0,0,0.8)]'
                        }`}
                        style={{
                          left: `calc(${precedingWhiteKeys} * var(--white-key-width, 3.5rem) - (var(--black-key-width, 2rem) / 2))`
                        }}
                        aria-label={`Piano Key ${key.note}`}
                      >
                        {/* 3D Black Key Matte Finish Strip */}
                        <div className="absolute inset-x-0.5 top-0 bottom-3 bg-gradient-to-b from-stone-700/30 to-transparent pointer-events-none rounded-t-sm"></div>

                        {showKeyLabels && (
                          <span className={`text-[9px] font-bold pointer-events-none ${isActive ? 'text-stone-950 font-black' : 'text-[#fbe2a0]'}`}>
                            {labelText}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Help Text */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 pt-4 gap-2">
            <div className="flex items-center gap-2">
              <Music className="w-3.5 h-3.5 text-[#e6c387]" />
              <span>{t.piano.keyShortcuts}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>Press <kbd className="px-1.5 py-0.5 rounded bg-stone-800 text-stone-300 font-mono text-[10px] border border-stone-700">Space</kbd> for Sustain</span>
              <span className="text-stone-600">|</span>
              <span className="text-[#e6c387]">Web Audio API Polyphonic Engine</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        #piano {
          --white-key-width: 2.5rem;
          --black-key-width: 1.5rem;
        }
        @media (min-width: 640px) {
          #piano {
            --white-key-width: 3rem;
            --black-key-width: 1.75rem;
          }
        }
        @media (min-width: 768px) {
          #piano {
            --white-key-width: 3.5rem;
            --black-key-width: 2rem;
          }
        }
      `}</style>
    </section>
  );
};
