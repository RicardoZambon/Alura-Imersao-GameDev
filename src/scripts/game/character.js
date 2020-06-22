class Character {
  constructor(image) {
    this.image = image;
    this.proportion = 0.5;

    this.animate = new Animate([3, 3], [220, 270], 3);
  }

  show() {
    image(this.image,
      0, height - this.animate.getPropHeight(this.proportion),
      this.animate.getPropWidth(this.proportion),
      this.animate.getPropHeight(this.proportion),
      this.animate.getCurrentLeft(),
      this.animate.getCurrentTop(),
      this.animate.getWidth(),
      this.animate.getHeight());

    this.animate.animate();
  }
}