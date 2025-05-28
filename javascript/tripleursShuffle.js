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
  console.log("🔁 swup:contentReplaced detected");
    setRandomImage();
});

