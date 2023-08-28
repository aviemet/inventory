import React, { forwardRef, useEffect, useState } from 'react'
import SelectInput, { type ISelectProps } from '@/Components/Inputs/Select'
import axios from 'axios'
import { Routes } from '@/lib'

interface IItemsDropdownProps extends Omit<ISelectProps, 'options'> {

}

const ItemsDropdown = forwardRef<HTMLInputElement, IItemsDropdownProps>((
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
