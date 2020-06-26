const troll_file = 'images/characters/troll.png';

class Troll extends Enemy {
    constructor(proportion, speedMovement) {
        super(proportion, speedMovement, [5, 6], [400, 400], 2, 3);
    }

    preload() {
        super.preload(troll_file);
    }

    setup() {
        super.setup(width - 50, height - this.getPropHeight(this.proportion) + 30);
    }
}