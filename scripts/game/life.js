const life_file = 'images/assets/heart.png';

const life_collision = [
    [2, 15],
    [5, 5],
    [15, 0],
    [24, 7],
    [35, 0],
    [46, 5],
    [49, 15],
    [24, 42]
];

class Life {
    constructor(startLife, maxLife) {
        this.startLife = startLife;
        this.maxLife = maxLife;

        this.currentLife = startLife;

        this.location = [15, 15];
        this.size = [50, 42];
        this.separator = 15;

        this.showing = [];
        this.lifesShown = [];
        this.lifesCollected = [];
        this.lifesToShow = 0;
        this.lifeInterval = 250;
        this.lifeLevel = 1;
        this.maxLevel = 4;

        this.movement = 0;
        this.yVariation = 0;

        this.lastPosition = -1;

        this.collisionPolygon = life_collision;
    }

    preload() {
        this.lifeImage = loadImage(life_file);
    }

    setup(movement, startY, yVariation) {
        this.movement = movement;
        this.startY = startY;
        this.yVariation = yVariation;
    }

    show(witch) {
        for (var i = 0; i < this.currentLife; i++) {
            image(this.lifeImage, this.location[0] + ((this.size[1] + this.separator) * i), this.location[1], this.size[0], this.size[1]);
        }

        for (var l = 0; l < this.lifesShown.length; l++) {
            var life = this.lifesShown[l];
            if (!this.lifesCollected[l]) {
                image(this.lifeImage, life.x, life.y, this.size[0], this.size[1]);

                if (witch.checkCollision(this, life, false)) {
                    this.addLife();

                    this.lifesCollected[l] = true;
                }
            }
        }

        this.move();
    }

    move() {
        for (var l = 0; l < this.lifesShown.length; l++) {
            var life = this.lifesShown[l];

            if (!this.showing[l] && this.lastPosition < (width / 2)) {
                this.showing[l] = true;
                this.lastPosition = life.x;
            }

            if (this.showing[l]) {
                life.x = life.x - this.movement;

                if (this.lastPosition == life.x + this.movement) {
                    this.lastPosition = life.x;
                }
                
                if (life.x < -(width + this.size[0])) {
                    this.lifesToShow--;
                    this.lifesShown.splice(l, 1);
                    this.showing.splice(l, 1);
                    this.lifesCollected.splice(l, 1);
                }
            }
        }
    }

    calculateLifesToShow(score) {
        var level = parseInt((score.score - score.score % this.lifeInterval) / this.lifeInterval);
        if (level > this.maxLevel) {
            this.lifesToShow = this.maxLevel;
        }
        else if (level > this.lifeLevel) {
            this.lifesToShow = level - 1;
        }

        if (this.lifesShown.length < this.lifesToShow) {
            this.lifesShown.push(new CharacterPosition(width, this.startY + Math.floor(Math.random() * this.yVariation * 2) - this.yVariation));
            this.showing.push(false);
            this.lifesCollected.push(false);
        }
    }

    addLife() {
        if (this.currentLife != this.maxLife) {
            this.currentLife++;
        }
    }

    removeLife() {
        this.currentLife = this.currentLife - 1;
    }
}