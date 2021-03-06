import { Controller } from "stimulus"

const labelMap = {
  Person: {
    label: "Person",
    param: "people"
  },
  Item: {
    label: "Asset",
    param: "items"
  },
  Location: {
    label: "Location",
    param: "locations"
  }
}

export default class extends Controller {
  static targets = ["inputContainer", "input", "label"]

  connect() {
    this._renderDropdown("Person")
    const dropdownSearchElement = this.inputContainerTarget.querySelector(".input > .dropdown-search")
    // Wait a tick for the child component to finish rendering
    setTimeout(() => {
      this.dropdownSearchController = dropdownSearchElement["dropdownSearch"]
    }, 1)
  }

  renderAssigntoableDropdown(e) {
    if(e.target.tagName !== "INPUT") return

    this.dropdownSearchController.inputTarget.value = undefined
    this.dropdownSearchController.hiddenInputTarget.value = undefined

    this._renderDropdown(e.target.value)
  }

  _renderDropdown(model) {
    const { label, param } = labelMap[model]
    this.inputContainerTarget.querySelector(".selector").dataset.model = param
    this.labelTarget.innerHTML = label
  }
}
