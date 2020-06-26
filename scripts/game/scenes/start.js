const font_file = 'fonts/start.otf';

class Start extends Scene {
    constructor() {
        super();

        this.background = new StartBackground();
        this.font = null;

        this.button = null;
    }

    preload() {
        this.background.preload();

        this.font = loadFont(font_file);
    }

    setup() {
        this.button = new ButtonManager('Iniciar', 0, height / 7 * 5, 'button-start', () => this.start());
    }

    keypress() {
        super.keypress();
    }

    draw(score) {
        super.draw(score);

        this.background.show();

        
        textFont('start');
        textAlign(CENTER)

        textSize(100);
        text('The adventures of', width / 2, height / 3);

        textSize(150);
        text('Hipsta', width / 2, height / 5 * 3);

        this.button.draw();
    }

    start() {
        this.button.remove();
        sceneManager.actualScene = 'game';
    }
}