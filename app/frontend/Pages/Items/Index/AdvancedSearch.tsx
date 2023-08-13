import React from 'react'
import { CurrencyInput, TextInput } from '@/Components/Inputs'
import { Button, Box, Group, Flex, Link } from '@/Components'
import { CrossIcon, SearchIcon } from '@/Components/Icons'
import { useAdvancedSearch, useAdvancedDateSearch } from '@/Components/Table'
import { CategoriesDropdown } from '@/Components/Dropdowns'
import ManufacturersDropdown from '@/Components/Dropdowns/ManufacturersDropdown'
import VendorsDropdown from '@/Components/Dropdowns/VendorsDropdown'
import DepartmentsDropdown from '@/Components/Dropdowns/DepartmentsDropdown'
import ModelsDropdown from '@/Components/Dropdowns/ModelsDropdown'

const AdvancedItemsSearch = () => {
	const advancedSearch = useAdvancedSearch([
		{ name: 'name' },
		{ name: 'model' },
		{ name: 'asset_tag' },
		{ name: 'serial' },
		{ name: 'category[id]' },
		{ name: 'manufacturer[id]' },
		{ name: 'vendor[id]' },
		{ name: 'cost' },
		{ name: 'department[id]' },
		{ name: 'created_at', type: 'date' },
	])

	const { DateRangeInput, DatesInput } = useAdvancedDateSearch(advancedSearch, 'created_at')

	const { values, inputProps, setInputValue, link, reset } = advancedSearch

	return (
		<>
			<Flex gap="md" mb="md">
				<Box sx={ { flex: 1 } }>
					<Group grow>
						<TextInput
							clearable
							label="Name"
							{ ...inputProps('name') }
							onChange={ e => setInputValue('name', e.target.value) }
						/>
						<CategoriesDropdown
							{ ...inputProps('category[id]') }
							onChange={ value => setInputValue('category[id]', value) }
							categorizable_type="Item"
						/>
					</Group>
					<Group grow>
						<ModelsDropdown
							modelCategory="Item"
							{ ...inputProps('model') }
							onChange={ value => setInputValue('model', value) }
						/>
						<ManufacturersDropdown
							{ ...inputProps('manufacturer[id]') }
							onChange={ value => setInputValue('manufacturer[id]', value) }
						/>
					</Group>
					<Group grow>
						<VendorsDropdown
							{ ...inputProps('vendor[id]') }
							onChange={ value => setInputValue('vendor[id]', value) }
						/>
						<DepartmentsDropdown
							{ ...inputProps('department[id]') }
							onChange={ value => setInputValue('department[id]', value) }
						/>
					</Group>
					<Group grow>
						<TextInput
							clearable
							label="Asset Tag"
							{ ...inputProps('asset_tag') }
							onChange={ e => setInputValue('asset_tag', e.target.value) }
						/>
						<TextInput
							clearable
							label="Serial"
							{ ...inputProps('serial') }
							onChange={ e => setInputValue('serial', e.target.value) }
						/>
						<CurrencyInput
							label="Cost"
							{ ...inputProps('cost') }
							onChange={ e => setInputValue('cost', e.target.value) }
						/>
					</Group>
				</Box>
				<Box sx={ { minWidth: '17rem' } }>
					{ DateRangeInput }
					{ DatesInput }
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

