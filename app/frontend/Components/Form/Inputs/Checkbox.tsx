import React, { forwardRef } from 'react'
import Field from '../Field'
import CheckboxInput, { type ICheckboxProps } from '@/Components/Inputs/Checkbox'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'
import ConditionalWrapper from '@/Components/ConditionalWrapper'

interface IFormCheckboxProps extends Omit<ICheckboxProps, 'onChange'|'defaultChecked'> {
	name: string
	model?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>, form: UseFormProps<any>) => void
	field?: boolean
}

const FormCheckboxComponent = forwardRef<HTMLInputElement, IFormCheckboxProps>((
	{
		name,
		onChange,
		id,
		required,
		className,
		model,
		field = true,
		 ...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<boolean>({ name, model })

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked)
		if(onChange) onChange(e, form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="checkbox"
					required={ required }
					errors={ !!error }
					grid={ false }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<CheckboxInput
				id={ id || inputId }
				className={ className }
				name={ inputName }
				value={ name }
				checked={ value }
				onChange={ handleChange }
				error={ error }
				ref={ ref }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default FormCheckboxComponent
