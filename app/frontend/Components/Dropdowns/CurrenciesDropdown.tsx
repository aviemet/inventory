import React, { forwardRef } from 'react'
import { Select as FormSelect } from '@/Components/Form'
import { Select as InputSelect } from '@/Components/Inputs'
import { getCurrencies } from '@/queries/currencies'
import { isEmpty } from 'lodash'
import { useInFormContext } from '@/lib'
import { type IAsyncDropdown } from '.'

interface ICurrenciesDropdown extends IAsyncDropdown<Schema.CurrencyOption> {}

const CurrenciesDropdown = forwardRef<HTMLInputElement, ICurrenciesDropdown>((
	{ label = 'Currency', name = 'currency', ...props },
	ref,
) => {
	const { data, refetch } = getCurrencies({
		staleTime: Infinity,
		cacheTime: Infinity,
	})

	const commonProps = {
		ref,
		label,
		name,
		options: !data ? [] : data.map(currency => ({
			label: `${currency.code} (${currency.symbol})`,
			value: String(currency.code),
		})),
		onDropdownOpen: () => {
			if(isEmpty(data)) refetch()
		},
		searchable: true,
		clearable: true,
		...props,
	}

	if(useInFormContext()) {
		return <FormSelect { ...commonProps } />
	}

	return <InputSelect { ...commonProps } />
})

export default CurrenciesDropdown
