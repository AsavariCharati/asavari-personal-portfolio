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

const bookSection = document.querySelector(".books-explosion");
const books = document.querySelectorAll(".book-float");

window.addEventListener("scroll", () => {

  const rect = bookSection.getBoundingClientRect();
  const sectionHeight = bookSection.offsetHeight;
  const windowHeight = window.innerHeight;

  /* how far section scrolled */
  const scrollStart = bookSection.offsetTop;
const scrollEnd = scrollStart + bookSection.offsetHeight;

const scrollY = window.scrollY + window.innerHeight/2;

let scrollProgress = (scrollY - scrollStart) / (scrollEnd - scrollStart);
scrollProgress = Math.max(0, Math.min(scrollProgress, 1));


  animateBooks(scrollProgress);
});

function animateBooks(progress){

 const paths = [
  {x:-650, y:-220},
  {x:620, y:-200},
  {x:-600, y:300},
  {x:620, y:340},
  {x:-220, y:-520},
  {x:260, y:600}
];



  books.forEach((book, i) => {

    /* BIGGER spacing between books appearing */
    const start = i * 0.13;   // was 0.08 → now slower release
    const end = start + 0.62; // longer animation window

    let local = (progress - start) / (end - start);
    local = Math.min(Math.max(local, 0), 1);

    /* smoother easing */
    const eased = Math.pow(local, 1.6);

    const moveX = paths[i].x * eased;
    const moveY = paths[i].y * eased;

    const scale = 0.45 + (1.65 * eased);
  
    /* softer fade */
    let opacity = 1;

    if(eased < 0.15){
      opacity = eased * 6;
    }
    else if(eased > 0.75){
      opacity = 1 - ((eased - 0.75) * 4);
    }

    book.style.transform =
      `translate(-50%,-50%) translate(${moveX}px, ${moveY}px) scale(${scale})`;

    book.style.opacity = opacity;
  });
}
