import React, { forwardRef, useEffect, useState } from 'react'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '@/Components/Inputs/SearchableDropdown'
import axios from 'axios'
import { Routes } from '@/lib'

interface IItemsDropdownProps extends Omit<ISearchableDropdownProps, 'options'> {

}

const ItemsDropdown = forwardRef<HTMLInputElement, IItemsDropdownProps>((
	{ ...props },
	ref
) => {
	const [items, setItems] = useState([])

	useEffect(() => {
		axios.get(Routes.apiItems())
			.then(response => {
				setItems(response.data)
			})
	}, [])
	return (
		<SearchableDropdownInput
			ref={ ref }
			options={ items }
			{ ...props }
		/>
	)
})

export default ItemsDropdown
