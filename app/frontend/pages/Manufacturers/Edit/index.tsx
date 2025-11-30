
import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import ManufacturerForm from "@/domains/Manufacturers/Form"

interface UpdateManufacturerProps {
	manufacturer: Schema.ManufacturersEdit
}

const New = ({ manufacturer, ...models }: UpdateManufacturerProps) => {
	const title = `Edit ${manufacturer.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Manufacturers", href: Routes.manufacturers() },
			{ title: manufacturer.name!, href: Routes.manufacturer(manufacturer.slug) },
			{ title: "Edit Manufacturer", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ManufacturerForm to={ Routes.manufacturer(manufacturer) } method="patch" manufacturer={ manufacturer } { ...models } />
			</Section>
		</Page>
	)
}

export default New
