import { useEffect, useMemo, useState } from 'react'
import { coerceArray } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { isUnset } from '@/lib/forms'
import { router } from '@inertiajs/react'
import cx from 'clsx'
import { type MantineTheme } from '@mantine/core'

interface IOptions {
	path: string
}

type TInputParam<T = string> = {
	name: string
	default?: T
	dependent?: string|string[]
}

type TParamValue = string|number|string[]|Date|Date[]|undefined

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
		(data: Map<TInputParamName, TParamValue>, param) => {
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
			(data: Map<TInputParamName, TParamValue>, param) => {
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
			wrapperProps: {
				className: cx({ highlighted: !isUnset(values.get(name)) && !isDependent(name, inputParams) }),
				sx: (theme: MantineTheme) => ({
					'&.highlighted, &.highlighted input': {
						color: theme.other.colorSchemeOption(
							theme.colors[theme.primaryColor][6],
							theme.colors[theme.primaryColor][4],
						),
						'&.highlighted input': {
							outlineColor: theme.other.colorSchemeOption(
								theme.colors[theme.primaryColor][6],
								theme.colors[theme.primaryColor][4],
							),
						},
					},
				}),
			},
		}),
		setInputValue: (name: TInputParamName, value: TParamValue) => setValues((prevValues) => {
			const newValues = new Map(prevValues)
			newValues.set(name, value)
			return newValues
		}),
		reset: resetValues,
	}
}

export default useAdvancedSearch

function isDependent(name: string, inputParams: Readonly<TInputParam[]>) {
	const param = inputParams.find(param => param.name === name)
	return param?.dependent !== undefined
}

function buildSearchLink(urlParams: URLSearchParams, inputParams: readonly TInputParam[], values: Map<string, TParamValue>) {
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
				// console.log({ param: dependentParam, value: values.get(dependentParam), isUnset: isUnset(values.get(dependentParam)) })
				if(isUnset(values.get(dependentParam))) {
					shouldBeIncluded = false
				}
			})

			// console.log({ key, value, shouldBeIncluded, created_at: values.get('created_at') })
			if(!shouldBeIncluded) {
				urlParams.delete(key)
				continue
			}
		}
		console.log({ type: typeof value })
		// if(typeof value === 'Date') {
		// 	urlParams.set(key, value.toISOString())
		// }

		urlParams.set(key, String(value))
	}

	if(urlParams.size > 0) {
		urlParams.set('adv', 'true')
		return `${location.pathname}?${urlParams.toString()}`
	} else {
		return `${location.pathname}`
	}
}
