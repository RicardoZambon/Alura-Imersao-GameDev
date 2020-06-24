const littledrop_file = 'images/characters/little-drop.png';

class LittleDrop extends Character {
    constructor(proportion, speedMovement) {
        super(proportion, [3, 6], [105, 100], 2);

        this.speedMovement = speedMovement;
    }

    preload() {
        super.preload(littledrop_file);
    }


    move() {
        this.x = this.x - this.speedMovement;

        if (this.x < -this.getPropWidth()) {
            this.x = width;
        }
    }
}