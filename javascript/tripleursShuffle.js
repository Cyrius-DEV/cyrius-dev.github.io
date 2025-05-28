function setRandomImage() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const url = `url('/assets/images/tripleurs${randomNumber}.png')`;
  const element = document.getElementById("tripleurs");
  if (element) {
    element.style.backgroundImage = url;
    console.log("✅ tripleur choisi = " + url);
  } else {
    console.log("⚠️ Élément #tripleurs introuvable");
  }
}

// DOM chargé
document.addEventListener("DOMContentLoaded", () => {
  console.log("📦 DOM loaded");
  setRandomImage();
});

// ⚠️ Swup avec <script src="..."> est global, donc il faut attendre qu’il soit initialisé
window.addEventListener("load", () => {
  if (window.swup) {
    console.log("✅ Swup détecté");
    window.swup.hooks.on('page:view', () => {
      console.log("📄 swup page:view");
      setRandomImage();
    });
  } else {
    console.warn("❌ Swup non trouvé");
  }
});
