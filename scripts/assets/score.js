const gameover_file = 'images/assets/game-over.png';

class Score {
    constructor() {
        this.gameoverImage = null;

        this.score = 0;
    }

    preload() {
        this.gameoverImage = loadImage(gameover_file);
    }


    show() {
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        text(parseInt(this.score), width - 30, 70);
    }

    addScore() {
        this.score += 0.2;
    }

    gameOver() {
        //image(this.gameoverImage, width / 2 - 200, height / 3 - 100)

        //noLoop();
    }
}