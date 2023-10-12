import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './TableContext'
import { THeadProps } from 'react-html-props'
import { Box, type BoxProps } from '@mantine/core'

interface ITableHead extends BoxProps, THeadProps {}

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
