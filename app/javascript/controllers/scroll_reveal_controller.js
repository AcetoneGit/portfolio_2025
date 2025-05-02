import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    if (typeof ScrollReveal === 'undefined') {
      console.error("ScrollReveal n'est pas chargé");
      return;
    }

    // Configuration de base
    const config = {
      distance: '50px',
      duration: 250,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 50
    };

    ScrollReveal().reveal('.skills-container', {
      ...config,
      delay: 100,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.projects-container', {
      ...config,
      delay: 150,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.education-container', {
      ...config,
      delay: 200,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.codewars-container', {
      ...config,
      delay: 250,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.skill-card', {
      ...config,
      delay: 100,
      interval: 100,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.project-card', {
      ...config,
      delay: 150,
      interval: 150,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.education-item', {
      ...config,
      delay: 200,
      interval: 150,
      origin: 'left'
    });
  }
}
