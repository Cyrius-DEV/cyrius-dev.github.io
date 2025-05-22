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
    5vw 10vh white, 12vw 5vh white, 18vw 30vh white, 25vw 15vh white, 32vw 9vh white,
    38vw 17vh white, 45vw 6vh white, 52vw 20vh white, 60vw 10vh white, 67vw 14vh white,
    72vw 22vh white, 78vw 18vh white, 84vw 8vh white, 90vw 11vh white, 96vw 5vh white,
    3vw 12vh white, 10vw 25vh white, 15vw 8vh white, 22vw 13vh white, 28vw 3vh white,
    35vw 28vh white, 40vw 19vh white, 46vw 12vh white, 53vw 4vh white, 59vw 27vh white,
    65vw 16vh white, 70vw 21vh white, 76vw 2vh white, 82vw 30vh white, 88vw 26vh white,
    94vw 9vh white, 6vw 6vh white, 13vw 11vh white, 19vw 20vh white, 26vw 7vh white,
    33vw 23vh white, 39vw 13vh white, 44vw 30vh white, 50vw 18vh white, 56vw 9vh white,
    61vw 6vh white, 68vw 29vh white, 73vw 12vh white, 80vw 5vh white, 86vw 16vh white,
    91vw 19vh white, 97vw 3vh white, 2vw 28vh white, 9vw 1vh white, 16vw 14vh white,
    21vw 26vh white, 27vw 12vh white, 34vw 8vh white, 41vw 24vh white, 47vw 10vh white,
    54vw 5vh white, 58vw 17vh white, 63vw 11vh white, 69vw 4vh white, 75vw 15vh white,
    81vw 9vh white, 87vw 13vh white, 93vw 6vh white, 99vw 2vh white, 7vw 19vh white,
    14vw 22vh white, 20vw 27vh white, 31vw 1vh white, 36vw 16vh white, 43vw 3vh white,
    48vw 21vh white, 55vw 30vh white, 62vw 23vh white, 66vw 13vh white;
  animation:
    starsFade 120s ease-in-out infinite,
    twinkle 3s ease-in-out infinite alternate,
    floatStars 10s ease-in-out infinite alternate;
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

@keyframes floatStars {
  0%   { transform: translate(0px, 0px); }
  25%  { transform: translate(1px, -1px); }
  50%  { transform: translate(0px, 1px); }
  75%  { transform: translate(-1px, 0px); }
  100% { transform: translate(0px, 0px); }
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
    opacity: 0.8;
  }
  91.66% {
    opacity: 0.9;
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
