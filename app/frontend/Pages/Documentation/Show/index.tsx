import React from 'react'
import { DangerousHtml, Date, Group, Heading, Link, Menu, Page, Section } from '@/Components'
import { Routes } from '@/lib'
import { Text } from '@mantine/core'

interface ShowDocumentationProps {
	documentation: Schema.DocumentationsShow
}

const ShowDocumentation = ({ documentation }: ShowDocumentationProps) => {
	const title =  'Documentation'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Documentation', href: Routes.documentations() },
			{ title },
		] }>
			<Section>
				<Group justify="space-between">
					<Heading>{ documentation.title }</Heading>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editDocumentation(documentation.slug) }>
								Edit Documentation
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Text>In reference to: { documentation.documentable_route && <Link href={ documentation.documentable_route }>{ documentation.documentable_name }</Link> }</Text>
				{ documentation.created_by && <Text size="sm">
					Created by: <Link href={ Routes.person(documentation.created_by.id!) }>{ documentation.created_by.name } </Link>
					on <Date>{ documentation.created_at }</Date>
				</Text> }
				<Text size="sm">Last updated on <Date>{ documentation.updated_at }</Date></Text>

				<DangerousHtml mt="md">{ documentation.body }</DangerousHtml>

			</Section>
		</Page>
	)
}

export default ShowDocumentation
