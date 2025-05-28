function setRandomImage() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const url = `url('/assets/images/tripleurs${randomNumber}.png')`;
  const el = document.getElementById("tripleurs");
  if (el) {
    el.style.backgroundImage = url;
    console.log("✅ Image mise à jour :", url);
  } else {
    console.warn("⚠️ Élément #tripleurs introuvable");
  }
}

// 1. Initial load
document.addEventListener("DOMContentLoaded", () => {
  console.log("📦 DOM loaded");
  setRandomImage();
});

// 2. Swup navigation events
document.addEventListener("swup:contentReplaced", () => {
  setRandomImage();
});


