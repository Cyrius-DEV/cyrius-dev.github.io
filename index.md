---
layout: splash
title:
permalink: /
classes: wide
---

<style>
  body {
    margin: 0;
    color: #000;
    position: relative;
    z-index: 0;
  }

  body::before,
  body::after {
    content: '';
    position: fixed;
    inset: 0;
    z-index: -1;
    transition: opacity 6s ease-in-out;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  body::before {
    opacity: 1;
  }

  body::after {
    opacity: 0;
  }

  .masthead {
    background: linear-gradient(to right, #fad6b0, #ffeeda);
    transition: background 6s ease-in-out;
  }
</style>


<script>
  const phases = [
    {
      start: 0, end: 19,
      body: 'linear-gradient(to bottom, #ffeeda, #fad6b0)',
      navbar: 'linear-gradient(to right, #fad6b0, #ffeeda)',
      text: 'Matin (fixe)'
    },
    {
      start: 20, end: 29,
      body: 'linear-gradient(to bottom, #f3f9ff, #d0e8ff)',
      navbar: 'linear-gradient(to right, #d0e8ff, #f3f9ff)',
      text: 'Transition vers midi'
    },
    {
      start: 30, end: 49,
      body: 'linear-gradient(to bottom, #f3f9ff, #a7d3f5)',
      navbar: 'linear-gradient(to right, #a7d3f5, #f3f9ff)',
      text: 'Midi (fixe)'
    },
    {
      start: 50, end: 59,
      body: 'linear-gradient(to bottom, #fde3cb, #ffe1cc)',
      navbar: 'linear-gradient(to right, #ffe1cc, #fde3cb)',
      text: 'Transition vers soir'
    },
    {
      start: 60, end: 79,
      body: 'linear-gradient(to bottom, #fde3cb, #fbcbb5)',
      navbar: 'linear-gradient(to right, #fbcbb5, #fde3cb)',
      text: 'Soir (fixe)'
    },
    {
      start: 80, end: 89,
      body: 'linear-gradient(to bottom, #e8eaf6, #e1e6f4)',
      navbar: 'linear-gradient(to right, #e1e6f4, #e8eaf6)',
      text: 'Transition vers nuit'
    },
    {
      start: 90, end: 109,
      body: 'linear-gradient(to bottom, #e8eaf6, #bfc6e0)',
      navbar: 'linear-gradient(to right, #bfc6e0, #e8eaf6)',
      text: 'Nuit (fixe)'
    },
    {
      start: 110, end: 119,
      body: 'linear-gradient(to bottom, #ffeeda, #fad6b0)',
      navbar: 'linear-gradient(to right, #fad6b0, #ffeeda)',
      text: 'Transition vers matin'
    }
  ];

  const cycleDuration = 120000; // 2 min
  let currentPhaseText = null;
  let isBeforeActive = true;

  function updateTheme() {
    const now = Date.now();
    const elapsed = (now % cycleDuration) / 1000;
    const second = Math.floor(elapsed);

    for (const phase of phases) {
      if (second >= phase.start && second <= phase.end) {
        const before = document.body.querySelector('::before');
        const after = document.body.querySelector('::after');

        const b = document.body;
        const styleBefore = b.style.getPropertyValue('--current-before');
        const styleAfter = b.style.getPropertyValue('--current-after');

        const nextLayer = isBeforeActive ? b::after : b::before;
        nextLayer.style.backgroundImage = phase.body;

        document.querySelector('.masthead').style.background = phase.navbar;

        if (isBeforeActive) {
          b.style.setProperty('--current-before', phase.body);
          document.body.style.setProperty('--current-before', phase.body);
          document.body.style.setProperty('--current-after', styleBefore);
        } else {
          b.style.setProperty('--current-after', phase.body);
          document.body.style.setProperty('--current-after', phase.body);
          document.body.style.setProperty('--current-before', styleAfter);
        }

        b.querySelector('body::before').style.opacity = isBeforeActive ? 0 : 1;
        b.querySelector('body::after').style.opacity = isBeforeActive ? 1 : 0;
        isBeforeActive = !isBeforeActive;

        if (phase.text !== currentPhaseText) {
          console.log(phase.text);
          currentPhaseText = phase.text;
        }

        break;
      }
    }

    setTimeout(updateTheme, 10000);
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
