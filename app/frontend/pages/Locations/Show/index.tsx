import { Group, Title, Menu, Page, Section } from "@/components"
import { Routes } from "@/lib"

interface ShowLocationProps {
	location: Schema.LocationsShow
}

const ShowLocation = ({ location }: ShowLocationProps) => {
	const title = location.name || "Location"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Locations", href: Routes.locations() },
			{ title, href: window.location.href },
		] }>
			<Section>
				<Group justify="space-between">
					<Title>{ title }</Title>

					<Menu position="bottom-end">
						<Menu.Target />
						<Menu.Dropdown>
							<Menu.Link href={ Routes.editLocation(location.slug) }>
								Edit Location
							</Menu.Link>
						</Menu.Dropdown>
					</Menu>
				</Group>

			</Section>
		</Page>
	)
}

export default ShowLocation
