import React, { forwardRef } from 'react'
import Field from '../Field'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '@/Components/Inputs/SearchableDropdown'
import { ConditionalWrapper, Group } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import { router } from '@inertiajs/react'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'

interface IInputProps extends Omit<ISearchableDropdownProps, 'defaultValue'|'onChange'|'onDropdownOpen'|'onDropdownClose'> {
	label?: string
	name: string
	model?: string
	defaultValue?: string
	onChange?: (option: string|null, form: UseFormProps) => void
	onDropdownOpen?: (form: UseFormProps) => void
	onDropdownClose?: (form: UseFormProps) => void
	fetchOnOpen?: string
	newForm?: React.ReactElement
	field?: boolean
}

const SearchableDropdown = forwardRef<HTMLInputElement, IInputProps>((
	{
		name,
		label,
		model,
		required,
		defaultValue,
		onChange,
		onDropdownOpen,
		onDropdownClose,
		fetchOnOpen,
		newForm,
		field = true,
		id,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model })

	const handleChange = (option: string|null) => {
		setValue(option ? option : '')
		if(onChange) onChange(option, form)
	}

	const handleDropdownOpen = () => {
		if(fetchOnOpen) router.reload({ only: [fetchOnOpen] })
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	const handleNewFormSuccess = (data: { id: string|number }) => {
		if(fetchOnOpen) router.reload({ only: [fetchOnOpen] })
		setValue(String(data.id))
	}

	return (
		<ConditionalWrapper
			wrapper={ children => <Group noWrap align="baseline" position="apart">{ children }</Group> }
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
					<SearchableDropdownInput
						ref={ ref }
						id={ id || inputId }
						name={ inputName }
						label={ label }
						value={ String(value) }
						onChange={ handleChange }
						onDropdownOpen={ handleDropdownOpen }
						onDropdownClose={ handleDropdownClose }
						defaultValue={ defaultValue ?? String(value) }
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

export default SearchableDropdown
