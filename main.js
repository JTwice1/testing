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
  // In case autoplay was prevented, set up an event listener for user interaction
  document.addEventListener('click', startMusicOnInteraction);
 });
}

function startMusicOnInteraction() {
 if (!musicStarted) {
  restartMusic();
 }
}

music.addEventListener('ended', function () {
 restartMusic();
});

restartMusic();

console.log('test');