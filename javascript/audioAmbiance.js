/*const PLAY       = 20_000;
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

// Pour éviter interférences : stocker le fade actuel par audio
const fadeStates = new Map();

function setVol(audio, v) {
  const vol = globalMute ? 0 : Math.max(0, Math.min(1, v));
  audio.volume = vol;
}


function forceMuteLoop() {
  setInterval(() => {
    if (!globalMute) return;
    tracks.forEach(a => {
      if (a.volume > 0) setVol(a, 0); // assure silence total
    });
  }, 1000); // toutes les 1s, on force le silence si mute
}

function fade(audio, dir) {
  clearInterval(fadeStates.get(audio));

  const id = setInterval(() => {
    const targetVol = globalMute ? 0 : (dir > 0 ? 1 : 0);
    let next = audio.volume + dir * STEP_VOL;
    if (globalMute) next = 0;

    setVol(audio, next);

    const done = (dir > 0 && next >= targetVol) || (dir < 0 && next <= targetVol);
    if (done) {
      clearInterval(id);
      setVol(audio, targetVol);
      if (dir < 0) audio.pause();
    }
  }, STEP_MS);

  fadeStates.set(audio, id);
}


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

const btn = document.getElementById('toggle-sound');

btn.addEventListener('click', () => {
  globalMute = !globalMute;
  btn.textContent = globalMute ? '🔇' : '🔈';

  // MàJ volume de tous les tracks
  tracks.forEach(a => setVol(a, a.volume));

  // Si on vient de démute, relance immédiatement la lecture + fade-in
  if (!globalMute) {
    const cur = tracks[index];

    // Si la piste est terminée ou en pause, relancer depuis le début
    if (cur.paused || cur.ended) {
      cur.currentTime = 0;
      cur.play().catch(() => {});
    }

    fade(cur, +1); // Fade-in immédiat
  }
});




window.addEventListener('DOMContentLoaded', () => {
  tracks.forEach(a => {
    a.muted = false;
    a.loop = false;
    setVol(a, 0);
    a.play().catch(() => {});
  });
  cycle();
  forceMuteLoop(); // active la sécurité silencieuse
});

*/


const btn = document.getElementById('toggle-sound');
    const audio = document.getElementById('ambiance');
    
    // Lancer la lecture silencieuse au chargement
    window.addEventListener('load', () => {
      audio.volume = 0;
      audio.play().catch(() => {
        // Certains navigateurs peuvent bloquer sans interaction
        console.warn("Lecture bloquée tant qu’aucune interaction n’a lieu");
      });
    });

    let isMuted = true;

    btn.addEventListener('click', () => {
      isMuted = !isMuted;
      btn.textContent = isMuted ? '🔇' : '🔈';
      audio.volume = isMuted ? 0 : 1;
    });
