import React, { useEffect, useState } from 'react'
import { TextInput } from '@/Components/Inputs'
import { Routes } from '@/lib'
import { Button, Link } from '@/Components'
import { CrossIcon, SearchIcon } from '@/Components/Icons'
import { useLocation } from '@/lib/hooks'
import { useForm } from '@mantine/form'


const AdvancedItemsSearch = () => {
	const location = useLocation()
	const [searchLink, setSearchLink] = useState(`${location.pathname}${location.search}`)

	const form = useForm({
		initialValues: {
			name: '',
			model: '',
			asset_tag: '',
			serial: '',
			'category.name': '',
			'manufacturer.name': '',
			'vendor.name': '',
			cost: '',
			'department.name': '',
		},
	})

	useEffect(() => {
		for(const [key, value] of Object.entries(form.values)) {
			if(value === '') continue

			location.params.set(key, value)
		}
		setSearchLink(`${location.pathname}${location.params.toString()}`)
	}, [form.values])

	return (
		<>
			<TextInput placeholder='Name' { ...form.getInputProps('name') } />
			<TextInput placeholder='Model' { ...form.getInputProps('model') } />
			<TextInput placeholder='Asset Tag' { ...form.getInputProps('asset_tag') } />
			<TextInput placeholder='Serial' { ...form.getInputProps('serial') } />
			<TextInput placeholder='Category' { ...form.getInputProps('category.name') } />
			<TextInput placeholder='Manufacturer' { ...form.getInputProps('manufacturer.name') } />
			<TextInput placeholder='Vendor' { ...form.getInputProps('vendor.name') } />
			<TextInput placeholder='Cost' { ...form.getInputProps('cost') } />
			<TextInput placeholder='Department' { ...form.getInputProps('department.name') } />

			<Link as='button' href={ searchLink } buttonProps={ { leftIcon: <SearchIcon /> } }>
        Search
			</Link>

			<Button onClick={ form.reset } leftIcon={ <CrossIcon /> }>Clear</Button>
		</>
	)
}

export default AdvancedItemsSearch
