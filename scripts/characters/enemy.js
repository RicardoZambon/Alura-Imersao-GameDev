
class Enemy extends Character {
    constructor(proportion, speedMovement, sprites, spriteSize, blankSprites, speed, collisionPolygon) {
        super(proportion, sprites, spriteSize, blankSprites, speed, collisionPolygon);

        this.speedMovement = speedMovement;
    }

    move(speedIncrease) {
        this.x = this.x - this.speedMovement - speedIncrease;

        if (this.x < -this.getPropWidth()) {
            this.x = width;
        }
    }
}