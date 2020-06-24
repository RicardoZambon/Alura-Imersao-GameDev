const sound_music_file = 'sounds/music.mp3';
const sound_jump_file = 'sounds/jump.mp3';

class GameSounds {
    constructor() {
        this.soundMusic = null;
        this.soundJump = null;
    }

    preload() {
        this.soundMusic = loadSound(sound_music_file);
        this.soundJump = loadSound(sound_jump_file);
    }

    loopMusic() {
        this.soundMusic.loop();
    }

    playJump() {
        this.soundJump.play();
    }
}