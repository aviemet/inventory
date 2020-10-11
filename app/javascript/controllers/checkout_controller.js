import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ["input"]

  buttons(e) {
    if(e.target.tagName === "INPUT") {
      // TODO: Display corresponding input
    }
  }
}