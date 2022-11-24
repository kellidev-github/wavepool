// 2D Water Ripples
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/102-2d-water-ripple.html
// https://youtu.be/BZUdGqeOD0w
// https://editor.p5js.org/codingtrain/sketches/tYXtzNSl
// Algorithm: https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm
let cols;
let rows;
let current; // = new float[cols][rows];
let previous; // = new float[cols][rows];
let dampening = 0.99;
// load two soundfile and crossfade beetween them
let sound1,sound2;
function preload(){
  soundFormats('ogg', 'mp3');
  sound1 = loadSound('Underwater_Pool-Mike_Koenig-355864284.mp3');
  sound2 = loadSound('Children Playing-SoundBible.com-591301488.mp3');
  inconsolata = loadFont('assets/inconsolata.otf');
}
function setup() {
  textFont(inconsolata);
  textSize(width / 3);
  textAlign(CENTER, CENTER);
  text('the water is fine');
  
  pixelDensity(1);
  let cnv = createCanvas(500, 700);
  cnv.mousePressed(startSound);
  cols = width;
  rows = height;
  // The following line initializes a 2D cols-by-rows array with zeroes
  // in every array cell, and is equivalent to this Processing line:
  // current = new float[cols][rows];
  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
}

function generateRipple() {
  previous[random(cols)][random(rows)] = 2500;
}

function mouseDragged() {
  previous[mouseX][mouseY] = 2500;
}

function startSound() {
  sound1.loop();
  sound2.loop();
  loop();
}
function mouseReleased() {
//   sound1.stop();
  sound2.pause();
}
function draw() {
  background(0);
  loadPixels();
  generateRipple();
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      current[i][j] =
        (previous[i - 1][j] +
          previous[i + 1][j] +
          previous[i][j - 1] +
          previous[i][j + 1]) /
          2 -
        current[i][j];
      current[i][j] = current[i][j] * dampening;
      // Unlike in Processing, the pixels array in p5.js has 4 entries
      // for each pixel, so we have to multiply the index by 4 and then
      // set the entries for each color component separately.
      let index = (i + j * cols) * 4;
      pixels[index + 0] = 102+current[i][j];
      pixels[index + 1] = 255;
      pixels[index + 2] = 255;
    }
  }
  updatePixels();
  let temp = previous;
  previous = current;
  current = temp;
  
}
