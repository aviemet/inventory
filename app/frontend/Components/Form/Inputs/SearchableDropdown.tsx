import React, { forwardRef, useState } from 'react'
import Field from '../Field'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '@/Components/Inputs/SearchableDropdown'
import { ConditionalWrapper, Group } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import { router } from '@inertiajs/react'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'
import { coerceArray } from '@/lib'
import axios from 'axios'

export interface IDropdownWithModalButton {
	name?: string
	model?: string
	label?: string
	fetchOnOpen?: string
	required?: boolean
	errorKey?: string
}

type OmittedDropdownTypes = 'name'|'defaultValue'|'onBlur'|'onChange'|'onDropdownOpen'|'onDropdownClose'
export interface ISearchableDropdownFormProps extends Omit<ISearchableDropdownProps, OmittedDropdownTypes>, IInertiaInputProps {
	defaultValue?: string
	onDropdownOpen?: (form: UseFormProps<any>) => void
	onDropdownClose?: (form: UseFormProps<any>) => void
	fetchOnOpen?: string|string[]
	endpoint?: string
	newForm?: React.ReactElement
	field?: boolean
}

const SearchableDropdown = forwardRef<HTMLInputElement, ISearchableDropdownFormProps>((
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
	const [fetchedOptions, setFetchedOptions] = useState<Schema.Search[]>([])

	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model, errorKey })

	const fetchNewRecords = (query?: string) => {
		if(endpoint && query){
			axios.get(endpoint, {
				params: {
					search: query,
				},
			})
				.then(response => {
					setFetchedOptions(response.data)
				})
				.catch(error => {
					console.error({ error })
				})
		} else if(fetchOnOpen) {
			router.reload({ only: coerceArray(fetchOnOpen) })
		}
	}

	const handleSearchChange = (query: string) => {
		console.log('SEARCH')
		fetchNewRecords(query)
		if(onSearchChange) onSearchChange(query)
	}

	const handleChange = (option: string|null) => {
		console.log('CHANGE')
		setValue(option ? option : '')
		let optionArg: Schema.Search|string|null = option
		if(endpoint) {
			optionArg = fetchedOptions.find(el => String(el.id) === String(option))!
		}
		if(onChange) onChange(optionArg, form)
	}

	const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
		console.log('BLUR')
		if(onBlur) onBlur(value, form)
	}

	const handleDropdownOpen = () => {
		console.log('OPEN')
		fetchNewRecords()
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		console.log('CLOSE')
		if(onDropdownClose) onDropdownClose(form)
	}

	const handleNewFormSuccess = (data: { id: string|number }) => {
		fetchNewRecords()
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
						options={ endpoint ? fetchedOptions : options }
						value={ String(value) }
						onSearchChange={ handleSearchChange }
						onChange={ handleChange }
						onBlur={ handleBlur }
						onDropdownOpen={ handleDropdownOpen }
						onDropdownClose={ handleDropdownClose }
						defaultValue={ defaultValue ?? String(value) }
						error={ error }
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
