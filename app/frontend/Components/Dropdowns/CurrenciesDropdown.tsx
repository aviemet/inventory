import React, { forwardRef } from 'react'
import { SearchableDropdown as FormDropdown } from '@/Components/Form'
import { SearchableDropdown as InputDropdown } from '@/Components/Inputs'
import { getCurrencies } from '@/queries/currencies'
import { isEmpty } from 'lodash'
import { inFormContext } from '@/lib'
import { type IAsyncDropdown } from '.'

interface ICurrenciesDropdown extends IAsyncDropdown<Schema.CurrencyOption> {}

const CurrenciesDropdown = forwardRef<HTMLInputElement, ICurrenciesDropdown>((
	{ label = 'Currency', name = 'currency', initialData = [], ...props },
	ref,
) => {
	const { data, refetch } = getCurrencies({
		staleTime: Infinity,
		cacheTime: Infinity,
		initialData,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: data,
		getLabel: (value: Record<string, any>) => `${value.code} (${value.symbol})`,
		getValue: (value: Record<string, any>) => value.code,
		onDropdownOpen: () => {
			if(isEmpty(data)) refetch()
		},
		...props,
	}

	if(inFormContext()) {
		return <FormDropdown { ...commonProps } />
	}

	return <InputDropdown { ...commonProps } />
})

export default CurrenciesDropdown
