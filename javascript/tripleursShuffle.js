function setRandomImage() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const url = `url('/assets/images/tripleurs${randomNumber}.png')`;
  const element = document.getElementById("tripleurs");
  if (element) {
    element.style.backgroundImage = url;
    console.log("✅ tripleur choisi = " + url);
  } else {
    console.log("⚠️ #tripleurs introuvable");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("📦 DOM loaded");
  setRandomImage();
});

document.addEventListener("swup:contentReplaced", () => {
  console.log("🔁 swup:contentReplaced");
  setRandomImage();
});
