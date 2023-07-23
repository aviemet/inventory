import React from 'react'
import { CurrencyInput, DateInput, Dropdown, TextInput } from '@/Components/Inputs'
import { Box, Group, Flex, Link } from '@/Components'
import { CrossIcon, SearchIcon } from '@/Components/Icons'
import { useAdvancedSearch } from '@/Components/Table'
import { Button } from '@mantine/core'
import { CategoriesDropdown } from '@/Components/Dropdowns'
import ManufacturersDropdown from '@/Components/Dropdowns/ManufacturersDropdown'
import VendorsDropdown from '@/Components/Dropdowns/VendorsDropdown'
import DepartmentsDropdown from '@/Components/Dropdowns/DepartmentsDropdown'
import ModelsDropdown from '@/Components/Dropdowns/ModelsDropdown'

const dateRangeOptions = [
	{ label: 'Exact Date', value: 'exact' },
	{ label: 'Before', value: 'before' },
	{ label: 'After', value: 'after' },
	{ label: 'Between', value: 'range' },
]

const AdvancedItemsSearch = () => {
	const { inputProps, link, reset } = useAdvancedSearch([
		{ label: 'Name', name: 'name' },
		{ label: 'Model', name: 'model' },
		{ label: 'Asset Tag', name: 'asset_tag' },
		{ label: 'Serial', name: 'serial' },
		{ label: 'Category', name: 'category.id' },
		{ label: 'Manufacturer', name: 'manufacturer.id' },
		{ label: 'Vendor', name: 'vendor.id' },
		{ label: 'Cost', name: 'cost' },
		{ label: 'Department', name: 'department.id' },
		{ label: 'Created Date', name: 'created_range_type', default: 'exact' },
		{ label: 'Created At', name: 'created_at' },
	])

	const { value: createdRangeType } = inputProps('created_range_type')

	return (
		<>
			<Flex gap="md">
				<Box sx={ { flex: 1 } }>
					<Group grow>
						<TextInput { ...inputProps('name') } />
						<CategoriesDropdown
							{ ...inputProps('category.id') }
							categorizable_type="Item"
						/>
					</Group>
					<Group grow>
						<ModelsDropdown modelCategory="Item" { ...inputProps('model') } />
						<ManufacturersDropdown { ...inputProps('manufacturer.id') } />
					</Group>
					<Group grow>
						<VendorsDropdown { ...inputProps('vendor.id') } />
						<DepartmentsDropdown { ...inputProps('department.id') } />
					</Group>
					<Group grow>
						<TextInput { ...inputProps('asset_tag') } />
						<TextInput { ...inputProps('serial') } />
						<CurrencyInput { ...inputProps('cost') } />
					</Group>
				</Box>
				<Box>
					<Dropdown
						{ ...inputProps('created_range_type') }
						data={ dateRangeOptions }
					/>
					<DateInput
						{ ...inputProps<Date[]>('created_at_start') }
						type={ createdRangeType === 'range' ? 'range' : 'default' }
					/>

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

