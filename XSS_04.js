document.body.innerHTML = '';
Object.assign(document.body.style, {
  background: 'black',
  margin: '0',
  overflow: 'hidden',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Arial, sans-serif',
  position: 'relative'
});

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.pointerEvents = 'none'; // allow clicks through the canvas
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let dpr = window.devicePixelRatio || 1;

function ResizeCanvas() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  canvas.width = Math.floor(w * dpr);
  canvas.height = Math.floor(h * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  for (const s of stars) {
    if (s.x > w) s.x = Math.random() * w;
    if (s.y > h) s.y = Math.random() * h;
  }
}
window.addEventListener('resize', () => {
  dpr = window.devicePixelRatio || 1;
  ResizeCanvas();
});
ResizeCanvas();

const stars = [];
const starCount = 220;
for (let i = 0; i < starCount; i++) {
  stars.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 1.6 + 0.3,
    speed: Math.random() * 0.7 + 0.1,
    baseAlpha: Math.random() * 0.6 + 0.4,
    twinkleSpeed: Math.random() * 0.02 + 0.008,
    phase: Math.random() * Math.PI * 2
  });
}

let lastT = 0;
function StarAnimate(t = 0) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const dt = (t - lastT) / 1000; // seconds
  lastT = t;

  ctx.clearRect(0, 0, w, h);

  for (const s of stars) {
    s.y -= s.speed * (50 * dt); // scale so speeds are noticeable
    s.x -= s.speed * 0.4 * (50 * dt);

    if (s.y < -2) s.y = h + 2;
    if (s.x < -2) s.x = w + 2;

    const alpha = s.baseAlpha + Math.sin(t * s.twinkleSpeed + s.phase) * 0.3;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, alpha))})`;
    ctx.fill();
  }

  requestAnimationFrame(StarAnimate);
}

requestAnimationFrame(StarAnimate);

const msg = document.createElement('div');
msg.innerText = "add me on discord -> goodbytecode\n\t(i'm sorry :) )";
Object.assign(msg.style, {
  fontSize: '60px',
  fontWeight: 'bold',
  textAlign: 'center',
  position: 'relative',
  zIndex: '1',
  color: 'pink',
  textShadow: '0 0 10px pink, 0 0 20px magenta',
  whiteSpace: 'pre-wrap',
  pointerEvents: 'auto'
});
msg.style.animation = 'colorFlow 3s infinite alternate';
document.body.appendChild(msg);

const style = document.createElement('style');
style.innerHTML = `
@keyframes colorFlow {
  0% { color: pink; text-shadow: 0 0 10px pink, 0 0 20px magenta; }
  50% { color: magenta; text-shadow: 0 0 10px magenta, 0 0 20px pink; }
  100% { color: cyan; text-shadow: 0 0 10px cyan, 0 0 20px magenta; }
}
`;
document.head.appendChild(style);
