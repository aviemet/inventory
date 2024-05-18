import React from 'react'

export { default as FormCheckboxGroup } from './Group'

import { useFormCheckboxGroupContext } from './Group'
import FormCheckboxInput, { FormCheckboxProps } from './Checkbox'
import { Checkbox as CheckboxInput } from '@/Components/Inputs'
import { CheckboxProps } from '@/Components/Inputs/Checkbox/index'

type CompoundCheckboxComponent<P = FormCheckboxProps|CheckboxProps> =
	P extends FormCheckboxProps
		? (props: FormCheckboxProps) => React.JSX.Element
		: P extends CheckboxProps
			? (props: FormCheckboxProps) => React.JSX.Element
			: never;

const CheckboxComponent: CompoundCheckboxComponent = (props) => {
	const isGrouped = useFormCheckboxGroupContext()

	if(isGrouped) {
		return <CheckboxInput { ...props } />
	}
	return <FormCheckboxInput { ...props } />
}

export default CheckboxComponent as FormCheckboxInput
