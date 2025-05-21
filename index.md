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
    transition: background-color 5s ease-in-out;
  }

  .masthead {
    background-color: var(--navbar-bg);
    transition: background-color 5s ease-in-out;
  }
</style>

<script>
  const phases = [
    { start: 0, end: 19, body: '#ffeeda', navbar: '#fad6b0', text: 'Matin (fixe)' },
    { start: 20, end: 29, body: '#f3f9ff', navbar: '#d0e8ff', text: 'Transition vers midi' },
    { start: 30, end: 49, body: '#f3f9ff', navbar: '#a7d3f5', text: 'Midi (fixe)' },
    { start: 50, end: 59, body: '#fde3cb', navbar: '#ffe1cc', text: 'Transition vers soir' },
    { start: 60, end: 79, body: '#fde3cb', navbar: '#fbcbb5', text: 'Soir (fixe)' },
    { start: 80, end: 89, body: '#e8eaf6', navbar: '#e1e6f4', text: 'Transition vers nuit' },
    { start: 90, end: 109, body: '#e8eaf6', navbar: '#bfc6e0', text: 'Nuit (fixe)' },
    { start: 110, end: 119, body: '#ffeeda', navbar: '#fad6b0', text: 'Transition vers matin' }
  ];

  const cycleDuration = 120000; // 2 minutes
  let currentPhaseText = null;

  function updateTheme() {
    const now = Date.now();
    const elapsed = (now % cycleDuration) / 1000;
    const second = Math.floor(elapsed);

    for (const phase of phases) {
      if (second >= phase.start && second <= phase.end) {
        document.documentElement.style.setProperty('--body-bg', phase.body);
        document.documentElement.style.setProperty('--navbar-bg', phase.navbar);

        if (phase.text !== currentPhaseText) {
          console.log(phase.text);
          currentPhaseText = phase.text;
        }
        break;
      }
    }

    setTimeout(updateTheme, 10000); // change toutes les 10s pour assurer transition fluide
  }

  updateTheme();
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
