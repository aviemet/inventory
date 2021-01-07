import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["parent", "heading"]

  toggle(e) {
    e.stopPropagation()

    if(this.parentTarget.classList.contains("open")) {
      this.hide()
    } else {
      this.show()
    }
  }

  show() {
    this.parentTarget.classList.add("open")

    document.addEventListener("click", bodyClick => this._bodyClickListener(bodyClick.target))
  }

  hide() {
    this.parentTarget.classList.remove("open")
  }
  
  _bodyClickListener(clickTarget) {
    if(this.parentTarget.contains(clickTarget)) return false

    this.hide()
    document.removeEventListener("click", this._bodyClickListener)
  }

}