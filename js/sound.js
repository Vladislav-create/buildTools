export function soundPlay() {
    var sound = new Howl ({
        src: ['timerSound.mp3']
    });
    sound.play();  
}