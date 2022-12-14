import React, { useState } from 'react'
import { useTableSectionContext } from '@/Components/Table/TableContext'
import FlexMoney from './FlexMoney'

interface IMoneyProps {
	children?: number | null
	currency?: string
	locale?: string
	accounting?: boolean
}

const Money = ({ children, currency = 'USD', locale = 'en-US', accounting }: IMoneyProps) => {
	const [inTable, setInTable] = useState(false)
	const inputValue = children || 0

	const currencyFormatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
		signDisplay: accounting ? 'never' : 'auto',
	})

	try {
		// Throw if component is not being used inside of a table
		// (when used in a table cell, always use FlexMoney. Throwing is easiest way to check context)
		useTableSectionContext()
		if(!inTable) setInTable(true)
	} catch(e) {}

	if(accounting || (inTable && accounting === undefined)) {
		return (
			<FlexMoney
				formatter={ currencyFormatter }
				accounting={ accounting }
			>
				{ inputValue }
			</FlexMoney>
		)
	}

	return <>{ currencyFormatter.format(inputValue) }</>
}

export default Money
