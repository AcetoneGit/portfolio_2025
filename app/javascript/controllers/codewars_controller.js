import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["completed"]

  connect() {
    this.fetchCodeWarsData()

    this.refreshInterval = setInterval(() => {
      this.fetchCodeWarsData()
    }, 3600000)
  }

  disconnect() {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval)
    }
  }

  async fetchCodeWarsData() {
    try {
      const response = await fetch("https://www.codewars.com/api/v1/users/AcetoneGit")

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données CodeWars")
      }

      const data = await response.json()

      this.completedTarget.textContent = data.codeChallenges.totalCompleted

      this.animateCounter(data.codeChallenges.totalCompleted)

    } catch (error) {
      console.error("Erreur:", error)
    }
  }

  animateCounter(finalValue) {
    const startValue = parseInt(this.completedTarget.textContent)
    const duration = 1500
    const startTime = performance.now()

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime

      if (elapsedTime < duration) {
        const progress = elapsedTime / duration
        const currentValue = Math.floor(startValue + progress * (finalValue - startValue))
        this.completedTarget.textContent = currentValue
        requestAnimationFrame(updateCounter)
      } else {
        this.completedTarget.textContent = finalValue
      }
    }

    requestAnimationFrame(updateCounter)
  }
}
