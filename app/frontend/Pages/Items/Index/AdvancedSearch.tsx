import React from 'react'
import { TextInput } from '@/Components/Inputs'
import { Button, Container, Group, Link } from '@/Components'
import { CrossIcon, SearchIcon } from '@/Components/Icons'
import { useAdvancedSearch } from '@/lib/hooks'


const AdvancedItemsSearch = () => {
	const search = useAdvancedSearch([
		'name',
		'model',
		'asset_tag',
		'serial',
		'category.name',
		'manufacturer.name',
		'vendor.name',
		'cost',
		'department.name',
	])

	return (
		<Container>
			<TextInput mb={ 10 } placeholder='Name' { ...search.inputProps('name') } />
			<TextInput mb={ 10 } placeholder='Model' { ...search.inputProps('model') } />
			<TextInput mb={ 10 } placeholder='Asset Tag' { ...search.inputProps('asset_tag') } />
			<TextInput mb={ 10 } placeholder='Serial' { ...search.inputProps('serial') } />
			<TextInput mb={ 10 } placeholder='Category' { ...search.inputProps('category.name') } />
			<TextInput mb={ 10 } placeholder='Manufacturer' { ...search.inputProps('manufacturer.name') } />
			<TextInput mb={ 10 } placeholder='Vendor' { ...search.inputProps('vendor.name') } />
			<TextInput mb={ 10 } placeholder='Cost' { ...search.inputProps('cost') } />
			<TextInput mb={ 10 } placeholder='Department' { ...search.inputProps('department.name') } />

			<Group>
				<Button onClick={ search.reset } leftIcon={ <CrossIcon /> }>Clear</Button>

				<Link as='button' href={ search.link } buttonProps={ { leftIcon: <SearchIcon /> } }>
        	Search
				</Link>
			</Group>
		</Container>
	)
}

export default AdvancedItemsSearch
