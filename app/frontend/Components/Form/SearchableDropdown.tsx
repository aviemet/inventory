import React, { useCallback } from 'react'
import { useForm, useInputProps } from './index'
import Field from './Field'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '../Inputs/SearchableDropdown'
import { Flex } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import { Inertia } from '@inertiajs/inertia'

interface IInputProps extends Omit<ISearchableDropdownProps, 'defaultValue'|'onChange'> {
	label?: string
	name: string
	defaultValue?: string
	onChange?: (option: string|null, form: Inertia.FormProps) => void
	newForm?: React.ReactElement
	fetchOnOpen?: string
}

const SearchableDropdown = ({
	options,
	label,
	name,
	required,
	defaultValue,
	getLabel = option => option.name,
	getValue = option => String(option.id),
	onChange,
	newForm,
	fetchOnOpen,
	id,
	...props
}: IInputProps) => {
	const form = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = useCallback((option: string|null) => {
		form.setData(inputName, option)
		if(onChange) onChange(option, form)
	}, [onChange, inputName])


	const handleDropdownOpen = () => {
		if(fetchOnOpen) {
			Inertia.reload({ only: [fetchOnOpen] })
		}
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
					defaultValue={ defaultValue ?? form.getData(inputName) }
					getLabel={ getLabel }
					getValue={ getValue }
					label={ label }
					{ ...props }
				/>
			</Field>
			{ newForm && <ModalFormButton model="Vendor" form={ newForm } /> }
		</Wrapper>
	)
}

interface IWithChildren {
	children?:React.ReactChild
}

const EmptyWrapper = ({ children }: IWithChildren) => <>{ children }</>

const FlexWrapper = ({ children }: IWithChildren) => (
	<Flex noWrap align="baseline" position="apart">{ children }</Flex>
)

export default SearchableDropdown
