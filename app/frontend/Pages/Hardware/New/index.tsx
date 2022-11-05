import React from 'react'
import { Heading, Page, Section } from '@/Components'
import HardwareForm from '../Form'
import { Routes } from '@/lib'

interface INewHardwareProps {
	hardware: Schema.Hardware
	models: Schema.Model[]
	vendors: Schema.Vendor[]
	locations: Schema.Location[]
	manufacturers: Schema.Manufacturer[]
	categories: Schema.Category[]
}

const NewHardware = ({ ...data }: INewHardwareProps) => {
	const title = 'New Hardware Asset'

	return (
		<Page title={ title } breadcrumbs={ [
			{ title: 'Hardware', href: Routes.hardwares() },
			{ title: 'New Hardware' },
		] }>
			<Section>
				<Heading>{ title }</Heading>

				<HardwareForm to={ Routes.hardwares() } { ...data } />
			</Section>
		</Page>
	)
}

export default NewHardware
