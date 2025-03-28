import { Controller } from "@hotwired/stimulus"
import "particles.js"

export default class extends Controller {
  connect() {
    particlesJS(this.element.id, {
      particles: {
        number: { value: 80 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.8 },
        size: { value: 2 }
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: true },
          onclick: { enable: true },
          resize: true
        }
      }
    })

    this.element.style.pointerEvents = "none";

    const canvas = this.element.querySelector("canvas");
    if (canvas) {
      canvas.style.pointerEvents = "auto";
    }
  }
}
