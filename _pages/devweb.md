---
layout: splash
title:
permalink: /devweb/
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
<h1 style="text-align: center;margin-top: 30px;">Développement web</h1>

<p style="text-align: center;">Voici quelques exercices/projets réalisés au cours de ma découverte du développement web</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />



<div class="card-grid">

  <!-- Carte 1 -->
  <a href="/devweb/catalogue/" class="card-link">
    <div class="card" style="background-image: url('/assets/images/catalogue.png');">
      <div class="card-content">
        <div class="card-text">
      <h3>Catalogue Albert Londres</h3>
      <p>Dans le cadre d'un stage, j'ai dû concevoir et mettre en ligne un outil de cataloguage afin de trier et consulter des archives</p>
    </div></div></div>
  </a>

  <!-- Carte 2 -->
  <a href="/devweb/labcom/" class="card-link">
    <div class="card" style="background-image: url('/assets/images/iotae.png');">
      <div class="card-content">
        <div class="card-text">
      <h3>Sites IoTAE-Lab et LabCom</h3>
      <p>Dans le cadre d'un stage, j'ai dû revisiter et poursuivre le site de l'IoTAE-Lab avec K-SUP et concevoir un site WordPress dédié au partage des actualité et recherches du LabCom</p>
    </div></div></div>
  </a>

  <!-- Carte 3 -->
  <a href="/devweb/sae/" class="card-link">
    <div class="card" style="background-image: url('/assets/images/Memory_Leak_screenshot.png');">
      <div class="card-content">
        <div class="card-text">
      <h3>Exercices de cours</h3>
      <p>Résumé des divers exercices et projets qui m'ont été demandé pendant mes études</p>
    </div></div></div>
  </a>

</div>

</div>


