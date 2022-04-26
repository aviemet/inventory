import React, { useEffect, useState } from 'react'
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

	useEffect(() => {
		let str = ''
		let obj: Record<string, any>[] = []

		switch(data.assign_toable_type) {
			case 'Person':
				str = 'people'
				obj = people
				break
			case 'Item':
				str = 'items'
				obj = items
				break
			case 'Location':
				str = 'locations'
				obj = locations
				break
		}

		Inertia.reload({
			preserveScroll: true,
			only: [str]
		})

		setOptionsValues(obj)
	}, [data.assign_toable_type])

	return (
		<SearchableDropdown
			options={ optionsValues }
			label={ data.assign_toable_type }
			name="assign_toable_id"
			getLabel={ option => option.name }
			getValue={ option => option.id }
			required
		/>
	)
}

export default AssignToableDropdown
