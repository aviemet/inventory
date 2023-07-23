export { default as CategoriesDropdown } from './CategoriesDropdown'
export { default as CurrenciesDropdown } from './CurrenciesDropdown'
export { default as DepartmentsDropdown } from './DepartmentsDropdown'
export { default as ItemsDropdown } from './ItemsDropdown'
export { default as LocationsDropdown } from './LocationsDropdown'
export { default as ManufacturersDropdown } from './ManufacturersDropdown'
export { default as ModelsDropdown } from './ModelsDropdown'
export { default as PeopleDropdown } from './PeopleDropdown'
export { default as StatusLabelsDropdown } from './StatusLabelsDropdown'
export { default as VendorsDropdown } from './VendorsDropdown'


export interface IAsyncDropdown<T> {
	name?: string
	model?: string
	label?: string
	fetchOnOpen?: string
	required?: boolean
	errorKey?: string
	initialData?: T[]
}
