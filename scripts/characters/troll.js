const troll_file = 'images/characters/troll.png';

var troll_collision = [
    [60, 150],
    [105, 165],
    [160, 60],
    [200, 70],
    [210, 100],
    [235, 180],
    [210, 230],
    [130, 230],
    [60, 185]
]

class Troll extends Enemy {
    constructor(proportion, speedMovement) {
        super(proportion, speedMovement, [5, 6], [400, 400], 2, 3, troll_collision);

        this.heightVariant = -10;
    }

    preload() {
        super.preload(troll_file);
    }
}