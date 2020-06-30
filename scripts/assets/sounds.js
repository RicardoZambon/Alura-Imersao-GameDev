const sound_music_file = 'sounds/music.mp3';
const sound_jump_file = 'sounds/jump.mp3';
const sound_impact_file = 'sounds/impact.mp3';
const sound_lifeup_file = 'sounds/lifeup.mp3';

const sound_gameover_file = 'sounds/gameover.mp3';

class GameSounds {
    constructor() {
        this.soundMusic = null;
        this.soundJump = null;
        this.soundImpact = null;
        this.lifeUp = null;

        this.soundGameOver = null;
    }

    preload() {
        this.soundMusic = loadSound(sound_music_file);
        this.soundJump = loadSound(sound_jump_file);
        this.soundImpact = loadSound(sound_impact_file);
        this.lifeUp = loadSound(sound_lifeup_file);

        this.soundGameOver = loadSound(sound_gameover_file);
    }

    loopMusic() {
        this.soundMusic.loop();
    }

    playJump() {
        this.soundJump.play();
    }

    playImpact() {
        this.soundImpact.play();
    }

    playLifeUp() {
        this.lifeUp.play();
    }

    playGameOver() {
        this.soundMusic.stop();
        this.soundGameOver.play();
    }
}