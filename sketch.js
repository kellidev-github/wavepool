let song;

function preload() {
  song = loadSound('https://www.dropbox.com/s/fbn5bk43uqc5mtg/Underwater_Pool-Mike_Koenig-355864284.mp3?dl=0');
}

function setup() {
  createCanvas(710, 200);
  song.loop(); // song is ready to play during setup() because it was loaded during preload
  background(0, 255, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}