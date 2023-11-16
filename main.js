// const music = new Audio('./assets/sounds/monitorBeep.mp3');

// function stopMusic() {
//  music.currentTime = 0;
//  music.pause();
// }

// function restartMusic() {
//  music.currentTime = 0;
//  music.play();
//  music.volume = 0.7;
// }
// music.addEventListener('ended', function () {
//  restartMusic();
// });

// restartMusic();

// console.log('test');

const music = new Audio('./assets/sounds/monitorBeep.mp3');
let musicStarted = false;
music.muted = true;

function stopMusic() {
 music.currentTime = 0;
 music.pause();
}

function restartMusic() {
 music.currentTime = 0;
 music.play().then(() => {
  // Autoplay started successfully
  music.muted = false;
  music.volume = 0.7;
  musicStarted = true;
 }).catch(error => {
  // Autoplay was prevented
  console.log('Autoplay was prevented:', error);
 });
}

function startMusicOnInteraction() {
 if (!musicStarted) {
  restartMusic();
  window.removeEventListener('DOMContentLoaded', startMusicOnInteraction); // Remove the listener after initial interaction
 }
}

window.addEventListener('DOMContentLoaded', startMusicOnInteraction);

music.addEventListener('ended', function () {
 restartMusic();
});

console.log('test');
