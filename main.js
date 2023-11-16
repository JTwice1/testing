const music = new Audio('./assets/sounds/monitorBeep.mp3');

function stopMusic() {
 music.currentTime = 0;
 music.pause();
}

function restartMusic() {
 music.currentTime = 0;
 music.play();
 music.volume = 0.7;
}
music.addEventListener('ended', function () {
 restartMusic();
});

restartMusic();