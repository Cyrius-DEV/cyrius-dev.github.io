  const btn = document.getElementById('toggle-sound');
  const audioEl = document.getElementById('ambiance');

  let isMuted = true;
  let audioCtx, gainNode, bufferSource;
  let fadeInterval;

  async function setupAudio() {
    // Initialisation du contexte audio
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    gainNode = audioCtx.createGain();
    gainNode.gain.value = 0;

    // Récupération du fichier audio
    const response = await fetch(audioEl.src);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);

    // Création de la source et lecture en boucle
    bufferSource = audioCtx.createBufferSource();
    bufferSource.buffer = audioBuffer;
    bufferSource.loop = true;

    bufferSource.connect(gainNode).connect(audioCtx.destination);
    bufferSource.start(0);
  }

  function fadeGain(to = 1, duration = 1000) {
    clearInterval(fadeInterval);
    const steps = 20;
    const stepTime = duration / steps;
    const delta = (to - gainNode.gain.value) / steps;

    fadeInterval = setInterval(() => {
      let next = gainNode.gain.value + delta;
      gainNode.gain.value = Math.min(1, Math.max(0, next));
      if ((to === 1 && next >= 1) || (to === 0 && next <= 0)) {
        gainNode.gain.value = to;
        clearInterval(fadeInterval);
      }
    }, stepTime);
  }

  window.addEventListener('load', async () => {
    await setupAudio();
    // bouton prêt à contrôler le son
  });

  btn.addEventListener('click', () => {
    isMuted = !isMuted;
    btn.textContent = isMuted ? '🔇' : '🔈';

    if (isMuted) {
      // Mute immédiat
      clearInterval(fadeInterval);
      gainNode.gain.value = 0;
    } else {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      fadeGain(1, 1000); // fade-in
    }
  });
