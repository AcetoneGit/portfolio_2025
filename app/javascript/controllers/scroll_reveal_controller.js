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
      duration: 800,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      interval: 100
    };

    ScrollReveal().reveal('.skills-container', {
      ...config,
      delay: 300,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.projects-container', {
      ...config,
      delay: 400,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.education-container', {
      ...config,
      delay: 500,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.codewars-container', {
      ...config,
      delay: 600,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.skill-card', {
      ...config,
      delay: 300,
      interval: 100,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.project-card', {
      ...config,
      delay: 400,
      interval: 150,
      origin: 'bottom'
    });

    ScrollReveal().reveal('.education-item', {
      ...config,
      delay: 500,
      interval: 150,
      origin: 'left'
    });
  }
}
