// Initial Setup
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.background = "#ff8";

// Variables
let particles = [];
const logo = new Image();
logo.src = "./img/jordan.png";

// context.translate(100, 100);
// context.rotate((20 * Math.PI) / 360);
// context.fillRect(0, 0, 100, 150);

// Objects
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 20 + 50;
    this.speed = Math.random() * 3 + 1;
    this.angle = Math.random() * 360;
    this.spin = Math.random() < 0.5 ? -1 : 1;
  }
  draw() {
    // canvas의 상태 정보를 저장
    context.save();
    context.translate(this.x, this.y);
    context.rotate(((this.angle * Math.PI) / 360) * this.spin);
    context.beginPath();
    context.fillStyle = "white";
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.arc(0, 0, this.size, this.size, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    context.drawImage(
      logo,
      -this.size / 2,
      -this.size / 2,
      this.size,
      this.size
    );
    context.closePath();
    // 저장된 canvas 상태 정보를 불러 옴
    context.restore();
  }
  update() {
    this.angle += 10;
    if (this.y > canvas.height) {
      this.y = -this.size;
      this.x = Math.random() * canvas.width;
      this.size = Math.random() * 100 + 50;
      this.speed = Math.random() * 5 + 1;
    }
    this.y += this.speed;
  }
}

// Implementation
const particle1 = new Particle();
function init() {
  for (let i = 0; i < 10; i++) {
    particles.push(new Particle());
  }
}
init();
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.draw();
    particle.update();
  });
  requestAnimationFrame(animate);
}
animate();
