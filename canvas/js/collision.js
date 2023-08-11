// Initial Setup
let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.background = "lavenderblush";

// Variables
const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

// const colors = [];

// Event Listeners
addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors(Math.floor(Math.random() * colors.length));
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Objects
class Particle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
    };
    this.radius = radius;
    this.color = color;

    this.mass = 1;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = this.color;
    context.fill();
    // prettier-ignore
    const d = `M${this.x-25} ${this.y+10}c-.82.26-1.49.48-2.17.7-.27.09-.54.18-.83.11-.22-.05-.49-.08-.52-.37-.03-.28.18-.41.4-.51.32-.14.64-.28.96-.43.11-.05.24-.11.33-.33-.61.14-1.14.3-1.69.35-.79.07-1.55-.11-2.32-.27-.21-.05-.36-.19-.34-.43.02-.28.23-.28.44-.3,1.63-.09,3.18-.4,4.6-1.29.64-.4.99-1.06,1.55-1.53.96-.81,1.56-1.86,2.06-3.01,1.1-2.57,2.65-4.88,4.53-6.96.17-.19.28-.4.35-.65.27-1.02.77-1.91,1.51-2.66.13-.13.25-.28.32-.44.61-1.35,1.41-2.6,2.16-3.88.54-.92,1.26-1.52,2.33-1.8.73-.19,1.22-.82,1.58-1.5.33-.62.27-1.07-.33-1.56-1.53-1.25-1.97-2.88-1.22-4.7.78-1.89,2.19-3.1,4.3-3.24,1.04-.07,1.98.31,2.74,1.09.57.58,1.18,1.15,2.03,1.33.28.06.54.21.52.52-.05.56.32.92.63,1.42.37-.83,1.01-1.35,1.62-1.91.15-.14.18-.35.24-.54.4-1.41.78-2.82,1.31-4.19.09-.24.07-.49.07-.74,0-.47-.09-.96.15-1.38.57-.99.79-2.08,1.02-3.18.16-.76.42-1.51.64-2.26.09-.3.17-.61.48-.79.14-.08.17-.24.2-.39.3-1.26.6-2.53.88-3.79.09-.43,0-.85-.09-1.28-.26-1.17-.97-2.15-1.38-3.25-.69-1.84-1.1-3.7-.12-5.6,1.05-2.04,3.34-3.28,5.49-2.95,2.52.39,4.31,2.14,4.69,4.57.5,3.23-1.91,6.13-5.18,6.24-.61.02-.67.09-.41.62.22.45.18.92.05,1.37-.38,1.36-.43,2.76-.55,4.15-.12,1.39.15,2.8-.19,4.19-.17.69-.22,1.42-.85,1.91-.1.08-.13.26-.16.41-.29,1.54-.6,3.07-1.25,4.51-.13.29-.09.63-.16.93-.57,2.56-.36,5.29-1.68,7.69-.11.2-.16.44-.21.66-.16.73-.14,1.45,0,2.18.27,1.44.56,2.88,1.4,4.13.54.81.8,1.71.88,2.67.29,3.32.3,6.61-.59,9.86-.06.21-.05.39.04.58.07.15.15.3.19.46.22.75.64,1.31,1.41,1.62.44.18.8.54,1.11.91.46.56.62,1.2.31,1.86-.19.41-.03.54.3.71,1.26.61,2.52,1.2,3.75,1.86,2.07,1.11,3.82,2.65,5.46,4.32.24.25.49.43.84.47.66.08,1.22.39,1.78.74,4.39,2.76,8.52,5.87,12.46,9.24.9.77,1.74,1.59,2.78,2.19.3.18.24.43.14.7-.17.46.22,1.01.7.93.31-.06.5.06.72.22.76.56.89.37,1.71-.02.92-.43,1.55-1.44,2.7-1.4.23,0,.5-.09.58.22.07.28-.2.37-.4.42-1.16.32-1.67,1.29-2.31,2.22.41.16.77,0,1.12.03,1.19.13,2.38.2,3.58.04.46-.06.85-.26,1.23-.52.43-.29.86-.57,1.34-.77.76-.33,1.52-.19,2.11.39.4.38.43.57.05.96-.89.9-1.79,1.78-2.73,2.64-1.17,1.07-2.47,1.96-3.87,2.72-.92.5-1.74,1.17-2.5,1.9-.41.4-.86.73-1.35,1.02-.46.27-.72.22-1-.24-.32-.53-.65-1.06-.86-1.63-.22-.59-.62-.99-.98-1.47-.87-1.14-1.91-2.11-2.87-3.16-.33-.36-.73-.63-1.1-.93-.07-.06-.19-.09-.28-.08-.74.1-1.32-.26-1.87-.67-1.01-.76-2.02-1.53-3.02-2.3-.21-.16-.44-.27-.71-.34-.68-.16-1.25-.54-1.79-.96-1.24-.95-2.5-1.88-3.72-2.86-1.43-1.16-3-2.11-4.66-2.87-.92-.42-1.97-.6-2.99-.74-1.89-.26-3.62-.93-5.36-1.68-2.26-.97-4.48-2.04-6.89-2.63-.97-.24-1.92-.57-2.77-1.12-.59-.38-1.13-.35-1.74-.05-2.24,1.11-4.4,2.35-6.59,3.55-2.19,1.2-4.45,2.26-6.76,3.21-.23.1-.45.21-.65.36-2.8,2.17-5.77,4.04-8.96,5.59-.59.29-1.1.75-1.63,1.15-1.27.94-2.58,1.84-3.74,2.91-.26.24-.55.32-.87.17-.31-.14-.59-.09-.82.15-.52.54-1.28.59-1.9.93-.27.15-.5.32-.65.6-.03.06-.05.15-.1.17-.81.34-1.09,1.12-1.53,1.77-.16.24-.41.4-.69.46-.38.08-.59.32-.8.62-.31.46-.65.91-1.02,1.33-.57.66-1.34.82-2.14.6-.92-.25-1.73-.09-2.53.38-1.12.65-2.56.48-3.53-.39-.6-.54-1.09-1.17-1.52-1.84-.4-.62-.34-1.15.2-1.66.57-.55,1.19-.94,2.04-1.02.91-.09,1.86-.18,2.7-.6.63-.31,1.37-.27,1.98-.64.19-.11.35-.21.4-.47.12-.65.41-.87,1.12-.89.24,0,.18-.16.13-.26-.26-.57-.14-1.22-.44-1.78-.08-.15-.06-.33,0-.49.06-.18.16-.35.36-.38.22-.04.32.14.41.3.19.34.21.73.3,1.1.05.22.09.49.37.54.31.05.42-.21.54-.43.08-.15.14-.3.23-.44.28-.44.58-.49,1-.19.13.09.25.33.45.13.17-.17.5-.25.37-.62-.1-.28.04-.49.25-.65.57-.42,1.03-.95,1.5-1.46,3.35-3.63,7.35-6.33,11.85-8.31.49-.22.93-.46,1.29-.89.59-.7,1.41-1.05,2.3-1.18.29-.04.47-.15.64-.4,1.67-2.53,3.8-4.62,6.25-6.39.22-.16.39-.35.53-.59.29-.5.73-.79,1.29-.94,1.1-.31,1.91-1.1,1.78-2.3-.06-.59-.04-1.2,0-1.8.06-1.01.52-1.96,1.66-2.13.49-.07.59-.6.9-.88.37-.32.4-.68.21-1.11-.13-.29-.21-.6-.28-.91-.14-.68-.22-1.37-.79-1.88-.12-.11-.23-.32-.23-.49.02-.81-.54-1.33-.91-1.94-.17-.28-.34-.57-.52-.85-.29-.45-.8-.45-1.04.02-.23.43-.54.77-1.02.9-.38.1-.58.34-.73.68-.63,1.46-1.39,2.85-2.59,3.93-.62.56-1.26,1.1-1.99,1.5-.86.49-1.43,1.22-1.92,2.05-.4.68-.71,1.39-.95,2.14-.14.44-.19.87-.07,1.33.06.21.05.43,0,.64-.11.52.08.82.59.98.03,0,.07.01.1.02.36.09.77.18.69.68-.08.47-.49.57-.89.55-.66-.04-1.28-.19-1.74-.74-.3-.36-.66-.36-.98,0-.25.28-.47.61-.7.91-.24.31-.54.55-.93.62-.43.08-.65-.14-.53-.57.07-.25.21-.48.38-.86Z`;
    const path = new Path2D(d);
    context.fillStyle = "black";
    context.fill(path);
    context.closePath();
  }

  update(particles) {
    this.draw(context);

    for (let i = 0; i < particles.length; i++) {
      if (this === particles[i]) continue;
      // prettier-ignore
      if (distance(this.x,this.y,particles[i].x,particles[i].y) -this.radius * 2 < 0) {
        // console.log('충돌!')
        resolveCollision(this, particles[i])
      }
    }
    if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
      this.velocity.y = -this.velocity.y;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }
}

