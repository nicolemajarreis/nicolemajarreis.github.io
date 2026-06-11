/* 3D CAROUSEL - DAVAO REEF */
const carouselImages = document.querySelectorAll(".carousel-stage img");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 0;

function updateCarousel() {
  carouselImages.forEach((img, index) => {
    img.className = "";

    const position = (index - currentIndex + carouselImages.length) % carouselImages.length;

    if (position === 0) img.classList.add("active");
    if (position === 1) img.classList.add("right");
    if (position === 2) img.classList.add("far-right");
    if (position === carouselImages.length - 1) img.classList.add("left");
    if (position === carouselImages.length - 2) img.classList.add("far-left");
  });
}

if (carouselImages.length > 0 && prevBtn && nextBtn) {
  updateCarousel();

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
  });
}


/* STACKED CARD CAROUSEL */
const stackCards = document.querySelectorAll(".stack-card");
const stackPrev = document.querySelector(".stack-prev");
const stackNext = document.querySelector(".stack-next");

let stackIndex = 0;

function updateStackCarousel() {
  stackCards.forEach((card, index) => {
    card.className = "stack-card";

    const position = (index - stackIndex + stackCards.length) % stackCards.length;

    if (position === 0) card.classList.add("stack-active");
    if (position === 1) card.classList.add("stack-right");
    if (position === 2) card.classList.add("stack-far-right");
    if (position === stackCards.length - 1) card.classList.add("stack-left");
    if (position === stackCards.length - 2) card.classList.add("stack-far-left");
  });
}

if (stackCards.length > 0 && stackPrev && stackNext) {
  updateStackCarousel();

  stackNext.addEventListener("click", () => {
    stackIndex = (stackIndex + 1) % stackCards.length;
    updateStackCarousel();
  });

  stackPrev.addEventListener("click", () => {
    stackIndex = (stackIndex - 1 + stackCards.length) % stackCards.length;
    updateStackCarousel();
  });
}

/* INSTAGRAM STYLE GALLERY MODAL */
document.addEventListener("DOMContentLoaded", () => {
  const igImages = document.querySelectorAll(".insta-gallery img");
  const igModal = document.getElementById("igModal");
  const igModalImg = document.getElementById("igModalImg");
  const igTitle = document.getElementById("igTitle");
  const igCaption = document.getElementById("igCaption");
  const igTags = document.getElementById("igTags");
  const igClose = document.querySelector(".ig-close");
  const igPrev = document.querySelector(".ig-prev");
  const igNext = document.querySelector(".ig-next");

  let igCurrentIndex = 0;

  if (!igImages.length || !igModal || !igModalImg || !igTitle || !igCaption || !igTags) {
    console.log("Instagram gallery modal elements are missing.");
    return;
  }

  function openIgModal(index) {
    igCurrentIndex = index;
    const img = igImages[igCurrentIndex];

    igModal.classList.add("active");
    igModalImg.src = img.src;
    igModalImg.alt = img.alt;
    igTitle.textContent = img.dataset.title || "";
    igCaption.textContent = img.dataset.caption || "";
    igTags.textContent = img.dataset.tags || "";
  }

  function closeIgModal() {
    igModal.classList.remove("active");
  }

  function showNextIg() {
    igCurrentIndex = (igCurrentIndex + 1) % igImages.length;
    openIgModal(igCurrentIndex);
  }

  function showPrevIg() {
    igCurrentIndex = (igCurrentIndex - 1 + igImages.length) % igImages.length;
    openIgModal(igCurrentIndex);
  }

  igImages.forEach((img, index) => {
    img.addEventListener("click", () => openIgModal(index));
  });

  if (igClose) igClose.addEventListener("click", closeIgModal);
  if (igNext) igNext.addEventListener("click", showNextIg);
  if (igPrev) igPrev.addEventListener("click", showPrevIg);

  igModal.addEventListener("click", (e) => {
    if (e.target === igModal) closeIgModal();
  });
});
/* TREND HERO SCROLL ANIMATION - IMPROVED */

const heroText = document.querySelector(".hero-big-text");
const heroImage = document.querySelector(".hero-main-img");
const roleLeft = document.querySelector(".hero-role-left");
const roleRight = document.querySelector(".hero-role-right");
const introText = document.querySelector(".intro-reveal h2");
const introHighlight = document.querySelector(".intro-reveal h2 span");

const introReveal = document.querySelector(".intro-reveal");

function animateIntro() {
  if (!introReveal) return;

  const introTop = introReveal.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (introTop < windowHeight * 0.65) {
    introReveal.classList.add("is-active");
  } else {
    introReveal.classList.remove("is-active");
  }
}

window.addEventListener("scroll", () => {
  animateIntro();
  animateHero();
});

window.addEventListener("load", () => {
  animateIntro();
  animateHero();
});

function animateHero() {
  const scrollY = window.scrollY;
  const progress = Math.min(scrollY / 700, 1);

  if (heroText) {
    heroText.style.transform =
      `translate(calc(-50% - ${progress * 250}px), -50%) scale(${1 + progress * 0.03})`;

    }
        

  if (heroImage) {
    heroImage.style.transform =
      `scale(${1 - progress * 0.08}) translateY(${progress * 60}px)`;
  }

  if (roleLeft) {
    roleLeft.style.transform = `translateX(${progress * 300}px)`;
  }

  if (roleRight) {
    roleRight.style.transform = `translateX(${progress * 300}px)`;
  }
}