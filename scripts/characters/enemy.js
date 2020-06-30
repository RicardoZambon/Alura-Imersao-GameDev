
class Enemy extends Character {
    constructor(proportion, speedMovement, sprites, spriteSize, blankSprites, speed, collisionPolygon) {
        super(proportion, sprites, spriteSize, blankSprites, speed, collisionPolygon);

        this.speedMovement = speedMovement;
        this.heightVariant = 0;
    }

    move(characterPosition, speedIncrease) {
        characterPosition.x = characterPosition.x - this.speedMovement - speedIncrease;

        if (characterPosition.x < -this.getPropWidth()) {
            characterPosition.x = width;
        }
    }
}