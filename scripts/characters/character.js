class Character {
    constructor(proportion, sprites, spriteSize, blankSprites, speed, collisionPolygon) {
        this.sprites = sprites;
        this.spriteSize = spriteSize;
        this.blankSprites = blankSprites;
        
        this.image = null;
        this.proportion = proportion;
        
        this.currentSprite = [1, 1];

        this.speed = speed;
        this.actual = -1;

        this.collisionPolygon = collisionPolygon;
    }

    preload(image) {
        this.image = loadImage(image);
    }

    setup(x, y) {
        this.x = x;
        this.y = y;
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

            if (this.blankSprites > 0 && this.currentSprite[1] == this.sprites[1] && this.currentSprite[0] > this.sprites[0] - this.blankSprites) {
                this.currentSprite[0] = 1;
                this.currentSprite[1] = 1;
            } else if (this.currentSprite[0] > this.sprites[0]) {
                this.currentSprite[0] = 1;
                this.currentSprite[1] = this.currentSprite[1] + 1;

                if (this.currentSprite[1] > this.sprites[1]) {
                    this.currentSprite[1] = 1;
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
        return (this.currentSprite[0] - 1) * this.spriteSize[0];
    }

    getCurrentTop() {
        return (this.currentSprite[1] - 1) * this.spriteSize[1];
    }
}