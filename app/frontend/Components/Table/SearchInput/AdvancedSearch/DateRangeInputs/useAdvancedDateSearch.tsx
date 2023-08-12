import React from 'react'
import { Type, Date } from '.'
import useAdvancedSearch from '../useAdvancedSearch'

const useDateSearch = (advancedSearch: ReturnType<typeof useAdvancedSearch>, name: string) => {
	const DateRangeInput = <Type advancedSearch={ advancedSearch } name={ name } />

	const DatesInput = <Date advancedSearch={ advancedSearch } name={ name } />

	return { DateRangeInput, DatesInput }
}

export default useDateSearch
