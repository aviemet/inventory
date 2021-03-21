import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "heading", "cell", "checkbox", "selectAll", "columnToggleMenu" ]
  static values = { preferences: Object }

  /** TOGGLE COLUMNS */
  toggleColumn(e) {
    const field = e.target.dataset.tableFieldName
    const heading = this.headingTargets.find(el => el.dataset.tableFieldName === field)
    if(!heading) return

    if(e.target.checked) {
      this._showElement(heading)
      this.cellTargets.forEach(cell => {
        if(cell.dataset.tableFieldName === field) {
          this._showElement(cell)
        }
      })
    } else {
      this._hideElement(heading)
      this.cellTargets.forEach(cell => {
        if(cell.dataset.tableFieldName === field) {
          this._hideElement(cell)
        }
      })
    }
  }

  _hideElement(el) {
    el.classList.add("hidden")
  }

  _showElement(el) {
    el.classList.remove("hidden")
  }

  onShowColumnMenu(e) {
    document.addEventListener("click", clickEvent => this._bodyClickListener(clickEvent.target, e.target))
  }

  _bodyClickListener(clickTarget, checkboxToggle) {
    if(this.columnToggleMenuTarget.contains(clickTarget)) return false

    checkboxToggle.checked = false
    document.removeEventListener("click", this._bodyClickListener)
  }
  /** END TOGGLE COLUMNS */

  /** SEARCH FILTER **/

  /** END SEARCH FILTER **/

  /** CHECKBOXES **/
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
  /** END CHECKBOXES **/
}