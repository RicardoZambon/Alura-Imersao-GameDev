const flyingdrop_file = 'images/characters/flying-drop.png';

const flyingdrop_collision = [
    [35, 35],
    [90, 25],
    [90, 72],
    [35, 72]
]

class FlyingDrop extends Enemy {
    constructor(proportion, speedMovement) {
        super(proportion, speedMovement, [3, 6], [200, 150], 2, 2, flyingdrop_collision);

        this.speedMovement = speedMovement;
        this.heightVariant = 250;
    }

    preload() {
        super.preload(flyingdrop_file);
    }
}