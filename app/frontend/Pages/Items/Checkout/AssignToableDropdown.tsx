import React, { useEffect, useState, useRef } from 'react'
import { SearchableDropdown, useForm } from '@/Components/Form'
import { Inertia } from '@inertiajs/inertia'

interface IAssignToableDropdownProps {
	items: Schema.Item[]
	people: Schema.Person[]
	locations: Schema.Location[]
}

const AssignToableDropdown = ({ items, people, locations }: IAssignToableDropdownProps) => {
	const { data, setData } = useForm()
	const [ type, setType ] = useState<string>(data.assign_toable_type as string || 'Person')

	const [optionsValues, setOptionsValues] = useState<Record<string, any>[]>(people)
	const strModelNameRef = useRef('people')

	const handleOpen = () => {
		Inertia.reload({
			preserveScroll: true,
			only: [strModelNameRef.current]
		})
	}

	useEffect(() => {
		if(data.assign_toable_type && data.assign_toable_type !== type) {
			setType(data.assign_toable_type)
		}
	}, [data.assign_toable_type])

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

		setData('assign_toable_id', '')
		setOptionsValues(obj)
	}, [type])

	return (
		<SearchableDropdown
			options={ optionsValues }
			label={ type }
			name="assign_toable_id"
			getLabel={ option => option.name }
			getValue={ option => option.id }
			onOpen={ handleOpen }
			required
		/>
	)
}

export default AssignToableDropdown
