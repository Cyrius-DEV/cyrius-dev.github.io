---
layout: splash
title:
permalink: /
classes: wide
---


<script>
document.addEventListener("DOMContentLoaded", function () {
  const masthead = document.querySelector(".masthead");
  if (!masthead) return;
/*
  // ☁️ Conteneur des nuages
  const cloudsContainer = document.createElement("div");
  cloudsContainer.className = "clouds-container";








  
  const cloudTypes = ['cloud-1', 'cloud-2', 'cloud-3', 'cloud-4', 'cloud-5'];


for (let i = 0; i < 10; i++) {
  const cloud = document.createElement('div');
  const type = cloudTypes[Math.floor(Math.random() * cloudTypes.length)];
cloud.classList.add('cloud', type);

  cloud.style.top = `${Math.random() * 50 + 10}%`;
  cloud.style.animationDuration = `${40 + Math.random() * 30}s`;
  cloud.style.animationDelay = `${Math.random() * 60}s`;
  cloud.style.transform = `scale(${0.8 + Math.random() * 0.6})`;
cloud.style.opacity = `${0.6 + Math.random() * 0.4}`;

  cloudsContainer.appendChild(cloud);
}


  masthead.appendChild(cloudsContainer);
*/




const cloudTypes = ['cloud-1', 'cloud-2', 'cloud-3', 'cloud-4', 'cloud-5'];
const cloudContainer = document.createElement('div');
cloudContainer.className = "clouds-container";
masthead.appendChild(cloudContainer);

const cloudCount = 15;
const clouds = [];

function animateCloud(cloudObj) {
  const { el } = cloudObj;

  const duration = 40 + Math.random() * 30;
  const scale = 0.8 + Math.random() * 0.6;
  const top = Math.random() * 50 + 10;

  // Réinitialisation propre de l'animation
  el.style.animation = 'none';
  el.offsetHeight; // forcer un reflow

  el.style.left = `-150px`;
  el.style.top = `${top}%`;
  el.style.transform = `scale(${scale})`;
  el.style.animation = `floatCloud ${duration}s linear forwards`;

  
  // Supprimer l’ancien écouteur s’il existe pour éviter les doublons
  el.onanimationend = () => {
    const currentLeft = el.getBoundingClientRect().left;
    console.log("currentLeft= "+currentLeft+"  window.innerWidth = "+window.innerWidth);
if(currentLeft > window.innerWidth){
    const delay = Math.random() * 3000;
    setTimeout(() => animateCloud(cloudObj), delay);
}
  };

}

// Création et lancement des nuages
for (let i = 0; i < cloudCount; i++) {
  const el = document.createElement('div');
  el.classList.add('cloud');
  const type = cloudTypes[Math.floor(Math.random() * cloudTypes.length)];
  el.classList.add(type);
  cloudContainer.appendChild(el);

  const cloudObj = { el };
  clouds.push(cloudObj);

  // Démarrage initial différé
  setTimeout(() => animateCloud(cloudObj), Math.random() * 50000);

  
  
  // Redémarrage complet toutes les 120s (couleur 1)
setInterval(() => {
  clouds.forEach((cloudObj, index) => {
    const { el } = cloudObj;
    // Stop animation immédiatement
    el.style.animation = 'none';
    el.style.left='-150px';
    el.offsetHeight; // force reflow

    // Redémarre comme au début avec un délai aléatoire
    setTimeout(() => animateCloud(cloudObj), Math.random() * 50000);
  });
}, 120000); // 120s = 2 minutes

}




  

  
  // Crée le conteneur des étoiles
  const starsContainer = document.createElement("div");
  starsContainer.className = "stars-container";

  const sun = document.createElement("div");
  sun.className = "sun";

  // Crée 75 étoiles avec styles aléatoires
  for (let i = 0; i < 75; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Position aléatoire (en % pour responsivité)
    const top = Math.random() * 100;
    const left = Math.random() * 100;

    // Durée et délai d'animation aléatoires
    const floatDuration = 5 + Math.random() * 5; // 5s à 10s
    const delay = Math.random() * 5;

    // Choisir une animation parmi 3
    const floatAnimation = `float${(i % 3) + 1}`;

    // Applique styles en ligne
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.animation = `
      twinkle ${3 + Math.random() * 2}s ease-in-out ${delay}s infinite alternate,
      ${floatAnimation} ${floatDuration}s ease-in-out ${delay}s infinite
    `;

    starsContainer.appendChild(star);
  }

  masthead.appendChild(starsContainer);
  masthead.appendChild(sun);
});
</script>



