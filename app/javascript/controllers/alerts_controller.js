import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["flash", "input"]
  
  msToShowAlert = 5 * 1000
  animationSpeed = 500
  lag = 1500

  connect() {
    this.inputTargets.forEach((target, i) => {
      setTimeout(() => {
        target.click()
      }, this.msToShowAlert + (this.lag * i) || 0)    
    })
  }

  closeAlert(e) {
    setTimeout(() => {
      console.log({ target: e.target })
      e.target.closest(".message").remove()
    }, this.animationSpeed || 0)
  }

}
