import PermissionsForm from './PermissionsForm'

export type Permissions = {
	index?: boolean
	show?: boolean
	create?: boolean
	update?: boolean
	delete?: boolean
	checkout?: boolean
	checkin?: boolean
}

export type FormData = {
	person_group: Schema.PersonGroupsFormData
}

export default PermissionsForm
