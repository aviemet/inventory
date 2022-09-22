import React, { useCallback } from 'react'
import { useForm, useInputProps } from './index'
import Field from './Field'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '../Inputs/SearchableDropdown'
import { Flex } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import { Inertia } from '@inertiajs/inertia'

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

const SearchableDropdown = ({
	options,
	label,
	name,
	model,
	required,
	defaultValue,
	getLabel = option => option.name,
	getValue = option => String(option.id),
	onChange,
	onDropdownOpen,
	onDropdownClose,
	fetchOnOpen,
	newForm,
	id,
	...props
}: IInputProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name, model)

	const handleChange = useCallback((option: string|null) => {
		form.setData(inputName, option)
		if(onChange) onChange(option, form)
	}, [onChange, inputName])

	const handleDropdownOpen = () => {
		if(fetchOnOpen) Inertia.reload({ only: [fetchOnOpen] })
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	const handleNewFormSuccess = (data: { id: string|number }) => {
		if(fetchOnOpen) Inertia.reload({ only: [fetchOnOpen] })
		form.setData(inputName, String(data.id))
	}

	const Wrapper = newForm ? FlexWrapper : EmptyWrapper

	return (
		<Wrapper>
			<Field type="select" required={ required } errors={ !!form.errors?.[name] }>
				<SearchableDropdownInput
					id={ id || inputId }
					name={ inputName }
					options={ options }
					value={ form.getData(inputName) }
					onChange={ handleChange }
					onDropdownOpen={ handleDropdownOpen }
					onDropdownClose={ handleDropdownClose }
					defaultValue={ defaultValue ?? form.getData(inputName) }
					getLabel={ getLabel }
					getValue={ getValue }
					label={ label }
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
}

interface IWithChildren {
	children?:React.ReactNode
}

const EmptyWrapper = ({ children }: IWithChildren) => <>{ children }</>

const FlexWrapper = ({ children }: IWithChildren) => (
	<Flex noWrap align="baseline" position="apart">{ children }</Flex>
)

export default SearchableDropdown
