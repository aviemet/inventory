import React, { useEffect, useState, useRef } from 'react'
import { SearchableDropdown, useForm, RadioButtons } from '@/Components/Form'

interface IAssignToableDropdownProps {
	items: Schema.Item[]
	people: Schema.Person[]
	locations: Schema.Location[]
	options: TAssignToable[]
}

const AssignToableDropdown = ({ items, people, locations, options = ['Person', 'Item', 'Location'] }: IAssignToableDropdownProps) => {
	const { data, setData } = useForm()
	const { assignment: { assign_toable_type: type } } = data

	const [optionsValues, setOptionsValues] = useState<Record<string, any>[]>(people)
	const strModelNameRef = useRef('Person')

	useEffect(() => {
		if(type === strModelNameRef) return

		switch(type) {
			case 'Person':
				setOptionsValues(people)
				break
			case 'Item':
				setOptionsValues(items)
				break
			case 'Location':
				setOptionsValues(locations)
				break
		}

		strModelNameRef.current = type
		setData('assignment.assign_toable_id', '')
	}, [type])

	const handleAssignToableChange = (id: string|null) => {
		let default_location: number|null|undefined

		switch(type) {
			case 'Person':
				const person = people.find(person => String(person.id) === id)
				default_location = person?.location_id
				break
			case 'Item':
				const item = items.find(item => String(item.id) === id)
				default_location = item?.default_location_id
				break
			case 'Location':
				const location = locations.find(location => String(location.id) === id)
				default_location = location?.id
				break
		}

		if(default_location) {
			setData('assignment.location_id', String(default_location))
		}
	}

	return (
		<>
			<RadioButtons
				label="Checkout To"
				name="assign_toable_type"
				options={ options.map(option => ({ label: option, value: option })) }
				required
			/>
			<SearchableDropdown
				options={ optionsValues }
				label={ data.assignment.assign_toable_type }
				name="assign_toable_id"
				onChange={ handleAssignToableChange }
				required
			/>
		</>
	)
}

export default AssignToableDropdown
