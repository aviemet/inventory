import { Controller } from "stimulus"

/**
 * Controller for managing general application layout interactions
 * This has the potential to grow out of hand, keep an eye on it
 */
export default class extends Controller {
  static targets = ["sidebar"]

  toggleSidebar() {
    this.sidebarTarget.classList.toggle("side-bar-closed")
  }

}