---
layout: splash
title:
permalink: /apprentissage/
classes: wide
---
<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    padding: 20px 0;
  }

  .card-link {
    text-decoration: none;
    color: inherit;
  }

  

  .card:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  }
  .card p{
    font-size: 0.7em;
  }
  .card h3{
    font-size: 0.9em;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 700;
  }
  .card-content {
   background-color: rgba(232, 232, 232, 0.8); /*blanc à 80% opaque */
    margin-top:10px;
    margin-bottom:10px;
}
  .card-text{
    padding-left: 20px;
    padding-right: 20px;
    
    
  }
.card {
  aspect-ratio: 1 / 1;
  background-size: cover;
  background-position: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}



</style>

<div style="width: 80%; margin: 0 auto;">
<h1 style="text-align: center;margin-top: 30px;">Apprentissage des langages informatiques</h1>

<p style="text-align: center;">Voici quelques exercices/projets réalisés au cours de mon apprentissage des langages informatiques</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />



<div class="card-grid">

  <!-- Carte 1 -->
  <a href="/apprentissage/developousse/" class="card-link">
    <div class="card" style="background-image: url('/assets/images/developousse.png');">
      <div class="card-content">
        <div class="card-text">
      <h3>Advergame Dévelopousse</h3>
      <p>Dans le cadre d'une SAE, j'ai été chargé de la création d'un jeu flash type advergame avec TypeScript et de son intégration à une boutique en ligne afin de mettre en avant la marque</p>
    </div></div></div>
  </a>

  <!-- Carte 2 -->
  <a href="/apprentissage/racoongram/" class="card-link">
    <div class="card" style="background-image: url('/assets/images/racoongram.png');">
      <div class="card-content">
        <div class="card-text">
      <h3>Application Racoongram</h3>
      <p>Dans le cadre d'une SAE, j'ai été chargé de la création sur Android Studio d'une application mobile type Instagram connectée à un jeu vidéo au travers d'une API</p>
    </div></div></div>
  </a>

  <!-- Carte 3 -->
  <a href="/apprentissage/typescript/" class="card-link">
    <div class="card" style="background-image: url('/assets/images/typescript.png');">
      <div class="card-content">
        <div class="card-text">
      <h3>Mini-jeux TypeScript</h3>
      <p>Présentation rapide de quelques exercices autour de TypeScript que j'ai menés en cours prenant la forme de mini-jeux très connus</p>
    </div></div></div>
  </a>
  <!-- Carte 4 -->
    <a href="/apprentissage/java/" class="card-link">
      <div class="card" style="background-image: url('/assets/images/java.png');">
      <div class="card-content">
        <div class="card-text">
        <h3>Mini-exos Java</h3>
        <p>Présentation rapide de quelques exercices autour de Java que j'ai pu abordés en cours prenant la forme d'applications mobile et autres</p>
      </div></div></div>
    </a>

  
</div>

</div>


