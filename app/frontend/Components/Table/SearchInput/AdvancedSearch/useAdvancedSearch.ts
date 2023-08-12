import { useCallback, useEffect, useMemo, useState } from 'react'
import { coerceArray } from '@/lib'
import { useLocation } from '@/lib/hooks'
import { isUnset } from '@/lib/forms'
import { router } from '@inertiajs/react'
import cx from 'clsx'
import { type MantineTheme } from '@mantine/core'

type TSpecialSearchTypes = 'date'

interface IOptions {
	path: string
}

type TInputParam<T = string> = {
	name: string
	default?: T
	dependent?: string|string[]
	keyUpListener?: boolean
	type?: TSpecialSearchTypes
}

type TParamValue = string|number|Date|Date[]|undefined|null

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
	// TODO: Trying to infer keys from prop
	type TInputParamName = typeof inputParams[number]['name']

	const location = useLocation()
	const [searchLink, setSearchLink] = useState(`${location.pathname}${location.search}`)

	const startingValues = useMemo(() => inputParams.reduce(
		(data: Map<TInputParamName, TParamValue>, param) => {
			// Handle special input types
			if(param?.type) {
				switch(param.type) {
					case 'date':
						data.set(`${param.name}[type]`, 'exact')
						data.set(`${param.name}[start]`, '')
						data.set(`${param.name}[end]`, '')

						return data
					default:
						console.error('Invalid `type` value')
				}
			}

			data.set(param.name, location.params.get(param.name) || param.default || '')
			return data
		},
		new Map(),
	), [inputParams])

	const [values, setValues] = useState(startingValues)

	// Build URL params when input values change
	useEffect(() => {
		setSearchLink(buildSearchLink(location.params, inputParams, values))
	}, [values])

	const resetValues = useCallback(() => {
		setValues(inputParams.reduce(
			(data: Map<TInputParamName, TParamValue>, param) => {
				data.set(param.name, param.default || '')
				return data
			},
			new Map(),
		))
	}, [inputParams])

	const buildInputProps = <T = string>(name: TInputParamName) => {
		const param = inputParams.find(param => param.name === name)

		const value = values.get(name) as T

		return {
			name,
			value,
			mb: 10,
			...( param?.keyUpListener !== false && { onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {
				if(e.key === 'Enter') {
					router.get(searchLink, undefined, { preserveScroll: true })
				}
			} }),
			wrapperProps: {
				className: cx({ highlighted: !isUnset(value) && !param?.dependent }),
				sx: (theme: MantineTheme) => ({
					'&.highlighted, &.highlighted input': {
						color: theme.other.colorSchemeOption(
							theme.colors[theme.primaryColor][6],
							theme.colors[theme.primaryColor][4],
						),
					},
					'&.highlighted input': {
						outlineColor: theme.other.colorSchemeOption(
							theme.colors[theme.primaryColor][6],
							theme.colors[theme.primaryColor][4],
						),
					},
				}),
			},
		}
	}

	const setInputValue = useCallback((name: TInputParamName, value: TParamValue) => setValues((prevValues) => {
		const newValues = new Map(prevValues)
		newValues.set(name, value)
		return newValues
	}), [])

	return {
		values,
		link: searchLink,
		inputProps: buildInputProps,
		setInputValue,
		reset: resetValues,
	}
}

export default useAdvancedSearch

/**
 * Generate a URL for advanced searching
 *
 * @param urlParams Map of params from address
 * @param inputParams List of all input params passed to hook
 * @param values Map of all current search values
 * @returns Link to same page with URL params to use for advanced search
 */
function buildSearchLink(
	urlParams: URLSearchParams,
	inputParams: readonly TInputParam[],
	values: Map<string, TParamValue>,
) {
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
				if(isUnset(values.get(dependentParam))) {
					shouldBeIncluded = false
				}
			})

			if(!shouldBeIncluded) {
				urlParams.delete(key)
				continue
			}
		}

		// Handle Date values
		if(value instanceof Date || (Array.isArray(value) && value[0] instanceof Date)) {
			const dateStr = coerceArray(value).reduce((str, date, i) => {
				return `${str}${i === 0 ? '' : ','}${date.toISOString()}`
			}, '')
			urlParams.set(key, dateStr)
			continue
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
