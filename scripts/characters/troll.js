const troll_file = 'images/characters/troll.png';

const troll_collision = [
    [20, 80],
    [80, 105],
    [120, 20],
    [195, 130],
    [150, 170],
    [20, 140]
]

class Troll extends Enemy {
    constructor(proportion, speedMovement) {
        super(proportion, speedMovement, [5, 6], [400, 400], 2, 3, troll_collision);
    }

    preload() {
        super.preload(troll_file);
    }

    setup() {
        super.setup(width - 50, height - this.getPropHeight(this.proportion) + 30);
    }
}