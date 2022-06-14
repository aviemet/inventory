import React, { useEffect, useState, useRef } from 'react'
import { SearchableDropdown, useForm } from '@/Components/Form'

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

	const handleChange = (value: Record<string, any>) => {
		console.log({ value })
	}

	return (
		<SearchableDropdown
			options={ optionsValues }
			label={ data.assignment.assign_toable_type }
			name="assign_toable_id"
			getLabel={ option => option.name }
			getValue={ option => option.id }
			onChange={ handleChange }
			required
		/>
	)
}

export default AssignToableDropdown
