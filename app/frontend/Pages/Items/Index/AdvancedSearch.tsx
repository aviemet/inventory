import React from 'react'
import { TextInput } from '@/Components/Inputs'
import { Box, Group, Link } from '@/Components'
import { CrossIcon, SearchIcon } from '@/Components/Icons'
import { useAdvancedSearch } from '@/Components/Table'
import { Button } from '@mantine/core'


const AdvancedItemsSearch = () => {
	const { inputProps, link, reset } = useAdvancedSearch([
		{ label: 'Name', name: 'name' },
		{ label: 'Model', name: 'model' },
		{ label: 'Asset Tag', name: 'asset_tag' },
		{ label: 'Serial', name: 'serial' },
		{ label: 'Category', name: 'category.name' },
		{ label: 'Manufacturer', name: 'manufacturer.name' },
		{ label: 'Vendor', name: 'vendor.name' },
		{ label: 'Cost', name: 'cost' },
		{ label: 'Department', name: 'department.name' },
	])

	return (
		<>
			<Group grow>
				<Box><TextInput { ...inputProps('name') } /></Box>
				<Box><TextInput { ...inputProps('category.name') } /></Box>
			</Group>
			<Group grow>
				<Box><TextInput { ...inputProps('model') } /></Box>
				<Box><TextInput { ...inputProps('manufacturer.name') } /></Box>
			</Group>
			<Group grow>
				<Box><TextInput { ...inputProps('vendor.name') } /></Box>
				<Box><TextInput { ...inputProps('department.name') } /></Box>
			</Group>
			<Group grow>
				<Box><TextInput { ...inputProps('asset_tag') } /></Box>
				<Box><TextInput { ...inputProps('serial') } /></Box>
				<Box><TextInput { ...inputProps('cost') } /></Box>
			</Group>

			<Group grow>
				<Button onClick={ reset } leftIcon={ <CrossIcon /> }>Clear</Button>

				<Link
					as='button'
					href={ link }
					buttonProps={ { leftIcon: <SearchIcon /> } }
					sx={ { width: '100%' } }
				>
        	Search
				</Link>
			</Group>
		</>
	)
}

export default AdvancedItemsSearch
