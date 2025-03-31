import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["cursor", "follower"]

  connect() {
    if (window.innerWidth <= 768) return;

    document.addEventListener('mousemove', this.moveCursor.bind(this))

    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card, .education-item')
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', this.enlargeCursor.bind(this))
      element.addEventListener('mouseleave', this.resetCursor.bind(this))
    })
  }

  disconnect() {
    document.removeEventListener('mousemove', this.moveCursor.bind(this))
  }

  moveCursor(e) {
    this.cursorTarget.style.left = `${e.clientX}px`
    this.cursorTarget.style.top = `${e.clientY}px`

    setTimeout(() => {
      this.followerTarget.style.left = `${e.clientX}px`
      this.followerTarget.style.top = `${e.clientY}px`
    }, 80)
  }

  enlargeCursor() {
    this.followerTarget.classList.add('active')
  }

  resetCursor() {
    this.followerTarget.classList.remove('active')
  }
}
