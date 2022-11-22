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
}

const [useNestedInputs, NestedInputsProvider] = createContext()
export { useNestedInputs }

const ACTIONS = {
	ADD: 'add',
	REMOVE: 'remove',
}

type TAction = {
	type: typeof ACTIONS[keyof typeof ACTIONS]
	payload: {
		key: number
		inputs: React.ReactNode
		model: string
	}
}

const inputsReducer = (state: Map<number, React.ReactNode>, action: TAction) => {
	const inputs = new Map(state)

	switch(action.type) {
		case ACTIONS.ADD:
			const name = `${action.payload.model}[${inputs.size}]${action.payload.inputs.props.name}`
			console.log({ name })

			inputs.set(inputs.size, React.cloneElement(action.payload.inputs, {
				name,
			}))
			break
		case ACTIONS.REMOVE:
			if(typeof action.payload === 'number') {
				inputs.delete(action.payload)
			}
			break
		default:
			console.error('Invalid action passed to reducer')
	}

	return inputs
}

const NestedInputs = ({ children, model, label }: INestedInputsProps) => {
	const [inputs, dispatch] = useReducer(inputsReducer, new Map<number, React.ReactNode>())

	return (
		<NestedInputsProvider value={ model }>
			<Group>
				<Label>{ label }</Label>
				<Button onClick={ () => dispatch({
					type: ACTIONS.ADD,
					payload: {
						inputs: children,
						model,
					},
				}) }>+</Button>
			</Group>
			<div>{ [...inputs].map(([key, input]) => {
				return (
					<Group key={ key }>
						<div>
							{ input }
						</div>
						<Button onClick={ () => dispatch({
							type: ACTIONS.REMOVE,
							payload: key,
						}) }>-</Button>
					</Group>
				)
			}) }</div>
		</NestedInputsProvider>
	)
}

export default NestedInputs
