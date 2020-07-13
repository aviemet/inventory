import { Controller } from 'stimulus'

/**
 * Controller for managing general application layout interactions
 * This has the potential to grow out of hand, keep an eye on it
 */
export default class extends Controller {
	static targets = ["input"]
	
	msToShowAlert = 10 * 1000

  connect() {
    this._removeAlertAfterTimeout(this.msToShowAlert)
  }

  removeAlert(e) {
    const ms = e.target.dataset.animationSpeed
    this._removeAlert(parseInt(ms))
  }

  /** private **/

  _removeAlert(ms) {
    setTimeout(() => {
      this.element.remove();
    }, ms || 0)
  }

  _removeAlertAfterTimeout(ms) {
    setTimeout(() => {
      this.inputTarget.click()
    }, ms || 0)    
  }

}