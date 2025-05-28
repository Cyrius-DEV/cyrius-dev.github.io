const btn = document.getElementById('toggle-sound');
    const audio = document.getElementById('ambiance');

    let isMuted = true;
    let fadeInterval;

    function setVolumeSmoothly(targetVolume, duration = 1000) {
      clearInterval(fadeInterval);
      const steps = 20;
      const stepTime = duration / steps;
      const volumeStep = (targetVolume - audio.volume) / steps;

      fadeInterval = setInterval(() => {
        let next = audio.volume + volumeStep;
        next = Math.max(0, Math.min(1, next));
        audio.volume = next;

        if ((volumeStep > 0 && next >= targetVolume) ||
            (volumeStep < 0 && next <= targetVolume)) {
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
      const targetVol = isMuted ? 0 : 1;

      if (audio.paused) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      }

      setVolumeSmoothly(targetVol, 1000);
    });
