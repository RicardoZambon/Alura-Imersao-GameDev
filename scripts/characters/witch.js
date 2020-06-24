const witch_file = 'images/characters/witch.png';

class Witch extends Character {
    constructor(proportion) {
        super(proportion, [3, 3], [220, 270], 3);

        this.startY = this.y;
        this.startX = this.x;

        this.movingForce = 0;
        this.jumpingForce = 0;

        this.forceLeft = 2;
        this.gravity = 1;

        this.jumpCount = 0;
    }

    preload() {
        super.preload(witch_file);
    }

    setup(x, y) {
        super.setup(x, y);

        this.startY = y;
        this.startX = x;
    }


    jump() {
        if (this.jumpCount < 2) {
            this.jumpingForce = -20;
            this.jumpCount++;

            gameSounds.playJump();
        }
    }

    appliesGravity() {
        if (this.jumpingForce < 0 || this.y < this.startY) {
            this.y = this.y + this.jumpingForce;

            this.jumpingForce = this.jumpingForce + this.gravity;

            if (this.y > this.startY) {
                this.y = this.startY;
                this.jumpCount = 0;
            }
        }
        else {
            this.jumpCount = 0;
        }
    }

    moveForward() {
        this.movingForce += 8;
    }

    moveBack() {
        this.movingForce -= 3;
    }

    pullLeft() {
        if (this.movingForce > 0 || this.x > this.startX) {
            this.x = this.startX + this.movingForce;

            this.movingForce = this.movingForce - this.forceLeft;

            if (this.x < this.startX) {
                this.x = this.startX;
            }
        }
    }

    checkCollision(enemy) {
        var precision = 0.7;

        return collideRectRect(this.x, this.y, this.getPropWidth() * precision, this.getPropHeight() * precision,
            enemy.x, enemy.y, enemy.getPropWidth(), enemy.getPropHeight());
    }
}