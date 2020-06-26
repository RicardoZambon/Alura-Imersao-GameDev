const background_files = [
    ['images/scenario/florest1/Sky.png', 'images/scenario/florest1/BG_Decor.png', 'images/scenario/florest2/Middle_Decor.png', 'images/scenario/florest1/ForeGround.png', 'images/scenario/florest1/Ground.png'],
    ['images/scenario/florest2/Sky.png', 'images/scenario/florest2/BG_Decor.png', 'images/scenario/florest2/Middle_Decor.png', 'images/scenario/florest2/ForeGround.png', 'images/scenario/florest2/Ground.png'],
    ['images/scenario/florest3/Sky.png', 'images/scenario/florest3/BG_Decor.png', 'images/scenario/florest3/Middle_Decor.png', 'images/scenario/florest3/ForeGround.png', 'images/scenario/florest3/Ground.png'],
    ['images/scenario/florest4/Sky.png', 'images/scenario/florest4/BG_Decor.png', 'images/scenario/florest4/Middle_Decor.png', 'images/scenario/florest4/ForeGround.png', 'images/scenario/florest4/Ground.png']
];

class ScenarioBackground {
    constructor() {
        this.background = [];

        this.backgroundSpeeds = [1, 2, 4, 6, 8];
        this.backgroundX1 = [0, 0, 0, 0, 0];

        //TODO: change background after some levels.
        this.currentBackground = 0;
    }

    preload() {
        for (var b = 0; b < background_files.length; b++) {
            var background = [];
            for (var i = 0; i < background_files[b].length; i++) {
                background.push(loadImage(background_files[b][i]));
            }
            this.background.push(background);
        }
    }

    show() {
        var background = this.background[this.currentBackground];
        for (var i = 0; i < background.length; i++) {
            var backgroundImage = background[i];

            image(backgroundImage, this.backgroundX1[i], 0, width, height);
            image(backgroundImage, width + this.backgroundX1[i], 0, width, height);
        }
        this.move();
    }

    move() {
        var background = this.background[this.currentBackground];
        for (var i = 0; i < background.length; i++) {
            var image = background[i];

            this.backgroundX1[i] -= this.backgroundSpeeds[i];

            if (this.backgroundX1[i] < -width) {
                this.backgroundX1[i] = 0;
            }
        }
    }
}