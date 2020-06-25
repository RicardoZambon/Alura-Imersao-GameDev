const background1_file = 'images/scenario/florest1.png';
const background2_file = 'images/scenario/florest2.png';

class Scenario {
    constructor() {
        this.background1_Image = null;
        this.background1_Speed = 4;
        this.background1_X1 = 0;
        
        this.background2_Image = null;
        this.background2_Speed = 2;
        this.background2_X1 = 0;
    }

    preload() {
        this.background1_Image = loadImage(background1_file);
        this.background2_Image = loadImage(background2_file);
    }

    show() {
        image(this.background2_Image, this.background2_X1, 0, width, height);
        image(this.background2_Image, width + this.background2_X1, 0, width, height);

        image(this.background1_Image, this.background1_X1, 0, width, height);
        image(this.background1_Image, width + this.background1_X1, 0, width, height);

        this.move();
    }

    move() {
        this.background1_X1 = this.background1_X1 - this.background1_Speed;        

        if (this.background1_X1 < -width) {
            this.background1_X1 = 0;
        }


        this.background2_X1 = this.background2_X1 - this.background2_Speed;

        if (this.background2_X1 < -width) {
            this.background2_X1 = 0;
        }
    }
}