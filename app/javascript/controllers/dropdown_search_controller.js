import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["parent", "selector", "input", "hiddenInput", "option"]

  connect() {
    // In the case of a page refresh where values have been entered, 
    // highlight the selected value
    if(this.hiddenInputTarget.value.trim() !== "") {
      this._applySelectedToOption(this._selectedOption())
    }
  }

  toggle(e) {
    if(e.target === this.inputTarget) return

    if(this._isOpen()) {
      this.hide()
    } else {
      this.show()
    }
  }

  show(focus = true) {
    if(this._isOpen()) return

    this.parentTarget.classList.add("open")
    if(focus) this.inputTarget.focus()

    const selectedOption = this._selectedOption()
    const optionToActivate = selectedOption ? selectedOption : this.optionTargets[0]

    optionToActivate.classList.add("active")

    document.addEventListener("click", bodyClick => this._bodyClickListener(bodyClick.target))
  }

  hide() {
    this.parentTarget.classList.remove("open")
    this._removeHighlights()
    this._unfilter()

    // If the dropdown is closed without making a selection,
    // clear the input and re-apply "selected" to the selected option
    const selectedOption = this._selectedOption()
    if(selectedOption && selectedOption.textContent !== this.inputTarget.value) {
      this.inputTarget.value = selectedOption.textContent
    }
  }
  
  _bodyClickListener(clickTarget) {
    if(this.parentTarget.contains(clickTarget)) return false

    this.hide()
    document.removeEventListener("click", this._bodyClickListener)
  }

  // Active the dropdown if the input was the clicked/focused element
  focusInput() {
    this.show()
    this.inputTarget.select()
  }

  /**
   * Because input value only changes on keyup, we need to attach the filter method
   * to the keyup event.
   * Keydown can handle the user interaction of navigating and choosing options
   */

  keysToIntercept = ["ArrowUp", "ArrowDown", "Enter", "Escape", "Tab", "ArrowLeft", "ArrowRight"]
  modifierKeys = ["Shift", "CapsLock", "Control", "Alt", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Insert", "Home", "End", "PageUp", "PageDown", "OS", "ContextMenu", "NumLock", "ScrollLock", "Pause"]

  handleKeyDown(e) {
    if(!this.keysToIntercept.includes(e.key)) return

    if(!["ArrowLeft", "ArrowRight", "Tab"].includes(e.key)) {
      e.preventDefault()
    }

    switch(e.key) {
      case "ArrowUp":
        if(this._isOpen()) {
          this._selectPreviousOption()
        } else {
          this.show(false)
        }
        break
      case "ArrowDown":
        if(this._isOpen()) {
          this._selectNextOption()
        } else {
          this.show(false)
        }
        break
      case "Enter":
        if(this._isOpen()) {
          this._selectOption(this._activeOption())
          this.hide()
        } else {
          this.show()
        }
        break
      case "Escape":
      case "Tab":
        this.hide()
        break
      default:
        break
    }
  }

  handleKeyUp(e) {
    if(this.modifierKeys.concat(this.keysToIntercept).includes(e.key)) return
    
    // If the dropdown is hidden but the input is focused, open the dropdown on typing
    this.show(false)

    this._filter(e)
  }

  _selectNextOption() {
    const option = this._activeOption()
    if(option && option.nextElementSibling) {
      option.classList.remove("active")
      option.nextElementSibling.classList.add("active")
    }
  }

  _selectPreviousOption() {
    const option = this._activeOption()
    if(option && option.previousElementSibling) {
      option.classList.remove("active")
      option.previousElementSibling.classList.add("active")
    }
  }

  _filter(e) {
    const inputValue = e.target.value.toLowerCase()

    this.optionTargets.forEach(target => {
      if(inputValue !== "" && target.textContent.toLowerCase().indexOf(inputValue) < 0) {
        target.classList.add("hidden")
      } else {
        target.classList.remove("hidden")
      }
    })
  }

  select(e) {
    this._selectOption(e.target)
  }

  _selectOption(el) {
    this._applySelectedToOption(el)

    this.hiddenInputTarget.value = el.dataset.id
    this.inputTarget.value = el.textContent
    this.hide()
  }

  highlightOption(e) {
    this._removeHighlights()
    e.target.classList.add("active")
  }

  _applySelectedToOption(el) {
    this.optionTargets.forEach(option => option.classList.remove("selected"))
    el.classList.add("selected")
  }

  _selectedOption() {
    const selectedId = this.hiddenInputTarget.value.trim()
    return this.optionTargets.find(option => option.dataset.id === selectedId)
  }

  _activeOption() {
    return this.optionTargets.find(option => option.classList.contains("active"))
  }

  _removeHighlights() {
    this.optionTargets.forEach(option => option.classList.remove("active"))
  }

  _unfilter() {
    this.optionTargets.forEach(option => option.classList.remove("hidden"))
  }

  _isOpen() {
    return this.parentTarget.classList.contains("open")
  }
}
