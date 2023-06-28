/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numberOfBalloons = 26;
balloonsArray = [];

// for balloon image
const balloonImage = new Image();
balloonImage.src = "./images/balloon.png";

let balloonX = 1530
let balloonY = 680;
let balloonWidth = 45;
let balloonHeight = 45;
let isPumpButtonClicked = false;
let currentBalloonIndex = 0;


function drawBalloon() {
  ctx.drawImage(balloonImage, balloonX, balloonY, balloonWidth, balloonHeight);
}

function inflateBalloon() {
  if (isPumpButtonClicked) {
    balloonHeight += 10;
    balloonY -= 10;
    balloonWidth += 10;
    balloonX -= 5;
  }
}

function updateBalloons() {
  for (let i = 0; i < balloonsArray.length; i++) {
    const balloon = balloonsArray[i];
    balloon.x += balloon.speed;
    balloon.y += balloon.speed;
  }
}

function drawBalloons() {
  for (let i = 0; i < balloonsArray.length; i++) {
    const balloon = balloonsArray[i];
    drawBalloon(balloon.x, balloon.y, balloon.width, balloon.height);
  }
}

balloonImage.onload = function() {
  drawBalloon(balloonX, balloonY, balloonWidth, balloonHeight);
};

const pumpHandle = document.querySelector('.pump-handle');
pumpHandle.addEventListener('click', () => {
  isPumpButtonClicked = true;
  inflateBalloon();
  animate();
});


class Balloon {
  constructor(x, y) {
      this.x = balloonX;
      this.y = balloonY;
      this.width = 45;
      this.height = 45;
      this.speed = Math.random() * 4 - 2;
      this.dx = Math.random() * -2 - 1; // Horizontal speed of the balloon (random value between -1 and -3)
      this.dy = Math.random() * 2 - 1; // Vertical speed of the balloon (random value between -1 and 1)
  }
  // update() {
  //     this.x += this.speed
  //     this.y += this.speed
  // }
  // draw() {
  //     ctx.drawImage(balloonImage, this.x, this.y, this.width, this.height);
  // }
};

for (let i = 0; i < numberOfBalloons; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const balloon = new Balloon(x, y);
  balloonsArray.push(balloon);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBalloon(balloonX, balloonY, balloonWidth, balloonHeight);
  drawBalloons();
  requestAnimationFrame(animate);
}


// Start animation
animate();


  
