import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["add_field", "template"]

  addAssociation(event) {
    event.preventDefault()
    const content = this.templateTarget.innerHTML
    this.add_fieldTarget.insertAdjacentHTML("beforebegin", content)
  }

  removeAssociation(event) {
    event.preventDefault()
    let item = event.target.closest(".nested-fields")
    item.querySelector("input[name='_destroy'").value = 1
    item.style.display = "none"
  }
}

// Use in view as such:
/*
div data-controller="nested-form"
 template data-nested-form-target="template"
   = form.fields_for :field, Model.new, child_index: Time.now.to_i do |model|
     = render "model_fields_from_partial"

 \ Render existing form elements
 = form.fields_for :model do |model|
   = render "model_fields_from_partial"
  
 div data-nested-form-target="add_field"
   = link_to "Add Model", "#", data: { action: "nested-form#addAssociation" }
*/

// Example form elements partial (model_fields_from_partial above)
/*
.form-group
  = form.hidden_field :_destroy
  = form.text_field :field_name, placeholder: "Placeholder Text", class: "form-control"
  small
    = link_to "Remove", "#", data: { action: "click->nested-form#removeAssociation" }
*/