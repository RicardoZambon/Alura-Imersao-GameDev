const littledrop_file = 'images/characters/little-drop.png';

const littledrop_collision = [
    [5, 35],
    [15, 20],
    [55, 20],
    [55, 57],
    [15, 57]
]

class LittleDrop extends Enemy {
    constructor(proportion, speedMovement) {
        super(proportion, speedMovement, [4, 7], [105, 100], 0, 2, littledrop_collision);

        this.speedMovement = speedMovement;
        this.heightVariant = 35;
    }

    preload() {
        super.preload(littledrop_file);
    }
}