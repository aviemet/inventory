
import { Group, Heading, Menu, Section } from '@/Components'
import { EditIcon } from '@/Components/Icons'
import { Routes } from '@/lib'
import React from 'react'

interface IDetailsProps {
	title: string
	department: Schema.Department
}

const Details = ({ title, department }: IDetailsProps) => {

	return (
		<Section>
			<Group justify="space-between">
				<Heading>{ title }</Heading>

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
