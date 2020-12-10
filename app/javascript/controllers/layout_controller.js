import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["sidebar"]

  toggleSidebar() {
    this.sidebarTarget.classList.toggle("side-bar-closed")
  }

}