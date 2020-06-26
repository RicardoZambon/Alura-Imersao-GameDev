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

        this.startY = this.y;
        this.startX = this.x;

        this.movingForce = 0;
        this.jumpingForce = 0;

        this.forceLeft = 2;
        this.gravity = 1;

        this.jumpCount = 0;

        this.maxAndPressedRight = false;
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
        if (this.x + this.getWidth() <= width) {
            this.movingForce += 8;
        }
        else {
            this.maxAndPressedRight = true;
        }
    }

    moveBack() {
        if (this.x > this.startX) {
            this.movingForce -= 3;
        }
    }

    pullLeft() {
        if (this.movingForce > 0 || this.x > this.startX) {
            this.x = this.startX + this.movingForce;

            if (!this.maxAndPressedRight) {
                this.movingForce = this.movingForce - this.forceLeft;
            }

            if (this.x < this.startX) {
                this.x = this.startX;
            }
        }
    }

    checkCollision(enemy) {
        var myCollisionPolygon = this.collisionPolygon.map(v => createVector(v[0] + this.x, v[1] + this.y));
        var enemyCollisionPolygon = enemy.collisionPolygon.map(v => createVector(v[0] + enemy.x, v[1] + enemy.y));

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
        return collidePolyPoly(myCollisionPolygon, enemyCollisionPolygon);
    }
}