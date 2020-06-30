const flyingdrop_file = 'images/characters/flying-drop.png';

const flyingdrop_collision = [
    [15, 20],
    [90, 15],
    [90, 70],
    [15, 60]
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