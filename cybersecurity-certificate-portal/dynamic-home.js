const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d", { alpha: true });

let width = 0;
let height = 0;
let dpr = 1;
let particles = [];
let rafId = 0;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const coverLoginScreen = document.getElementById("loginScreen");

function isCoverVisible() {
  return !coverLoginScreen || !coverLoginScreen.classList.contains("is-hidden");
}

function resizeCanvas() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createParticles();
}

function createParticles() {
  const count = Math.round(Math.min(150, Math.max(70, width / 12)));
  particles = Array.from({ length: count }, (_, index) => {
    const focusBias = index % 3 === 0;
    return {
      x: focusBias ? width * (0.5 + Math.random() * 0.42) : Math.random() * width,
      y: focusBias ? height * (0.2 + Math.random() * 0.65) : Math.random() * height,
      radius: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.16,
      phase: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.46 + 0.18,
    };
  });
}

function drawParticles(time) {
  if (!isCoverVisible()) {
    cancelAnimationFrame(rafId);
    rafId = 0;
    return;
  }
  ctx.clearRect(0, 0, width, height);
  ctx.globalCompositeOperation = "lighter";

  const t = time * 0.001;

  for (let i = 0; i < particles.length; i += 1) {
    const p = particles[i];
    p.x += p.vx + Math.sin(t * 0.34 + p.phase) * 0.035;
    p.y += p.vy + Math.cos(t * 0.29 + p.phase) * 0.03;

    if (p.x < -20) p.x = width + 20;
    if (p.x > width + 20) p.x = -20;
    if (p.y < -20) p.y = height + 20;
    if (p.y > height + 20) p.y = -20;

    const pulse = 0.62 + Math.sin(t * 1.6 + p.phase) * 0.38;
    ctx.beginPath();
    ctx.fillStyle = `rgba(90, 209, 255, ${p.alpha * pulse})`;
    ctx.arc(p.x, p.y, p.radius * (0.8 + pulse * 0.35), 0, Math.PI * 2);
    ctx.fill();
  }

  drawLinks(t);
  drawDataStreaks(t);

  if (!prefersReducedMotion.matches) {
    rafId = requestAnimationFrame(drawParticles);
  }
}

function drawLinks(t) {
  const maxDistance = Math.min(156, width * 0.095);

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.hypot(dx, dy);

      if (dist < maxDistance) {
        const opacity = (1 - dist / maxDistance) * 0.12 * (0.7 + Math.sin(t + i) * 0.3);
        ctx.strokeStyle = `rgba(64, 198, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }
}

function drawDataStreaks(t) {
  const centerX = width * 0.67;
  const centerY = height * 0.47;

  for (let i = 0; i < 9; i += 1) {
    const angle = t * 0.12 + i * 0.7;
    const radius = Math.min(width, height) * (0.16 + (i % 4) * 0.035);
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius * 0.72;
    const length = 28 + (i % 3) * 18;

    ctx.strokeStyle = `rgba(110, 220, 255, ${0.08 + (i % 3) * 0.035})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle + 0.8) * length, y + Math.sin(angle + 0.8) * length);
    ctx.stroke();
  }
}

function start() {
  cancelAnimationFrame(rafId);
  if (!isCoverVisible()) {
    rafId = 0;
    return;
  }
  if (prefersReducedMotion.matches) {
    drawParticles(0);
    return;
  }
  rafId = requestAnimationFrame(drawParticles);
}

window.addEventListener("resize", resizeCanvas, { passive: true });
prefersReducedMotion.addEventListener("change", start);
if (coverLoginScreen) {
  new MutationObserver(start).observe(coverLoginScreen, { attributes: true, attributeFilter: ["class"] });
}

resizeCanvas();
start();
