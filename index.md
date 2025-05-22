---
layout: splash
title:
permalink: /
classes: wide
---


<script defer>
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector('.masthead');
  if (!navbar){
    console.log("oopsie");
    return;
  }

  // Créer le soleil
  const sun = document.createElement('div');
  sun.className = 'sun';

  // Créer les étoiles
  const stars = document.createElement('div');
  stars.className = 'stars';

  // Ajouter les éléments dans la navbar
  navbar.appendChild(sun);
  navbar.appendChild(stars);
});
</script>


<style>
@import "minimal-mistakes"; // garde les styles du thème

a:visited {
  color: inherit;
}



.masthead__inner-wrap {
  background-color: transparent; /* supprime le blanc qui masque le fond */
}

#site-nav{
  background-color: transparent;
}


/* Pour la version sticky (fixée en haut) si utilisée */
.masthead--fixed {
  background-color: #e6f0fa;
}

body {
  background-color: #FAF7E5;
  animation: bodyCycle 120s ease-in-out infinite;
}

.masthead {
  background-color: #cfe4fa;
  animation: colorCycle 120s ease-in-out infinite;
  overflow: hidden;
  position:relative;
}


.sun {
  position: absolute;
  border: 2px solid orange;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, #FFD700, #FFA500);
  bottom: -20px;
  left: 0;
  z-index: 2;
  animation: sunPath 120s ease-in-out infinite;

}

/* Étoiles */
.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  animation: starsFade 120s ease-in-out infinite;
}

.stars::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  box-shadow:
    5vw 10vh white, 15vw 5vh white, 25vw 15vh white, 35vw 20vh white, 45vw 7vh white,
    55vw 12vh white, 65vw 3vh white, 75vw 18vh white, 85vw 6vh white, 95vw 10vh white,
    2vw 22vh white, 12vw 30vh white, 22vw 28vh white, 32vw 24vh white, 42vw 26vh white,
    52vw 29vh white, 62vw 31vh white, 72vw 23vh white, 82vw 27vh white, 92vw 25vh white,
    10vw 12vh white, 20vw 5vh white, 30vw 10vh white, 40vw 6vh white, 50vw 15vh white,
    60vw 4vh white, 70vw 11vh white, 80vw 2vh white, 90vw 9vh white, 98vw 3vh white,
    8vw 18vh white, 18vw 14vh white, 28vw 17vh white, 38vw 13vh white, 48vw 19vh white,
    58vw 16vh white, 68vw 20vh white, 78vw 21vh white, 88vw 22vh white, 96vw 12vh white,
    4vw 8vh white, 14vw 9vh white, 24vw 7vh white, 34vw 6vh white, 44vw 5vh white,
    54vw 4vh white, 64vw 3vh white, 74vw 2vh white, 84vw 1vh white, 94vw 0vh white;
  animation: twinkle 3s infinite ease-in-out alternate;
  opacity: 0;
}


