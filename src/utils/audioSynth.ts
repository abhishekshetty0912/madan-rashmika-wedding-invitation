/**
 * Peaceful, Romantic Wedding Music Engine
 *
 * Implements a soft, soothing romantic melody inspired by acoustic
 * bamboo bansuri flute and warm acoustic harp/santoor chords.
 * Designed to be gentle, relaxing, not loud, and emotionally warm.
 */

class RomanticWeddingAudioManager {
  private isAudioPlaying: boolean = false;
  private audioCtx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private melodyTimeout: number | null = null;
  private chordInterval: number | null = null;
  private volume: number = 0.25; // Gentle, peaceful default volume
  private listeners: Set<(playing: boolean) => void> = new Set();
  private currentStep: number = 0;

  // Romantic Melody notes: frequencies in Hz (D Major / Raag Yaman romantic progression)
  // Peaceful, warm, heartfelt intervals
  private readonly melodySequence = [
    // Phrase 1: Sweet, welcoming invitation
    { note: 440.0, dur: 1.4, gap: 1.5, name: 'A4' },
    { note: 493.88, dur: 0.9, gap: 1.0, name: 'B4' },
    { note: 587.33, dur: 1.6, gap: 1.8, name: 'D5' },
    { note: 554.37, dur: 1.8, gap: 2.0, name: 'C#5' },

    // Phrase 2: Gentle romantic warmth
    { note: 493.88, dur: 1.2, gap: 1.4, name: 'B4' },
    { note: 440.0, dur: 1.2, gap: 1.4, name: 'A4' },
    { note: 369.99, dur: 1.4, gap: 1.6, name: 'F#4' },
    { note: 329.63, dur: 1.8, gap: 2.0, name: 'E4' },

    // Phrase 3: Soft romantic crescendo
    { note: 369.99, dur: 1.0, gap: 1.2, name: 'F#4' },
    { note: 440.0, dur: 1.0, gap: 1.2, name: 'A4' },
    { note: 587.33, dur: 1.4, gap: 1.5, name: 'D5' },
    { note: 739.99, dur: 1.8, gap: 2.2, name: 'F#5' },

    // Phrase 4: Peaceful blissful resolution
    { note: 659.25, dur: 1.2, gap: 1.4, name: 'E5' },
    { note: 587.33, dur: 1.4, gap: 1.6, name: 'D5' },
    { note: 493.88, dur: 1.2, gap: 1.4, name: 'B4' },
    { note: 440.0, dur: 1.6, gap: 1.8, name: 'A4' },
    { note: 293.66, dur: 2.4, gap: 3.0, name: 'D4' }, // Serene home tone
  ];

  // Soft background harmony chords (Warm, whisper-quiet acoustic pads)
  private readonly chords = [
    [146.83, 220.0, 293.66, 369.99], // D Major (Warm, radiant)
    [196.0, 246.94, 293.66, 392.0],  // G Major (Gentle, expansive)
    [123.47, 185.0, 246.94, 293.66], // B Minor (Tender, romantic)
    [220.0, 277.18, 329.63, 440.0],  // A Major (Auspicious completion)
  ];
  private chordIndex: number = 0;

  constructor() {
    // Lazy initialize on user interaction
  }

  public subscribe(callback: (playing: boolean) => void): () => void {
    this.listeners.add(callback);
    callback(this.isAudioPlaying);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((cb) => cb(this.isAudioPlaying));
  }

  public async play(): Promise<boolean> {
    try {
      this.startMusic();
      this.isAudioPlaying = true;
      this.notifyListeners();
      return true;
    } catch (e) {
      console.warn('Could not start romantic audio context', e);
      return false;
    }
  }

  public pause(): void {
    this.stopMusic();
    this.isAudioPlaying = false;
    this.notifyListeners();
  }

  public toggle(): boolean {
    if (this.isAudioPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isAudioPlaying;
  }

  public setVolume(newVol: number): void {
    this.volume = Math.max(0, Math.min(1, newVol));
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.audioCtx.currentTime, 0.1);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  private initContext() {
    if (!this.audioCtx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtxClass) return;
      this.audioCtx = new AudioCtxClass();
    }

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    if (!this.masterGain && this.audioCtx) {
      this.masterGain = this.audioCtx.createGain();
      // Soft gentle peaceful master level
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      this.masterGain.connect(this.audioCtx.destination);
    }
  }

