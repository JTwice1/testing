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

function stopMusic() {
 music.currentTime = 0;
 music.pause();
}

function restartMusic() {
 music.currentTime = 0;
 music.play().then(() => {
  // Autoplay started successfully
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
  document.removeEventListener('click', startMusicOnInteraction); // Remove the listener after initial interaction
 }
}

document.addEventListener('onload', startMusicOnInteraction);

music.addEventListener('ended', function () {
 restartMusic();
});

console.log('test');
