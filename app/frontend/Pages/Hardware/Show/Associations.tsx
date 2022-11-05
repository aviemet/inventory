import React from 'react'
import { Heading } from '@/Components'

interface IHardwareAssociationsProps {
	hardware: Schema.Hardware
}
const Associations = ({ hardware }: IHardwareAssociationsProps) => {
	return (
		<>
			<Heading order={ 3 }>Licenses</Heading>

			<ul>
				{ hardware.licenses && hardware.licenses.map(license => (
					<li key={ license.id }>{ license.name }</li>
				)) }
			</ul>
		</>
	)
}

export default Associations
