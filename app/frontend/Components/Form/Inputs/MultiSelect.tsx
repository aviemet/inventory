import React, { forwardRef } from 'react'
import { UseFormProps, useInertiaInput } from 'use-inertia-form'
import { IFormInputProps } from '.'
import { ConditionalWrapper } from '@/Components'
import Field from '../Field'
import MultiSelect, { type IMultiSelectProps } from '@/Components/Inputs/MultiSelect'

type OmittedDropdownTypes = 'name'|'onBlur'|'onChange'|'onDropdownOpen'|'onDropdownClose'
export interface IFormDropdownProps extends Omit<IMultiSelectProps, OmittedDropdownTypes>, IFormInputProps<string[]> {
	onDropdownOpen?: (form: UseFormProps<any>) => void
	onDropdownClose?: (form: UseFormProps<any>) => void
}

const MultiSelectComponent = forwardRef<HTMLInputElement, IFormDropdownProps>((
	{
		options = [],
		label,
		required,
		id,
		name,
		errorKey,
		model,
		field = true,
		onBlur,
		onChange,
		onDropdownOpen,
		onDropdownClose,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<string[]>({ name, model, errorKey })

	const handleBlur = () => {
		if(onBlur) onBlur(value, form)
	}

	const handleChange = (values: string[]) => {
		setValue(values)

		if(onChange) onChange(values, form)
	}

	const handleDropdownOpen = () => {
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Field
					type="select"
					required={ required }
					errors={ !!error }
				>
					{ children }
				</Field>
			) }
			condition={ field }
		>
			<MultiSelect
				ref={ ref }
				id={ id || inputId }
				name={ inputName }
				label={ label }
				value={ value }
				error={ error }
				options={ options }
				onBlur={ handleBlur }
				onChange={ handleChange }
				onDropdownClose={ handleDropdownClose }
				onDropdownOpen={ handleDropdownOpen }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default React.memo(MultiSelectComponent)
