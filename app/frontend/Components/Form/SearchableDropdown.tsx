import React, { forwardRef } from 'react'
import Field from './Field'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '../Inputs/SearchableDropdown'
import { Flex } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import { Inertia } from '@inertiajs/inertia'
import useInertiaInput from './useInertiaInput'

interface IInputProps extends Omit<ISearchableDropdownProps, 'defaultValue'|'onChange'|'onDropdownOpen'|'onDropdownClose'> {
	label?: string
	name: string
	model?: string
	defaultValue?: string
	onChange?: (option: string|null, form: Inertia.FormProps) => void
	onDropdownOpen?: (form: InertiaFormProps) => void
	onDropdownClose?: (form: InertiaFormProps) => void
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
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput(name, model)

	const handleChange = (option: string|null) => {
		setValue(option)
		if(onChange) onChange(option, form)
	}

	const handleDropdownOpen = () => {
		if(fetchOnOpen) Inertia.reload({ only: [fetchOnOpen] })
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	const handleNewFormSuccess = (data: { id: string|number }) => {
		if(fetchOnOpen) Inertia.reload({ only: [fetchOnOpen] })
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
