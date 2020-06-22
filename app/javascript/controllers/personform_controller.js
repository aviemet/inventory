import { Controller } from 'stimulus'

export default class extends Controller {
	dothing(e) {
		console.log(e.target.value)
	}
}