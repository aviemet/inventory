import React, { useState } from 'react'
import { Button, Flex } from '@/Components'
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
			<Flex position='apart'>
				<div>Address</div>
				<Button
					onClick={ addInputGroup }
					size='xs'
					mb={ 4 }
				>
					<PlusCircleIcon />
				</Button>
			</Flex>

			{ Array(addressCount).fill('').map((_, i) => (
				<FormGroup key={ i }>
					<Flex>
						<TextInput name="type" label="Type" compact />

						<TextInput name="country" label="Country" compact />
					</Flex>

					<TextInput name={ `address_${i}` } label="Address" compact />

					<TextInput name="address_2" label="Address 2" compact />

					<Flex>
						<TextInput name="city" label="City" compact />

						<TextInput name="region" label="State" compact />

						<TextInput name="postal" label="Zip/Post" compact />
					</Flex>

					<Button onClick={ removeInputGroup } sx={ {
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
