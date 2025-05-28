function setRandomImage() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const url = `url('/assets/images/tripleurs${randomNumber}.png')`;
  const element = document.getElementById("tripleurs");
  if (element) {
    element.style.backgroundImage = url;
    console.log("✅ tripleur choisi = " + url);
  } else {
    console.log("⚠️ Élément #tripleurs non trouvé.");
  }
}

// Appelé au chargement initial
document.addEventListener("DOMContentLoaded", setRandomImage);

// Appelé après chaque transition Swup
document.addEventListener("swup:contentReplaced", setRandomImage);
