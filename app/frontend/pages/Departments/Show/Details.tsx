import { Group, Title, Menu, Section } from "@/components"
import { EditIcon } from "@/components/Icons"
import { Routes } from "@/lib"

interface DetailsProps {
	title: string
	department: Schema.DepartmentsShow
}

const Details = ({ title, department }: DetailsProps) => {

	return (
		<Section>
			<Group justify="space-between">
				<Title>{ title }</Title>

				<Menu position="bottom-end">
					<Menu.Target />

					<Menu.Dropdown>
						<Menu.Link
							href={ Routes.editDepartment(department.slug) }
							icon={ <EditIcon /> }
						>
							Edit
						</Menu.Link>
					</Menu.Dropdown>
				</Menu>
			</Group>

			<div>Location: { department.location?.name }</div>
		</Section>
	)
}

export default Details
