let canvas = document.querySelector("#canvas");

// 초기 설정
let context = canvas.getContext("2d");

// canvas 사이즈 설정
let window_height = window.innerHeight;
let window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "azure";

// image
class Image {
  constructor(imagePath, xpos, ypos, width, height) {
    this.imagePath = imagePath;
    this.xpos = xpos;
    this.ypos = ypos;
    this.width = width;
    this.height = height;
  }
}

function createImage(context, imagePath, xpos, ypos, width, height) {
  let myImage = document.createElement("img");
  myImage.src = imagePath;
  myImage.onload = function () {
    context.drawImage(myImage, xpos, ypos, width, height);
  };
}
let image = new Image("./img/jordan.png", 50, 50, 50, 50);
createImage(
  context,
  image.imagePath,
  image.xpos,
  image.ypos,
  image.width,
  image.height
);
