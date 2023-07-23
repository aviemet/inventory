import { useEffect, useMemo, useReducer, useState } from 'react'
import { getInputOnChange } from '@/lib'
import { useLocation } from '@/lib/hooks'

type TReducerActionTypes = 'set'|'clear'
type TSetReducerPayload = {
	name: string
	value: string
}
type TReducerAction = { type: TReducerActionTypes, payload?: TPayloadProps }
type TPayloadProps = TSetReducerPayload

/**
 * Reducer used by advanced search hook to set search params
 */
const searchReducer = <T = string>(state: Record<string, T>, action: TReducerAction) => {
	const newState = structuredClone(state)

	switch(action.type) {
		case 'set':
			if(!action?.payload?.name) break

			newState[action.payload.name] = action?.payload?.value
			return newState
		case 'clear':
			for(const [key, value] of Object.entries(newState)) {
				if(value === '') continue

				newState[key] = ''
			}
			return newState
	}
	return newState
}

interface IOptions {
	path: string
}

type TInputParam = {
	label: string
	name: string
	default?: any
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
	const location = useLocation()
	const [searchLink, setSearchLink] = useState(`${location.pathname}${location.search}`)

	const startingValues = useMemo(() => inputParams.reduce(
		(data: Record<typeof inputParams[number]['name'], unknown>, param) => {
			data[param.name] = location.params.get(param.name) || param.default || ''
			return data
		},
		{},
	), [])

	const [values, updateValues] = useReducer(searchReducer, startingValues)

	// Build URL params with values changes
	useEffect(() => {
		for(const [key, value] of Object.entries(values)) {
			if(value === '') {
				location.params.delete(key)
			} else {
				location.params.set(key, String(value))
			}
		}
		setSearchLink(`${location.pathname}?${location.params.toString()}`)
	}, [values])

	/**
	 * Returns props required for an input in an advanced search interface
	 */
	const inputProps = <T = string>(name: typeof inputParams[number]['name']) => {
		const param = inputParams.find(inputParam => inputParam.name === name)

		return {
			value: values[name] as T,
			onChange: getInputOnChange<T>((value) => updateValues<T>({
				type: 'set',
				payload: { name, value: value },
			})),
			mb: 10,
			label: param?.label,
		}
	}

	return {
		link: searchLink,
		inputProps,
		reset: () => updateValues({ type: 'clear' }),
	}
}

export default useAdvancedSearch
