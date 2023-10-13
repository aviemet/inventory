import React, { useState } from 'react'
import { Button, Group } from '@/Components'
import { FormGroup, TextInput } from '@/Components/Form'
import { PlusCircleIcon, MinusCircleIcon } from '@/Components/Icons'

const Address = () => {
	const [addressCount, setAddressCount] = useState(1)

	const addInputGroup = () => {
		setAddressCount(count => count + 1)
	}

	const removeInputGroup = () => {
		if(addressCount === 0) return

		setAddressCount(count => count - 1)
	}

	return (
		<>
			<Group justify="space-between">
				<div>Address</div>
				<Button
					onClick={ addInputGroup }
					size='xs'
					mb={ 4 }
				>
					<PlusCircleIcon />
				</Button>
			</Group>

			{ Array(addressCount).fill('').map((_, i) => (
				<FormGroup key={ i }>
					<Group>
						<TextInput name="type" label="Type" />

						<TextInput name="country" label="Country" />
					</Group>

					<TextInput name={ `address_${i}` } label="Address" />

					<TextInput name="address_2" label="Address 2" />

					<Group>
						<TextInput name="city" label="City" />

						<TextInput name="region" label="State" />

						<TextInput name="postal" label="Zip/Post" />
					</Group>

					<Button onClick={ removeInputGroup } style={ {
						marginLeft: 'auto',
						display: 'block',
					} }>
						<MinusCircleIcon />
					</Button>
				</FormGroup>
			)) }
		</>
	)
}

export default Address
