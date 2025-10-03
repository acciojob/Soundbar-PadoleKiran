//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopBtn = document.querySelector('.stop');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    stopSounds();
    const soundId = btn.innerText;
    const audioEl = document.getElementById(soundId);
    if (audioEl) {
      audioEl.play();
    }
  });
});

stopBtn.addEventListener('click', stopSounds);

function stopSounds() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}