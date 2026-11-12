export class FaviconTimer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private favicon: HTMLLinkElement | null = null;
  private animationFrame: number | null = null;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 32;
    this.canvas.height = 32;
    this.ctx = this.canvas.getContext('2d')!;
  }

  start(getTimeData: () => { seconds: number }): void {
    this.favicon = document.querySelector('link[rel="icon"]');
    
    if (!this.favicon) {
      this.favicon = document.createElement('link');
      this.favicon.rel = 'icon';
      document.head.appendChild(this.favicon);
    }

    const animate = () => {
      const { seconds } = getTimeData();
      this.drawClock(seconds);
      this.animationFrame = requestAnimationFrame(animate);
    };

    animate();
  }

  stop(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  private drawClock(seconds: number): void {
    const ctx = this.ctx;
    const size = 32;
    const center = size / 2;
    const radius = 12;

    ctx.clearRect(0, 0, size, size);

    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#8b5cf6');
    gradient.addColorStop(1, '#3b82f6');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.stroke();

    const angle = (seconds % 60) * (Math.PI / 30) - Math.PI / 2;
    const handLength = radius * 0.7;
    
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.lineTo(
      center + Math.cos(angle) * handLength,
      center + Math.sin(angle) * handLength
    );
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(center, center, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    if (this.favicon) {
      this.favicon.href = this.canvas.toDataURL();
    }
  }
}

export function startFaviconAnimation(getTimeData: () => { seconds: number }): FaviconTimer {
  const timer = new FaviconTimer();
  timer.start(getTimeData);
  return timer;
}
