import React from 'react'
import { TRProps } from 'react-html-props'

const Row = ({ children, ...props }: TRProps) => {
	return (
		<tr { ...props }>
			{ children }
		</tr>
	)
}

export default Row