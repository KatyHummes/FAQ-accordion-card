  const accordions = document.querySelectorAll(".accordion");
  accordions.forEach((accordion) => {
    accordion.querySelector(".title").addEventListener("click", () => {
      accordion.classList.toggle("active");
    });
  });
