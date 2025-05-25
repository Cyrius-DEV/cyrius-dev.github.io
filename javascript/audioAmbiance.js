const PLAY       = 20_000;
const CROSSFADE  = 10_000;
const STEP_MS    = 250;
const STEP_VOL   = STEP_MS / CROSSFADE;

const tracks = [
  document.getElementById('audio1'),
  document.getElementById('audio2'),
  document.getElementById('audio3'),
  document.getElementById('audio4')
];
let index = 0;
let globalMute = true;

/* Volume sécurisé */
function setVol(audio, v) {
  audio.volume = Math.max(0, Math.min(1, globalMute ? 0 : v));
}

/* Fade intelligent */
function fade(audio, dir) {
  clearInterval(audio._fader);
  audio._fader = setInterval(() => {
    let target = globalMute ? 0 : (dir > 0 ? 1 : 0);
    let next = audio.volume + dir * STEP_VOL;
    if (dir > 0 && globalMute) next = 0; // empêche le fade-in si mute

    setVol(audio, next);

    if ((dir > 0 && next >= target) || (dir < 0 && next <= 0)) {
      clearInterval(audio._fader);
      if (dir < 0) audio.pause();
    }
  }, STEP_MS);
}

/* Boucle audio */
function cycle() {
  const cur = tracks[index];
  const nxt = tracks[(index + 1) % tracks.length];

  if (cur.paused) cur.play().catch(()=>{});

  setTimeout(() => {
    fade(cur, -1);
    nxt.currentTime = 0;
    nxt.play().catch(()=>{});
    fade(nxt, +1);
    index = (index + 1) % tracks.length;
    cycle();
  }, PLAY);
}

/* Bouton mute/unmute */
const btn = document.getElementById('toggle-sound');

btn.addEventListener('click', () => {
  globalMute = !globalMute;
  btn.textContent = globalMute ? '🔇' : '🔈';

  // mise à jour immédiate du volume
  tracks.forEach(a => {
    setVol(a, a.volume);
  });
});

/* Démarrage initial */
window.addEventListener('DOMContentLoaded', () => {
  tracks.forEach(a => {
    a.muted = false;
    setVol(a, 0);
    a.play().catch(()=>{});
  });
  cycle();
});
