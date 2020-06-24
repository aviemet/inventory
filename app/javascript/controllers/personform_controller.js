import { Controller } from 'stimulus'
import Rails from "@rails/ujs";

export default class extends Controller {
	static targets = ["departmentField"]

	connect() {
		console.log({ target: this.departmentFieldTarget })
	}

	selectCompany(e) {
		const url = this.data.get("departmentsUrl").replace(":id", e.target.value)
		fetch(url)
			.then(response => response.json())
			.then(html => {
				console.log({ html })
			})
	}
}