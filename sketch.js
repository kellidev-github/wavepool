let drown, children;
let sound1Gain, sound2Gain, mixGain;

function preload() {
  soundFormats('ogg', 'mp3');
  drown = loadSound('Underwater_Pool-Mike_Koenig-355864284.mp3');
  children = loadSound('Underwater_Pool-Mike_Koenig-355864284.mp3');
}

function setup() {
  createCanvas(710, 200);
  
  background(0, 255, 0);
  
  //REF: https://p5js.org/reference/#/p5.Gain
  // create a 'mix' gain bus to which we will connect both soundfiles
  mixGain = new p5.Gain();
  mixGain.connect();
  drown.disconnect(); // diconnect from p5 output
  sound1Gain = new p5.Gain(); // setup a gain node
  sound1Gain.setInput(drown); // connect the first sound to its input
  sound1Gain.connect(mixGain); // connect its output to the final mix bus
  children.disconnect();
  sound2Gain = new p5.Gain();
  sound2Gain.setInput(children);
  sound2Gain.connect(mixGain);
  sound1Gain.amp(1);
  sound2Gain.amp(0);
  mixGain.amp(outputVolume);
  
//   drown.loop(); // song is ready to play during setup() because it was loaded during preload
//   children.loop();
}

function draw(){
  background(220);
//   textAlign(CENTER);
//   textSize(11);
//   fill(0);
//   if (!sound1.isPlaying()) {
//     text('tap and drag to play', width/2, height/2);
//     return;
//   }
}

// function mouseDragged() {
//   // map the horizontal position of the mouse to values useable for volume    *  control of sound1
//   var sound1Volume = constrain(map(mouseX,width,0,0,1), 0, 1);
//   var sound2Volume = 1-sound1Volume;
//   sound1Gain.amp(sound1Volume);
//   sound2Gain.amp(sound2Volume);
//   // map the vertical position of the mouse to values useable for 'output    *  volume control'
//   var outputVolume = constrain(map(mouseY,height,0,0,1), 0, 1);
//   mixGain.amp(outputVolume);
//   text('output', width/2, height - outputVolume * height * 0.9)
//   fill(255, 0, 255);
//   textAlign(LEFT);
//   text('sound1', 5, height - sound1Volume * height * 0.9);
//   textAlign(RIGHT);
//   text('sound2', width - 5, height - sound2Volume * height * 0.9);
// }
