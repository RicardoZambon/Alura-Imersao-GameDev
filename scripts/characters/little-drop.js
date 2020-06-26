const littledrop_file = 'images/characters/little-drop.png';

class LittleDrop extends Enemy {
    constructor(proportion, speedMovement) {
        super(proportion, speedMovement, [4, 7], [105, 100], 0, 2);

        this.speedMovement = speedMovement;
    }

    preload() {
        super.preload(littledrop_file);
    }

    setup() {
        super.setup(width - 50, height - this.getPropHeight(this.proportion) - 5);
    }
}