// Fonction pour définir une image aléatoire sur #tripleurs
function setRandomImage() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const url = `url('/assets/images/tripleurs${randomNumber}.png')`;
  const element = document.getElementById("tripleurs");
  if (element) {
    element.style.backgroundImage = url;
    console.log("✅ tripleur choisi = " + url);
  } else {
    console.log("⚠️ Élément #tripleurs introuvable.");
  }
}

// Initialise Swup
import Swup from 'https://unpkg.com/swup@4?module';
const swup = new Swup();

// Appelle la fonction au chargement initial
document.addEventListener("DOMContentLoaded", () => {
  setRandomImage();
});

// Appelle la fonction après chaque navigation Swup
document.addEventListener("swup:contentReplaced", () => {
  setRandomImage();
});

