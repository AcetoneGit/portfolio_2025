import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    window.addEventListener('scroll', this.updateIndicator.bind(this));
  }

  disconnect() {
    window.removeEventListener('scroll', this.updateIndicator.bind(this));
  }

  updateIndicator() {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = window.scrollY / scrollTotal;
    this.element.style.width = `${scrollProgress * 100}%`;
  }
}
