const bagSection = document.querySelector(".bag-section");

window.addEventListener("scroll", () => {
  const rect = bagSection.getBoundingClientRect();
  const triggerPoint = window.innerHeight * 0.65;

  if(rect.top < triggerPoint && rect.bottom > 100){
    bagSection.classList.add("active");
  } else {
    bagSection.classList.remove("active");
  }
});
