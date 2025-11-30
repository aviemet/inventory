import { useMantineTheme, px, type MantineBreakpointsValues } from "@mantine/core"
import { useDebouncedState, useViewportSize } from "@mantine/hooks"
import React, { useEffect } from "react"

import { Flex, Table } from "@/components"

import NetworkTable from "./Table"

interface NetworkDetailsTableProps {
	hosts: string[]
	ips: Schema.IpLeasesBasic[]
	pagination: Schema.Pagination
}

const calculateNumTableRows = (width: number, breakpoints: MantineBreakpointsValues) => {
	if(width === 0) return 3 // Default to 3 while browser window is loading

	if(width <= Number(px(breakpoints.sm))) {
		return 1
	} else if(width <= Number(px(breakpoints.md))) {
		return 2
	} else if(width <= Number(px(breakpoints.xl))) {
		return 3
	} else if(width <= Number(px(breakpoints["2xl"]))) {
		return 4
	} else if(width <= Number(px(breakpoints["hd"]))) {
		return 5
	}
	return 6
}

const NetworkDetailsTable = ({ hosts, ips, pagination }: NetworkDetailsTableProps) => {
	const { breakpoints } = useMantineTheme()

	const { width } = useViewportSize()

	const [tableRows, setTableRows] = useDebouncedState(3, 500)

	useEffect(() => {
		setTableRows(calculateNumTableRows(width, breakpoints))
	}, [breakpoints, setTableRows, width])

	return (
		<Table.TableProvider
			selectable={ false }
			hideable={ false }
			model="networks"
			data={ ips }
			pagination={ pagination }
		>
			<Flex align="start">
				{ Array(tableRows).fill(undefined).map((_, i) => {
					const start = Math.ceil(hosts.length / tableRows * i)
					const end = Math.ceil((hosts.length / tableRows) * (i + 1))

					return (
						<NetworkTable
							key={ i }
							hosts={ hosts.slice(start, end) }
							ips={ ips }
						/>
					)
				}) }
			</Flex>
			<Table.Pagination showLimit={ false } />
		</Table.TableProvider>
	)
}

export default NetworkDetailsTable
