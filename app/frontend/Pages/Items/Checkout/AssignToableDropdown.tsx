import React, { useEffect, useState } from 'react'
import { SearchableDropdown, useForm } from '@/Components/Form'

interface IAssignToableDropdownProps {
	items: Schema.Item[]
	people: Schema.Person[]
	locations: Schema.Location[]
}

const AssignToableDropdown = ({ items, people, locations }: IAssignToableDropdownProps) => {
	const { data } = useForm()

	const [optionsValues, setOptionsValues] = useState<Record<string, any>[]>(people)

	useEffect(() => {
		switch(data.assign_toable_type) {
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
	}, [data.assign_toable_type])

	return (
		<SearchableDropdown
			options={ optionsValues }
			label={ data.assign_toable_type }
			name="assign_toable_id"
			getLabel={ option => option.name }
			getValue={ option => option.id }
		/>
	)
}

export default AssignToableDropdown
