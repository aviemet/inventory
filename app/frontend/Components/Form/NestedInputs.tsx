import React from 'react'
import { useForm } from './Form'
import { Button, Group } from '@/Components'
import { createContext } from '../Hooks'
import Label from '../Inputs/Label'
import { cloneDeep } from 'lodash'

interface INestedInputsProps {
	children: React.ReactNode
	model: string
	label: string | React.ReactNode
	emptyData: Record<string, any>
}

const [useNestedInputs, NestedInputsProvider] = createContext()
export { useNestedInputs }

const NestedInputs = ({ children, model, label, emptyData }: INestedInputsProps) => {
	const { data, setData, unsetData, model: formModel } = useForm()

	const handleAddInputs = () => {
		if(!formModel) return

		setData((formData: Record<string, any>) => {
			const clone = cloneDeep(formData)
			clone[formModel][model].push(emptyData)
			return clone
		})
	}

	const handleRemoveInputs = (i: number) => {
		unsetData(`${formModel}.${model}[${i}]`)
	}

	return (
		<NestedInputsProvider value={ model }>
			<Group>
				<Label>{ label }</Label>
				<Button onClick={ handleAddInputs }>+</Button>
			</Group>
			<div>{ data[formModel!][model].map((data, i) => {
				const name = `${model}[${i}].${children.props.name}`

				return (
					<Group key={ i }>
						<div>
							{ React.cloneElement(children, {
								name: name,
							}) }
						</div>
						<Button onClick={ () => handleRemoveInputs(i) }>-</Button>
					</Group>
				)
			}) }</div>
		</NestedInputsProvider>
	)
}

export default NestedInputs
