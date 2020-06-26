const flyingdrop_file = 'images/characters/flying-drop.png';

class FlyingDrop extends Enemy {
    constructor(proportion, speedMovement) {
        super(proportion, speedMovement, [3, 6], [200, 150], 2, 2);

        this.speedMovement = speedMovement;
    }

    preload() {
        super.preload(flyingdrop_file);
    }

    setup() {
        super.setup(width - 50, height - this.getPropHeight(this.proportion) - 250);
    }
}