class Character {
    constructor(proportion, sprites, spriteSize, speed) {
        this.sprites = sprites;
        this.spriteSize = spriteSize;
        
        this.image = null;
        this.proportion = proportion;
        
        this.currentSprite = [0, 0];

        this.speed = speed;
        this.actual = -1;
    }

    preload(image) {
        this.image = loadImage(image);
        console.log('preload');
    }

    setup(x, y) {
        this.x = x;
        this.y = y;
        console.log('setup');
    }

    show() {
        image(this.image,
            this.x, this.y,
            this.getPropWidth(this.proportion),
            this.getPropHeight(this.proportion),
            this.getCurrentLeft(),
            this.getCurrentTop(),
            this.getWidth(),
            this.getHeight());

        this.animate();
    }

    animate() {
        this.actual = this.actual + 1;

        if (this.actual == this.speed || this.actual < 0) {
            this.actual = 0;

            this.currentSprite[0] = this.currentSprite[0] + 1;

            if (this.currentSprite[0] > this.sprites[0]) {
                this.currentSprite[0] = 0;
                this.currentSprite[1] = this.currentSprite[1] + 1;

                if (this.currentSprite[1] > this.sprites[1]) {
                    this.currentSprite[1] = 0;
                }
            }
        }
    }

    getWidth() {
        return this.spriteSize[0];
    }

    getPropWidth() {
        return this.spriteSize[0] * this.proportion;
    }

    getHeight() {
        return this.spriteSize[1];
    }

    getPropHeight() {
        return this.spriteSize[1] * this.proportion;
    }

    getCurrentLeft() {
        return this.currentSprite[0] * this.spriteSize[0];
    }

    getCurrentTop() {
        return this.currentSprite[1] * this.spriteSize[1];
    }
}