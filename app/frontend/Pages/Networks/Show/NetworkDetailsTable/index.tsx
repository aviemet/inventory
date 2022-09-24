import React, { useEffect } from 'react'
import { Flex } from '@/Components'
import { useMantineTheme } from '@mantine/core'
import { useDebouncedState, useViewportSize } from '@mantine/hooks'
import { Table } from '@/Components'
import NetworkTable from './Table'

interface INetworkDetailsTableProps {
	hosts: string[]
	ips: Schema.IpLease[]
	pagination: Schema.Pagination
}

const NetworkDetailsTable = ({ hosts, ips, pagination }: INetworkDetailsTableProps) => {
	const { breakpoints } = useMantineTheme()
	const calculateNumTableRows = (width: number) => {
		if(width === 0) return 3 // Default to 3 while browser window is loading

		if(width <= breakpoints.xs) {
			return 1
		} else if(width <= breakpoints.md) {
			return 2
		} else if(width <= breakpoints.xl) {
			return 3
		}
		return 4
	}

	const { width } = useViewportSize()
	const [tableRows, setTableRows] = useDebouncedState(calculateNumTableRows(width), 500)

	useEffect(() => {
		setTableRows(calculateNumTableRows(width))
	}, [width])

	return (
		<Table.TableProvider
			selectable={ false }
			hideable={ false }
			model="networks"
			rows={ ips }
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
			<Table.Pagination />
		</Table.TableProvider>
	)
}

export default NetworkDetailsTable
