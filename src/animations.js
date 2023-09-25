export const pageFadeIn = {
  targets: ".anime.fade-in",
  translateX: [50, 0],
  opacity: [0, 1],
  duration: 600,
  delay: 200,
  easing: "easeInOutQuad",
  direction: "forward",
  autoplay: false,
};

export const pageFadeOut = {
  targets: ".anime.fade-in",
  translateX: -50,
  opacity: [1, 0],
  duration: 400,
  delay: 100,
  easing: "easeInOutQuad",
  direction: "forward",
  autoplay: false,
};

export const fadeOutLeft = {
  targets: ".anime.fade-in",
  translateX: -50,
  opacity: [1, 0],
  duration: 300,
  delay: 100,
  easing: "easeInOutQuad",
  direction: "forward",
  autoplay: false,
};

export const fadeOutRight = {
  targets: ".anime.fade-in",
  translateX: 50,
  opacity: [1, 0],
  duration: 300,
  delay: 100,
  easing: "easeInOutQuad",
  direction: "forward",
  autoplay: false,
};

export const fadeInLeft = {
  targets: ".anime.fade-in",
  translateX: [-50, 0],
  opacity: [0, 1],
  duration: 300,
  delay: 100,
  easing: "easeInOutQuad",
  direction: "forward",
  autoplay: false,
};

export const fadeInRight = {
  targets: ".anime.fade-in",
  translateX: [50, 0],
  opacity: [0, 1],
  duration: 300,
  delay: 100,
  easing: "easeInOutQuad",
  direction: "forward",
  autoplay: false,
};
