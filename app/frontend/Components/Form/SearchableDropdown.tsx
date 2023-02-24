import React, { forwardRef } from 'react'
import Field from './Field'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '../Inputs/SearchableDropdown'
import { Flex } from '@/Components'
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
		id,
		...props
	},
	ref,
) => {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model })

	const handleChange = (option: string|null) => {
		setValue(option)
		if(onChange) onChange(option, form)
	}

	const handleDropdownOpen = () => {
		if(fetchOnOpen) router.reload({ only: [fetchOnOpen] })
		if(fetchOnOpen) router.reload({ only: [fetchOnOpen] })
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	const handleNewFormSuccess = (data: { id: string|number }) => {
		if(fetchOnOpen) router.reload({ only: [fetchOnOpen] })
		if(fetchOnOpen) router.reload({ only: [fetchOnOpen] })
		setValue(String(data.id))
	}

	const Wrapper = newForm ? FlexWrapper : EmptyWrapper

	return (
		<Wrapper>
			<Field
				type="select"
				required={ required }
				errors={ !!error }
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
					defaultValue={ defaultValue ?? value }
					{ ...props }
				/>
			</Field>
			{ newForm && <ModalFormButton
				title={ `Create New ${label}` }
				form={ newForm }
				onSuccess={ handleNewFormSuccess }
			/> }
		</Wrapper>
	)
})

interface IWithChildren {
	children?:React.ReactNode
}

const EmptyWrapper = ({ children }: IWithChildren) => <>{ children }</>

const FlexWrapper = ({ children }: IWithChildren) => (
	<Flex noWrap align="baseline" position="apart">{ children }</Flex>
)

export default SearchableDropdown
