/* === Paramètres === */
const PLAY       = 20_000;   // durée “plein volume” (20 s)
const CROSSFADE  = 10_000;   // durée du fondu (10 s)
const STEP_MS    = 250;      // intervalle de variation du volume
const STEP_VOL   = STEP_MS / CROSSFADE;  // incrément (ou décrément) du volume

/* === Initialisation === */
const tracks = [
  document.getElementById('audio1'),
  document.getElementById('audio2'),
  document.getElementById('audio3'),
  document.getElementById('audio4')
];
let index      = 0;        // piste en cours
let globalMute = true;     // l’utilisateur a-t-il coupé le son ?
let fadeTimer;             // ID de l’intervalle en cours

/* --- Fonctions auxiliaires --- */
function setVol(audio, v)    { audio.volume = Math.max(0, Math.min(1, v)); }
function fade(audio, dir) {   // dir = +1 → fade-in, dir = –1 → fade-out
  clearInterval(audio._fader);
  audio._fader = setInterval(() => {
    const next = audio.volume + dir * STEP_VOL;
    setVol(audio, next);
    if ((dir > 0 && next >= 1) || (dir < 0 && next <= 0)) {
      clearInterval(audio._fader);
      if (dir < 0) audio.pause();
    }
  }, STEP_MS);
}

function cycle() {
  const cur = tracks[index];
  const nxt = tracks[(index + 1) % tracks.length];

  /* Démarre la piste courante si nécessaire */
  if (cur.paused) cur.play().catch(()=>{});

  /* Planifie le cross-fade */
  setTimeout(() => {
    fade(cur, -1);          // fondu sortant
    nxt.currentTime = 0;
    nxt.play().catch(()=>{});
    fade(nxt, +1);          // fondu entrant
    index = (index + 1) % tracks.length;
    cycle();                // boucle récursive
  }, PLAY);
}

const btn = document.getElementById('toggle-sound');

btn.addEventListener('click', () => {
  globalMute = !globalMute;
  btn.textContent = globalMute ? '🔇' : '🔈';
  tracks.forEach(a => {
    a.muted = false;  // on enlève muted pour autoriser contrôle du volume
    setVol(a, globalMute ? 0 : 1);
  });
});


/* --- Lancement automatique au chargement de la page --- */
window.addEventListener('load', () => {
  /* Tous les éléments démarrent à volume 0 (muted) */
  tracks.forEach(a => { setVol(a, 0); a.play().catch(()=>{}); });
  cycle();   // déclenche la première boucle
});
