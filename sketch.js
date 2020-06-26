
const gameSounds = new GameSounds();

const sceneManager = new SceneManager();


function preload() {
    gameSounds.preload();

    sceneManager.preload();
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    gameSounds.loopMusic();

    sceneManager.setup();
}

function keyPressed() {
    sceneManager.keyPressed();
}

function draw() {
    sceneManager.draw();
}