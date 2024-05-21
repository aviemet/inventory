import { type SelectInputProps } from '@/Components/Inputs/Select'
import { type MultiSelectInputProps } from '@/Components/Inputs/MultiSelect'

import { type FormSelectProps } from '@/Components/Form/Inputs/Select'
import { type FormMultiSelectProps } from '@/Components/Form/Inputs/MultiSelect'


export interface FormAsyncDropdown<T> extends FormSelectProps {
	initialData?: T[]
}

export interface FormAsyncMultiSelect<T> extends FormMultiSelectProps {
	initialData?: T[]
}

export interface AsyncDropdown<T> extends SelectInputProps {
	initialData?: T[]
}

export interface AsyncMultiSelect<T> extends MultiSelectInputProps {
	initialData?: T[]
}

export { default as AssetsDropdown }        from './AssetsDropdown'
export * from './CategoriesDropdown'
export { default as CurrenciesDropdown }    from './CurrenciesDropdown'
export { default as DepartmentsDropdown }   from './DepartmentsDropdown'
export { default as ItemsDropdown }         from './ItemsDropdown'
export { default as LocationsDropdown }     from './LocationsDropdown'
export { default as ManufacturersDropdown } from './ManufacturersDropdown'
export { default as ModelsDropdown }        from './ModelsDropdown'
export { default as PeopleDropdown }        from './PeopleDropdown'
export { default as PeopleMultiSelect }     from './PeopleMultiSelect'
export { default as StatusLabelsDropdown }  from './StatusLabelsDropdown'
export { default as VendorsDropdown }       from './VendorsDropdown'

export { default as AssignToableDropdown } from './AssignToableDropdown'
export { default as AssignmentLocationDropdown } from './AssignmentLocationDropdown'
