//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3'];

const buttonsDiv = document.getElementById('buttons');
const audioContainer = document.getElementById('audio-container');
let currentAudio = null;

// Create <audio> elements for each sound
sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.id = sound;
  audio.src = `sounds/${sound}.mp3`;
  audioContainer.appendChild(audio);

  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    stopSound();
    currentAudio = document.getElementById(sound);
    currentAudio.play();
  });

  buttonsDiv.appendChild(btn);
});

document.querySelector('.stop').addEventListener('click', stopSound);

function stopSound() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
}
