document.addEventListener("DOMContentLoaded", () => {
  const visibleLinks = document.querySelector(".greedy-nav .visible-links");
  const hiddenLinks = document.querySelector(".greedy-nav .hidden-links");
  const toggleButton = document.querySelector(".greedy-nav__toggle");

  // Désactiver resize handler de greedy-nav (en le clonant et remplaçant)
  const nav = document.querySelector(".greedy-nav");
  const newNav = nav.cloneNode(true);
  nav.replaceWith(newNav);

  // Forcer tous les liens dans hidden en mobile (< 768px)
  function forceHiddenLinks() {
    const isMobile = window.innerWidth < 768;
    const visItems = visibleLinks.querySelectorAll("li");
    const hidItems = hiddenLinks.querySelectorAll("li");
    console.log("isMobile= "+isMobile+" visItems= "+visItems+" hidItems= "+hidItems);
    
    if (isMobile) {
      // Déplacer tout vers hidden
      visItems.forEach((li) => hiddenLinks.appendChild(li));
      toggleButton.classList.remove("hidden");
    } else {
      // Déplacer tout vers visible
      hidItems.forEach((li) => visibleLinks.appendChild(li));
      hiddenLinks.classList.add("hidden");
      toggleButton.classList.remove("close");
    }
  }

  // Appliquer au chargement
  forceHiddenLinks();

  // Et à chaque redimensionnement
  window.addEventListener("resize", forceHiddenLinks);

  // Afficher/masquer menu en mobile
  toggleButton.addEventListener("click", () => {
    hiddenLinks.classList.toggle("hidden");
    toggleButton.classList.toggle("close");
  });
});
