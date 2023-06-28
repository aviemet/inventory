import React from 'react'
import { SearchableDropdown } from '@/Components/Form'
import { type IDropdownWithModalButton } from '../Inputs/SearchableDropdown'
import { getCurrencies } from '@/queries/currencies'

interface ICurrenciesDropdown extends IDropdownWithModalButton {}

const CurrenciesDropdown = ({ label = 'Currency', name = 'currency', ...props }: ICurrenciesDropdown) => {
	const { data, refetch } = getCurrencies({
		staleTime: Infinity,
		cacheTime: Infinity,
	})

	return (
		<SearchableDropdown
			label={ label }
			name={ name }
			options={ data }
			onDropdownOpen={ () => refetch() }
			getLabel={ value => `${value.code} (${value.symbol})` }
			getValue={ value => value.code }
			{ ...props }
		/>
	)
}

export default CurrenciesDropdown
