---
layout: splash
title:
permalink: /apprentissage/java/
classes: wide
---


<div style="width: 100%; margin: 0 auto;">
<h1 style="text-align: center;margin-top: 30px;font-size:2em;">Mini-exos Java</h1>

<p style="text-align: center;">Présentation rapide de quelques exercices en langage Java que j'ai menés en cours prenant la forme d'applications mobiles basiques</p>

<div style="text-align: center; margin-top: 20px; margin-bottom: 40px;">
  <a href="#calculatrice" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Calculatrice  ▼</button>
  </a>
  <a href="#dessin" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Dessin  ▼</button>
  </a>
</div>



<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 id="calculatrice" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Calculatrice</h1>

<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-glace">
    <p>Ce casse-briques est la première vraie application du langage Typescript que j'ai eu l'occasion de faire ; il s'agit d'une recréation d'un vieux jeu type arcade, on contrôle ici la barre du bas avec la souris afin de projeter et faire rebondir la balle sur chacune des briques pour les détruire.</p>
    </div>
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

<div class="paragraph-box-glace">
<p>Au cours de la réalisation de ce mini-jeu, j'ai pu découvrir le fonctionnement et l'organisation d'un projet en Typescript : comment créer une scène, où assigner les différents paramètres souhaités pour chacun des éléments du jeu, etc... <br><br>J'ai notamment passé pas mal de temps sur le comportement de la balle, à la recherche d'un calcul des rebonds contre briques, murs et barre du bas aussi réaliste que possible. J'ai également pris l'initiative d'ajouter de quoi gérer le déroulement d'une partie, par exemple un compteur de briques détruites constamment mis à jour et un simple message de victoire/défaite permettant de redémarrer une partie.</p>
</div>
<br>
<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />





<h1 id="dessin" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Dessin</h1>
<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-rustique">
<p>S'apparentant à un Paint sur mobile, cette application permet à l'utilisateur de dessiner avec son doigt (ou en l'occurence ici la souris pour les tests sur PC) tout en offrant des choix de personnalisation pour la couleur et forme de son tracé.</p>
    </div>
    </div>
  <div class="carousel-container">
  <button class="carousel-button prev">‹</button>
  <div class="carousel-slide">
    <img src="/assets/images/dessin1.png" alt="Écran 1">
    <img src="/assets/images/dessin2.png" alt="Écran 2">
    <img src="/assets/images/dessin3.png" alt="Écran 3">
  </div>
  <button class="carousel-button next">›</button>
</div>
</div>
<br>



  <p style="text-align: center; margin-top: 1em;">
    <a href="https://appetize.io/app/b_omk4fpnh3uh4og4vv5frkmyroi" target="_blank" 
       style="padding: 0.75em 1.5em; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px;">
       Lancer une démo sur Android
    </a>
  </p><br>

<div class="paragraph-box-rustique">
<p>Dans le code, le labyrinthe prend en réalité la forme d'une matrice en 10x10 de chiffres qui sera mise à jour au cours de la partie (1=mur, 2=pastille, 8=joueur, 9=arrivée, 10=fantôme), et qui servira de modèle à la construction du labyrinthe au début de chaque partie. Ce fonctionnement pourrait permettre un lien avec une base de données pour proposer différents niveaux de difficulté par exemple.<br><br>Les fantômes ont un comportement à la fois prévisible mais aussi parfois surprenant ; ceux-ci peuvent décider de se déplacer en direction du joueur ou dans une direction aléatoire. Le joueur lui peut se déplacer sur une case libre et manger la pastille qui peut s'y trouver mais meurt s'il touche une case occupée par un fantôme et reste immobile s'il essaie de traverser un mur.<br><br>Si le joueur entre en collision avec un fantôme ou atteint la fin sans toutes les pastilles, c'est perdu ! S'il parvient à toutes les récupérer et foncer à l'arrivée, c'est gagné ! J'ai réutilisé le fonctionnement de gestion de partie du projet précédent pour annoncer le résultat et recommencer une partie facilement.</p>
</div>






<script src="/javascript/carouselButtons.js"></script>
