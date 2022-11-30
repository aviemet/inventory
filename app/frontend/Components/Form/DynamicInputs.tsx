import React from 'react'
import { useForm, useFormMeta } from './Form'
import { Button, Group } from '@/Components'
import Label from '@/Components/Inputs/Label'
import { cloneDeep, get, set } from 'lodash'
import { useNestedAttribute } from './FieldsFor'

interface IDynamicInputsProps {
	children: React.ReactNode
	label: string | React.ReactNode
	emptyData: Record<string, any>
}

const DynamicInputs = ({ children, label, emptyData }: IDynamicInputsProps) => {
	const { data, setData, unsetData, getData } = useForm()
	const { model: formModel } = useFormMeta()
	let inputModel = formModel ?? ''

	try {
		const nestedModel = useNestedAttribute()
		inputModel = formModel ? `${inputModel}.${nestedModel}` : nestedModel
	} catch(e) {}

	const handleAddInputs = () => {
		if(!formModel) return

		setData((formData: Record<string, any>) => {
			const clone = cloneDeep(formData)
			const node = get(clone, inputModel)
			node.push(emptyData)
			set(clone, inputModel, node)
			return clone
		})
	}

	const handleRemoveInputs = (i: number) => {
		unsetData(`${inputModel}[${i}]`)
	}

	return (
		<>
			<Group>
				<Label>{ label }</Label>
				<Button onClick={ handleAddInputs }>+</Button>
			</Group>
			{ getData(inputModel).map((data: any, i: number) => {
				const DynamicNestedContext = React.createContext(i)

				return (
					<DynamicNestedContext.Provider key={ i } value={ i }>
						<Group>
							<div>{ children }</div>
							<Button onClick={ () => handleRemoveInputs(i) }>-</Button>
						</Group>
					</DynamicNestedContext.Provider>
				)
			}) }
		</>
	)
}

export default DynamicInputs
