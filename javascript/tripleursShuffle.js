
  function setRandomImage() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let url = "url('/assets/images/tripleurs" + randomNumber + ".png')";
    let element = document.getElementById("tripleurs");
    if (element) {
      element.style.backgroundImage = url;
      console.log("tripleur choisi = " + url);
    }
  }

  // Initial load
  document.addEventListener("DOMContentLoaded", setRandomImage);

  // Swup page transition
  document.addEventListener("swup:contentReplaced", setRandomImage);
