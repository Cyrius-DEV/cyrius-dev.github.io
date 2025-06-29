---
layout: splash
title:
permalink: /apprentissage/developousse/
classes: wide
---


<div style="width: 100%; margin: 0 auto;">
<h1 style="text-align: center;margin-top: 30px;font-size:2em;">Dévelopousse</h1>

<p style="text-align: center;">Présentation plus en détail d'un advergame développé en TypeScript dans le cadre d'une SAE</p>

<div style="text-align: center; margin-top: 20px; margin-bottom: 40px;">
  <a href="#presentation" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Présentation  ▼</button>
  </a>
  <a href="#fonctionnalites" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Fonctionnement  ▼</button>
  </a>
  <a href="#demo" style="text-decoration: none;">
    <button class="scrolling-button" style="padding: 10px 20px; margin: 0 10px; font-size: 1em;">▼  Jouer  ▼</button>
  </a>
</div>



<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h2 id="presentation" class="scroll-target" style="text-align: center; border-bottom:none;margin-top: 30px; text-decoration:underline;font-size: 1.563em;">Présentation</h2>

<div class="project-section">
  <div class="project-text">
    <div class="paragraph-box-menthe">
<p>Réalisation principale d'un projet universitaire, Dévelopousse est un advergame intégré à une boutique en ligne réalisée en partenariat avec des élèves du cursus Marketing et Stratégies de Communications.</p>
<p>Notre thème était les jardins d'intérieur connectés, j'ai donc imaginé un jeu de plateforme où le joueur utilise les fonctionnalités d'un jardin connecté pour atteindre la fin de chaque niveau.
  
</p></div>
  </div>
<div class="carousel-container">
  <button class="carousel-button prev">‹</button>
  <div class="carousel-slide">
    <img src="/assets/images/developousse4.png" alt="Écran 1">
    <img src="/assets/images/developousse2.png" alt="Écran 2">
    <img src="/assets/images/developousse.png" alt="Écran 3">
    <img src="/assets/images/developousse3.png" alt="Écran 4">
  </div>
  <button class="carousel-button next">›</button>
</div>
</div>
<br>
<div class="paragraph-box-menthe">
<p>Réalisation principale d'un projet universitaire, Dévelopousse est un jeu flash type advergame, soit un jeu publicitaire sur le thème des produits vendus d'une boutique mettant ainsi en avant l'image de la marque. L'exercice était centré sur le thème des jardins d'intérieur connectés, nous devions imaginer, réaliser et mettre en ligne temporairement une boutique de vente d'équipement pour l'entretien de ces jardins</p>
<p>Ma consigne principale était donc de développer un advergame et de l'intégrer dans une page du site. Afin de bien mettre en valeur les produits et le thème de notre boutique, j'ai imaginé un jeu se déroulant à l'intérieur d'un jardin connecté, où le joueur contrôle à la fois une plante mais aussi le jardin lui-même. Ce dernier permet de modifier son environnement en dirigeant une lampe vers les plantes grimpantes du jardin, leur permettant de pousser grâce à la lumière et ainsi créer un nouveau chemin que le joueur peut emprunter !</p></div><br>

<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<h2 id="fonctionnalites" class="scroll-target" style="text-align: center; border-bottom:none;margin-top: 30px; text-decoration:underline;font-size: 1.563em;">Fonctionnalités</h2>



<div style="width:100%; display:flex; align-items:center; justify-content:center;">
  <div style="width:40%;">
    <img src="/assets/images/racoongram4.png" >
  </div>
  <div style="width:60%;">
    <div class="paragraph-box-racoongram">
    <p>➤ Utilise un token d’authentification créé par notre API pour la connexion</p>

<p>➤ Main activity (page de démarrage de l'application), check de présence/validité du token et redirection vers page principale ou de connexion en fonction du token valide ou non</p>

 <p>➤ Sauvegarde des infos dans les SharedPreferences (token d’authentification, id et login de l'utilisateur)</p>
  </div>
  </div>
</div>

<div style="width:100%; display:flex; align-items:center; justify-content:center;">
  <div style="width:60%;">
    <div class="paragraph-box-racoongram">
    <p>➤ Page principale : fil d'actualité similaire à Instagram, permet de consulter et de liker les captures d'écran des joueurs de Racoons ? Where ?</p>
      <p>➤ Récupération des images grâce à l'API et organisation en Posts avec image, infos et bouton Like fonctionnel</p>
      <p>➤ Scroll infini à travers la page grâce à un chargement automatique de nouveaux posts quand bas de page atteint</p>
    <p>➤ Attribution d'une profilepic automatique de racoon coloré pour un fil d'actualité plus vivant</p>
  </div>
  </div>
  <div style="width:40%;text-align:right;">
    <img src="/assets/images/racoongram5.png" >
  </div>
  
</div>

<div style="width:100%; display:flex; align-items:center; justify-content:center;">
  <div style="width:40%;">
    <img src="/assets/images/racoongram6.png" >
  </div>
  <div style="width:60%;">
    <div class="paragraph-box-racoongram">
    <p>
      ➤ Présente les différentes informations du compte</p>
      <p>➤ Récupération des informations et des screenshots selon le compte avec l'API</p>
      <p>➤ Organisation en 2 fragments, Publications (fil d'actualité composé des photos du compte uniquement) et Skins (simple concept si volonté de pousser le projet plus loin, choix de skins depuis l'application)</p>
    <p>➤ Menu des fragments Publications et Skins fixe pendant le scroll
    </p>
  </div>
  </div>
</div>

<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />

<section>
  <h2 id="demo" class="scroll-target" style="text-align: center; border-bottom:none;margin-top: 30px; text-decoration:underline;font-size: 1.563em;">Démo interactive</h2>
 <br>
  <p style="text-align: center; margin-top: 1em;">
    <a href="https://appetize.io/app/b_omk4fpnh3uh4og4vv5frkmyroi" target="_blank" 
       style="padding: 0.75em 1.5em; background: #4CAF50; color: white; text-decoration: none; border-radius: 8px;">
       Lancer la démo Android
    </a>
  </p><br>
  <p style="text-align: center;margin-bottom:0px;">Identifiant : test</p>
  <p style="text-align: center;">Mot de passe : 123456789</p>
</section>


<script src="/javascript/carouselButtons.js"></script>
