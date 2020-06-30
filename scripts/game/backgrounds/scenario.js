const background_files = [
    ['images/scenario/florest1/Sky.png', 'images/scenario/florest1/BG_Decor.png', 'images/scenario/florest2/Middle_Decor.png', 'images/scenario/florest1/Foreground.png', 'images/scenario/florest1/Ground.png'],
    ['images/scenario/florest2/Sky.png', 'images/scenario/florest2/BG_Decor.png', 'images/scenario/florest2/Middle_Decor.png', 'images/scenario/florest2/Foreground.png', 'images/scenario/florest2/Ground.png'],
    ['images/scenario/florest3/Sky.png', 'images/scenario/florest3/BG_Decor.png', 'images/scenario/florest3/Middle_Decor.png', 'images/scenario/florest3/Foreground.png', 'images/scenario/florest3/Ground.png'],
    ['images/scenario/florest4/Sky.png', 'images/scenario/florest4/BG_Decor.png', 'images/scenario/florest4/Middle_Decor.png', 'images/scenario/florest4/Foreground.png', 'images/scenario/florest4/Ground.png']
];

const background_transition_files = [
    ['images/scenario_transition/florest1/Sky.png', 'images/scenario_transition/florest1/BG_Decor.png', 'images/scenario_transition/florest2/Middle_Decor.png', 'images/scenario_transition/florest1/Foreground.png', 'images/scenario_transition/florest1/Ground.png'],
    ['images/scenario_transition/florest2/Sky.png', 'images/scenario_transition/florest2/BG_Decor.png', 'images/scenario_transition/florest2/Middle_Decor.png', 'images/scenario_transition/florest2/Foreground.png', 'images/scenario_transition/florest2/Ground.png'],
    ['images/scenario_transition/florest3/Sky.png', 'images/scenario_transition/florest3/BG_Decor.png', 'images/scenario_transition/florest3/Middle_Decor.png', 'images/scenario_transition/florest3/Foreground.png', 'images/scenario_transition/florest3/Ground.png'],
    ['images/scenario_transition/florest4/Sky.png', 'images/scenario_transition/florest4/BG_Decor.png', 'images/scenario_transition/florest4/Middle_Decor.png', 'images/scenario_transition/florest4/Foreground.png', 'images/scenario_transition/florest4/Ground.png']
];

class ScenarioBackground {
    constructor() {
        this.backgrounds = [];
        this.transitions = [];

        this.currentBackgrounds = [];
        this.backgroundSpeeds = [];
        this.backgroundX = [];

        this.currentBackgroundTransition = [];
        this.nextBackgroundTransition = [];
    }

    preload() {
        for (var b = 0; b < background_files.length; b++) {
            var background = [];
            var transitions = [];

            var speed = 1;
            for (var i = 0; i < background_files[b].length; i++) {
                background.push(loadImage(background_files[b][i]));
                transitions.push(loadImage(background_transition_files[b][i]));

                if (b == 0) {
                    this.currentBackgrounds.push(0);
                    this.backgroundSpeeds.push(speed);
                    this.backgroundX.push(0);

                    this.currentBackgroundTransition.push(false);
                    this.nextBackgroundTransition.push(false);

                    speed++;
                }
            }
            this.backgrounds.push(background);
            this.transitions.push(transitions);
        }
    }

    showBackground() {
        for (var b = 0; b < this.currentBackgrounds.length - 1; b++) {
            var background = this.backgrounds[this.currentBackgrounds[b]];
            if (this.currentBackgroundTransition[b]) {
                background = this.transitions[this.currentBackgrounds[b]];
            }

            var backgroundImage = background[b];
            image(backgroundImage, this.backgroundX[b], 0, width, height);

            this.showNext(b, 0);
        }
    }

    showForeground() {
        var b = this.currentBackgrounds.length - 1;

        var background = this.backgrounds[this.currentBackgrounds[b]];
        if (this.currentBackgroundTransition[b]) {
            background = this.transitions[this.currentBackgrounds[b]];
        }

        var backgroundImage = background[b];
        image(backgroundImage, this.backgroundX[b], 50, width, height);

        this.showNext(b, 50);
    }

    showNext(b, y) {
        var nextBackground = this.currentBackgrounds[b];

        var background = null;
        if (this.nextBackgroundTransition[b]) {
            background = this.transitions[nextBackground];
        }
        else {
            if (this.currentBackgroundTransition[b]) {
                nextBackground++;
                if (nextBackground >= this.backgrounds.length) {
                    nextBackground = 0;
                }
            }
            background = this.backgrounds[nextBackground];
        }

        var backgroundImage = background[b];
        image(backgroundImage, this.backgroundX[b] + width, y, width, height);
    }

    move(score) {
        for (var b = 0; b < this.currentBackgrounds.length; b++) {
            this.backgroundX[b] -= this.backgroundSpeeds[b];

            if (this.backgroundX[b] < -width) {
                this.backgroundX[b] = 0;

                if (this.currentBackgroundTransition[b]) {
                    this.currentBackgroundTransition[b] = false;

                    this.currentBackgrounds[b]++;
                    if (this.currentBackgrounds[b] >= this.backgrounds.length) {
                        this.currentBackgrounds[b] = 0;
                    }
                }
                else if (this.nextBackgroundTransition[b]) {
                    this.currentBackgroundTransition[b] = true;
                    this.nextBackgroundTransition[b] = false;
                }
                else {
                    this.nextBackgroundTransition[b] = true;
                }

                //if (score.score < 100) {

                //}
            }
        }
    }
}