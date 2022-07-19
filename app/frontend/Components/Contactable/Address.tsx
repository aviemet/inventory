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
		<FormGroup outline>

			<Flex position='apart' sx={ { borderBottom: '1px solid grey' } }>
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
				<Box key={ i } p={ 10 } sx={ theme => ({
					backgroundColor: theme.colors.gray[0],
					boxShadow: theme.shadows.md
				}) }>
					<Input name={ `address_${i}` } label="Address" />

					<Input name="address_2" label="Address 2" />

					<Flex>
						<Input name="city" label="City" />

						<Input name="region" label="State" />

						<Input name="postal" label="Zip/Post" />
					</Flex>

					<Input name="country" label="Country" />

					<Textarea name="notes" label="Notes" />

					<Button onClick={ removeInputGroup } sx={ {
						marginLeft: 'auto',
						display: 'block',
					} }>
						<MinusCircleIcon />
					</Button>
				</Box>
			)) }
		</FormGroup>
	)
}

export default Address