@keyframes colorCycle {
  0%     { background-color: #cfe4fa; }   /* Couleur 1 */
  16.66% { background-color: #cfe4fa; }   /* 20s */

  25%    { background-color: #a7d3f5; }   /* Transition → Couleur 2 */

  41.66% { background-color: #a7d3f5; }   /* 20s */

  50%    { background-color: #fbcbb5; }   /* Transition → Couleur 3 */

  66.66% { background-color: #fbcbb5; }   /* 20s */

  75%    { background-color: #bfc6e0; }   /* Transition → Couleur 4 */

  91.66% { background-color: #bfc6e0; }   /* 20s */

  100%   { background-color: #cfe4fa; }   /* Transition → Couleur 1 */
}


@keyframes bodyCycle {
  0%     { background-color: #FAF7E5; }   /* Couleur 1 */
  16.66% { background-color: #FAF7E5; }   /* 20s */

  25%    { background-color: #FAFAFA; }   /* Transition → Couleur 2 */

  41.66% { background-color: #FAFAFA; }   /* 20s */

  50%    { background-color: #FBEFDA; }   /* Transition → Couleur 3 */

  66.66% { background-color: #FBEFDA; }   /* 20s */

  75%    { background-color: #D5D6E0; }   /* Transition → Couleur 4 */

  91.66% { background-color: #D5D6E0; }   /* 20s */

  100%   { background-color: #FAF7E5; }   /* Transition → Couleur 1 */
}


@keyframes sunPath {
  0% {   /* Couleur 1 */
    transform: translateX(0%) translateY(0px);
    opacity: 1;
  }
  16.66% {   /* 20s */
    transform: translateX(17vw) translateY(-20px);
  }
  33.33% {
    transform: translateX(50vw) translateY(-60px);
  }

  50% {
    transform: translateX(83vw) translateY(-10px);
  }
  75% {
    transform: translateX(100vw) translateY(20px);
  }
  91.66% {
    transform: translateX(-20px) translateY(20px);
  }
  100% {
    transform: translateX(0%) translateY(0px);
  }
}


@keyframes twinkle {
  0%   { opacity: 0.3; }
  50%  { opacity: 1; }
  100% { opacity: 0.5; }
}


@keyframes starsFade {
  0%, 74.99% {
    opacity: 0;
  }
  75% {
    opacity: 0.6;
  }
  91.66% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}

  </style>

<script>
  const messages = [
    { time: 0, text: 'Matin (fixe)' },
    { time: 20, text: 'Transition vers midi' },
    { time: 30, text: 'Midi (fixe)' },
    { time: 50, text: 'Transition vers soir' },
    { time: 60, text: 'Soir (fixe)' },
    { time: 80, text: 'Transition vers nuit' },
    { time: 90, text: 'Nuit (fixe)' },
    { time: 110, text: 'Transition vers matin' }
  ];

  const cycleDuration = 120000; // en millisecondes
  let cycleStart = Date.now();

  function checkCycle() {
    const now = Date.now();
    const elapsed = (now - cycleStart) % cycleDuration;
    const currentSecond = Math.floor(elapsed / 1000);

    for (let i = messages.length - 1; i >= 0; i--) {
      if (currentSecond >= messages[i].time) {
        if (console.lastMessage !== messages[i].text) {
          console.log(messages[i].text);
          console.lastMessage = messages[i].text;
        }
        break;
      }
    }

    requestAnimationFrame(checkCycle);
  }

  console.lastMessage = null;
  requestAnimationFrame(checkCycle);
</script>

<div style="width: 80%; margin: 0 auto;">
<h1 style="text-align: center;margin-top: 30px;">Présentation</h1>

<p style="text-align: center;">Bienvenue sur mon portfolio ! Ici vous trouverez toutes les réalisations et les projets que j'ai mené à bien durant mes études et plus encore !</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 80px auto; width: 90%;" />



Agé de 24 ans, je suis une personne passionnée au contact agréable. Je sais faire preuve de débrouillardise, mais aussi d'une certaine curiosité et appétence intellectuelle qui me pousse à constamment améliorer mes connaissances et ma maîtrise de l'outil informatique, et c'est pourquoi j'ai choisi de m'orienter vers un BUT Métiers du Multimédia et de l'Internet.
<br><br>
En tant que grand fan de jeux vidéos et me sentant à l'aise avec l'outil informatique, j'ai tout de suite résonné avec le domaine du dev web / jeu vidéo, où les exercices et projets de mes cours m'ont permis de tirer au mieux parti de ma créativité afin imaginer des solutions toujours plus inventives, tout en m'inculquant une certaine rigueur d'organisation nécessaire durant les projets les plus longs.
<br><br>
C'est donc dans les domaines du développement web, de la gestion de base de données et du game developpement que je souhaite évoluer professionnellement prochainement.

<hr style="border: none; border-top: 1px solid #ccc; margin: 80px 0;" />


<p style="text-align: center;">Vous pouvez accéder à mon CV papier en cliquant sur le bouton ci-dessous :</p>

<div style="text-align: center; margin: 20px 0;">
  <a href="https://drive.google.com/file/d/16zprORJaqxq_jjnTv4QYIByI-LzX50jY/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="btn" style="padding: 10px 20px; background-color: #007acc; color: white; text-decoration: none; border-radius: 5px;">
    Accéder au CV papier
  </a>
</div>

<p style="text-align: center;margin-top: 60px;">Et voici un CV vidéo réalisé dans le cadre de mes études :</p>

<div style="text-align: center; margin-top: 20px;">
  <iframe width="1536" height="824" src="https://www.youtube.com/embed/ID_DE_LA_VIDEO" 
    title="CV Vidéo" frameborder="0" allowfullscreen></iframe>
</div>
</div>
