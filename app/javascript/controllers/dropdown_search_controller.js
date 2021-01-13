import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["parent", "selector", "input", "hiddenInput", "option"]

  connect() {
    console.log({ hidden: this.hiddenInputTarget })
  }

  toggle(e) {
    e.stopPropagation()

    if(e.target === this.inputTarget) return

    if(this.parentTarget.classList.contains("open")) {
      this.hide()
    } else {
      this.show()
    }
  }

  show() {
    this.parentTarget.classList.add("open")
    this.inputTarget.focus()

    document.addEventListener("click", bodyClick => this._bodyClickListener(bodyClick.target))
  }

  hide() {
    this.parentTarget.classList.remove("open")
    this.inputTarget.blur()
  }
  
  _bodyClickListener(clickTarget) {
    if(this.parentTarget.contains(clickTarget)) return false

    this.hide()
    document.removeEventListener("click", this._bodyClickListener)
  }

  focusInput() {
    this.show()
    this.inputTarget.select()
  }

  filter(e) {
    this.optionTargets.forEach(target => {
      if(target.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) < 0) {
        target.classList.add("hidden")
      } else {
        target.classList.remove("hidden")
      }
    })
  }

  select(e) {
    this.hiddenInputTarget.value = e.target.dataset.id
    this.inputTarget.value = e.target.textContent
    this.hide()
  }
}
