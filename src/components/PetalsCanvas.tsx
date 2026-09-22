import { useEffect, useRef, useState } from 'react';

type PetalKind = 'rose' | 'marigold' | 'jasmine' | 'golden_foil';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flipAngle: number;
  flipSpeed: number;
  kind: PetalKind;
  color: string;
  accentColor: string;
  baseOpacity: number;
  swingAmp: number;
  swingSpeed: number;
  swingOffset: number;
}

interface PetalsCanvasProps {
  /** Incremented each time a 5-second petal shower should be triggered */
  trigger: number;
  /** Duration in milliseconds (default: 5000ms = 5 seconds) */
  durationMs?: number;
  /** Callback when the 5-second shower finishes */
  onComplete?: () => void;
}

const ROSE_COLORS = [
  { main: '#B31B2C', accent: '#E84A5F' }, // Rich Auspicious Royal Red
  { main: '#D32F2F', accent: '#FF7597' }, // Deep Crimson
  { main: '#C2185B', accent: '#F48FB1' }, // Velvet Rose Pink
  { main: '#880E4F', accent: '#AD1457' }, // Deep Wine Maroon
];

const MARIGOLD_COLORS = [
  { main: '#F57C00', accent: '#FFD54F' }, // Vibrant Saffron Orange
  { main: '#E65100', accent: '#FFA726' }, // Deep Marigold
  { main: '#FFB300', accent: '#FFF9C4' }, // Auspicious Turmeric Golden
];

const JASMINE_COLORS = [
  { main: '#FFFDF6', accent: '#F5ECCB' }, // Pure Mysore Mallige / Jasmine
  { main: '#FAF6EE', accent: '#E8DEC8' }, // Ivory Flower
];

const GOLD_COLORS = [
  { main: '#E5C378', accent: '#FFF5C0' }, // Sacred Gold Foil Speckle
  { main: '#C59B4B', accent: '#F9E596' },
];

