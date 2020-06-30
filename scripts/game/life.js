const life_file = 'images/assets/heart.png';

class Life {
    constructor(startLife, maxLife) {
        this.startLife = startLife;
        this.maxLife = maxLife;

        this.currentLife = startLife;

        this.location = [15, 15];
        this.size = [50, 42];
        this.separator = 15;
    }

    preload() {
        this.lifeImage = loadImage(life_file);
    }

    draw() {
        for (var i = 0; i < this.currentLife; i++) {
            image(this.lifeImage, this.location[0] + ((this.size[1] + this.separator) * i), this.location[1], this.size[0], this.size[1]);
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