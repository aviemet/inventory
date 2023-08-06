import { useEffect, useMemo, useState } from 'react'
import { coerceArray } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { isUnset } from '@/lib/forms'
import { router } from '@inertiajs/react'

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
 * @param inputParams Array of objects with the following structure: { label: string, name: string, default?: unknown, dependent?: string|string[] }
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

	// Build URL params when input values change
	useEffect(() => {
		setSearchLink(buildSearchLink(location.params, inputParams, values))
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
			onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {
				if(e.key === 'Enter') {
					router.get(searchLink, undefined, { preserveScroll: true })
				}
			},
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

function buildSearchLink(urlParams: URLSearchParams, inputParams: readonly TInputParam[], values: Map<string, unknown>) {
	urlParams.delete('adv')

	for(const [key, value] of values) {
		const inputParam = inputParams.find(param => param.name === key)

		// Delete key if input has been emptied
		if(isUnset(value)) {
			urlParams.delete(key)
			continue
		}

		// Exclude key if dependents are empty
		if(inputParam?.dependent) {
			let shouldBeIncluded = true
			coerceArray(inputParam.dependent).forEach(dependentParam => {
				console.log({ param: dependentParam, value: values.get(dependentParam), isUnset: isUnset(values.get(dependentParam)) })
				if(isUnset(values.get(dependentParam))) {
					shouldBeIncluded = false
				}
			})

			console.log({ key, value, shouldBeIncluded, created_at: values.get('created_at') })
			if(!shouldBeIncluded) {
				urlParams.delete(key)
				continue
			}
		}

		urlParams.set(key, String(value))
	}

	if(urlParams.size > 0) {
		urlParams.set('adv', 'true')
		return `${location.pathname}?${urlParams.toString()}`
	} else {
		return `${location.pathname}`
	}
}
