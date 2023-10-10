import React, { forwardRef } from 'react'
import Field from '../Field'
import SelectInput, { type ISelectProps } from '@/Components/Inputs/Select'
import { ConditionalWrapper, Group } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'
import { type IFormInputProps } from '.'

type OmittedDropdownTypes = 'name'|'defaultValue'|'onBlur'|'onChange'|'onDropdownOpen'|'onDropdownClose'
export interface ISelectFormProps extends Omit<ISelectProps, OmittedDropdownTypes>, IFormInputProps<string> {
	defaultValue?: string
	onChange?: ((value: string|null, form: UseFormProps<unknown>) => void) | undefined
	onDropdownOpen?: (form: UseFormProps<any>) => void
	onDropdownClose?: (form: UseFormProps<any>) => void
	endpoint?: string
	newForm?: React.ReactElement
	field?: boolean
}

const Select = forwardRef<HTMLInputElement, ISelectFormProps>((
	{
		name,
		label,
		model,
		required,
		defaultValue,
		onSearchChange,
		onChange,
		onBlur,
		onDropdownOpen,
		onDropdownClose,
		fetchOnOpen,
		endpoint,
		newForm,
		field = true,
		id,
		errorKey,
		options,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model, errorKey })

	const handleChange = (option: string|null) => {
		setValue(option ? option : '')

		onChange?.(option, form)
	}

	const handleBlur = () => {
		if(onBlur) onBlur(String(value), form)
	}

	const handleDropdownOpen = () => {
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	const handleNewFormSuccess = (data: { id: string|number }) => {
		setValue(String(data.id))
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<Group
					grow
					wrap="nowrap"
					align="baseline"
					justify="space-between"
				>
					{ children }
				</Group>
			)
			}
			condition={ newForm !== undefined }
		>
			<>
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
					<SelectInput
						ref={ ref }
						id={ id || inputId }
						name={ inputName }
						label={ label }
						value={ String(value) }
						onChange={ handleChange }
						onBlur={ handleBlur }
						onDropdownClose={ handleDropdownClose }
						onDropdownOpen={ handleDropdownOpen }
						defaultValue={ defaultValue ?? String(value) }
						error={ error }
						options={ options }
						wrapper={ false }
						{ ...props }
					/>
				</ConditionalWrapper>
				{ newForm && <ModalFormButton
					title={ `Create New ${label}` }
					form={ newForm }
					onSuccess={ handleNewFormSuccess }
				/> }
			</>
		</ConditionalWrapper>
	)
})

export default Select
