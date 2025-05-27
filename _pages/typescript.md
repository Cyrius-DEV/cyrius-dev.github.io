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
<h1 style="text-align: center;margin-top: 30px;font-size:1.5em;">Mini-jeux Typescript</h1>

<p style="text-align: center;">Présentation rapide de quelques exercices en langage TypeScript que j'ai menés en cours prenant la forme de mini-jeux très connus</p>


<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 style="text-align: center;margin-top: 30px; text-decoration:underline;">Casse Briques</h1>

<div class="project-section">
  <div class="project-text">
    <p>Ce casse-briques est la première vraie application du langage Typescript que j'ai eu l'occasion de faire ; il s'agit d'une recréation du vieux jeu d'arcade, on contrôle ici la barre du bas avec la souris afin de projeter et faire rebondir la balle sur chacune des briques pour les détruire.</p>
  </div>
  <div class="project-image">
    <img src="/assets/images/typescript.png" alt="Capture d'écran du jeu Casse Briques">
  </div>
</div>
<br>

<div class="carousel-container">
  <button class="carousel-button prev">‹</button>
  <div class="carousel-slide">
    <img src="/assets/images/cassebriques1.png" alt="Écran 1">
    <img src="/assets/images/cassebriques2.png" alt="Écran 2">
    <img src="/assets/images/cassebriques3.png" alt="Écran 3">
  </div>
  <button class="carousel-button next">›</button>
</div>


<p>Au cours de la réalisation de ce mini-jeu, j'ai pu découvrir le fonctionnement et l'organisation d'un projet en Typescript : comment créer une scène, où assigner les différents paramètres souhaités pour chacun des éléments du jeu, etc... <br><br>J'ai notamment passer pas mal de temps sur le comportement de la balle, en s'assurant d'un calcul des rebonds contre brique, mur et barre du bas aussi réalistes que possible, mais j'ai également pris l'initiative d'ajouter de quoi gérer le déroulement d'une partie, par exemple un compteur de briques détruites constamment mis à jour et un simple message de victoire/défaite permettant de redémarrer une partie.</p>
<br>
<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />





<h1 style="text-align: center;margin-top: 30px; text-decoration:underline;">Labyrinthe</h1>
<div class="project-section">
  <div class="project-text">
<p>Le jeu "Casse Briques" est une adaptation du classique où le joueur contrôle une raquette pour faire rebondir une balle et casser des briques. Ce projet m’a permis d’explorer la gestion des collisions, les événements clavier et la logique de mise à jour du canvas en TypeScript.</p>
  </div>
  <div class="project-image">
    <img src="/assets/images/typescript.png" alt="Capture d'écran du jeu Casse Briques">
  </div>
</div>
<br>

<div class="carousel-container">
  <button class="carousel-button prev">‹</button>
  <div class="carousel-slide">
    <img src="/assets/images/newlabyrinthe1.png" alt="Écran 1">
    <img src="/assets/images/newlabyrinthe2.png" alt="Écran 2">
    <img src="/assets/images/newlabyrinthe3.png" alt="Écran 3">
  </div>
  <button class="carousel-button next">›</button>
</div>


<p>Présentation rapide de quelques exercices en langage TypeScript que j'ai menés en cours prenant la forme de mini-jeux très connus</p>







<script src="/javascript/carouselButtons.js"></script>
