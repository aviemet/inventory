import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './Table'
import { TBodyProps } from 'react-html-props'

const Body = forwardRef<HTMLTableSectionElement, TBodyProps>(({ children, ...props }, ref) => {
	return (
		<TableSectionContextProvider value={ { section: 'body' } }>
			<tbody { ...props } ref={ ref }>
				{ children }
			</tbody>
		</TableSectionContextProvider>
	)
})

export default Body