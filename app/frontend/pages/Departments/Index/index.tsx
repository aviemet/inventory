
import { NewIcon } from "@/components/Icons"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"

import DepartmentsTable from "@/domains/Departments/Table"

interface DepartmentsIndexProps {
	departments: Schema.DepartmentsIndex[]
	pagination: Schema.Pagination
}

const DepartmentsIndex = ({ departments, pagination }: DepartmentsIndexProps) => {
	return (
		<IndexPageTemplate
			title="Departments"
			model="departments"
			rows={ departments }
			pagination={ pagination }
			deleteRoute={ Routes.departments() }
			menuOptions={ [
				{ label: "New Department", href: Routes.newDepartment(), icon: <NewIcon /> },
			] }
		>
			<DepartmentsTable />
		</IndexPageTemplate>
	)
}

export default DepartmentsIndex
