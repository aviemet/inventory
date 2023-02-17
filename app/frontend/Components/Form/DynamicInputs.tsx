import React from 'react'
import { Button, Group } from '@/Components'
import Label from '@/Components/Inputs/Label'
import { PlusCircleIcon, MinusCircleIcon } from '@/Components/Icons'
import { DynamicInputs as InertiaDynamicInputs } from 'use-inertia-form'

interface IDynamicInputsProps {
	children: React.ReactNode | React.ReactElement[]
	label?: string | React.ReactNode
	emptyData: Record<string, unknown>
}

const DynamicInputs = ({ children, label, emptyData }: IDynamicInputsProps) => {
	return (
		<>
			<Group>
				{ label && <Label>{ label }</Label> }
			</Group>
			<InertiaDynamicInputs
				emptyData={ emptyData }
				addInputButton={ <Button size='xs' mb={ 4 }><PlusCircleIcon /></Button> }
				removeInputButton={ <Button size='xs' mb={ 4 }><MinusCircleIcon /></Button> }
			>
				{ children }
			</InertiaDynamicInputs>
		</>
	)
}

export default DynamicInputs
