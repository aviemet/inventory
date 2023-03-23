
import { Flex, Heading, Menu, Section } from '@/Components'
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
			<Flex position="apart">
				<Heading sx={ { flex: 1 } }>{ title }</Heading>

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
			</Flex>

			<div>Location: { department.location?.name }</div>
		</Section>
	)
}

export default Details
