---
layout: splash
title:
permalink: /apprentissage/typescript/
classes: wide
---


<div style="width: 100%; margin: 0 auto;">
<h1 style="text-align: center;margin-top: 30px;font-size:2em;">Mini-jeux Typescript</h1>

<p style="text-align: center;">Présentation rapide de quelques exercices en langage TypeScript que j'ai menés en cours prenant la forme de mini-jeux très connus</p>
<div style="text-align: center; margin-top: 20px; margin-bottom: 40px;">
  <a href="#casse-briques" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Casse-Briques  ▼</button>
  </a>
  <a href="#labyrinthe" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">⬇ Labyrinthe</button>
  </a>
</div>



<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 id="casse-briques" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Casse-Briques</h1>

<div class="project-section">
  <div class="project-text">
    <p>Ce casse-briques est la première vraie application du langage Typescript que j'ai eu l'occasion de faire ; il s'agit d'une recréation du vieux jeu d'arcade, on contrôle ici la barre du bas avec la souris afin de projeter et faire rebondir la balle sur chacune des briques pour les détruire.</p>
  </div>
  <div class="carousel-container">
  <button class="carousel-button prev">‹</button>
  <div class="carousel-slide">
    <img src="/assets/images/cassebriques1.png" alt="Écran 1">
    <img src="/assets/images/cassebriques2.png" alt="Écran 2">
    <img src="/assets/images/cassebriques3.png" alt="Écran 3">
  </div>
  <button class="carousel-button next">›</button>
</div>
</div>
<br>

<div style="display: flex; justify-content: center; margin: 40px 0;">
  <iframe 
    src="/assets/jeux/CasseBriques/index.htm"
    width="700"
    height="500"
    style="border: 1px solid #ccc; border-radius: 10px;"
    title="Jeu Casse Briques"
    allowfullscreen>
  </iframe>
</div>


<p>Au cours de la réalisation de ce mini-jeu, j'ai pu découvrir le fonctionnement et l'organisation d'un projet en Typescript : comment créer une scène, où assigner les différents paramètres souhaités pour chacun des éléments du jeu, etc... <br><br>J'ai notamment passer pas mal de temps sur le comportement de la balle, en s'assurant d'un calcul des rebonds contre brique, mur et barre du bas aussi réalistes que possible, mais j'ai également pris l'initiative d'ajouter de quoi gérer le déroulement d'une partie, par exemple un compteur de briques détruites constamment mis à jour et un simple message de victoire/défaite permettant de redémarrer une partie.</p>
<br>
<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />





<h1 id="labyrinthe" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Labyrinthe</h1>
<div class="project-section">
  <div class="project-text">
<p>Recréation du célèbre jeu Pac-Man, ce mini-jeu prend place dans un labyrinthe dans lequel le joueur doit récolter les pastilles puis filer vers la sortie en prenant soin d'esquiver les fantômes qui y rôdent.</p>
  </div>
  <div class="carousel-container">
  <button class="carousel-button prev">‹</button>
  <div class="carousel-slide">
    <img src="/assets/images/newlabyrinthe1.png" alt="Écran 1">
    <img src="/assets/images/newlabyrinthe2.png" alt="Écran 2">
    <img src="/assets/images/newlabyrinthe3.png" alt="Écran 3">
  </div>
  <button class="carousel-button next">›</button>
</div>
</div>
<br>


<div style="display: flex; justify-content: center; margin: 40px 0;">
  <iframe 
    src="/assets/jeux/Labyrinthe/index.htm"
    width="700"
    height="500"
    style="border: 1px solid #ccc; border-radius: 10px;"
    title="Jeu Labyrinthe"
    allowfullscreen>
  </iframe>
</div>

<p>Dans le code, le labyrinthe prend en réalité la forme d'une matrice en 10x10 de chiffres qui sera mise à jour au cours de la partie (1=mur, 2=pastille, 8=joueur, 9=arrivée, 10=fantôme), et qui servira de modèle à la construction du labyrinthe au début de chaque partie. Ce fonctionnement pourrait permettre un lien avec une base de données pour proposer différents niveaux de difficultés par exemple.<br><br>Les fantômes ont un comportement à la fois prévisible mais parfois surprenant, ceux-ci peuvent décider de se déplacer en direction du joueur ou dans une direction aléatoire. Le joueur lui peut se déplacer sur une case libre et manger la pastille qui peut s'y trouver mais meurt s'il touche une case occupée par un fantôme et reste immobile s'il se essaie de traverser un mur.<br><br>Si le joueur entre en collision avec un fantôme ou atteins la fin sans toutes les pastilles, c'est perdu ! S'il parvient à toutes les récupérer et foncer à l'arrivée, c'est gagner ! J'ai réutilisé le fonctionnement de gestion de partie du projet précédent pour annoncer le résultat et recommencer une partie facilement.</p>







<script src="/javascript/carouselButtons.js"></script>
