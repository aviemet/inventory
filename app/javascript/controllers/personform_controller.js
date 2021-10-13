import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["departmentSelect"]

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
        this.departmentSelectTarget.innerHTML = options.join("")
        this.departmentSelectTarget.removeAttribute("disabled")
      })
  }
}
