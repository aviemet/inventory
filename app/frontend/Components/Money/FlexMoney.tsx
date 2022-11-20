import React, { useCallback } from 'react'
import { Group } from '@mantine/core'

interface IFlexMoneyProps {
	children: number
	formatter: Intl.NumberFormat
	accounting?: boolean
}

const FlexMoney = ({ children, formatter, accounting }: IFlexMoneyProps) => {
	const getParts = useCallback((formatter: Intl.NumberFormat, value: number) => {
		const parts = formatter.formatToParts(value)
		const symbol = parts.find(part => part.type === 'currency')

		const formattedValue = value === 0 ? '-' : parts.filter(part => part.type !== 'currency').map(part => part.value).join('')

		return {
			symbol: symbol?.value ?? '',
			value: formattedValue,
		}
	}, [children])

	const { symbol, value } = getParts(formatter, children)

	return (
		<Group noWrap position="apart">
			<div>{ symbol }</div>
			<div>{ children < 0 && accounting ? `(${value})` : value }</div>
		</Group>
	)
}


export default FlexMoney
