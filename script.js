gsap.registerPlugin(ScrollTrigger);

// Animate hero
gsap.from(".hero-content", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-content p", {
  y: 30,
  opacity: 0,
  delay: 0.5,
  duration: 1,
  ease: "power3.out"
});

// Profiles scroll-in
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".profiles",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  stagger: 0.3,
  duration: 1
});

// Merge logo pulse on scroll
gsap.from(".logo-merge", {
  scrollTrigger: {
    trigger: ".hero-logo",
    start: "top 90%"
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)"
});
