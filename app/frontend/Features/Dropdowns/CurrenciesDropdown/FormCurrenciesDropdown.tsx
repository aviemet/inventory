import React from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { useGetCurrencies } from '@/queries/currencies'
import { isEmpty } from 'lodash'
import { type AsyncDropdown } from '..'

interface FormCurrenciesDropdownProps extends AsyncDropdown<Schema.CurrencyOption> {}

const FormCurrenciesDropdown = ({
	label = 'Currency',
	name = 'currency',
	...props
}: FormCurrenciesDropdownProps) => {
	const { data, refetch } = useGetCurrencies({
		staleTime: Infinity,
	})

	return <FormSelect
		label={ label }
		name={ name }
		options={ !data ? [] : data.map(currency => ({
			label: `${currency.code} (${currency.symbol})`,
			value: String(currency.code),
		})) }
		onDropdownOpen={ () => {
			if(isEmpty(data)) refetch()
		} }
		searchable
		clearable
		{ ...props }
	/>

}

export default FormCurrenciesDropdown
