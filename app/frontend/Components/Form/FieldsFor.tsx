import React, { useEffect } from 'react'
import { createContext } from '../Hooks'
import { useFormMeta } from './Form'
import FormGroup from './FormGroup'

interface IFieldsForProps {
	children: React.ReactNode
	model: string
}

const [useNestedAttribute, NestedAttributeProvider] = createContext<string>()
export { useNestedAttribute }

const FieldsFor = ({ children, model }: IFieldsForProps) => {
	let inputModel = model

	try {
		const nested = useNestedAttribute()
		inputModel = `${nested}.${model}`
	} catch(e) {}

	const { addAttribute } = useFormMeta()

	useEffect(() => {
		addAttribute(model)
	}, [])

	return (
		<NestedAttributeProvider value={ inputModel }>
			<FormGroup className="fields_for">{ children }</FormGroup>
		</NestedAttributeProvider>
	)
}

export default FieldsFor
