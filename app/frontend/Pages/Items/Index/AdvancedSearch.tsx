import React from 'react'
import { DateTime, Dropdown, TextInput } from '@/Components/Inputs'
import { Box, Group, Flex, Link, Label } from '@/Components'
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
		{
			label: 'Created At',
			name: 'created_at',
			default: new Date(),
		},
	])

	return (
		<>
			<Flex gap="md">
				<Box sx={ { flex: 1 } }>
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
				</Box>
				<Box>
					<Label>Created Date</Label>
					<Dropdown
						data={ ['Exact Date', 'Before', 'After', 'Between'] }
						defaultValue="Exact Date"
					/>
					<Box><DateTime { ...inputProps('created_at') } /></Box>
				</Box>
			</Flex>

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
const data = [
	{ label: 'Name', name: 'name' },
	{ label: 'Model', name: 'model' },
	{ label: 'Asset Tag', name: 'asset_tag' },
	{ label: 'Serial', name: 'serial' },
	{ label: 'Category', name: 'category.name' },
	{ label: 'Manufacturer', name: 'manufacturer.name' },
	{ label: 'Vendor', name: 'vendor.name' },
	{ label: 'Cost', name: 'cost' },
	{ label: 'Department', name: 'department.name' },
	{ label: 'Created At', name: 'created_at', default: new Date() },
]

type LabelValue = typeof data[number]['label'];

const isValidLabel = (label: string): label is LabelValue => {
	return data.some((item) => item.label === label)
}

// Example usage:
const label1: LabelValue = 'Name' // Valid
const label2: LabelValue = 'Model' // Valid
const label3: LabelValue = 'Location' // Error: Type '"Location"' is not assignable to type '"Name" | "Model" | "Asset Tag" | ... | "Created At"'.
