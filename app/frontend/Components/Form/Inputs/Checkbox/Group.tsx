import React from 'react'
import { useInertiaInput } from 'use-inertia-form'
import { Checkbox } from '@/Components/Inputs'
import { type CheckboxGroupProps } from '@mantine/core'
import { createContext } from '@/lib/hooks'

type CheckboxInputOption = {
	value: string
	label: string
}

const [useFormCheckboxGroupContext, FormCheckboxGroupProvider] = createContext<boolean>()
export { useFormCheckboxGroupContext }

export interface FormCheckboxGroupProps extends Omit<CheckboxGroupProps, 'children'> {
	children: React.ReactElement
	name: string
	model?: string
	options: CheckboxInputOption[]
}

const FormCheckboxGroup = ({
	children,
	name,
	model,
	...props
}: FormCheckboxGroupProps) => {
	const { value, setValue } = useInertiaInput<string[]>({ name, model })

	return (
		<Checkbox.Group
			value={ value }
			onChange={ setValue }
			{ ...props }
		>
			<FormCheckboxGroupProvider value={ true }>
				{ children }
			</FormCheckboxGroupProvider>
		</Checkbox.Group>
	)
}

export default FormCheckboxGroup
