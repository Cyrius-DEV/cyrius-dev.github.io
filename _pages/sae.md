---
layout: splash
title:
permalink: /devweb/sae/
classes: wide
---


<div style="width: 100%; margin: 0 auto;">
<h1 style="text-align: center;margin-top: 30px;font-size:2em;">Exercices faits en cours</h1>

<p style="text-align: center;">Présentation rapide de quelques exercices sur Unity que j'ai menés en cours prenant la forme de mini-jeux à compléter par nous-même pour approfondir nos connaissances</p>
<div style="text-align: center; margin-top: 20px; margin-bottom: 40px;">
  <a href="#learning" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Learning Space  ▼</button>
  </a>
  <a href="#memory" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Memory Leak  ▼</button>
  </a>
  <a href="#scrabble" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Scrabble  ▼</button>
  </a>
</div>



<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 id="simon" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Learning Space</h1>

<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-charbon">
<p>Une version personnalisée de Simon Says avec sons maison, effets lumineux et système de score.</p>
    </div>
    </div>
  <div class="carousel-container">
  <button class="carousel-button prev">‹</button>
  <div class="carousel-slide">
    <img src="/assets/images/calculatrice1.png" alt="Écran 1">
    <img src="/assets/images/calculatrice2.png" alt="Écran 2">
    <img src="/assets/images/calculatrice3.png" alt="Écran 3">
  </div>
  <button class="carousel-button next">›</button>
</div>
</div>
<br>


<div class="paragraph-box-charbon">
<p>Sur la base d’un Simon Says basique, j’ai ajouté plusieurs éléments pour en faire un vrai mini-jeu interactif. J’ai intégré des sons enregistrés moi-même, utilisé la manipulation de materials lumineux pour signaler les combinaisons jouées, les erreurs et les succès, et j’ai mis en place un système de vies ainsi qu’un score dynamique affiché à l’écran afin de mieux encadrer l'expérience de joueur et rendre les élément sdu jeu plus cohérents entre eux.
</p>
  <p>Ce projet m’a permis de travailler sur la réactivité d’une interface de jeu, la gestion des états, les feedbacks visuels et sonores, et l’amélioration de l’expérience utilisateur globale. C'était le premier exercice de ce genre, sans consignes précises autre que "finir le jeu", il m'a laissé libre de réfléchir à ce qui me paraissait le plus pertinent comme ajout, et libre de les mettre en place comme je le veux.
    
  </p>
</div>

<br>
<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />





<h1 id="vague" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Memory Leak</h1>
<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-fantasy">
<p>Une étude technique sur la propagation de vagues simulée via 3 méthodes pour en comparer les résultats : les Coroutines, les Tasks et les IJobs.</p>
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



  

<div class="paragraph-box-fantasy">
<p>Ce projet nous a permis de comparer trois approches différentes d’exécution de code asynchrone ou parallèle dans Unity : Coroutine, Task, et IJob. L’objectif était de simuler une propagation de vague en réponse à un clic de souris sur une surface d’eau, puis d’observer les différences de performances entre chaque méthode.
</p>
  <p>Cette expérimentation m’a permis de comprendre les avantages et limites de chaque système : simplicité des coroutines mais tout reste bloqué sur le thread principal et mal adaptées sur du calcul lourd, efficacité relative des tasks moins intégrées au cycle de vie Unity qu’une coroutine mais permettent des traitements lourds sans bloquer la frame, et puissance brute des jobs dans des scénarios fortement parallélisables mais plus spécialisés sur un code orienté "donnée" plutôt que "objet".
  </p>
</div>


<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 id="monstre" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Scrabble en ligne</h1>

<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-rustique">
<p>Découverte de l'Inverse Kinematic à travers un prototype d’animation procédurale où le placement des 4 pattes d'un monstre s’adapte indépendamment et dynamiquement au terrain qui l'entoure</p>
    </div>
    </div>
  <div class="carousel-container">
  <button class="carousel-button prev">‹</button>
  <div class="carousel-slide">
    <img src="/assets/images/calculatrice1.png" alt="Écran 1">
    <img src="/assets/images/calculatrice2.png" alt="Écran 2">
    <img src="/assets/images/calculatrice3.png" alt="Écran 3">
  </div>
  <button class="carousel-button next">›</button>
</div>
</div>
<br>


<div class="paragraph-box-rustique">
<p>Avec un modèle quadrupède et une armature déjà en place, j’ai conçu un système de déplacement basé sur l’Inverse Kinematics. L’objectif était de calculer en temps réel la position idéale de chaque IK Target (cible du déplacement pour chacune des pattes) en fonction du terrain et des obstacles, pour simuler une marche crédible de la créature. Afin de rajouter de la fluidité au déplacement des pattes, j'ai utilisé des couroutines pour éviter au mieux une téléportation abrupte d'un IK Target à l'autre</p>
  <p>Ce projet m’a permis de mieux comprendre la gestion des IK dans Unity, ainsi que la logique de placement et d’équilibrage de membres en animation procédurale. J’ai aussi pu expérimenter un peu avec du Raycasting pour détecter les points de contact au sol et optimiser les trajectoires de mouvement.
    
  </p>
</div>




<script src="/javascript/carouselButtons.js"></script>
