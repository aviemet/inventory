import React, { forwardRef, useState } from 'react'
import Field, { FieldGridCol } from '../Field'
import SearchableDropdownInput, { type ISearchableDropdownProps } from '@/Components/Inputs/SearchableDropdown'
import { Box, ConditionalWrapper, Group } from '@/Components'
import { ModalFormButton } from '@/Components/Button'
import { router } from '@inertiajs/react'
import { useInertiaInput, type UseFormProps } from 'use-inertia-form'
import { coerceArray } from '@/lib'
import axios from 'axios'
import { type IFormInputProps } from '.'
import { Grid } from '@mantine/core'

export interface IDropdownWithModalButton {
	name?: string
	model?: string
	label?: string
	fetchOnOpen?: string
	required?: boolean
	errorKey?: string
}

type OmittedDropdownTypes = 'name'|'defaultValue'|'onBlur'|'onChange'|'onDropdownOpen'|'onDropdownClose'
export interface ISearchableDropdownFormProps extends Omit<ISearchableDropdownProps, OmittedDropdownTypes>, IFormInputProps<Schema.Search[]> {
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
		span,
		...props
	},
	ref,
) => {
	const [fetchedOptions, setFetchedOptions] = useState<Schema.Search[]>([])

	const { form, inputName, inputId, value, setValue, error } = useInertiaInput({ name, model, errorKey })

	// TODO: Reminder that endpoint fetching was moved to Inputs component, this needs to be reworked
	const fetchNewRecords = (query?: string) => {
		if(endpoint && query){
			axios.get(endpoint, {
				params: {
					search: query,
				},
			})
				.then(response => {
					console.log({ response })
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
		if(onBlur) onBlur(value, form)
	}

	const handleDropdownOpen = () => {
		fetchNewRecords()
		if(onDropdownOpen) onDropdownOpen(form)
	}

	const handleDropdownClose = () => {
		if(onDropdownClose) onDropdownClose(form)
	}

	const handleNewFormSuccess = (data: { id: string|number }) => {
		fetchNewRecords()
		setValue(String(data.id))
	}

	return (
		<ConditionalWrapper
			wrapper={ children => (
				<FieldGridCol span={ span }>{ children }</FieldGridCol>
			) }
			condition={ true }
		>
			<ConditionalWrapper
				wrapper={ children => (
					<Group
						noWrap
						grow
						align="baseline"
						position="apart"
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
								grid={ false }
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
		</ConditionalWrapper>
	)
})

export default SearchableDropdown
