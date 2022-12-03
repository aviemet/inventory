import React from 'react'
import { useForm, useFormMeta } from './Form'
import { Button, Group } from '@/Components'
import Label from '@/Components/Inputs/Label'
import { cloneDeep, get, set } from 'lodash'
import { useNestedAttribute } from './FieldsFor'

interface IDynamicInputsProps {
	children: (i: number) => React.ReactNode
	label?: string | React.ReactNode
	emptyData: Record<string, any>
}

const DynamicInputs = ({ children, label, emptyData }: IDynamicInputsProps) => {
	const { setData, unsetData, getData } = useForm()
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
				{ label && <Label>{ label }</Label> }
				<Button onClick={ handleAddInputs }>+</Button>
			</Group>
			{ Array.isArray(getData(inputModel)) && getData(inputModel).map((data: any, i: number) => {
				return (
					<Group key={ i }>
						<div>{ children(i) }</div>
						<Button onClick={ () => handleRemoveInputs(i) }>-</Button>
					</Group>
				)
			}) }
		</>
	)
}

export default DynamicInputs
