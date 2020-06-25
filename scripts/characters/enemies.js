class Enemies {
    constructor() {
        this.littleDrop = new LittleDrop(0.7, 5);
        this.flyingDrop = new FlyingDrop(0.7, 7);
        this.troll = new Troll(0.7, 3);

        this.enemiesList = [ this.littleDrop, this.flyingDrop, this.troll ];
    }


    preload() {
        for (var i = 0; i < this.enemiesList.length; i++) {
            this.enemiesList[i].preload();
        }
    }

    setup() {
        for (var i = 0; i < this.enemiesList.length; i++) {
            this.enemiesList[i].setup();
        }
        //this.littleDrop.setup(width - 50, height - littleDrop.getPropHeight(littleDrop.proportion) - 5);
        //this.flyingDrop.setup(width - 50, height - flyingDrop.getPropHeight(flyingDrop.proportion) - 5);
        //this.troll.setup(width - 50, height - troll.getPropHeight(troll.proportion) + 30);
    }


    show() {
        for (var i = 0; i < this.enemiesList.length; i++) {
            var enemy = this.enemiesList[i];

            if (witch.checkCollision(enemy)) {
                score.gameOver();
            }
            enemy.show();
        }
    }

    move() {
        for (var i = 0; i < this.enemiesList.length; i++) {
            this.enemiesList[i].move();
        }
    }
}