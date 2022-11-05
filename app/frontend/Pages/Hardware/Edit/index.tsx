import React from 'react'
import { Heading, Page, Section } from '@/Components'
import HardwareForm from '../Form'
import { Routes } from '@/lib'

interface IUpdateHardwareProps{
	hardware: Schema.Hardware
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const EditHardware = ({ hardware, ...models }: IUpdateHardwareProps) => {
	const title = `Edit ${hardware.name}`

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.hardware() },
			{ title: hardware.name!, href: Routes.hardware(hardware) },
			{ title: 'Edit Hardware' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<HardwareForm to={ Routes.hardware(hardware) } method="patch" hardware={ hardware } { ...models } />
			</Section>
		</Page>
	)
}

export default EditHardware
