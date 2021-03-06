// import { Controller } from "stimulus"
import { ApplicationController } from "stimulus-use"
import StimulusReflex from "stimulus_reflex"

/* This is your ApplicationController.
 * All StimulusReflex controllers should inherit from this class.
 *
 * Example:
 *
 *   import ApplicationController from './application_controller'
 *
 *   export default class extends ApplicationController { ... }
 *
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  connect () {
    StimulusReflex.register(this)
  }

  exposeController(name) {
    name = name || this._camelCase(this.identifier)
    this.element[name] = this
  }

  _camelCase(str) {
    return str
      .split("--")
      .slice(-1)[0]
      .split(/[-_]/)
      .map(w => w.replace(/./, m => m.toUpperCase()))
      .join("")
      .replace(/^\w/, c => c.toLowerCase())
  }

  /* Application-wide lifecycle methods
   *
   * Use these methods to handle lifecycle concerns for the entire application.
   * Using the lifecycle is optional, so feel free to delete these stubs if you don't need them.
   *
   * Arguments:
   *
   *   element - the element that triggered the reflex
   *             may be different than the Stimulus controller's this.element
   *
   *   reflex - the name of the reflex e.g. "Example#demo"
   *
   *   error/noop - the error message (for reflexError), otherwise null
   *
   *   reflexId - a UUID4 or developer-provided unique identifier for each Reflex
   */

  beforeReflex (element, reflex, noop, reflexId) {
    // document.body.classList.add('wait')
  }

  reflexSuccess (element, reflex, noop, reflexId) {
    // show success message etc...
  }

  reflexError (element, reflex, error, reflexId) {
    // show error message etc...
  }

  afterReflex (element, reflex, noop, reflexId) {
    // document.body.classList.remove('wait')
  }
}
