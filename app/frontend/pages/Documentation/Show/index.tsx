import { Text } from "@mantine/core"
import React from "react"

import { DangerousHtml, DateTimeFormatter, Group, Title, Link, Menu, Page, Section } from "@/components"
import { Routes } from "@/lib"

interface ShowDocumentationProps {
	documentation: Schema.DocumentationsShow
}

const ShowDocumentation = ({ documentation }: ShowDocumentationProps) => {
	const title = "Documentation"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Documentation", href: Routes.documentations() },
			{ title, href: window.location.href },
		] }>
			<Section>
				<Group justify="space-between">
					<Title>{ documentation.title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editDocumentation(documentation.slug) }>
								Edit Documentation
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

				<Text>In reference to: { documentation.route && <Link href={ documentation.route }>{ documentation.documentable_name }</Link> }</Text>
				{ documentation.created_by && <Text size="sm">
					Created by: <Link href={ Routes.person(documentation.created_by.id!) }>{ documentation.created_by.name } </Link>
					on <DateTimeFormatter>{ documentation.created_at }</DateTimeFormatter>
				</Text> }
				<Text size="sm">Last updated on <DateTimeFormatter>{ documentation.updated_at }</DateTimeFormatter></Text>

				<DangerousHtml mt="md">{ documentation.body }</DangerousHtml>

			</Section>
		</Page>
	)
}

export default ShowDocumentation
