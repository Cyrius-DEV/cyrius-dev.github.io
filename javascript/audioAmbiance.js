const btn = document.getElementById('toggle-sound');
const audio = document.getElementById('ambiance');

let isMuted = true;
let fadeInterval;
let visitStart = Date.now();
let firstUnmute = false;

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
  audio.muted = true;
  audio.play().catch(() => {
    console.warn("Lecture bloquée jusqu'à interaction utilisateur.");
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
    // Première fois qu'on unmute ?
    if (!firstUnmute) {
      const elapsed = Math.floor((Date.now() - visitStart) / 1000);
      audio.currentTime = elapsed % audio.duration;
      firstUnmute = true;
    }

    if (audio.paused) {
      audio.play().catch(() => {});
    }

    audio.muted = false;
    fadeIn();
  }
});
