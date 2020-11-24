import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["inputContainer"]

  connect() {
    this._renderDropdown("person")
  }

  renderAssigntoableDropdown(e) {
    if(e.target.tagName !== "INPUT") return

    const model = e.target.value
    this._renderDropdown(model)
  }

  _renderDropdown(model) {
    const lowerModel = model.toLowerCase()
    const company = this.data.get("company")
    const getParams = "name=assignment[assign_toable_id]"
    fetch(`/partials/dropdown/${lowerModel}/${company}?${getParams}`)
      .then(response => response.text())
      .then(text => {
        const label = `<label class="string capitalize" for="assignment_assign_toable_type">${model}</label>`
        this.inputContainerTarget.innerHTML = `${label}${text}`
      })
  }

}
