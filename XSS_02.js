document.body.innerHTML = '';

document.body.style.background = 'black';
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';
document.body.style.height = '100vh';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.position = 'relative';

const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = 'absolute';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '0';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
const stars = [];
const starCount = 200;

for (let i = 0; i < starCount; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2
    });
}

function Stars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        star.y -= star.speed;
        if (star.y < 0) star.y = canvas.height;
    }
    requestAnimationFrame(animateStars);
}
Stars();

const msg = document.createElement('div');
msg.innerText = "hi schrieb mir uf discord -> goodbytecode / Bytecode\n\ti'm sorry :)";
msg.style.fontSize = '60px';
msg.style.fontWeight = 'bold';
msg.style.textAlign = 'center';
msg.style.position = 'relative';
msg.style.zIndex = '1';
msg.style.color = 'pink';
msg.style.textShadow = '0 0 10px pink, 0 0 20px magenta';
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

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
