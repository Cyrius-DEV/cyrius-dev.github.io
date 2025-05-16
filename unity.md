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

  .card {
    aspect-ratio: 1 / 1; /* rend les cartes carrées */
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background: white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
      <p>Dans le cadre d'une SAE, j'ai dû participer à la conception d'un jeu vidéo sur le thème de Martin Luther King. Il s'agit d'un platformer style pixel art en vue 2D</p>
    </div>
  </a>

  <!-- Carte 2 -->
  <a href="/unity/projet-2/" class="card-link">
    <div class="card">
      <h3>Racoons ? Where ?</h3>
      <p>Dans le cadre d'une SAE, j'ai dû participer à un projet en trio pour créer un jeu d'infiltration en 3D low poly, ou l'on incarne des ratons laveurs qui se faufilent à bord d'un bateau de luxe</p>
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

