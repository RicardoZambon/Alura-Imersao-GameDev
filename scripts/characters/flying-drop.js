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
    }

    preload() {
        super.preload(flyingdrop_file);
    }

    setup() {
        super.setup(width - 50, height - this.getPropHeight(this.proportion) - 250);
        this.baseY = this.y;
    }

    variateY(y) {
        this.y = this.baseY + y;
    }
}