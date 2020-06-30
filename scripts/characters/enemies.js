class Enemies {
    constructor() {
        this.littleDrop = new LittleDrop(0.7, 10);
        this.flyingDrop = new FlyingDrop(0.7, 12);
        this.troll = new Troll(0.7, 7);

        this.enemiesList = [this.littleDrop, this.flyingDrop, this.troll];

        this.scorePhase = 300;
        this.enemyPhase = 1;
        this.maxPhase = 10;

        this.enemiesShown = [];
        this.enemiesPositions = [];
        this.enemiesSpeed = [];
    }


    preload() {
        for (var i = 0; i < this.enemiesList.length; i++) {
            this.enemiesList[i].preload();
        }
    }

    show(witch, life, score) {
        for (var e = 0; e < this.enemiesShown.length; e++) {
            var enemy = this.enemiesShown[e];
            enemy.show(this.enemiesPositions[e]);

            if (witch.checkCollision(enemy, this.enemiesPositions[e], true)) {
                life.removeLife();

                if (life.currentLife <= 0) {
                    score.gameOver();
                }
            }
        }
    }

    move(score) {
        for (var e = 0; e < this.enemiesShown.length; e++) {
            var enemy = this.enemiesShown[e];
            var enemyPosition = this.enemiesPositions[e];
            enemy.move(enemyPosition, this.enemiesSpeed[e]);

            if (enemyPosition.x == width) {
                this.enemiesShown.splice(e, 1);
                this.enemiesSpeed.splice(e, 1);
                this.enemiesPositions.splice(e, 1);
                e--;
            }
        }

        var phase = parseInt((score.score - score.score % this.scorePhase) / this.scorePhase);
        if (phase > this.enemyPhase && this.enemyPhase != this.maxPhase) {
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

            this.enemiesSpeed.push(Math.floor(Math.random() * this.enemyPhase) * (this.enemyPhase < 4 ? 2 : 1));
            this.enemiesPositions.push(new CharacterPosition(width, height - enemy.getPropHeight() - enemy.heightVariant));
            this.enemiesShown.push(enemy);
        }
    }
}