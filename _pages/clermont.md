---
layout: splash
title:
permalink: /unity/clermont/
classes: wide
---


<div style="width: 100%; margin: 0 auto;">
<h1 style="text-align: center;margin-top: 30px;font-size:2em;">Exercices faits en cours</h1>

<p style="text-align: center;">Présentation rapide de quelques exercices en langage Java que j'ai menés en cours prenant la forme de mini-jeux très connus</p>
<div style="text-align: center; margin-top: 20px; margin-bottom: 40px;">
  <a href="#simon" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Simon Says  ▼</button>
  </a>
  <a href="#vague" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Vagues  ▼</button>
  </a>
  <a href="#monstre" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Monstre  ▼</button>
  </a>
  <a href="#lapin" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Lapins  ▼</button>
  </a>
  <a href="#multijoueur" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Multijoueur  ▼</button>
  </a>
</div>



<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 id="simon" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Simon Says</h1>

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



  <p style="text-align: center; margin-top: 1em;">
    <a href="https://appetize.io/app/b_7u3tls2qiz6jw2erxwucrpwga4" target="_blank" 
       style="padding: 0.75em 1.5em; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px;">
       Lancer une démo sur Android
    </a>
  </p><br>

<div class="paragraph-box-charbon">
<p>Sur la base d’un Simon Says basique, j’ai ajouté plusieurs éléments pour en faire un vrai mini-jeu interactif. J’ai intégré des sons enregistrés moi-même, utilisé la manipulation de materials lumineux pour signaler les combinaisons jouées, les erreurs et les succès, et j’ai mis en place un système de vies ainsi qu’un score dynamique affiché à l’écran afin de mieux encadrer l'expérience de joueur et rendre les élément sdu jeu plus cohérents entre eux.
</p>
  <p>Ce projet m’a permis de travailler sur la réactivité d’une interface de jeu, la gestion des états, les feedbacks visuels et sonores, et l’amélioration de l’expérience utilisateur globale. C'était le premier exercice de ce genre, sans consignes précises autre que "finir le jeu", il m'a laissé libre de réfléchir à ce qui me paraissait le plus pertinent comme ajout, et libre de les mettre en place comme je le veux.
    
  </p>
</div>

<br>
<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />





<h1 id="vague" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Vagues</h1>
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



  <p style="text-align: center; margin-top: 1em;">
    <a href="https://appetize.io/app/b_bz3fbgzt45ndvxt4tkz6ughafu" target="_blank" 
       style="padding: 0.75em 1.5em; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px;">
       Lancer une démo sur Android
    </a>
  </p><br>

<div class="paragraph-box-fantasy">
<p>Ce projet nous a permis de comparer trois approches différentes d’exécution de code asynchrone ou parallèle dans Unity : Coroutine, Task, et IJob. L’objectif était de simuler une propagation de vague en réponse à un clic de souris sur une surface d’eau, puis d’observer les différences de performances entre chaque méthode.
</p>
  <p>Cette expérimentation m’a permis de comprendre les avantages et limites de chaque système : simplicité des coroutines mais tout reste bloqué sur le thread principal et mal adapté sur du calcul lourd, efficacité relative des tasks moins intégré au cycle de vie Unity qu’une coroutine mais permet des traitements lourds sans bloquer la frame, et puissance brute des jobs dans des scénarios fortement parallélisables mais plus spécialisé sur un code orienté "donnée" plutôt que "objet".
  </p>
</div>


<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 id="monstre" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Animation du monstre</h1>

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



  <p style="text-align: center; margin-top: 1em;">
    <a href="https://appetize.io/app/b_7u3tls2qiz6jw2erxwucrpwga4" target="_blank" 
       style="padding: 0.75em 1.5em; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px;">
       Lancer une démo sur Android
    </a>
  </p><br>

