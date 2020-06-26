class SceneManager {
	constructor() {
        this.availableScenes = {
            start: new Start(),
            game: new Game()
        };
        this.actualScene = 'start';

        this.score = new Score();
	}

    preload() {
        this.availableScenes.start.preload();
        this.availableScenes.game.preload();

        this.score.preload();
    }

    setup() {
        this.availableScenes.start.setup();
        this.availableScenes.game.setup();
    }


    keyPressed() {
        this.availableScenes[this.actualScene].keyPressed();
    }

    draw() {
        this.availableScenes[this.actualScene].draw(this.score);
    }


    moveScene(scene) {
        this.actualScene = scene;
	}
}