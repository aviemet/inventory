import { useEffect, useMemo, useState } from 'react'
import { coerceArray } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { isUnset } from '@/lib/forms'

interface IOptions {
	path: string
}

type TInputParam<T = string> = {
	name: string
	default?: T
	dependent?: string|string[]
}

/**
 * Hook for building advanced search interfaces
 * @param inputParams Array of objects with the following structure: { label: string, name: string, default?: unknown }
 * @param options Options
 * @returns link: A URL with the search parameters represented as GET params,
 *  reset(): A method to clear all search values,
 * 	inputProps(name): Method to return object of props to be passed into an input
 */
const useAdvancedSearch = (
	inputParams: Readonly<TInputParam[]>,
	options?: IOptions,
) => {
	type TInputParamName = typeof inputParams[number]['name']

	const location = useLocation()
	const [searchLink, setSearchLink] = useState(`${location.pathname}${location.search}`)

	// Reads starting values from URL params
	const startingValues = useMemo(() => inputParams.reduce(
		(data: Map<TInputParamName, unknown>, param) => {
			data.set(param.name, location.params.get(param.name) || param.default || '')
			return data
		},
		new Map(),
	), [])

	const [values, setValues] = useState(startingValues)

	// Build URL params with values changes
	useEffect(() => {
		for(const [key, value] of values) {
			const inputParam = inputParams.find(param => param.name === key)

			if(isUnset(value)) {
				location.params.delete(key)
			} else if(inputParam?.dependent) {
				let shouldBeIncluded = true
				coerceArray(inputParam.dependent).forEach(dependentParam => {
					if(isUnset(values.get(dependentParam))) {
						shouldBeIncluded = false
					}
				})
				if(!shouldBeIncluded) {
					location.params.delete(key)
				}
			} else {
				location.params.set(key, String(value))
			}
		}

		const searchString = location.params.toString()
		setSearchLink(`${location.pathname}?${searchString}${searchString === '' ? '' : '&adv=true'}`)
	}, [values])

	const resetValues = () => {
		setValues(inputParams.reduce(
			(data: Map<TInputParamName, unknown>, param) => {
				data.set(param.name, param.default || '')
				return data
			},
			new Map(),
		))
	}

	return {
		values,
		link: searchLink,
		inputProps: <T = string>(name: TInputParamName) => ({
			name,
			value: values.get(name) as T,
			mb: 10,
		}),
		setInputValue: (name: TInputParamName, value: unknown) => setValues((prevValues) => {
			const newValues = new Map(prevValues)
			newValues.set(name, value)
			return newValues
		}),
		reset: resetValues,
	}
}

export default useAdvancedSearch
