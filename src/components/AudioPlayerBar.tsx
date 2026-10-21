import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, ListMusic, Music2 } from 'lucide-react';
import { jukeboxAudio, TRACK_LIST } from '../utils/audioTracks';
import type { Track } from '../utils/audioTracks';
import type { Language } from '../data/translations';

interface AudioPlayerBarProps {
  currentLang: Language;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({ currentLang }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACK_LIST[0]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false);

  useEffect(() => {
    jukeboxAudio.subscribe((playing, track, time) => {
      setIsPlaying(playing);
      setCurrentTrack(track);
      setCurrentTime(time);
    });
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    jukeboxAudio.seek(val);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (isMuted) setIsMuted(false);
    jukeboxAudio.setVolume(val);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      jukeboxAudio.setVolume(volume);
    } else {
      setIsMuted(true);
      jukeboxAudio.setVolume(0);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Playlist Drawer */}
      {showPlaylist && (
        <div className="max-w-4xl mx-auto px-4 mb-2 animate-fadeIn">
          <div className="bg-[#0f111a]/95 border border-[#e6c387]/30 rounded-2xl p-4 shadow-2xl backdrop-blur-xl max-h-64 overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#e6c387] flex items-center gap-1.5">
                <Music2 className="w-3.5 h-3.5" />
                <span>Featured Discography & Live Recordings</span>
              </span>
              <button
                onClick={() => setShowPlaylist(false)}
                className="text-stone-400 hover:text-white text-xs"
              >
                Close
              </button>
            </div>

            <div className="space-y-1">
              {TRACK_LIST.map((t, idx) => {
                const isActive = t.id === currentTrack.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      jukeboxAudio.playTrack(idx);
                      setShowPlaylist(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between text-xs transition-colors ${
                      isActive
                        ? 'bg-[#e6c387]/15 text-[#fbe2a0] font-semibold border border-[#e6c387]/30'
                        : 'text-stone-300 hover:bg-stone-900/80 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-stone-500 font-mono text-[10px]">0{idx + 1}</span>
                      <div>
                        <p>{currentLang === 'mm' ? t.titleMm : t.title}</p>
                        <p className="text-[10px] text-stone-400 font-normal">{t.credits}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-stone-900 text-stone-400">
                        {t.category}
                      </span>
                      <span className="text-[11px] text-stone-400 font-mono">{t.duration}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Bar Container */}
      <div className="bg-[#0c0e16]/95 border-t border-[#e6c387]/25 backdrop-blur-xl shadow-2xl px-4 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Left: Track Information */}
          <div className="flex items-center gap-3 min-w-0 max-w-[280px] sm:max-w-xs">
            {/* Visualizer Pill / CD Icon */}
            <div
              onClick={() => jukeboxAudio.togglePlay()}
              className="w-10 h-10 rounded-full bg-stone-900 border border-[#e6c387]/40 flex items-center justify-center shrink-0 cursor-pointer group hover:border-[#e6c387]"
            >
              {isPlaying ? (
                <div className="flex items-end gap-[2px] h-4">
                  <span className="w-0.5 bg-[#e6c387] rounded-full wave-bar"></span>
                  <span className="w-0.5 bg-[#e6c387] rounded-full wave-bar"></span>
                  <span className="w-0.5 bg-[#e6c387] rounded-full wave-bar"></span>
                  <span className="w-0.5 bg-[#e6c387] rounded-full wave-bar"></span>
                </div>
              ) : (
                <Play className="w-4 h-4 text-[#e6c387] ml-0.5" />
              )}
            </div>

            <div className="min-w-0">
              <p className="font-serif text-xs sm:text-sm font-bold text-white truncate group-hover:text-[#fbe2a0]">
                {currentLang === 'mm' ? currentTrack.titleMm : currentTrack.title}
              </p>
              <p className="text-[11px] text-[#e6c387]/80 truncate">
                {currentTrack.credits}
              </p>
            </div>
          </div>

          {/* Center: Controls & Scrubber */}
          <div className="flex-1 max-w-xl flex flex-col items-center">
            {/* Playback Buttons */}
            <div className="flex items-center gap-3 sm:gap-4 mb-1">
              <button
                onClick={() => jukeboxAudio.prevTrack()}
                className="p-1 text-stone-400 hover:text-white transition-colors"
                title="Previous Track"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={() => jukeboxAudio.togglePlay()}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-[#fbe2a0] via-[#e6c387] to-[#b8934a] text-stone-950 flex items-center justify-center shadow hover:brightness-110 active:scale-95 transition-all"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-stone-950" /> : <Play className="w-4 h-4 fill-stone-950 ml-0.5" />}
              </button>

              <button
                onClick={() => jukeboxAudio.nextTrack()}
                className="p-1 text-stone-400 hover:text-white transition-colors"
                title="Next Track"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Scrubber & Timeline */}
            <div className="w-full flex items-center gap-2">
              <span className="text-[10px] font-mono text-stone-500 w-8 text-right">
                {formatTime(currentTime)}
              </span>

              <input
                type="range"
                min="0"
                max={currentTrack.durationSec}
                value={currentTime}
                onChange={handleSeek}
                className="flex-1 h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-[#e6c387]"
              />

              <span className="text-[10px] font-mono text-stone-500 w-8">
                {currentTrack.duration}
              </span>
            </div>
          </div>

          {/* Right: Volume & Playlist Drawer Toggle */}
          <div className="flex items-center gap-3">
            {/* Volume Control */}
            <div className="hidden md:flex items-center gap-2">
              <button onClick={toggleMute} className="text-stone-400 hover:text-white">
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-[#e6c387]"
              />
            </div>

            {/* Playlist Button */}
            <button
              onClick={() => setShowPlaylist(!showPlaylist)}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                showPlaylist
                  ? 'bg-[#e6c387]/20 border-[#e6c387] text-[#fbe2a0]'
                  : 'bg-stone-900 border-stone-800 text-stone-300 hover:text-white'
              }`}
              title="Tracklist"
            >
              <ListMusic className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tracklist</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
