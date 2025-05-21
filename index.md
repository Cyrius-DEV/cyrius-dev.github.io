---
layout: splash
title:
permalink: /
classes: wide
---




<style>
  body {
  background-color: #FAF7E5;
  animation: colorCycle 120s ease-in-out;
}

.masthead {
  background-color: #cfe4fa;
  animation: colorCycle 120s ease-in-out;
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
