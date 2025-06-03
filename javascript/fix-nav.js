document.addEventListener("DOMContentLoaded", () => {
  const visibleLinks = document.querySelector(".greedy-nav .visible-links");
  const hiddenLinks = document.querySelector(".greedy-nav .hidden-links");
  const toggleButton = document.querySelector(".greedy-nav__toggle");

  // Supprimer le comportement JS automatique du template
  const nav = document.querySelector(".greedy-nav");
  const newNav = nav.cloneNode(true);
  nav.replaceWith(newNav);

  // Définir les nouveaux sélecteurs après remplacement
  const newVisibleLinks = newNav.querySelector(".visible-links");
  const newHiddenLinks = newNav.querySelector(".hidden-links");
  const newToggleButton = newNav.querySelector(".greedy-nav__toggle");

  function forceHiddenLinks() {
    const isMobile = window.innerWidth < 864;
    const visItems = newVisibleLinks.querySelectorAll("li");
    const hidItems = newHiddenLinks.querySelectorAll("li");

    if (isMobile) {
      // Tout dans hidden
      visItems.forEach(li => newHiddenLinks.appendChild(li));
      newHiddenLinks.classList.add("hidden"); // Masqué au début
      newToggleButton.classList.remove("hidden");
    } else {
      // Tout dans visible
      hidItems.forEach(li => newVisibleLinks.appendChild(li));
      newHiddenLinks.classList.add("hidden");
      newToggleButton.classList.add("hidden");
      newToggleButton.classList.remove("close");
    }
  }

  // Réagir au redimensionnement
  window.addEventListener("resize", () => {
    setTimeout(forceHiddenLinks, 100); // Timeout pour laisser le resize finir
  });

  // Menu burger : toggle l'affichage de hidden-links
  newToggleButton.addEventListener("click", () => {
    newHiddenLinks.classList.toggle("hidden");
    newToggleButton.classList.toggle("close");
  });

  // Initialisation
  setTimeout(forceHiddenLinks, 100);
});
