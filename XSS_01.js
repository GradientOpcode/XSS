document.body.innerHTML = '';

document.body.style.background = 'black';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.overflow = 'hidden';

const msg = document.createElement('div');
msg.innerText = "hi schrieb mir uf discord -> goodbytecode / Bytecode\n\ti'm sorry :)";
msg.style.fontSize = '60px'; // fixed size
msg.style.fontWeight = 'bold';
msg.style.textAlign = 'center';

msg.style.background = 'linear-gradient(90deg, pink, magenta)';
msg.style.backgroundSize = '200% 200%';
msg.style.webkitBackgroundClip = 'text';
msg.style.backgroundClip = 'text';
msg.style.color = 'transparent';

msg.style.textShadow = '0 0 10px pink, 0 0 20px magenta';

msg.style.animation = 'flow 3s infinite linear';

const style = document.createElement('style');
style.innerHTML = `
@keyframes flow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;
document.head.appendChild(style);

document.body.appendChild(msg);