  private startMusic(): void {
    this.initContext();
    if (!this.audioCtx || !this.masterGain) return;

    this.stopMusic(); // Clear any previous timers

    // Play first soft harmony chord
    this.playNextChord();
    this.chordInterval = window.setInterval(() => {
      this.playNextChord();
    }, 6500);

    // Start peaceful flute melody loop
    this.currentStep = 0;
    this.scheduleNextMelodyNote();
  }

  private stopMusic(): void {
    if (this.melodyTimeout !== null) {
      window.clearTimeout(this.melodyTimeout);
      this.melodyTimeout = null;
    }
    if (this.chordInterval !== null) {
      window.clearInterval(this.chordInterval);
      this.chordInterval = null;
    }
  }

  /**
   * Generates a soft, acoustic Bansuri flute note with gentle breath,
   * warm low-pass acoustic filtering, and delicate vibrato.
   */
  private playFluteNote(freq: number, duration: number) {
    if (!this.audioCtx || !this.masterGain || this.audioCtx.state !== 'running') return;
    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // 1. Primary warm tone (Sine)
    const osc1 = ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // 2. Soft harmonic overtone (Triangle with low volume for wooden body warmth)
    const osc2 = ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq, now);

    // 3. Gentle breath vibrato LFO (starts softly after 200ms)
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.setValueAtTime(4.8, now); // 4.8 Hz gentle vibrato
    lfoGain.gain.setValueAtTime(0, now);
    lfoGain.gain.linearRampToValueAtTime(1.8, now + 0.35); // Subtle pitch vibrato
    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);
    lfoGain.connect(osc2.frequency);
    lfo.start(now);
    lfo.stop(now + duration + 0.5);

    // 4. Acoustic body warmth low-pass filter (mellows out highs, sounds like bamboo)
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(1.2, now);

    // 5. Delicate note envelope: peaceful slow attack, tender sustain, whisper release
    const noteGain = ctx.createGain();
    const maxNoteVol = 0.16; // Soft, peaceful level
    noteGain.gain.setValueAtTime(0.0001, now);
    noteGain.gain.linearRampToValueAtTime(maxNoteVol, now + 0.28); // Soft attack
    noteGain.gain.exponentialRampToValueAtTime(maxNoteVol * 0.75, now + duration * 0.65);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // Gentle tail

    const osc2Gain = ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.22, now);

    // Wire up
    osc1.connect(noteGain);
    osc2.connect(osc2Gain);
    osc2Gain.connect(noteGain);
    noteGain.connect(filter);
    filter.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration);
    osc2.stop(now + duration);
  }

  /**
   * Whisper-quiet warm acoustic harmony pad (simulates acoustic harp / warm string pad)
   */
  private playNextChord() {
    if (!this.audioCtx || !this.masterGain || this.audioCtx.state !== 'running') return;
    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const chord = this.chords[this.chordIndex % this.chords.length];
    this.chordIndex++;

    const chordFilter = ctx.createBiquadFilter();
    chordFilter.type = 'lowpass';
    chordFilter.frequency.setValueAtTime(420, now); // Extremely soft, warm, non-intrusive

    chord.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Staggered slow swell
      const delay = i * 0.08;
      const chordVol = 0.035; // Whisper quiet background pad
      gain.gain.setValueAtTime(0.0001, now + delay);
      gain.gain.linearRampToValueAtTime(chordVol, now + delay + 1.2);
      gain.gain.exponentialRampToValueAtTime(chordVol * 0.5, now + delay + 4.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 6.2);

      osc.connect(gain);
      gain.connect(chordFilter);
      osc.start(now + delay);
      osc.stop(now + delay + 6.3);
    });

    chordFilter.connect(this.masterGain);
  }

  private scheduleNextMelodyNote() {
    if (!this.isAudioPlaying) return;

    const step = this.melodySequence[this.currentStep % this.melodySequence.length];
    this.playFluteNote(step.note, step.dur);

    this.currentStep++;

    // Interval to next note
    const delayMs = step.gap * 1000;
    this.melodyTimeout = window.setTimeout(() => {
      this.scheduleNextMelodyNote();
    }, delayMs);
  }
}

export const weddingAudio = new RomanticWeddingAudioManager();
