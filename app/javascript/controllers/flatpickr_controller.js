import Flatpickr from "stimulus-flatpickr"
import "flatpickr/dist/flatpickr.css"

export default class extends Flatpickr {
  change(selectedDates, dateStr, instance) {
    console.log({ selectedDates, dateStr, instance })
  }
}