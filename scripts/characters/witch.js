const witch_file = 'images/characters/witch.png';

const witch_collision = [
    [30, 5],
    [80, 5],
    [110, 60],
    [50, 130],
    [10, 70]
];

class Witch extends Character {
    constructor(proportion) {
        super(proportion, [4, 4], [220, 270], 0, 3, witch_collision);

        this.startY = 0;
        this.startX = 0;

        this.movingForce = 0;
        this.jumpingForce = 0;

        this.forceLeft = 2;
        this.gravity = 1;

        this.jumpCount = 0;

        this.maxAndPressedRight = false;

        this.gotHit = false;

        this.blinkCount = 0;
        this.blinkMax = 10;
        this.blinkIntervalCount = 0;
        this.blinkIntervalMax = 6;
        this.blinkShow = false;

        this.position = null;
    }

    preload() {
        super.preload(witch_file);
    }

    setup(x, y) {
        this.position = new CharacterPosition(x, y);

        this.startY = y;
        this.startX = x;
    }

    show() {
        if (!this.gotHit || this.blinkShow) {
            super.show(this.position);
        }
        else {
            super.animate();
        }

        if (this.gotHit) {
            this.blinkIntervalCount++;
            if (this.blinkIntervalCount == this.blinkIntervalMax) {
                this.blinkIntervalCount = 0;
                this.blinkCount++;

                this.blinkShow = !this.blinkShow;
            }

            if (this.blinkCount > this.blinkMax) {
                this.blinkCount = 0;
                this.gotHit = false;
                this.blinkShow = false;
            }
        }
    }


    jump() {
        if (this.jumpCount < 2) {
            this.jumpingForce = -20;
            this.jumpCount++;

            gameSounds.playJump();
        }
    }

    appliesGravity() {
        if (this.jumpingForce < 0 || this.position.y < this.startY) {
            this.position.y = this.position.y + this.jumpingForce;

            this.jumpingForce = this.jumpingForce + this.gravity;

            if (this.position.y > this.startY) {
                this.position.y = this.startY;
                this.jumpCount = 0;
            }
        }
        else {
            this.jumpCount = 0;
        }
    }

    moveForward() {
        if (this.position.x + this.getWidth() <= width) {
            this.movingForce += 8;
        }
        else {
            this.maxAndPressedRight = true;
        }
    }

    moveBack() {
        if (this.position.x > this.startX) {
            this.movingForce -= 3;
        }
    }

    pullLeft() {
        if (this.movingForce > 0 || this.position.x > this.startX) {
            this.position.x = this.startX + this.movingForce;

            if (!this.maxAndPressedRight) {
                this.movingForce = this.movingForce - this.forceLeft;
            }

            if (this.position.x < this.startX) {
                this.position.x = this.startX;
            }
        }
    }

    checkCollision(enemy, enemyPosition) {
        if (!this.gotHit) {
            var myCollisionPolygon = this.collisionPolygon.map(v => createVector(v[0] + this.position.x, v[1] + this.position.y));
            var enemyCollisionPolygon = enemy.collisionPolygon.map(v => createVector(v[0] + enemyPosition.x, v[1] + enemyPosition.y));

            if (window.DEBUG_COLLISION) {
                collideDebug(true)
                noFill()

                stroke(0, 0, 255)
                beginShape()
                for (var i = 0; i < myCollisionPolygon.length; i++) {
                    var polygon = myCollisionPolygon[i];
                    vertex(polygon.x, polygon.y);
                }
                endShape(CLOSE);

                stroke(255, 0, 0)
                beginShape()
                for (var i = 0; i < enemyCollisionPolygon.length; i++) {
                    var polygon = enemyCollisionPolygon[i];
                    vertex(polygon.x, polygon.y);
                }
                endShape(CLOSE);
            }

            //TODO: Check the collisions.
            var collision = collidePolyPoly(myCollisionPolygon, enemyCollisionPolygon);

            this.gotHit = collision;
            if (this.gotHit) {
                gameSounds.playImpact();
            }

            return collision;
        }
        return false;
    }
}