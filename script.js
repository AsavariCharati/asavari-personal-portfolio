window.addEventListener("DOMContentLoaded", () => {
  const eyes = document.querySelectorAll(".eye");

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener("mousemove", (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 12;
    targetY = (e.clientY / window.innerHeight - 0.5) * 3;
  });

  function animateEyes() {
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;

    eyes.forEach((eye) => {
      eye.style.transform = `translate(${currentX}px, ${currentY}px)`;
    });

    requestAnimationFrame(animateEyes);
  }

  animateEyes();
});
