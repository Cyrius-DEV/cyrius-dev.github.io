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
