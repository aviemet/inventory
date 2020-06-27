import { Controller } from 'stimulus'
import Rails from "@rails/ujs";

export default class extends Controller {
	static targets = ["departmentSelect"]

	selectCompany(e) {
		if(!/^\d$/.test(e.target.value)) return
		
		const url = this.data.get("departmentsUrl").replace(":id", e.target.value)
		
		fetch(url)
			.then(response => response.text())
			.then(html => {
				console.log({ html })
				this.departmentSelectTarget.innerHTML = html
			})
	}
}
