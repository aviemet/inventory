import React, { useState } from "react"

import { useTableSectionContext } from "@/components/Table/TableContext"
import { useCurrency, type UseCurrencyOptions } from "@/lib/hooks"
import { type Money } from "@/types"

import { FlexMoney } from "./FlexMoney"

interface MoneyProps {
	children?: number | Money | null
	currency?: string
	locale?: string
	accounting?: boolean
	options?: UseCurrencyOptions
}

export function MoneyComponent({
	children,
	currency = "USD",
	locale = "en-US",
	accounting = false,
	options = {},
}: MoneyProps) {
	const [inTable, setInTable] = useState(false)

	const useCurrencyOptions: UseCurrencyOptions = options
	useCurrencyOptions.signDisplay = accounting ? "never" : "auto"

	const [amount, formatter] = useCurrency({
		amount: children ?? 0,
		currency,
		locale,
		options: useCurrencyOptions,
	})

	try {
		useTableSectionContext()
		if(!inTable) setInTable(true)
	} catch(e) {}

	if(accounting || (inTable && accounting === undefined)) {
		return (
			<FlexMoney
				formatter={ formatter }
				accounting={ accounting }
			>
				{ amount }
			</FlexMoney>
		)
	}

	return <>{ formatter.format(amount) }</>
}
