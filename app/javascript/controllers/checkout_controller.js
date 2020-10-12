import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["inputContainer"]

  buttons(e) {
    if(e.target.tagName === "INPUT") {
      switch(e.target.value) {
        case "asset":
          this._renderAssetSelect();
          break;
        case "location":
          this._renderLocationSelect();
          break;
        case "user":
        default:
          this._renderUserSelect();
      }
    }
  }

  _renderUserSelect() {
    this.inputContainerTarget.innerHTML = "User"
  }

  _renderAssetSelect() {
    this.inputContainerTarget.innerHTML = "Asset"
  }

  _renderLocationSelect() {
    this.inputContainerTarget.innerHTML = "Location"
  }
}


/*

selectCompany(e) {
  if(!/^\d$/.test(e.target.value)) return
  
  const url = this.data.get("departmentsUrl").replace(":id", e.target.value)
  
  fetch(url)
    .then(response => response.text())
    .then(text => {
      const json = JSON.parse(text)
      
      const options = ["<option>-- Department --</option>"]
      json.forEach(option => {
        options.push(`<option value=${option.id}>${option.name}</option>`)
      })
      this.departmentSelectTarget.innerHTML = options.join('')
      this.departmentSelectTarget.removeAttribute('disabled')
    })
}

*/
