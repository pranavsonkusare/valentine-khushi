const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const music = document.getElementById("music");

// NO button runs away (never disappears)
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const offsetX = Math.random() * 140 - 70;
  const offsetY = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// YES button
yesBtn.addEventListener("click", () => {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");

  // Titanic music (instrumental vibe)
  music.src =
    "https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1";

  startConfetti();
});

// CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let confetti = [];

function startConfetti() {
  confetti = [];
  for (let i = 0; i < 220; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 4 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 60%)`
    });
  }
  animate();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    c.y += c.d;
    if (c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(animate);
}
