---
layout: splash
title:
permalink: /apprentissage/typescript/
classes: wide
---


<style>
  .project-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    margin: 60px auto;
    max-width: 1000px;
  }

  .project-text {
    font-size: 1.1em;
    line-height: 1.6;
  }

  .project-image img {
    width: 100%;
    border-radius: 10px;
  }

  .carousel-container {
    position: relative;
    width: 90%;
    max-width: 800px;
    margin: 60px auto;
    overflow: hidden;
  }

  .carousel-slide {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-slide img {
    width: 100%;
    flex-shrink: 0;
    border-radius: 10px;
  }

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #ffffffcc;
    border: none;
    font-size: 2rem;
    padding: 0 15px;
    cursor: pointer;
    z-index: 2;
    transition: background 0.3s;
  }

  .carousel-button:hover {
    background: #ffffff;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }
</style>



<div style="width: 80%; margin: 0 auto;">
<h1 style="text-align: center;margin-top: 30px;">Mini-jeux Typescript</h1>

<p style="text-align: center;">Présentation rapide de quelques exercices en langage TypeScript que j'ai menés en cours prenant la forme de mini-jeux très connus</p>


<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h3 style="text-align: center;margin-top: 30px;">Casse Briques</h3>

<div class="project-section">
  <div class="project-text">
    <h3>Description du jeu</h3>
    <p>Le jeu "Casse Briques" est une adaptation du classique où le joueur contrôle une raquette pour faire rebondir une balle et casser des briques. Ce projet m’a permis d’explorer la gestion des collisions, les événements clavier et la logique de mise à jour du canvas en TypeScript.</p>
  </div>
  <div class="project-image">
    <img src="/assets/images/typescript.png" alt="Capture d'écran du jeu Casse Briques">
  </div>
</div>


<div class="carousel-container">
  <button class="carousel-button prev" onclick="moveSlide(-1)">‹</button>
  <div class="carousel-slide" id="carousel-slide">
    <img src="/assets/images/cassebriques1.png" alt="Écran 1">
    <img src="/assets/images/cassebriques2.png" alt="Écran 2">
    <img src="/assets/images/cassebriques3.png" alt="Écran 3">
  </div>
  <button class="carousel-button next" onclick="moveSlide(1)">›</button>
</div>


<p>Présentation rapide de quelques exercices en langage TypeScript que j'ai menés en cours prenant la forme de mini-jeux très connus</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h3 style="text-align: center;margin-top: 30px;">Labyrinthe</h3>

<div class="project-section">
  <div class="project-text">
<p>Le jeu "Casse Briques" est une adaptation du classique où le joueur contrôle une raquette pour faire rebondir une balle et casser des briques. Ce projet m’a permis d’explorer la gestion des collisions, les événements clavier et la logique de mise à jour du canvas en TypeScript.</p>
  </div>
  <div class="project-image">
    <img src="/assets/images/typescript.png" alt="Capture d'écran du jeu Casse Briques">
  </div>
</div>


<div class="carousel-container">
  <button class="carousel-button prev" onclick="moveSlide(-1)">‹</button>
  <div class="carousel-slide" id="carousel-slide">
    <img src="/assets/images/labyrinthe1.png" alt="Écran 1">
    <img src="/assets/images/labyrinthe2.png" alt="Écran 2">
    <img src="/assets/images/labyrinthe3.png" alt="Écran 3">
  </div>
  <button class="carousel-button next" onclick="moveSlide(1)">›</button>
</div>


<p>Présentation rapide de quelques exercices en langage TypeScript que j'ai menés en cours prenant la forme de mini-jeux très connus</p>























<script>
  let currentIndex = 0;
  const slide = document.getElementById("carousel-slide");
  const images = slide.querySelectorAll("img");

  function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
</script>

<p>Ce mini-jeu fut une étape clé dans mon apprentissage de TypeScript. J’ai pu expérimenter des concepts essentiels de la programmation orientée objet, tout en m’amusant à créer une expérience utilisateur simple mais interactive.</p>