<style>
@import "minimal-mistakes"; // garde les styles du thème

a:visited {
  color: inherit;
}



.masthead__inner-wrap {
  background-color: transparent; /* supprime le blanc qui masque le fond */
  position: relative;
  z-index: 5;
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
  z-index: 3;
  animation: sunPath 120s ease-in-out infinite;

}

/* Étoiles */
.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  animation: starsFade 120s ease-in-out infinite;
  overflow: hidden;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  opacity: 0.6;
}

/* Apparition pendant la nuit */
@keyframes starsFade {
  0%, 66% {
    opacity: 0;
  }
  66.66% {
    opacity: 0.3;
  }
  75%, 91.66% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}

/* Scintillement */
@keyframes twinkle {
  0%   { opacity: 0.3; }
  50%  { opacity: 1; }
  100% { opacity: 0.5; }
}

/* Flottement doux aléatoire */
@keyframes float1 {
  0%   { transform: translate(0px, 0px); }
  50%  { transform: translate(2px, -1px); }
  100% { transform: translate(0px, 0px); }
}

@keyframes float2 {
  0%   { transform: translate(0px, 0px); }
  50%  { transform: translate(-1px, 2px); }
  100% { transform: translate(0px, 0px); }
}

@keyframes float3 {
  0%   { transform: translate(0px, 0px); }
  50%  { transform: translate(1px, 1px); }
  100% { transform: translate(0px, 0px); }
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
    transform: translateX(-40px) translateY(20px);
  }
  100% {
    transform: translateX(0%) translateY(0px);
  }
}








/*
.cloud {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  top: 0;
  left: -150px; 
  opacity: 0.6;
  box-shadow:
    15px 0px 0px 5px #fff,
    30px 0px 0px 5px #fff,
    10px -8px 0px 4px #fff,
    25px -6px 0px 4px #fff,
    20px 6px 0px 3px #fff;
  width: 30px;
  height: 20px;
  animation: floatCloud 60s linear infinite;
}
*/


  /* 🌥️ Nuage 1 — compact, équilibré */
.cloud-1 {
  width: 50px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    12px -4px 0 4px #fff,
    22px 0px 0 5px #fff,
    35px -3px 0 4px #fff,
    20px 4px 0 3px #fff;
}

/* 🌤️ Nuage 2 — plus petit et arrondi */
.cloud-2 {
  width: 40px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    10px -3px 0 4px #fff,
    18px 1px 0 3px #fff,
    24px -2px 0 3px #fff;
}

/* 🌩️ Nuage 3 — plus étalé horizontalement */
.cloud-3 {
  width: 60px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    15px -2px 0 4px #fff,
    30px 2px 0 5px #fff,
    45px -3px 0 4px #fff;
}

/* 🌫️ Nuage 4 — bas et long */
.cloud-4 {
  width: 55px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    10px 0px 0 3px #fff,
    20px -2px 0 3px #fff,
    30px 1px 0 3px #fff,
    40px 0px 0 2px #fff;
}

/* 🌧️ Nuage 5 — rond, dense et peu large */
.cloud-5 {
  width: 35px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  box-shadow:
    8px -2px 0 3px #fff,
    16px 0px 0 3px #fff,
    12px 3px 0 2px #fff;
}


/* Animation commune */
.cloud {
  position: absolute;
  opacity: 0;
  animation-name: floatCloud;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  top: 0;
  left: -150px;
}


  
/* Nuages visibles uniquement pendant la journée */
.clouds-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
  opacity: 1;
  animation: cloudFade 120s ease-in-out infinite;
}

/* Animation des nuages */
@keyframes floatCloud {
  0% {
    transform: translateX(0);
  }
  5% {
  }
  95% {
  }
  100% {
    transform: translateX(150vw); /* Traverse tout l’écran */
  }
}

/* Apparition progressive pendant le jour uniquement */
@keyframes cloudFade {

  
  
  0% { 
    opacity:0.7;
  }
  16.66% {
    opacity:1;
  }
  33.33% {
    opacity:1;
  }

  50% {
    opacity:0.3;
  }
  66.66% {
    opacity:0.3;
  }
  75% {
    opacity:0;
  }
  91.66% {
    opacity:0;
  }
  100% {
    opacity:0;
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
