window.addEventListener("load", () => {
  setTimeout(() => {
    // Neutraliser les scripts de reorder auto
    const nav = document.querySelector(".greedy-nav");
    const newNav = nav.cloneNode(true);
    nav.replaceWith(newNav);

    // 🔥 Met à jour les références APRÈS remplacement du DOM
    const updatedNav = document.querySelector(".greedy-nav");
    const visibleLinks = updatedNav.querySelector(".visible-links");
    const hiddenLinks = updatedNav.querySelector(".hidden-links");
    const toggleButton = updatedNav.querySelector(".greedy-nav__toggle");

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
        toggleButton.classList.add("hidden");
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
  }, 100); // ou 200 si besoin
});
