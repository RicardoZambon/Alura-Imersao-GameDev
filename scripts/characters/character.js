class Character {
    constructor(proportion, sprites, spriteSize, blankSprites, speed, collisionPolygon) {
        this.sprites = sprites;
        this.spriteSize = spriteSize;
        this.blankSprites = blankSprites;
        
        this.image = null;
        this.proportion = proportion;

        this.speed = speed;

        this.collisionPolygon = collisionPolygon;
    }

    preload(image) {
        this.image = loadImage(image);
    }

    show(characterPosition) {
        image(this.image,
            characterPosition.x, characterPosition.y,
            this.getPropWidth(this.proportion),
            this.getPropHeight(this.proportion),
            this.getCurrentLeft(characterPosition),
            this.getCurrentTop(characterPosition),
            this.getWidth(),
            this.getHeight());

        this.animate(characterPosition);
    }

    animate(characterPosition) {
        characterPosition.spriteCount = characterPosition.spriteCount + 1;

        if (characterPosition.spriteCount == this.speed || characterPosition.spriteCount < 0) {
            characterPosition.spriteCount = 0;

            characterPosition.currentSprite[0] = characterPosition.currentSprite[0] + 1;

            if (this.blankSprites > 0 && characterPosition.currentSprite[1] == this.sprites[1] && characterPosition.currentSprite[0] > this.sprites[0] - this.blankSprites) {
                characterPosition.currentSprite[0] = 1;
                characterPosition.currentSprite[1] = 1;
            } else if (characterPosition.currentSprite[0] > this.sprites[0]) {
                characterPosition.currentSprite[0] = 1;
                characterPosition.currentSprite[1] = characterPosition.currentSprite[1] + 1;

                if (characterPosition.currentSprite[1] > this.sprites[1]) {
                    characterPosition.currentSprite[1] = 1;
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

    getCurrentLeft(characterPosition) {
        return (characterPosition.currentSprite[0] - 1) * this.spriteSize[0];
    }

    getCurrentTop(characterPosition) {
        return (characterPosition.currentSprite[1] - 1) * this.spriteSize[1];
    }
}