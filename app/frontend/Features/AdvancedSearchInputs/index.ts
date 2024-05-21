import { type SelectInputProps } from '@/Components/Inputs/Select'
import { type MultiSelectInputProps } from '@/Components/Inputs/MultiSelect'

export interface AsyncDropdown<T> extends SelectInputProps {
	initialData?: T[]
}

export interface AsyncMultiSelect<T> extends MultiSelectInputProps {
	initialData?: T[]
}
