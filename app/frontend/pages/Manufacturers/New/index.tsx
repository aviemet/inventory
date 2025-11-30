import React from "react"

import { Title, Page, Section } from "@/components"
import { Routes } from "@/lib"

import ManufacturerForm from "../Form"

interface NewManufacturerProps {
	manufacturer: Schema.ManufacturersFormData
}

const New = ({ ...data }: NewManufacturerProps) => {
	const title = "New Manufacturer"

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: "Manufacturers", href: Routes.manufacturers() },
			{ title: "New Manufacturer", href: window.location.href },
		] }>
			<Section>
				<Title>{ title }</Title>

				<ManufacturerForm to={ Routes.manufacturers() } { ...data } />
			</Section>
		</Page>
	)
}

export default New
