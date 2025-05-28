function adjustPageHeight() {
  const body = document.body;
  const html = document.documentElement;

  // Hauteur totale visible
  const viewportHeight = window.innerHeight;

  // Hauteur réelle du contenu
  const contentHeight = Math.max(
    body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight
  );

  // Si le contenu est plus petit que le viewport
  if (contentHeight < viewportHeight) {
    // Ajoute un padding ou min-height au contenu principal
    const main = document.querySelector("main") || document.querySelector("#swup") || document.body;

    if (main) {
      const footer = document.querySelector("footer");
      const footerHeight = footer ? footer.offsetHeight : 0;
      const neededSpace = viewportHeight - contentHeight;

      main.style.minHeight = `calc(100vh - ${footerHeight}px)`;
    }
  }
}

// Appel initial
adjustPageHeight();

// Appelle à chaque redimensionnement
window.addEventListener("resize", adjustPageHeight);

// Pour Swup (si présent)
document.addEventListener("swup:contentReplaced", () => {
  adjustPageHeight();
});
