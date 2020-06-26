class Game extends Scene {
    constructor() {
        super();

        this.witch = new Witch(0.7);
        this.enemies = new Enemies();

        this.background = new ScenarioBackground();
    }

    preload() {
        super.preload();

        this.witch.preload();
        this.enemies.preload();

        this.background.preload();
    }

    setup() {
        super.setup();

        this.witch.setup(60, height - this.witch.getPropHeight(this.witch.proportion) - 20);
        this.enemies.setup();
    }

    keyPressed() {
        super.keyPressed();

        if (key === 'ArrowUp') {
            this.witch.jump();
        }
    }

    draw(score) {
        super.draw(score);

        this.background.show();

        score.show();
        score.addScore();

        if (keyIsDown(RIGHT_ARROW)) {
            this.witch.moveForward();
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.witch.moveBack();
        }

        this.witch.show();
        this.witch.appliesGravity();
        this.witch.pullLeft();

        this.enemies.show(this.witch);
        this.enemies.move();
    }
}