import { type AssignToableTypes } from '@/types'
import { FormItemsDropdown } from '../ItemsDropdown'
import { FormLocationsDropdown } from '../LocationsDropdown'
import { FormPeopleDropdown } from '../PeopleDropdown'

const getDropdownComponent = (type: AssignToableTypes) => {
	switch(type) {
		case 'Item':
			return FormItemsDropdown
		case 'Location':
			return FormLocationsDropdown
		case 'Person':
			return FormPeopleDropdown
		default:
			throw Error()
	}
}

export default getDropdownComponent
