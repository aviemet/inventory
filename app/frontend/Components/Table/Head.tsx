import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './TableContext'
import { THeadProps } from 'react-html-props'
import { Box, type BoxProps, Sx } from '@mantine/core'

interface ITableHead extends BoxProps, THeadProps {
	sx?: Sx
}

const Head = forwardRef<HTMLTableSectionElement, ITableHead>((
	{ children, sx, ...props },
	ref,
) => {
	return (
		<TableSectionContextProvider value={ { section: 'head' } }>
			<Box
				{ ...props }
				component="thead"
				sx={ [{ zIndex: 401 }, sx] }
				ref={ ref }
			>
				{ children }
			</Box>
		</TableSectionContextProvider>
	)
})

export default Head
