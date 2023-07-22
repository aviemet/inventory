import React, { forwardRef } from 'react'
import { UseFormProps, useInertiaInput } from 'use-inertia-form'
import { IFormInputProps } from '.'
import { ConditionalWrapper } from '@/Components'
import Field from '../Field'
import Dropdown, { type IDropdownProps } from '@/Components/Inputs/Dropdown'

type OmittedDropdownTypes = 'name'|'onBlur'|'onChange'|'onDropdownOpen'|'onDropdownClose'
export interface IFormDropdownProps extends Omit<IDropdownProps, OmittedDropdownTypes>, IFormInputProps<string> {
	onDropdownOpen?: (form: UseFormProps<any>) => void
	onDropdownClose?: (form: UseFormProps<any>) => void
}

const DropdownComponent = forwardRef<HTMLInputElement, IFormDropdownProps>((
	{
		data = [],
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
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model, errorKey })

	const handleBlur = () => {
		if(onBlur) onBlur(String(value), form)
	}

	const handleChange = (option: string) => {
		setValue(option ? option : '')

		if(onChange) onChange(option, form)
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
			<Dropdown
				ref={ ref }
				id={ id || inputId }
				name={ inputName }
				label={ label }
				value={ String(value) }
				error={ error }
				data={ data }
				onBlur={ handleBlur }
				onChange={ handleChange }
				onDropdownClose={ handleDropdownClose }
				onDropdownOpen={ handleDropdownOpen }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
})

export default React.memo(DropdownComponent)
