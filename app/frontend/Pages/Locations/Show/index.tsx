import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { Section } from '@/Components'
import { Popover, Option } from '@/Components/Popover'
import { Routes } from '@/lib'
import 'twin.macro'

interface IShowLocationProps {
	location: Schema.Location
}

const Show = ({ location }: IShowLocationProps) => {
	const title = location.name

	return (
		<>
			<Head title={ title }></Head>

			<Section>
				<div tw="flex">
					<h1 tw="flex-1">{ title }</h1>

					<div tw="w-10 p-1">
						<Popover>
							<Option href={ Routes.editLocation(location) }>
								Edit Location
							</Option>
						</Popover>
					</div>
				</div>

			</Section>
		</>
	)
}

export default Show
