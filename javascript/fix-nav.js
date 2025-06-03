window.addEventListener("load", () => {
  // petit délai pour laisser le temps à Minimal Mistakes de bouger les liens
  setTimeout(() => {
    const visibleLinks = document.querySelector(".greedy-nav .visible-links");
    const hiddenLinks = document.querySelector(".greedy-nav .hidden-links");
    const toggleButton = document.querySelector(".greedy-nav__toggle");

    // Neutraliser les scripts de reorder auto
    const nav = document.querySelector(".greedy-nav");
    const newNav = nav.cloneNode(true);
    nav.replaceWith(newNav);

    // Mise à jour correcte
    function forceHiddenLinks() {
      const isMobile = window.innerWidth < 768;
      const visItems = visibleLinks.querySelectorAll("li");
      const hidItems = hiddenLinks.querySelectorAll("li");
      console.log("isMobile= "+isMobile+" visItems= "+visItems.length+" hidItems= "+hidItems.length);
      
      if (isMobile) {
        visItems.forEach(li => hiddenLinks.appendChild(li));
        toggleButton.classList.remove("hidden");
      } else {
        hidItems.forEach(li => visibleLinks.appendChild(li));
        hiddenLinks.classList.add("hidden");
        toggleButton.classList.remove("close");
      }
      console.log("new isMobile= "+isMobile+" visItems= "+visItems.length+" hidItems= "+hidItems.length);
    }

    forceHiddenLinks();
    window.addEventListener("resize", forceHiddenLinks);

    toggleButton.addEventListener("click", () => {
      hiddenLinks.classList.toggle("hidden");
      toggleButton.classList.toggle("close");
    });
  }, 100); // délai à ajuster si besoin
});

