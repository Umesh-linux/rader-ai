import React, { useEffect, useRef } from 'react';

export default function RadarCanvas({ activeMode = 'cluster', anomalyActive = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Blip objects representing tracked AI agents/models
    const blips = [
      { angle: 0.8, dist: 0.35, label: 'GPT-4o Agent #1', status: 'HEALTHY', pings: 1 },
      { angle: 2.1, dist: 0.65, label: 'Claude 3.5 Sonnet', status: 'HEALTHY', pings: 1 },
      { angle: 3.7, dist: 0.45, label: 'Llama 3.3 70B', status: 'HEALTHY', pings: 1 },
      { angle: 4.9, dist: 0.78, label: 'Embed-V3 Node', status: 'WARNING', pings: 1 },
      { angle: 1.4, dist: 0.22, label: 'Vector Store Gateway', status: 'HEALTHY', pings: 1 },
      { angle: 5.6, dist: 0.58, label: 'Agent Guardrail v2', status: 'HEALTHY', pings: 1 },
    ];

    if (anomalyActive) {
      blips.push({
        angle: 4.2,
        dist: 0.52,
        label: 'ALERT: PROMPT INJECTION',
        status: 'CRITICAL',
        pings: 1,
      });
    }

    let sweepAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(centerX, centerY) * 0.88;

      // Draw faint background grid
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Concentric Radar Rings
      const ringSteps = [0.25, 0.5, 0.75, 1.0];
      ringSteps.forEach((step, idx) => {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * step, 0, Math.PI * 2);
        ctx.strokeStyle = idx === ringSteps.length - 1 ? 'rgba(0, 255, 136, 0.4)' : 'rgba(0, 255, 136, 0.15)';
        ctx.lineWidth = idx === ringSteps.length - 1 ? 1.5 : 1;
        ctx.stroke();

        // Ring distance labels
        ctx.fillStyle = 'rgba(0, 255, 136, 0.5)';
        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillText(`${Math.round(step * 100)}ms LAT`, centerX + 8, centerY - radius * step + 12);
      });

      // Crosshairs / Axes
      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.strokeStyle = 'rgba(0, 255, 136, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Angular degree markers
      for (let deg = 0; deg < 360; deg += 30) {
        const rad = (deg * Math.PI) / 180;
        const outerX = centerX + Math.cos(rad) * radius;
        const outerY = centerY + Math.sin(rad) * radius;
        const innerX = centerX + Math.cos(rad) * (radius - 6);
        const innerY = centerY + Math.sin(rad) * (radius - 6);

        ctx.beginPath();
        ctx.moveTo(innerX, innerY);
        ctx.lineTo(outerX, outerY);
        ctx.strokeStyle = 'rgba(0, 255, 136, 0.35)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Rotating Sweep Beam with gradient
      const sweepTailAngle = 0.5; // arc in radians for fading tail
      const gradient = ctx.createConicGradient(sweepAngle - sweepTailAngle, centerX, centerY);
      gradient.addColorStop(0, 'rgba(0, 255, 136, 0)');
      gradient.addColorStop(0.85, 'rgba(0, 255, 136, 0.05)');
      gradient.addColorStop(0.98, 'rgba(0, 255, 136, 0.28)');
      gradient.addColorStop(1, 'rgba(0, 255, 136, 0.7)');

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, sweepAngle - sweepTailAngle, sweepAngle, false);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();

      // Sharp sweep line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(centerX + Math.cos(sweepAngle) * radius, centerY + Math.sin(sweepAngle) * radius);
      ctx.strokeStyle = '#00ff88';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 10;
      ctx.stroke();
      ctx.restore();

      // Draw tracked AI signal blips
      blips.forEach((blip) => {
        const bx = centerX + Math.cos(blip.angle) * (radius * blip.dist);
        const by = centerY + Math.sin(blip.angle) * (radius * blip.dist);

        // Calculate angular difference to sweep beam
        let diff = sweepAngle - blip.angle;
        while (diff < 0) diff += Math.PI * 2;
        while (diff > Math.PI * 2) diff -= Math.PI * 2;

        const isRecentlyScanned = diff < 0.8;
        const alpha = isRecentlyScanned ? 1 - diff * 0.9 : 0.25;

        // Blip color depending on status
        let mainColor = 'rgba(0, 255, 136, ';
        if (blip.status === 'CRITICAL') mainColor = 'rgba(255, 59, 48, ';
        if (blip.status === 'WARNING') mainColor = 'rgba(255, 204, 0, ';

        // Outer glow
        ctx.save();
        ctx.beginPath();
        ctx.arc(bx, by, isRecentlyScanned ? 7 : 4, 0, Math.PI * 2);
        ctx.fillStyle = mainColor + alpha + ')';
        ctx.shadowColor = mainColor + '1)';
        ctx.shadowBlur = isRecentlyScanned ? 12 : 4;
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.restore();

        // Label
        if (alpha > 0.35) {
          ctx.fillStyle = blip.status === 'CRITICAL' ? '#ff4d4d' : 'rgba(255, 255, 255, 0.85)';
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillText(blip.label, bx + 8, by - 6);

          ctx.fillStyle = blip.status === 'CRITICAL' ? '#ff3b30' : 'rgba(0, 255, 136, 0.7)';
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillText(`• ${blip.status}`, bx + 8, by + 5);
        }
      });

      // Center core radar emitter
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#00ff88';
      ctx.shadowColor = '#00ff88';
      ctx.shadowBlur = 15;
      ctx.fill();

      sweepAngle += 0.025;
      if (sweepAngle > Math.PI * 2) {
        sweepAngle -= Math.PI * 2;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeMode, anomalyActive]);

  return (
    <div className="relative w-full h-full min-h-[380px] md:min-h-[460px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />
      
      {/* HUD Overlay details */}
      <div className="absolute top-3 left-3 text-[11px] font-mono text-radar-400 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded border border-radar-500/20 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-radar-glow animate-ping" />
        RADAR SWEEP: 360° ACTIVE (2.4 GHz)
      </div>

      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-400 bg-black/60 backdrop-blur-md px-2.5 py-1.5 rounded border border-slate-700/50">
        RANGE: 120ms | RES: 0.1ms | NODES: 6 ACTIVE
      </div>
    </div>
  );
}
