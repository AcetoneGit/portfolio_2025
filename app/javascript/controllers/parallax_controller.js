import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["name", "photo"]

  connect() {
    window.addEventListener('mousemove', this.handleMouseMove.bind(this))
  }

  disconnect() {
    window.removeEventListener('mousemove', this.handleMouseMove.bind(this))
  }

  handleMouseMove(e) {
    const moveX = (e.clientX - window.innerWidth / 2) / 50
    const moveY = (e.clientY - window.innerHeight / 2) / 50

    if (this.hasNameTarget) {
      this.nameTarget.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    if (this.hasPhotoTarget) {
      this.photoTarget.style.transform = `translate(${-moveX/2}px, ${-moveY/2}px)`
    }
  }
}
