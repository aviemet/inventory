import { useEffect, useMemo, useReducer, useState } from 'react'
import useLocation from '../../../../lib/hooks/useLocation'
import { getInputOnChange } from '../../../../lib'

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

type TInputParam = { label: string, name: string }

const useAdvancedSearch = (
	inputParams: TInputParam[],
	options?: IOptions,
) => {
	const location = useLocation()
	const [searchLink, setSearchLink] = useState(`${location.pathname}${location.search}`)

	const startingValues = useMemo(() => inputParams.reduce(
		(data: Record<string, string>, param: TInputParam) => {
			data[param.name] = location.params.get(param.name) || ''
			return data
		},
		{},
	), [])

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
		inputProps: (name: keyof typeof values) => {
			const param = inputParams.find(inputParam => inputParam.name === name)

			return {
				value: values[name],
				onChange: getInputOnChange<string>((value) => updateValues({
					type: 'set',
					payload: { name, value: value as string },
				})),
				mb: 10,
				label: param?.label,
			}
		},
		reset: () => updateValues({ type: 'clear' }),
	}
}

export default useAdvancedSearch
