class Enemies {
    constructor() {
        this.littleDrop = new LittleDrop(0.7, 5);
        this.flyingDrop = new FlyingDrop(0.7, 7);
        this.troll = new Troll(0.7, 3);

        this.enemiesList = [this.littleDrop, this.flyingDrop, this.troll];

        this.scorePhase = 300;
        this.enemyPhase = 1;

        this.enemiesShown = [];
        this.enemiesPositions = [];
        this.enemiesSpeed = [];
        //this.calculateEnemies();
    }


    preload() {
        for (var i = 0; i < this.enemiesList.length; i++) {
            this.enemiesList[i].preload();
        }
    }

    setup() {
        
    }


    show(witch, life, score) {
        for (var e = 0; e < this.enemiesShown.length; e++) {
            var enemy = this.enemiesShown[e];
            enemy.show(this.enemiesPositions[e]);

            if (witch.checkCollision(enemy)) {
                //life.removeLife();

                if (life.currentLife <= 0) {
                    score.gameOver();
                }
            }
        }
    }

    move(score) {
        for (var e = 0; e < this.enemiesShown.length; e++) {
            var enemy = this.enemiesShown[e];
            enemy.move(this.enemiesPositions[e], this.enemiesSpeed[e]);

            if (enemy.x == width) {
                this.enemiesShown.splice(e, 1);
                this.enemiesSpeed.splice(e, 1);
                e--;
            }
        }

        var phase = parseInt((score.score - score.score % this.scorePhase) / this.scorePhase);
        if (phase > this.enemyPhase) {
            this.enemyPhase = phase;
        }

        if (this.enemiesShown.length < this.enemyPhase) {
            this.calculateEnemies();
        }
    }

    calculateEnemies() {
        for (var e = 0; e < (this.enemyPhase - this.enemiesShown.length); e++) {
            var enemyIndex = Math.floor(Math.random() * this.enemiesList.length);
            var enemy = this.enemiesList[enemyIndex];

            if (typeof enemy.variateY !== 'undefined') {
                enemy.variateY(Math.floor(Math.random() * 50) + 1);
            }

            //TODO: Calculate accordingly to user points.
            this.enemiesSpeed.push(Math.floor(Math.random() * 10) + 1);
            this.enemiesPositions.push(new CharacterPosition(width, height - enemy.getPropHeight() - enemy.heightVariant));
            this.enemiesShown.push(enemy);
        }
    }
}