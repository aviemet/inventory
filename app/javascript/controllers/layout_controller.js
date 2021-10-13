import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["body", "sidebar", "modalOverlay", "modalWindowArea", "modalContentArea"]

  connect() {
    this._setDarkMode()
  }

  _setDarkMode() {
    // if(!this.bodyTarget.classList.contains("dark") && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   this.bodyTarget.classList.add("dark")
    // }
  }

  toggleSidebar() {
    this.sidebarTarget.classList.toggle("side-bar-closed")
  }

  modalOpen(e) {
    this._showModal()
    const modalId = e.target.dataset.layoutModalId
    const content = document.getElementById(modalId).content
    this.modalContentAreaTarget.appendChild(content)
  }

  modalClose() {
    this._hideModal()
  }

  _showModal() {
    this.modalOverlayTarget.classList.add("visible")
    // Use an inner event listener to capture clicks inside of modal window
    this.modalWindowAreaTarget.addEventListener("click", this._stopPropagation)
    // Register event listener to close modal
    this.modalOverlayTarget.addEventListener("click", () => {
      this.modalWindowAreaTarget.removeEventListener("click", this._stopPropagation)
      this._hideModal()
    }, { once: true })
  }

  _hideModal() {
    this.modalOverlayTarget.classList.remove("visible")
  }

  _stopPropagation(e) {
    e.stopPropagation()
  }

}