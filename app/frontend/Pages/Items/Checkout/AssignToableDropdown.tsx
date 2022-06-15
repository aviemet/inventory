import React, { useEffect, useState, useRef } from 'react'
import { SearchableDropdown, RadioButtons, useForm } from '@/Components/Form'

interface IAssignToableDropdownProps {
	items: Schema.Item[]
	people: Schema.Person[]
	locations: Schema.Location[]
}

const AssignToableDropdown = ({ items, people, locations }: IAssignToableDropdownProps) => {
	const { data, setData } = useForm()
	const { assignment: { assign_toable_type: type } } = data

	const [optionsValues, setOptionsValues] = useState<Record<string, any>[]>(people)
	const strModelNameRef = useRef('people')

	useEffect(() => {
		let obj: Record<string, any>[] = []

		switch(type) {
			case 'Person':
				strModelNameRef.current = 'people'
				obj = people
				break
			case 'Item':
				strModelNameRef.current = 'items'
				obj = items
				break
			case 'Location':
				strModelNameRef.current = 'locations'
				obj = locations
				break
		}

		setData('assignment.assign_toable_id', '')
		setOptionsValues(obj)
	}, [type])

	const handleAssignToableChange = (value: Record<string, any>) => {
		let location
		switch(type) {
			case 'Person':
				location = value.location_id
				break
			case 'Item':
				location = value.default_location_id
				break
			case 'Location':
				location = value.id
				break
		}
		console.log({ location })
	}

	return (
		<>
			<RadioButtons
				label="Checkout To"
				name="assign_toable_type"
				options={ [
					{ label: 'Person', value: 'Person' },
					{ label: 'Item', value: 'Item' },
					{ label: 'Location', value: 'Location' },
				] }
				required
			/>

			<SearchableDropdown
				options={ optionsValues }
				label={ data.assignment.assign_toable_type }
				name="assign_toable_id"
				getLabel={ option => option.name }
				getValue={ option => option.id }
				onChange={ handleAssignToableChange }
				required
			/>
		</>
	)
}

export default AssignToableDropdown