// Implementation
let particles;

function init() {
  particles = [];

  for (let i = 0; i < 8; i++) {
    const imgSize = 120;
    const radius = imgSize;

    let x = randomIntFromRange(radius, canvas.width - radius);
    let y = randomIntFromRange(radius, canvas.height - radius);

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    if (i !== 0) {
      for (let j = 0; j < particles.length; j++) {
        if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
          x = randomIntFromRange(radius, canvas.width - radius);
          y = randomIntFromRange(radius, canvas.height - radius);
          j = -1;
        }
      }
    }
    particles.push(new Particle(x, y, radius, `rgb(${r},${g},${b})`));
  }
  particles.forEach((e) => {
    e.draw(context);
  });
  animate();
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  // clear canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
  // draw
  particles.forEach((e) => e.update(particles));
}

// Collision
function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
  };
  return rotatedVelocities;
}

function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // Prevent accidental overlap of Particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
    // Grab angle between the two colliding particles
    const angle = -Math.atan2(
      otherParticle.y - particle.y,
      otherParticle.x - particle.x
    );

    // Store mass in var for better readability in collision equation
    const m1 = particle.mass;
    const m2 = otherParticle.mass;

    // Velocity before equation
    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);

    // Velocity after 1d collision equation
    const v1 = {
      x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
      y: u1.y,
    };
    const v2 = {
      x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
      y: u2.y,
    };

    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    // Swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}
init();
