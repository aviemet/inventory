import React, { useState } from 'react'
import { Button, Box, Flex } from '@/Components'
import { FormGroup, Input, Textarea } from '@/Components/Form'
import { PlusCircleIcon, MinusCircleIcon } from '@/Components/Icons'

const Address = () => {
	const [addressCount, setAddressCount] = useState(0)

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
				<FormGroup key={ i } compact>
					<Flex>
						<Input name="type" label="Type" />

						<Input name="country" label="Country" />
					</Flex>

					<Input name={ `address_${i}` } label="Address" className='compact' />

					<Input name="address_2" label="Address 2" />

					<Flex>
						<Input name="city" label="City" />

						<Input name="region" label="State" />

						<Input name="postal" label="Zip/Post" />
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
