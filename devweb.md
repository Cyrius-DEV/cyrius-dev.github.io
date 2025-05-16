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
  }
</style>

<div style="width: 80%; margin: 0 auto;">
<h1 style="text-align: center;margin-top: 30px;">Développement web</h1>

<p style="text-align: center;">Voici quelques exercices/projets réalisés au cours de ma découverte du développement web</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />



<div class="card-grid">

  <!-- Carte 1 -->
  <a href="/unity/projet-1/" class="card-link">
    <div class="card">
      <h3>Catalogue Albert Londres</h3>
      <p>Dans le cadre d'un stage, j'ai dû concevoir et mettre en ligne un outil de cataloguage afin de trier et consulter des archives</p>
    </div>
  </a>

  <!-- Carte 2 -->
  <a href="/unity/projet-2/" class="card-link">
    <div class="card">
      <h3>Sites IoTAE-Lab et LabCom</h3>
      <p>Dans le cadre d'un stage, j'ai dû revisiter et poursuivre le site de l'IoTAE-Lab avec K-SUP et concevoir un site WordPress dédié au partage des actualité et recherches du LabCom</p>
    </div>
  </a>

  <!-- Carte 3 -->
  <a href="/unity/projet-3/" class="card-link">
    <div class="card">
      <h3>Exercices de cours</h3>
      <p>Résumé des divers exercices et projets qui m'ont été demandé pendant mes études</p>
    </div>
  </a>

</div>

</div>


