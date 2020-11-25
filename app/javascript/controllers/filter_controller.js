import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input", "rows" ]

  filterResults() {
    const input = this.inputTarget.value
    console.log({ input })
  }
}
