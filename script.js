const products = [
  {
    image: "https://via.placeholder.com/500x500/ffffff/000000",
    bg: "#0f172a",
    particles: "#38bdf8"
  },
  {
    image: "https://via.placeholder.com/500x500/000000/ffffff",
    bg: "#1f2933",
    particles: "#f472b6"
  },
  {
    image: "https://via.placeholder.com/500x500/ff0000/ffffff",
    bg: "#3f1d38",
    particles: "#fb7185"
  }
];

let index = 0;

const hero = document.getElementById("hero");
const img = document.getElementById("productImage");

function loadParticles(color) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      color: { value: color },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      move: { speed: 2 }
    }
  });
}

function changeProduct(i) {
  gsap.to(img, {
    y: 50,
    opacity: 0,
    duration: 0.4,
    onComplete: () => {
      img.src = products[i].image;
      hero.style.background = products[i].bg;
      loadParticles(products[i].particles);

      gsap.fromTo(img,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );
    }
  });
}

document.getElementById("next").onclick = () => {
  index = (index + 1) % products.length;
  changeProduct(index);
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + products.length) % products.length;
  changeProduct(index);
};

// INITIAL LOAD
hero.style.background = products[0].bg;
loadParticles(products[0].particles);
