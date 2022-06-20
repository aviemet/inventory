import React, { forwardRef } from 'react'
import { TableSectionContextProvider } from './TableContext'
import { THeadProps } from 'react-html-props'

const Head = forwardRef<HTMLTableSectionElement, THeadProps>(({ children, ...props }, ref) => {
	return (
		<TableSectionContextProvider value={ { section: 'head' } }>
			<thead { ...props } ref={ ref }>
				{ children }
			</thead>
		</TableSectionContextProvider>
	)
})

export default React.memo(Head)
