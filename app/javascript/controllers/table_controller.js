import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "heading", "cell", "checkbox", "selectAll" ]

  /** TOGGLE COLUMNS */
  toggleColumn(e) {
    const field = e.target.dataset.tableFieldName
    const heading = this.headingTargets.find(el => el.dataset.tableFieldName === field)
    if(!heading) return

    console.log({ field })

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