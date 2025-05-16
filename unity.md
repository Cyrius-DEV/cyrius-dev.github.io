---
layout: splash
title:
permalink: /unity/
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
<h1 style="text-align: center;margin-top: 30px;">Unity</h1>

<p style="text-align: center;">Voici quelques exercices/projets réalisés au cours de ma découverte d'Unity</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />



<div class="card-grid">

  <!-- Carte 1 -->
  <a href="/unity/projet-1/" class="card-link">
    <div class="card">
      <h3>Rise of Freedom</h3>
      <p>Dans le cadre d'une SAE, j'ai pu participer à la conception d'un jeu platformer style pixel art en vue 2D où l'on incarne Martin Luther King en plein mouvement des droits civiques </p>
    </div>
  </a>

  <!-- Carte 2 -->
  <a href="/unity/projet-2/" class="card-link">
    <div class="card">
      <h3>Racoons ? Where ?</h3>
      <p>Dans le cadre d'une SAE, j'ai pu participer à la création d'un jeu d'infiltration en 3D low poly, où l'on incarne des ratons laveurs qui se faufilent à bord d'un bateau de luxe</p>
    </div>
  </a>

  <!-- Carte 3 -->
  <a href="/unity/projet-3/" class="card-link">
    <div class="card">
      <h3>Mini-jeux faits en cours</h3>
      <p>Présentation rapide de quelques projets et notions sur Unity que j'ai pu aborder en cours sous formes de petits jeux et simulations</p>
    </div>
  </a>

</div>

</div>

