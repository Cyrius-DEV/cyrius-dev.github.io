---
layout: splash
title:
permalink: /perso/
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
<h1 style="text-align: center;margin-top: 30px;">Projets personnels</h1>

<p style="text-align: center;">Voici quelques projets et passions qui, dans un cadre plus personnel, rythment mon quotidien</p>

<hr style="border: none; border-top: 1px solid #ccc; margin: 60px auto; width: 90%;" />



<div class="card-grid">

  <!-- Carte 1 -->
  <a href="/unity/projet-1/" class="card-link">
    <div class="card">
      <h3>Rise of Freedom 2</h3>
      <p>Le grand retour de mon premier jeu vidéo sur Unity, sauf que là tout change, on repart de 0 et on se laisse porter par notre créativité</p>
    </div>
  </a>

  <!-- Carte 2 -->
  <a href="/unity/projet-2/" class="card-link">
    <div class="card">
      <h3>Les Tripleurs</h3>
      <p>Chaine Youtube fondée avec 2 amis, nous faisons nos premiers pas dans le domaine du doublage (très) amateur et diffusons de temps en temps nos fous rires et voix cassées sur les réseaux</p>
    </div>
  </a>

  <!-- Carte 3 -->
  <a href="/unity/projet-3/" class="card-link">
    <div class="card">
      <h3>Les Racines Fraternelles</h3>
      <p>Projet de SAE de camarades de classe, ceux-ci souhaitent tirer parti du potentiel du projet et le poursuivre, et ils m'ont invité à m'y investir à leur côté</p>
    </div>
  </a>

  <!-- Carte 4 -->
  <a href="/unity/projet-3/" class="card-link">
    <div class="card">
      <h3>Mes passions</h3>
      <p>Présentation rapide des différents médias et passe-temps qui m'ont construit et accompagné au fur et à mesure des années</p>
    </div>
  </a>

</div>

</div>



