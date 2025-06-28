const btn = document.getElementById('toggle-sound');
const audio = document.getElementById('ambiance');

let isMuted = true;
let fadeInterval;

function fadeIn(targetVolume = 1, duration = 1000) {
  clearInterval(fadeInterval);
  const steps = 20;
  const stepTime = duration / steps;
  const volumeStep = (targetVolume - audio.volume) / steps;

  fadeInterval = setInterval(() => {
    let next = audio.volume + volumeStep;
    next = Math.min(1, Math.max(0, next));
    audio.volume = next;

    if (next >= targetVolume) {
      audio.volume = targetVolume;
      clearInterval(fadeInterval);
    }
  }, stepTime);
}

window.addEventListener('load', () => {
  audio.volume = 0;
  audio.play().catch(() => {
    console.warn("Lecture bloquée jusqu'à interaction.");
  });
});

btn.addEventListener('click', () => {
  isMuted = !isMuted;
  btn.textContent = isMuted ? '🔇' : '🔈';

  if (isMuted) {
    clearInterval(fadeInterval);
    audio.volume = 0;
    audio.muted = true;
  } else {
    if (audio.paused) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
    audio.muted = false;
    fadeIn();
  }
});
