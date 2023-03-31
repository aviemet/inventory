import { FormData } from '.'

type TTableRow = {
	model: keyof FormData['person_group']['permissions']
	label: string
	permissions: (keyof TPermissions)[]
}

export default [
	{
		model: 'item',
		label: 'Items',
		permissions: ['index', 'show', 'create', 'update', 'delete', 'checkout', 'checkin'],
	},
	{
		model: 'accessory',
		label: 'Accessories',
		permissions: ['index', 'show', 'create', 'update', 'delete', 'checkout', 'checkin'],
	},
	{
		model: 'component',
		label: 'Components',
		permissions: ['index', 'show', 'create', 'update', 'delete', 'checkout', 'checkin'],
	},
	{
		model: 'consumable',
		label: 'Consumables',
		permissions: ['index', 'show', 'create', 'update', 'delete', 'checkout'],
	},
	{
		model: 'license',
		label: 'Licenses',
		permissions: ['index', 'show', 'create', 'update', 'delete', 'checkout', 'checkin'],
	},
	{
		model: 'network',
		label: 'Networks',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'vendor',
		label: 'Vendors',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'contract',
		label: 'Contracts',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'category',
		label: 'Categories',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'model',
		label: 'Models',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'manufacturer',
		label: 'Manufacturers',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'department',
		label: 'Departments',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'location',
		label: 'Locations',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'person',
		label: 'People',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
	{
		model: 'user',
		label: 'Users',
		permissions: ['index', 'show', 'create', 'update', 'delete'],
	},
] as TTableRow[]
