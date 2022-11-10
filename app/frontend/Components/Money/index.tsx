import React from 'react'
import { useTableSectionContext } from '@/Components/Table/TableContext'
import FlexMoney from './FlexMoney'

interface IMoneyProps {
	children?: number | null
	currency?: string
	accounting?: boolean
}


const Money = ({ children, currency = 'USD', accounting = false }: IMoneyProps) => {
	const inputValue = children || 0

	const currencyFormatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
		signDisplay: accounting ? 'never' : 'auto'
	})

	try {
		useTableSectionContext() // Throw if component is not being used inside of a table

		return (
			<FlexMoney
				formatter={ currencyFormatter }
				accounting={ accounting }
			>
				{ inputValue }
			</FlexMoney>
		)
	} catch(e) {
		if(inputValue < 0 && accounting) {
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
}

export default Money
