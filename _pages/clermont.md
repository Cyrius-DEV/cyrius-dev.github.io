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
<p>Première exercice d'application sur Android Studio effectué en cours, il s'agit d'une calculatrice classique à laquelle j'ai essayé d'ajouter un maximum de fonctionnalités et d'optimisations.</p>
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
<p>Au travers de cet exercice, j'ai pu comprendre le fonctionnement d'Android Studio et mettre en pratique le langage Java pour la première fois dans un exercice. J'ai découvert un nouveau langage prenant en charge la Programmation Orientée Objet (avec ma classe Calculatrice utilisée ensuite dans la MainActivity) et j'ai construit mon interface via un fichier .xml (en disposant des Layout pour composer une calculatrice).
  </p>
  <p>Afin de rendre ma calculatrice pratique à utiliser, j'ai mis en place quelques petites améliorations telles qu'un affichage optimisé des calculs lors de la saisie, une mémoire des calculs précédents qui sont rendus visibles via un historique qui se déploit quand le téléphone est tourné à l'horizontal mais aussi une représentation des calculs dans l'historique avec des parenthèses pour rappeler leur ordre.
    
  </p>
</div>

<br>
<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />





<h1 id="vague" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Vagues</h1>
<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-fantasy">
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
    <a href="https://appetize.io/app/b_bz3fbgzt45ndvxt4tkz6ughafu" target="_blank" 
       style="padding: 0.75em 1.5em; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px;">
       Lancer une démo sur Android
    </a>
  </p><br>

<div class="paragraph-box-fantasy">
<p>Le développement de cette application a représenté un bon exercice dans la gestion des classes filles et l'héritage d'une méthode mère commune en la personnalisant selon la classe. En effet j'ai regroupé les différentes formes que peut prendre le tracé de l'utilisateur sous une classe mère Forme, tout en la déclinant en classes filles Courbe, Ligne et Rectangle pour préciser dans chacune le contour du motif dessiné.</p>
  <p>
    C'était également le premier exercice de gestion de multiples pages sur Android Studio. J'ai découvert la gestion des Intent et des Activity pour mettre en place une navigation entre les pages de l'application mobile.
  </p>
</div>


<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 id="monstre" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Animation du monstre</h1>

<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-charbon">
<p>Première exercice d'application sur Android Studio effectué en cours, il s'agit d'une calculatrice classique à laquelle j'ai essayé d'ajouter un maximum de fonctionnalités et d'optimisations.</p>
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
<p>Au travers de cet exercice, j'ai pu comprendre le fonctionnement d'Android Studio et mettre en pratique le langage Java pour la première fois dans un exercice. J'ai découvert un nouveau langage prenant en charge la Programmation Orientée Objet (avec ma classe Calculatrice utilisée ensuite dans la MainActivity) et j'ai construit mon interface via un fichier .xml (en disposant des Layout pour composer une calculatrice).
  </p>
  <p>Afin de rendre ma calculatrice pratique à utiliser, j'ai mis en place quelques petites améliorations telles qu'un affichage optimisé des calculs lors de la saisie, une mémoire des calculs précédents qui sont rendus visibles via un historique qui se déploit quand le téléphone est tourné à l'horizontal mais aussi une représentation des calculs dans l'historique avec des parenthèses pour rappeler leur ordre.
    
  </p>
</div>

<br>
<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />





<h1 id="lapin" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Simulation de lapins</h1>
<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-fantasy">
<p>Une simulation de population de lapins autonomes avec reproduction, vieillissement et mort</p>
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
<p>Partant d’un terrain et de modèles fournis, j’ai codé un système complet de gestion de population : spawner de départ, cycle de vie avec vieillissement, reproduction au contact de 2 lapins (ADULTES), et disparition après un certain temps. Pour enrichir la simulation, j’ai ajouté des noms générés aléatoirement, une animation de reproduction utilisant un FragmentShader pour créer un effet de pixellisation (pour un peu d'intimité pour nos lapins), et une mort spectaculaire par explosion d’assets corporels accompagnée d’un effet visuel d’âme s’envolant.</p>
  <p>J’ai aussi développé un système d’ADN simple, où la couleur des lapins (blanc ou noir) est héritée des parents.  une variation de taille grandissante au fur et à mesure de la vie via manipulation de materials, pour rendre mes lapins pluss vivants à travers leur apparence changeatne au courss de leur vie Ce projet m’a permis d’approfondir la gestion d’agents autonomes, les VFX, la manipulation des shaders et l’héritage de propriétés.
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
