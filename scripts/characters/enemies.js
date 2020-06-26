class Enemies {
    constructor() {
        this.littleDrop = new LittleDrop(0.7, 5);
        this.flyingDrop = new FlyingDrop(0.7, 7);
        this.troll = new Troll(0.7, 3);

        this.enemiesList = [this.littleDrop, this.flyingDrop, this.troll];

        this.actualEnemy = 0;
        this.speedIncrease = 0;
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
    }


    show(witch) {
        var enemy = this.enemiesList[this.actualEnemy];

        enemy.show();

        if (witch.checkCollision(enemy)) {
            score.gameOver();
        }
    }

    move() {
        var enemy = this.enemiesList[this.actualEnemy];
        enemy.move(this.speedIncrease);

        if (enemy.x == width) {
            this.actualEnemy++;

            if (this.actualEnemy >= this.enemiesList.length) {
                this.actualEnemy = 0;
            }
            
            //TODO: Calculate accordingly to user points.
            this.speedIncrease = random(0, 10);
        }
    }
}