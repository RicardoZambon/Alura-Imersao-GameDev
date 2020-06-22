let imageBackground;
let imageCharacter;

let scenario;
let gameSound;

let character;

function preload() {
  imageBackground = loadImage('images/cenario/florest.png'); 
  imageCharacter = loadImage('images/character/running.png'); 
  
  gameSound = loadSound('sounds/music.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  scenario = new Scenario(imageBackground, 3);
  
  character = new Character(imageCharacter);
  
  gameSound.loop();
}

function draw() {
  scenario.show();
  
  character.show();
}