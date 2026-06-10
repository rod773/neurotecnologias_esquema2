
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type ParticleType = "normal" | "fast";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  hue: number;
  saturation: number;
  lightness: number;
  alpha: number;
  pulse: number;
  pulseSpeed: number;
  type: ParticleType;
}

interface Connection {
  from: number;
  to: number;
  alpha: number;
}

interface ExplosionParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  hue: number;
  life: number;
}

export default function NebulaBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let connections: Connection[] = [];
    const explosions: ExplosionParticle[] = [];

    let mouseX = -1000;
    let mouseY = -1000;

    const LOGO_COLOR = { h: 142, s: 70, l: 25 };

    let logicalW = 0;
    let logicalH = 0;

    function initParticles(w: number, h: number) {
      const count = Math.min(Math.floor((w * h) / 12000), 120);

      particles = Array.from({ length: count }, () => {
        const isFast = Math.random() < 0.15;

        return {
          x: Math.random() * w,
          y: Math.random() * h,
          vx: isFast ? (Math.random() - 0.5) * 3 : (Math.random() - 0.5) * 0.6,
          vy: isFast ? (Math.random() - 0.5) * 3 : (Math.random() - 0.5) * 0.6,
          radius: isFast ? Math.random() * 1.5 + 0.5 : Math.random() * 3 + 1,
          hue: isFast ? 50 : LOGO_COLOR.h,
          saturation: isFast ? 100 : LOGO_COLOR.s,
          lightness: isFast ? 80 : LOGO_COLOR.l,
          alpha: isFast ? Math.random() * 0.3 + 0.7 : Math.random() * 0.15 + 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.005,
          type: isFast ? "fast" : "normal",
        };
      });

      connections = [];
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          if (Math.random() < 0.08) {
            connections.push({
              from: i,
              to: j,
              alpha: Math.random() * 0.08 + 0.02,
            });
          }
        }
      }
    }

    function resize() {
      if (!canvas || !ctx) return;

      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (Math.abs(w - logicalW) < 0.5 && Math.abs(h - logicalH) < 0.5) return;

      logicalW = w;
      logicalH = h;

      canvas.width = w * dpr;
      canvas.height = h * dpr;

      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initParticles(w, h);
    }

    const draw = () => {
      if (!canvas || !ctx) return;

      const w = logicalW || window.innerWidth;
      const h = logicalH || window.innerHeight;

      // clear en sistema lógico (tras setTransform)
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200 && dist > 0.0001) {
          const force = (200 - dist) / 200;
          p.vx -= (dx / dist) * force * 0.02;
          p.vy -= (dy / dist) * force * 0.02;
        }

        const maxSpeed = p.type === "fast" ? 4 : 0.9;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);

        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }
      }

      for (let i = 0; i < particles.length; i++) {
        if (particles[i].type !== "fast") continue;

        for (let j = 0; j < particles.length; j++) {
          if (i === j || particles[j].type === "fast") continue;

          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const hitRadius = particles[i].radius + particles[j].radius + 8;

          if (dist < hitRadius) {
            const target = particles[j];

            for (let k = 0; k < 10; k++) {
              const angle = Math.random() * Math.PI * 2;
              const burstSpeed = Math.random() * 2 + 1;

              explosions.push({
                x: target.x,
                y: target.y,
                vx: Math.cos(angle) * burstSpeed,
                vy: Math.sin(angle) * burstSpeed,
                radius: Math.random() * 2 + 1,
                alpha: 1,
                hue: Math.random() > 0.5 ? 50 : LOGO_COLOR.h,
                life: 1,
              });
            }

            target.x = Math.random() * w;
            target.y = Math.random() * h;
            target.vx = (Math.random() - 0.5) * 0.6;
            target.vy = (Math.random() - 0.5) * 0.6;
          }
        }
      }

      for (let k = explosions.length - 1; k >= 0; k--) {
        const e = explosions[k];
        e.x += e.vx;
        e.y += e.vy;
        e.vx *= 0.97;
        e.vy *= 0.97;
        e.life -= 0.02;
        e.alpha = e.life;
        if (e.life <= 0) explosions.splice(k, 1);
      }

      for (const conn of connections) {
        const from = particles[conn.from];
        const to = particles[conn.to];
        if (!from || !to) continue;
        if (from.type === "fast" || to.type === "fast") continue;

        const dx = from.x - to.x;
        const dy = from.y - to.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 250) {
          const alpha = conn.alpha * 1.5 * (1 - dist / 250);
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = `hsla(${LOGO_COLOR.h}, 70%, 55%, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      for (const e of explosions) {
        const glow = e.radius * 3;
        const grad = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, glow);
        grad.addColorStop(0, `hsla(${e.hue}, 100%, 80%, ${e.alpha})`);
        grad.addColorStop(1, `hsla(${e.hue}, 100%, 60%, 0)`);
        ctx.beginPath();
        ctx.arc(e.x, e.y, glow, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      for (const p of particles) {
        if (p.type === "fast") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 6, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(50, 100%, 85%, ${
            0.2 * (0.6 + 0.4 * Math.sin(p.pulse))
          })`;
          ctx.fill();
        }

        const pulseAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        const glowRadius = p.type === "fast" ? p.radius * 12 : p.radius * 6;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          glowRadius
        );

        gradient.addColorStop(
          0,
          `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${
            pulseAlpha * 1.2
          })`
        );
        gradient.addColorStop(
          0.4,
          `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${
            pulseAlpha * 0.6
          })`
        );
        gradient.addColorStop(
          1,
          `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, 0)`
        );

        ctx.beginPath();
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${
          pulseAlpha * 0.9
        })`;
        ctx.fill();
      }
    };

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function onMouseLeave() {
      mouseX = -1000;
      mouseY = -1000;
    }

    let resizeTimeout: number | null = null;
    const onResize = () => {
      if (resizeTimeout) window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        resizeTimeout = null;
        resize();
      }, 150);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    resize();

    gsap.ticker.add(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (resizeTimeout) window.clearTimeout(resizeTimeout);
      gsap.ticker.remove(draw);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0"
        />
      </div>

      <div
        style={{
          position: "fixed",
          insetInline: 0,
          zIndex: 0,
          opacity: 0.15,
          top: 0,
          height: 400,
          pointerEvents: "none",
          background:
            "linear-gradient(80.22deg, #E2E8F0 1.49%, #F1F5F9 99.95%)",
          maskImage:
            "radial-gradient(ellipse 150% 120% at top, black 0%, black 30%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 150% 120% at top, black 0%, black 30%, transparent 70%)",
        }}
      />

      <div
        style={{
          position: "fixed",
          insetInline: 0,
          zIndex: 0,
          opacity: 0.15,
          bottom: 0,
          height: 250,
          pointerEvents: "none",
          background:
            "linear-gradient(80.22deg, #E2E8F0 1.49%, #F1F5F9 99.95%)",
          maskImage:
            "radial-gradient(ellipse 120% 130% at bottom, black 0%, black 25%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 130% at bottom, black 0%, black 25%, transparent 60%)",
        }}
      />
    </>
  );
}
