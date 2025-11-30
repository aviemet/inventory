
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import DepartmentForm from "@/domains/Departments/Form"

interface EditDepartmentProps {
	department: Schema.DepartmentsEdit
}

const EditDepartment = ({ department }: EditDepartmentProps) => {
	const title = `Edit ${department.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Departments", href: Routes.departments() },
			{ title: department.name, href: Routes.department(department) },
			{ title: "Edit Department", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<DepartmentForm to={ Routes.department(department) } method="patch" department={ department } />
			</Section>
		</Page>
	)
}

export default EditDepartment
