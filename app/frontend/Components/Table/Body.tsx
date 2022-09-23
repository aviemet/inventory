import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './TableContext'
import { TBodyProps } from 'react-html-props'
import { Box, type BoxProps } from '@mantine/core'

interface ITableBody extends BoxProps, TBodyProps {}

const Body = forwardRef<HTMLTableSectionElement, ITableBody>(({ children, ...props }, ref) => {
	return (
		<TableSectionContextProvider value={ { section: 'body' } }>
			<Box component="tbody" { ...props } ref={ ref }>
				{ children }
			</Box>
		</TableSectionContextProvider>
	)
})

export default Body
