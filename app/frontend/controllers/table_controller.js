import ApplicationController from "./application_controller"
import { useDebounce } from "stimulus-use"

export default class extends ApplicationController {
  static targets = [ "filterForm", "filterInput", "heading", "cell", "checkbox", "selectAll", "columnToggleMenu" ]
  static values = { preferences: Object, name: String }
  static debounces = [{ name: "submitSearch", wait: 500 }]

  depressedKeys = new Set()

  connect() {
    super.connect()

    useDebounce(this)

    this._applyUserTablePreferences()

    this._cursorPositionEnd(this.filterInputTarget)
  }

  _applyUserTablePreferences() {
    if(!this.nameValue) return

    // Build the preferences object
    const headings = {}
    this.headingTargets.forEach(el => headings[el.dataset.tableFieldName] = true)
    this.headings = {[this.nameValue]: Object.assign(headings, this.preferencesValue[this.nameValue] || {}) }

    // Uncheck menu checkboxes of hidden columns
    // I think it's slightly faster to query the menu items once and use them to loop through field names
    // than to loop through field names and perform a DOM query each time
    this.columnToggleMenuTarget.querySelectorAll("li input[type=checkbox]").forEach(el => {
      if(this.headings[this.nameValue][el.dataset.tableFieldName] === false) {
        el.checked = false
        this._hideColumn(el.dataset.tableFieldName)
      }
    })
  }

  /** TOGGLE COLUMNS */
  toggleColumn(e) {
    const field = e.target.dataset.tableFieldName

    if(e.target.checked) {
      this._showColumn(field)
    } else {
      this._hideColumn(field)
    }

    // Persist column preferences
    if(this.nameValue) {
      this.headings[this.nameValue][field] = e.target.checked

      return this.stimulate("Table#save_user_prefs", this.headings)
        .then(() => {
          console.log({ headings: this.headings })
        })
        .catch(error => console.error({ error }))
    }
  }

  _hideColumn(field) {
    const heading = this.headingTargets.find(el => el.dataset.tableFieldName === field)
    if(!heading) return

    this._hideElement(heading)
    this.cellTargets.forEach(cell => {
      if(cell.dataset.tableFieldName === field) {
        this._hideElement(cell)
      }
    })
  }

  _showColumn(field) {
    const heading = this.headingTargets.find(el => el.dataset.tableFieldName === field)
    if(!heading) return

    this._showElement(heading)
    this.cellTargets.forEach(cell => {
      if(cell.dataset.tableFieldName === field) {
        this._showElement(cell)
      }
    })
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
  listenKeyDown(e) {
    this.depressedKeys.add(e.key)
    console.log({ keys: Array.from(this.depressedKeys) })
  }

  filterResults(e) {
    this.depressedKeys.delete(e.key)

    if(!this._shouldTriggerSearch(e)) return
    console.log("helloooooo....")

    this.submitSearch()
  }

  _shouldTriggerSearch(e) {
    const MIN_SEARCH_LENGTH = 2
    const len = this.filterInputTarget.value.length
    if(len < MIN_SEARCH_LENGTH) return false

    if(Array.from(this.depressedKeys).some(key => ["Control", "Alt", "OS"].includes(key))) return false

    const test = /[\S]/g.test(e.key)
    console.log({ test, key: e.key })
    return /[\S]/g.test(e.key)
  }

  submitSearch() {
    this.filterInputTarget.value = this.filterInputTarget.value.trim()
    this.filterFormTarget.submit()
  }

  _cursorPositionEnd(input) {
    var len = input.value.length

    if(input.setSelectionRange) {
      input.focus()
      input.setSelectionRange(len, len)
    } else if (input.createTextRange) {
      var range = input.createTextRange()
      range.collapse(true).moveEnd("character", len).moveStart("character", len).select()
    }
  }
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