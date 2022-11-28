import React, { useEffect } from 'react'
import { createContext } from '../Hooks'
import { useFormMeta } from './Form'

interface IFieldsForProps {
	children: React.ReactNode
	model: string
	suffix?: false | string
}

const [useNestedAttribute, NestedAttributeProvider] = createContext<string>()
export { useNestedAttribute }

const FieldsFor = ({ children, model }: IFieldsForProps) => {
	const { addAttribute } = useFormMeta()

	useEffect(() => {
		addAttribute(model)
	}, [])

	return (
		<NestedAttributeProvider value={ model }>
			<div className={ `fields_for_${model}` }>{ children }</div>
		</NestedAttributeProvider>
	)
}

export default FieldsFor
