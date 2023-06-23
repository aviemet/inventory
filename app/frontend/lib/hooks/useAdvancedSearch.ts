import { useEffect, useMemo, useReducer, useState } from 'react'
import useLocation from './useLocation'
import { getInputOnChange } from '../'

type TReducerActionTypes = 'set'|'clear'
type TSetReducerPayload = {
	name: string
	value: string
}
type TReducerAction = { type: TReducerActionTypes, payload?: TPayloadProps }
type TPayloadProps = TSetReducerPayload

const searchReducer = (state: Record<string, string>, action: TReducerAction) => {
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

const useAdvancedSearch = (valueNames: string[], options?: IOptions) => {
	const location = useLocation()
	const [searchLink, setSearchLink] = useState(`${location.pathname}${location.search}`)


	const startingValues = useMemo(() => valueNames.reduce((obj: Record<typeof valueNames[number], string>, value: typeof valueNames[number]) => {
		obj[value] = location.params.get(value) || ''
		return obj
	}, {}), [])

	const [values, updateValues] = useReducer(searchReducer, startingValues)

	useEffect(() => {
		for(const [key, value] of Object.entries(values)) {
			if(value === '') {
				location.params.delete(key)
			} else {
				location.params.set(key, value)
			}
		}
		setSearchLink(`${location.pathname}?${location.params.toString()}`)
	}, [values])

	return {
		link: searchLink,
		inputProps: (name: keyof typeof values) => ({
			value: values[name],
			onChange: getInputOnChange<string>((value) => updateValues({ type: 'set', payload: { name, value: value as string } })),
		}),
		reset: () => updateValues({ type: 'clear' }),
	}
}

export default useAdvancedSearch