export function PetalsCanvas({
  trigger,
  durationMs = 5000,
  onComplete,
}: PetalsCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Only run when trigger > 0 (i.e. card was opened or trigger button clicked)
    if (trigger <= 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate fresh celebratory floral shower petals
    const petalCount = width < 768 ? 42 : 70;
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      petals.push(createShowerPetal(width, height, i < petalCount * 0.4));
    }
    petalsRef.current = petals;
    setIsActive(true);

    const startTime = performance.now();
    let lastTime = startTime;

    const render = (now: number) => {
      const elapsed = now - startTime;
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      // When 5 seconds elapsed, complete and shut off
      if (elapsed >= durationMs) {
        ctx.clearRect(0, 0, width, height);
        setIsActive(false);
        if (onComplete) onComplete();
        return;
      }

      // Smooth fade out in the last 1.2 seconds of the 5-second duration
      let globalOpacity = 1;
      const fadeStartMs = durationMs - 1200;
      if (elapsed > fadeStartMs) {
        globalOpacity = Math.max(0, 1 - (elapsed - fadeStartMs) / 1200);
      }

      ctx.clearRect(0, 0, width, height);

      petalsRef.current.forEach((petal) => {
        // Falling speed with gravity and air resistance
        petal.y += petal.speedY * 60 * delta;
        petal.rotation += petal.rotationSpeed * delta;
        petal.flipAngle += petal.flipSpeed * delta;
        petal.x +=
          Math.sin(now * 0.002 * petal.swingSpeed + petal.swingOffset) *
          petal.swingAmp *
          delta *
          60;

        // If a petal falls beyond bottom within 5s, recycle gently from top
        if (petal.y > height + 30 && elapsed < durationMs - 1000) {
          petal.y = -20 - Math.random() * 40;
          petal.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate((petal.rotation * Math.PI) / 180);

        // 3D Flip effect (scale x by cos of flip angle for realistic tumbling flutter)
        const scaleX = Math.cos(petal.flipAngle);
        ctx.scale(scaleX, 1);

        ctx.globalAlpha = petal.baseOpacity * globalOpacity;

        // Draw distinct traditional wedding petal structures
        drawPetalStructure(ctx, petal);

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    // Cancel any previous loop and start fresh 5-second animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [trigger, durationMs, onComplete]);

  // Helper to spawn varied realistic wedding petals
  function createShowerPetal(w: number, h: number, startMidAir: boolean): Petal {
    const kinds: PetalKind[] = [
      'rose',
      'rose',
      'marigold',
      'marigold',
      'jasmine',
      'golden_foil',
    ];
    const kind = kinds[Math.floor(Math.random() * kinds.length)];

    let colorPair = ROSE_COLORS[Math.floor(Math.random() * ROSE_COLORS.length)];
    if (kind === 'marigold') {
      colorPair = MARIGOLD_COLORS[Math.floor(Math.random() * MARIGOLD_COLORS.length)];
    } else if (kind === 'jasmine') {
      colorPair = JASMINE_COLORS[Math.floor(Math.random() * JASMINE_COLORS.length)];
    } else if (kind === 'golden_foil') {
      colorPair = GOLD_COLORS[Math.floor(Math.random() * GOLD_COLORS.length)];
    }

    return {
      x: Math.random() * w,
      // Distribute from above top down through the upper screen
      y: startMidAir ? Math.random() * (h * 0.45) : -30 - Math.random() * 120,
      size:
        kind === 'marigold'
          ? 10 + Math.random() * 8
          : kind === 'golden_foil'
          ? 6 + Math.random() * 6
          : 12 + Math.random() * 10,
      speedY: 1.8 + Math.random() * 2.6,
      speedX: (Math.random() - 0.5) * 1.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 100,
      flipAngle: Math.random() * Math.PI * 2,
      flipSpeed: 2.2 + Math.random() * 3.5,
      kind,
      color: colorPair.main,
      accentColor: colorPair.accent,
      baseOpacity: 0.7 + Math.random() * 0.3,
      swingAmp: 0.9 + Math.random() * 1.6,
      swingSpeed: 1.2 + Math.random() * 1.8,
      swingOffset: Math.random() * Math.PI * 2,
    };
  }

  // Draw customized organic petal geometries
  function drawPetalStructure(ctx: CanvasRenderingContext2D, p: Petal) {
    const s = p.size;

    if (p.kind === 'rose') {
      // 1. Auspicious Curved Heart-Shaped Rose Petal with realistic cupped fold
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.9); // Petal base stem
      // Left curved belly
      ctx.bezierCurveTo(-s * 0.85, s * 0.4, -s * 0.95, -s * 0.5, -s * 0.25, -s * 0.95);
      // Top gentle heart indentation
      ctx.quadraticCurveTo(0, -s * 0.75, s * 0.25, -s * 0.95);
      // Right curved belly
      ctx.bezierCurveTo(s * 0.95, -s * 0.5, s * 0.85, s * 0.4, 0, s * 0.9);
      ctx.closePath();
      ctx.fill();

      // Subtle inner petal sheen / ridge highlight
      ctx.strokeStyle = p.accentColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.65);
      ctx.quadraticCurveTo(s * 0.15, 0, 0, -s * 0.5);
      ctx.stroke();
    } else if (p.kind === 'marigold') {
      // 2. Auspicious Marigold (Genda) Ruffled Floret: slender, curved floret with 3 frilled tips
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, s * 1.2); // Base point attached to flower head
      ctx.bezierCurveTo(-s * 0.45, s * 0.5, -s * 0.5, -s * 0.4, -s * 0.35, -s * 1.1);
      // Frilled / notched crest tips
      ctx.lineTo(-s * 0.15, -s * 0.95);
      ctx.lineTo(0, -s * 1.2);
      ctx.lineTo(s * 0.15, -s * 0.95);
      ctx.lineTo(s * 0.35, -s * 1.1);
      ctx.bezierCurveTo(s * 0.5, -s * 0.4, s * 0.45, s * 0.5, 0, s * 1.2);
      ctx.closePath();
      ctx.fill();

      // Marigold central vein accent
      ctx.strokeStyle = p.accentColor;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.8);
      ctx.lineTo(0, -s * 0.8);
      ctx.stroke();
    } else if (p.kind === 'jasmine') {
      // 3. Sacred Mysore Mallige / Jasmine Petal: graceful elongated ivory teardrop
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, s * 1.1);
      ctx.bezierCurveTo(-s * 0.45, s * 0.4, -s * 0.45, -s * 0.5, 0, -s * 1.2); // Tapered sharp bud tip
      ctx.bezierCurveTo(s * 0.45, -s * 0.5, s * 0.45, s * 0.4, 0, s * 1.1);
      ctx.closePath();
      ctx.fill();

      // Delicate golden edge border
      ctx.strokeStyle = p.accentColor;
      ctx.lineWidth = 0.75;
      ctx.stroke();
    } else {
      // 4. Sacred Swarna Pushpa / Gold Shimmering Foil Speckle
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.9);
      ctx.lineTo(s * 0.6, 0);
      ctx.lineTo(0, s * 0.9);
      ctx.lineTo(-s * 0.6, 0);
      ctx.closePath();
      ctx.fill();

      // Center sparkle cross
      ctx.fillStyle = p.accentColor;
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.25, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // If not currently showering and trigger hasn't fired, don't keep canvas in layout
  if (!isActive && trigger <= 0) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{
        display: isActive ? 'block' : 'none',
      }}
      aria-hidden="true"
    />
  );
}
