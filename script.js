gsap.registerPlugin(ScrollTrigger);

// HERO TEXT ANIMATION
gsap.from(".reveal-text", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out"
});

// FADE UP ELEMENTS
gsap.utils.toArray(".fade-up").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
    },
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
});

// CARDS SCROLL ANIMATION
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 70%",
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out"
});
