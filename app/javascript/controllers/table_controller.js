import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "checkbox", "selectAll" ]

  checked(e) {
    this.selectAllTarget.checked = !this.checkboxTargets.some(target => !target.checked)
    this._toggleCheckedClass(e.target)
  }

  checkAll() {
    const toggleValue = this.selectAllTarget.checked
    this.checkboxTargets.forEach(checkbox => {
      checkbox.checked = toggleValue
      this._toggleCheckedClass(checkbox)
    })
  }

  _toggleCheckedClass(el) {
    const className = "checked"
    const classList = el.closest("tr").classList
    if(el.checked) {
      classList.add(className)
    } else {
      classList.remove(className)
    }
  }
}