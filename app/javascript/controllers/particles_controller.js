import { Controller } from "@hotwired/stimulus"
import "particles.js"

export default class extends Controller {
  connect() {
    particlesJS(this.element.id, {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: {
          value: 0.4,
          random: true,
          animation: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 3,
          random: true,
          animation: { enable: true, speed: 2, size_min: 0.1, sync: false }
        },
        line_linked: { enable: true, distance: 150, color: "#3d3d3d", opacity: 0.4, width: 1 },
        move: {
          enable: true,
          speed: 1,
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });

    this.element.style.pointerEvents = "none";

    const canvas = this.element.querySelector("canvas");
    if (canvas) {
      canvas.style.pointerEvents = "auto";
    }
  }
}
