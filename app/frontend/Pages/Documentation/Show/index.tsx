import React from 'react'
import { Group, Heading, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'

interface IShowDocumentationProps {
	documentation: Schema.DocumentationsShow
}

const ShowDocumentation = ({ documentation }: IShowDocumentationProps) => {
	const title =  'Documentation'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Documentation', href: Routes.documentations() },
			{ title },
		] }>
			<Section>
				<Group position="apart">
					<Heading>{ title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editDocumentation(documentation.id) }>
								Edit Documentation
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowDocumentation
