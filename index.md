---
layout: splash
title:
permalink: /
classes: wide
---

<style>
  :root {
    --body-bg: #ffeeda;
    --navbar-bg: #fad6b0;
  }

  body {
    background-color: var(--body-bg);
    color: #000;
    transition: background-color 10s ease-in-out;
  }

  .masthead {
    background-color: var(--navbar-bg);
    transition: background-color 10s ease-in-out;
  }
</style>

<script>
  const phases = [
    { time: 0, body: '#ffeeda', navbar: '#fad6b0', text: 'Matin (fixe)' },
    { time: 20, body: '#f3f9ff', navbar: '#d0e8ff', text: 'Transition vers midi' },
    { time: 30, body: '#f3f9ff', navbar: '#a7d3f5', text: 'Midi (fixe)' },
    { time: 50, body: '#fde3cb', navbar: '#ffe1cc', text: 'Transition vers soir' },
    { time: 60, body: '#fde3cb', navbar: '#fbcbb5', text: 'Soir (fixe)' },
    { time: 80, body: '#e8eaf6', navbar: '#e1e6f4', text: 'Transition vers nuit' },
    { time: 90, body: '#e8eaf6', navbar: '#bfc6e0', text: 'Nuit (fixe)' },
    { time: 110, body: '#ffeeda', navbar: '#fad6b0', text: 'Transition vers matin' }
  ];

  const cycleDuration = 120000; // 2 minutes
  let cycleStart = Date.now();

  function updateColors() {
    const now = Date.now();
    const elapsed = (now - cycleStart) % cycleDuration;
    const currentSecond = Math.floor(elapsed / 1000);

    for (let i = phases.length - 1; i >= 0; i--) {
      if (currentSecond >= phases[i].time) {
        if (console.lastMessage !== phases[i].text) {
          console.log(phases[i].text);
          console.lastMessage = phases[i].text;
        }
        document.documentElement.style.setProperty('--body-bg', phases[i].body);
        document.documentElement.style.setProperty('--navbar-bg', phases[i].navbar);
        break;
      }
    }

    requestAnimationFrame(updateColors);
  }

  console.lastMessage = null;
  requestAnimationFrame(updateColors);
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
