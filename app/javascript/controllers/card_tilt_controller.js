import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["card"]

  connect() {
    this.cardTargets.forEach(card => {
      card.addEventListener('mousemove', this.handleMouseMove.bind(this))
      card.addEventListener('mouseleave', this.handleMouseLeave.bind(this))
    })
  }

  disconnect() {
    this.cardTargets.forEach(card => {
      card.removeEventListener('mousemove', this.handleMouseMove.bind(this))
      card.removeEventListener('mouseleave', this.handleMouseLeave.bind(this))
    })
  }

  handleMouseMove(e) {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = (y - centerY) / 10
    const tiltY = -(x - centerX) / 10

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`

    card.style.boxShadow = `
      ${-tiltY/3}px ${-tiltX/3}px 15px rgba(255, 255, 255, 0.05),
      ${tiltY/5}px ${tiltX/5}px 20px rgba(0, 0, 0, 0.3)
    `
  }

  handleMouseLeave(e) {
    const card = e.currentTarget
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)'

    card.style.transition = 'all 0.5s ease'
    setTimeout(() => {
      card.style.transition = 'none'
    }, 500)
  }
}
