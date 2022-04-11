import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './TableContext'
import { TFootProps } from 'react-html-props'

const Footer = forwardRef<HTMLTableSectionElement, TFootProps>(({ children, ...props }, ref) => {
	return (
		<TableSectionContextProvider value={ { section: 'footer' } }>
			<tfoot { ...props } ref={ ref }>
				{ children }
			</tfoot>
		</TableSectionContextProvider>
	)
})

export default Footer