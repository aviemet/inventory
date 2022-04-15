import React from 'react'
import 'twin.macro'

const Content = ({ children }) => {
	return (
		<div tw="sm:px-8 px-4 pt-6 pb-1">
			{ children }
		</div>
	)
}

export default Content
