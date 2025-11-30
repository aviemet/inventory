import { type FormMultiSelectProps } from "@/components/Form/Inputs/MultiSelect"
import { type FormSelectProps } from "@/components/Form/Inputs/Select"
import { type MultiSelectInputProps } from "@/components/Inputs/MultiSelect"
import { type SelectInputProps } from "@/components/Inputs/Select"


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

export * from "./CategoriesDropdown"
export * from "./DepartmentsDropdown"
export * from "./StatusLabelsDropdown"
export * from "./VendorsDropdown"
export * from "./LocationsDropdown"
export * from "./ManufacturersDropdown"
export * from "./ModelsDropdown"
export * from "./PeopleDropdown"
export * from "./ItemsDropdown"
export * from "./CurrenciesDropdown"

export { default as AssetsDropdown } from "./AssetsDropdown"

export { default as AssignToableDropdown } from "./AssignToableDropdown"
export { default as AssignmentLocationDropdown } from "./AssignmentLocationDropdown"