<div class="paragraph-box-rustique">
<p>Avec un modèle quadrupède et une armature déjà en place, j’ai conçu un système de déplacement basé sur l’Inverse Kinematics. L’objectif était de calculer en temps réel la position idéale de chaque IK Target (cible du déplacement pour chacune des pattes) en fonction du terrain et des obstacles, pour simuler une marche crédible de la créature. Afin de rajouter de la fluidité au déplacement des pattes, j'ai utilisé des couroutines pour éviter au mieux une téléportation abrupte d'un IK Target à l'autre</p>
  <p>Ce projet m’a permis de mieux comprendre la gestion des IK dans Unity, ainsi que la logique de placement et d’équilibrage de membres en animation procédurale. J’ai aussi pu expérimenter un peu avec du Raycasting pour détecter les points de contact au sol et optimiser les trajectoires de mouvement.
    
  </p>
</div>

<br>
<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />





<h1 id="lapin" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Simulation de lapins</h1>
<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-menthe">
<p>Développement d'une simulation de population de lapins autonomes dans un petit terrain avec système de reproduction, vieillissement et mort pour chacun d'entre eux</p>
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
    <a href="https://appetize.io/app/b_bz3fbgzt45ndvxt4tkz6ughafu" target="_blank" 
       style="padding: 0.75em 1.5em; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px;">
       Lancer une démo sur Android
    </a>
  </p><br>

<div class="paragraph-box-menthe">
<p>Partant d’un terrain et de modèles fournis, j’ai codé un système complet de gestion de population : spawner de départ, cycle de vie avec vieillissement, reproduction au contact de 2 lapins (ADULTES), et disparition après un certain temps. Pour enrichir la simulation, j’ai ajouté des noms générés aléatoirement, une animation de reproduction utilisant un FragmentShader pour créer un effet de pixellisation (pour un peu d'intimité pour mes lapins), et une mort spectaculaire par explosion d’assets corporels accompagnée d’un effet visuel d’âme s’envolant.</p>
  <p>J’ai aussi développé un système d’ADN simple, où la couleur des lapins est héritée des parents avec 2 gènes noir ou blanc ayant chacun 1 chance sur 2 d'être transmis et dominant. J'ai aussi mis en place une variation de taille au fur et à mesure de la vie (croissante à l'enfance) via manipulation de materials, pour rendre mes lapins plus vivants au travers d'une apparence changeante au cours de leur vie. Ce projet a servi de bonne mise en pratique concernant la gestion d’agents autonomes, les VFX, la manipulation des shaders et l’héritage de propriétés.
  </p>
</div>



<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 id="multijoueur" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Jeu multijoueur</h1>

<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-charbon">
<p>Découverte du fonctionnement de Netcode avec la création d'un mini-jeu compétitif multijoueur où chaque joueur pousse une balle dans sa zone pour marquer des points</p>
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



  <p style="text-align: center; margin-top: 1em;">
    <a href="https://appetize.io/app/b_7u3tls2qiz6jw2erxwucrpwga4" target="_blank" 
       style="padding: 0.75em 1.5em; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px;">
       Lancer une démo sur Android
    </a>
  </p><br>

<div class="paragraph-box-charbon">
<p>Ce projet avait pour but de nous initier à la gestion du multijoueur avec Unity Netcode, en nous fournissant un environnement de base puis en nous laissant imaginer et mettre en place un petit jeu de notre choix. À partir d’une scène de base déjà préparée (avec deux joueurs, une arène et un objet physique), j’ai imaginé une mécanique de score basée sur des zones colorées propres à chaque joueur où l'objet, ici un dé, doit être emmené pour marquer des points. 
</p>
  <p>Pour que le jeu soit fonctionnel, il m'a fallu gérer l'application d'une physique correcte ou encore une synchronisation des données et une actualisation du score instantanées pour les 2 joueurs. Cela m’a permis de manipuler la synchronisation réseau des objets, la gestion d’état partagé (score), ainsi que l’identification des joueurs et de leurs interactions. Cet exercice m’a donné une première application concrète de la logique serveur/client dans Unity.
    
  </p>
</div>




<script src="/javascript/carouselButtons.js"></script>
