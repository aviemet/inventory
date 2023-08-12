import useAdvancedSearch from '../useAdvancedSearch'

export interface IAdvancedInputProps {
	advancedSearch: ReturnType<typeof useAdvancedSearch>
	name: string
}

export { default as Type } from './Type'
export { default as Date } from './Date'
export { default as useAdvancedDateSearch } from './useAdvancedDateSearch'
