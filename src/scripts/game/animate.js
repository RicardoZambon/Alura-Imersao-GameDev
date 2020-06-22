class Animate {
  constructor(sprites, spriteSize, speed) {
    this.sprites = sprites;
    this.spriteSize = spriteSize;

    this.currentSprite = [0, 0];

    this.speed = speed;
    this.actual = 0;
    console.log(this.actual);
  }

  animate() {
    this.actual = this.actual + 1;

    if (this.actual == this.speed) {
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

  getPropWidth(proportion) {
    return this.spriteSize[0] * proportion;
  }

  getHeight() {
    return this.spriteSize[1];
  }

  getPropHeight(proportion) {
    return this.spriteSize[1] * proportion;
  }

  getCurrentLeft() {
    return this.currentSprite[0] * this.spriteSize[0];
  }

  getCurrentTop() {
    return this.currentSprite[1] * this.spriteSize[1];
  }
}