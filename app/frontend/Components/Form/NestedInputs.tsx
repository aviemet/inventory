import React, { useReducer, useState } from 'react'
import { useForm } from './Form'
import { Button, Group } from '@/Components'
import { PlusCircleIcon } from '@/Components/Icons'
import useInertiaInput from './useInertiaInput'
import { createContext } from '../Hooks'
import Label from '../Inputs/Label'

interface INestedInputsProps {
	children: React.ReactNode
	model: string
	label: string | React.ReactNode
	emptyData: Record<string, any>
}

const [useNestedInputs, NestedInputsProvider] = createContext()
export { useNestedInputs }

const NestedInputs = ({ children, model, label, emptyData }: INestedInputsProps) => {
	const { data, setData, model: formModel } = useForm()
	const [n, setN] = useState(0)

	console.log({ data, model, formModel, emptyData, nestedData: data[formModel][model] })

	const handleAddInputs = () => {
		setN(n => n + 1)

		setData(formData => {
			formData[formModel][model].push(emptyData)
			return formData
		})
	}

	const handleRemoveInputs = () => {

	}

	return (
		<NestedInputsProvider value={ model }>
			<Group>
				<Label>{ label }</Label>
				<Button onClick={ handleAddInputs }>+</Button>
			</Group>
			<div>{ data[formModel][model].map((data, i) => {
				const name = `${model}[${i}].${children.props.name}`
				console.log({ name })
				return (
					<Group key={ i }>
						<div>
							{ React.cloneElement(children, {
								name: name,
							}) }
						</div>
						<Button onClick={ handleRemoveInputs }>-</Button>
					</Group>
				)
			}) }</div>
		</NestedInputsProvider>
	)
}

export default NestedInputs
