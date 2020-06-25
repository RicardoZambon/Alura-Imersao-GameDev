
const gameSounds = new GameSounds();
const score = new Score();

const scenario = new Scenario();

const witch = new Witch(0.7);
const enemies = new Enemies();


function preload() {
    gameSounds.preload();
    score.preload();

    scenario.preload();

    witch.preload();
    enemies.preload();
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    gameSounds.loopMusic();

    witch.setup(60, height - witch.getPropHeight(witch.proportion) - 20);
    enemies.setup();
}

function keyPressed() {
    if (key === 'ArrowUp') {
        witch.jump();
    }
}

function draw() {
    scenario.show();
    score.show();
    score.addScore();

    if (keyIsDown(RIGHT_ARROW)) {
        witch.moveForward();
    }

    if (keyIsDown(LEFT_ARROW)) {
        witch.moveBack();
    }

    witch.show();
    witch.appliesGravity();
    witch.pullLeft();

    enemies.show();
    enemies.move();
}