import React, { forwardRef, useEffect, useState } from 'react'
import SelectInput, { type SelectInputProps } from '@/components/Inputs/Select'
import axios from 'axios'
import { Routes } from '@/lib'

interface ItemsDropdownProps extends Omit<SelectInputProps, 'options'> {

}

const ItemsDropdown = forwardRef<HTMLInputElement, ItemsDropdownProps>((
	{ ...props },
	ref,
) => {
	const [items, setItems] = useState([])

	useEffect(() => {
		axios.get(Routes.apiItems())
			.then(response => {
				setItems(response.data)
			})
	}, [])
	return (
		<SelectInput
			ref={ ref }
			options={ items }
			{ ...props }
		/>
	)
})

export default ItemsDropdown
