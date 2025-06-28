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

  // Plus de tentative de play au load → bloquée par les navigateurs

  btn.addEventListener('click', async () => {
    isMuted = !isMuted;
    btn.textContent = isMuted ? '🔇' : '🔈';

    if (isMuted) {
      clearInterval(fadeInterval);
      audio.volume = 0;
      audio.muted = true;
    } else {
      if (!firstUnmute) {
        const elapsed = Math.floor((Date.now() - visitStart) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        console.log(`⏱ Temps écoulé : ${minutes} minute(s) et ${seconds} seconde(s)`);

        try {
          // Attend que l'audio soit prêt (important sur mobile)
          await audio.play();
          // Positionner après play (pour Safari)
          audio.currentTime = Math.min(elapsed, audio.duration || elapsed);
          console.log(`🎵 Lecture du son à ${audio.currentTime.toFixed(2)} secondes`);
          firstUnmute = true;
        } catch (err) {
          console.warn('❌ Impossible de lancer la lecture après interaction :', err);
        }
      } else {
        audio.play().catch(() => {});
      }

      audio.muted = false;
      fadeIn();
    }
  });
