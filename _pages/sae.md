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
    <div class="paragraph-box">
<p>Développement et hébergement d'un catalogue de formations et cours en ligne, premier projet de site web de mes études.</p>
    </div>
    </div>
 
    <img src="/assets/images/Learning_Space_screenshot.png" alt="Écran 1">
  
</div>
<br>


<div class="paragraph-box">
<p>Ce projet a été le premier exercice en condition que j'ai pu mener auu cours de mes études avec du développement en front-end et back-end en simultané. Il nous a été demandé de mettre en place un catalogue de formations permettant la consultation de cours, avec une page d'accueil affichant la liste des cours disponibles, une page de cours complète afin de montrer à quoi ressemble un cours classique mais aussi une page de connexion/inscription à son compte utilisateur.
</p>
  <p>Ce travail étant en groupe de 4 je me suis principalement occupé de mon côté de la partie "serveur" du site ; j'ai mis en place une base de données contenant les informations des cours, des enseignants et des comptes utilisateur. J'ai enfin relié cette base de données à notre site en utilisant du PHP, mettant en pratique mes cours sur les requêtes SQL.
    
  </p>
</div>

<br>
<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />





<h1 id="vague" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Memory Leak</h1>
<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-glace">
<p>Création d'un site web vitrine dans le cadre d'une capagne de promotion d'un nouveau jeu de piste.</p>
    </div>
    </div>
  <div class="carousel-container">
  <button class="carousel-button prev">‹</button>
  <div class="carousel-slide">
    <img src="/assets/images/Memory_Leak_screenshot.png" alt="Écran 1">
    <img src="/assets/images/memoryleak2.png" alt="Écran 2">
  </div>
  <button class="carousel-button next">›</button>
</div>
</div>
<br>



  

<div class="paragraph-box-glace">
<p>Dans le cadre d'une de nos SAE (projets évalués), il nous a fallu mon groupe et moi concevoir un jeu de piste en plein air pour la période estivale destiné à l'Office de tourisme de Vichy. Parmi les nombreuses tâches liées à ce projet, j'ai pris notamment en charge la création d'un site vitrine, en version française ou anglaise, qui présente notre jeu.
</p>
  <p>Ce site, réalisé à partir d'un template sur WordPress, explique de manière colorée et imagée le thème du parcours et donne les informations de contact de l'Office de tourisme. Perndant sa réalisation, j'ai essayé au mieux de conserver et utiliser des images et des palettes de couleur en accordance avec notre projet, en choisissant notamment des teintes bleues (liées au thème de l'eau de Vichy pour notre jeu) et en incluant la mascotte de notre jeu. Je me suis également occupé de la mise en ligne et de l'hébergement du site sur un webhost gratuit. Pour mieux comprendre le thème et l'ambiance générale de notre jeu, je mets ci-dessous le trailer du projet que j'ai réalisé.
  </p>
</div>

<iframe style="width:inherit;" src="https://youtu.be/bAfxPodhhpQ" title="Trailer Memory Leak" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"> </iframe>

<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h1 id="monstre" class="scroll-target" style="text-align: center;margin-top: 30px; text-decoration:underline;">Scrabble en ligne</h1>

<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-rustique">
<p>Mise en place d'un Scrabble en ligne jouable avec système de création de partie privée à code avec chat en ligne</p>
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
