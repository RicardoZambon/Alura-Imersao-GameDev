const background_file = 'images/scenario/start.png';

class StartBackground {
    constructor() {
        this.background_Image = null;
    }

    preload() {
        this.background_Image = loadImage(background_file);
    }

    show() {
        image(this.background_Image, 0, 0, width, height);
    }
}