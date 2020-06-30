class Game extends Scene {
    constructor() {
        super();

        this.witch = new Witch(0.7);
        this.enemies = new Enemies();

        this.background = new ScenarioBackground();

        this.life = new Life(3, 7);
    }

    preload() {
        super.preload();

        this.witch.preload();
        this.enemies.preload();

        this.background.preload();

        this.life.preload();
    }

    setup() {
        super.setup();

        this.witch.setup(60, height - this.witch.getPropHeight(this.witch.proportion) - 40);
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

        this.background.showBackground();

        if (keyIsDown(RIGHT_ARROW)) {
            this.witch.moveForward();
        }
        else if (this.witch.maxAndPressedRight) {
            this.witch.maxAndPressedRight = false;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.witch.moveBack();
        }

        this.witch.show();
        this.witch.appliesGravity();
        this.witch.pullLeft();

        this.enemies.show(this.witch, this.life, score);
        this.enemies.move(score);

        this.background.showForeground();

        score.show();
        score.addScore();

        this.life.draw();

        this.background.move(score);
    }
}