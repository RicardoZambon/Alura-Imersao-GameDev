
const gameSounds = new GameSounds();

const scenario = new Scenario();

const witch = new Witch(0.7);
const littleDrop = new LittleDrop(0.7, 5);


function preload() {
    gameSounds.preload();

    scenario.preload();

    witch.preload();
    littleDrop.preload();
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    gameSounds.loopMusic();

    witch.setup(60, height - witch.getPropHeight(witch.proportion));
    littleDrop.setup(width - 50, height - littleDrop.getPropHeight(littleDrop.proportion));
}

function keyPressed() {
    if (key === 'ArrowUp') {
        witch.jump();
    }
}

function draw() {
    scenario.show();

    if (keyIsDown(RIGHT_ARROW)) {
        witch.moveForward();
    }

    if (keyIsDown(LEFT_ARROW)) {
        witch.moveBack();
    }

    witch.show();
    witch.appliesGravity();
    witch.pullLeft();

    littleDrop.show();

    //if (witch.checkCollision(enemy)) {
    //    noLoop();
    //}

    littleDrop.move();
}