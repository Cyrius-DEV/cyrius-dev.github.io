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
document.addEventListener("swup:pageView", () => {
  console.log("✅ swup:pageView event DETECTED");
    setRandomImage();
});

document.addEventListener("swup:contentReplaced", () => {
  console.log("⏳ swup:contentReplaced (delayed)");
  setTimeout(setRandomImage, 50); // délai pour laisser le DOM s'installer
});


