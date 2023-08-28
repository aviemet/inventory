import React, { forwardRef } from 'react'
import { TableSectionContextProvider, useTableContext } from './TableContext'
import { TBodyProps } from 'react-html-props'
import { Box, LoadingOverlay, type BoxProps } from '@mantine/core'

interface ITableBody extends BoxProps, TBodyProps {}

const Body = forwardRef<HTMLTableSectionElement, ITableBody>(({ children, ...props }, ref) => {
	const tableState = useTableContext(false)

	if(tableState === null) {
		return (
			<TableSectionContextProvider value={ { section: 'body' } }>
				<Box component="tbody" { ...props } ref={ ref }>
					{ children }
				</Box>
			</TableSectionContextProvider>
		)
	}

	const { tableState: { searching } } = tableState

	return (
		<TableSectionContextProvider value={ { section: 'body' } }>
			<Box component="tbody" { ...props } ref={ ref }>
				{ searching && <tr><td><LoadingOverlay visible={ searching } overlayBlur={ 1 } /></td></tr> }
				{ children }
			</Box>
		</TableSectionContextProvider>
	)
})

export default Body
