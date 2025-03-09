import { Controller } from "@hotwired/stimulus"
import "particles.js"

export default class extends Controller {
  connect() {
    particlesJS(this.element.id, {
      particles: {
        number: { value: 80 },
        color: { value: "#000000" },
        shape: { type: "circle" },
        opacity: { value: 0.8 },
        size: { value: 2 }
      }
    })
  }
};
