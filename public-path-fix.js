(function() {
  const correctPath = "/bharat-governance-transformation/india-governance-transformation.pdf";

  document.addEventListener("click", function(e) {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");

    if (
      href &&
      href.includes("india-governance-transformation.pdf") &&
      !href.includes("bharat-governance-transformation")
    ) {
      e.preventDefault();
      window.open(correctPath, "_blank");
    }
  });
})();
