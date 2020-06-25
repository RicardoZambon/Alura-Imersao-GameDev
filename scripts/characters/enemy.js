
class Enemy extends Character {
    constructor(proportion, speedMovement, sprites, spriteSize, blankSprites, speed) {
        super(proportion, sprites, spriteSize, blankSprites, speed);

        this.speedMovement = speedMovement;
    }
}