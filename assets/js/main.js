document.querySelectorAll(".stp").forEach((element) => {
  element.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
