import { Controller } from 'stimulus'

/**
 * Controller for managing general application layout interactions
 * This has the potential to grow out of hand, keep an eye on it
 */
export default class extends Controller {
  static targets = ["sidebar"]

  initialize() {
    // Add the 'select' class to all select boxes so the down arrow appears
    const selects = document.getElementsByTagName('select')
    for(let select of selects) {
      select.parentElement.classList.add('select')
    }
  }

  toggleSidebar() {
    this.sidebarTarget.classList.toggle("side-bar-closed")
  }

}