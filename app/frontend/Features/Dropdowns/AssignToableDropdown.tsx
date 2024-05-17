import React, { useEffect, useState, useRef } from 'react'
import { Select, SegmentedControl } from '@/Components/Form'
import { useForm } from 'use-inertia-form'
import LocationsForm from '@/Pages/Locations/Form'
import { Routes } from '@/lib'

type TAssignToableOptions = Schema.ItemsOptions[]|Schema.PeopleOptions[]|Schema.LocationsOptions[]

interface IAssignToableDropdownProps {
	items?: Schema.ItemsOptions[]
	people?: Schema.PeopleOptions[]
	locations?: Schema.LocationsOptions[]
	options: TAssignToable[]
}

const AssignToableDropdown = ({ items, people, locations, options = ['Person', 'Item', 'Location'] }: IAssignToableDropdownProps) => {
	const { data, setData } = useForm<{ assignment: Schema.AssignmentsFormData }>()
	const type: TAssignToable = data.assignment.assign_toable_type || options[0]

	useEffect(() => {
		if(!type) {
			setData('assignment.assign_toable_type', options[0])
		}
	}, [])

	const modelMapping = new Map<TAssignToable, TAssignToableOptions>()
	if(items) modelMapping.set('Item', items)
	if(people) modelMapping.set('Person' ,people)
	if(locations) modelMapping.set('Location', locations)

	const model = modelMapping.get(type)

	const [optionsValues, setOptionsValues] = useState<TAssignToableOptions>(model!)
	const strModelNameRef = useRef<TAssignToable>('Person')

	useEffect(() => {
		if(type === strModelNameRef.current) return

		setOptionsValues(model!)
		strModelNameRef.current = type
		setData('assignment.assign_toable_id', '')
	}, [type])

	const handleAssignToableChange = (id: string|null) => {
		let default_location: number|null|undefined

		switch(type) {
			case 'Person':
				const person = people?.find(person => String(person.id) === id)
				default_location = person?.default_location_id
				break
			case 'Item':
				const item = items?.find(item => String(item.id) === id)
				default_location = item?.default_location_id
				break
			case 'Location':
				const location = locations?.find(location => String(location.id) === id)
				default_location = location?.id
				break
		}

		if(default_location) {
			setData('assignment.location_id', String(default_location))
		}
	}

	if(!type) return <></>

	return (
		<>
			{ options.length > 1 && <SegmentedControl
				label="Checkout To"
				name="assign_toable_type"
				options={ options.map(option => ({ label: option, value: option })) }
				required
			/> }
			<Select
				options={ optionsValues }
				label={ options.length > 1 ? data.assignment.assign_toable_type : 'Checkout To' }
				name="assign_toable_id"
				onChange={ handleAssignToableChange }
				newForm={ (type === 'Location' && locations) ? <LocationsForm
					to={ Routes.locations() }
				/> : undefined }
				required
			/>
		</>
	)
}

export default AssignToableDropdown
