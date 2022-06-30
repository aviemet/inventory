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
		if(type === strModelNameRef) return

		setData('assignment.assign_toable_id', '')

		switch(type) {
			case 'Person':
				strModelNameRef.current = 'Person'
				setOptionsValues(people)
				break
			case 'Item':
				strModelNameRef.current = 'Item'
				setOptionsValues(items)
				break
			case 'Location':
				strModelNameRef.current = 'Location'
				setOptionsValues(locations)
				break
		}
	}, [type])

	const handleAssignToableChange = (id: string) => {
		let default_location: string|undefined

		switch(type) {
			case 'Person':
				const person = people.find(person => String(person.id) === id)
				default_location = person?.default_location_id
				break
			case 'Item':
				const item = items.find(person => String(person.id) === id)
				default_location = item?.default_location_id
				break
			case 'Location':
				const location = locations.find(person => String(person.id) === id)
				default_location = location?.id
				break
		}

		if(default_location) {
			console.log('set data')
			setData('assignment.location_id', String(default_location))
		}
		console.log({ default_location })
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
				onChange={ handleAssignToableChange }
				required
			/>
		</>
	)
}

export default AssignToableDropdown
