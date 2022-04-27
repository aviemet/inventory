import React, { useEffect, useState, useRef } from 'react'
import { SearchableDropdown, useForm } from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'

interface IAssignToableDropdownProps {
	items: Schema.Item[]
	people: Schema.Person[]
	locations: Schema.Location[]
}

const AssignToableDropdown = ({ items, people, locations }: IAssignToableDropdownProps) => {
	const { data } = useForm()

	const [optionsValues, setOptionsValues] = useState<Record<string, any>[]>(people)
	const strModelNameRef = useRef('people')

	const handleOpen = () => {
		Inertia.reload({
			preserveScroll: true,
			only: [strModelNameRef.current]
		})
	}

	useEffect(() => {
		let obj: Record<string, any>[] = []

		switch(data.assign_toable_type) {
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

		setOptionsValues(obj)
	}, [data.assign_toable_type])

	return (
		<SearchableDropdown
			options={ optionsValues }
			label={ data.assign_toable_type }
			name="assign_toable_id"
			getLabel={ option => option.name }
			getValue={ option => option.id }
			onOpen={ handleOpen }
			required
		/>
	)
}

export default AssignToableDropdown
