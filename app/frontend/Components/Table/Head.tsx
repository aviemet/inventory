import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './TableContext'
import { Box, type BoxProps } from '@mantine/core'

interface ITableHead
	extends BoxProps,
	Omit<React.ComponentPropsWithoutRef<'thead'>, keyof BoxProps> {}

const Head = forwardRef<HTMLTableSectionElement, ITableHead>((
	{ children, ...props },
	ref,
) => {
	return (
		<TableSectionContextProvider value={ { section: 'head' } }>
			<Box
				{ ...props }
				component="thead"
				ref={ ref }
			>
				{ children }
			</Box>
		</TableSectionContextProvider>
	)
})

export default Head
