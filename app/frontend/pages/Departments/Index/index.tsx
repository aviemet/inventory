import { NewIcon } from "@/components/Icons"
import DepartmentsTable, { departmentsColumns } from "@/domains/Departments/Table"
import { IndexPageTemplate } from "@/features"
import { Routes } from "@/lib"


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
			columns={ departmentsColumns }
			pagination={ pagination }
			deleteRoute={ Routes.departments() }
			menuOptions={ [
				{ label: "New Department", href: Routes.newDepartment(), icon: <NewIcon /> },
			] }
		>
			<DepartmentsTable records={ departments } pagination={ pagination } model="departments" />
		</IndexPageTemplate>
	)
}

export default DepartmentsIndex
