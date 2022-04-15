import React from 'react'
import 'twin.macro'

const Tile = ({ children }) => {
	return (
		<div tw="border-brand-light w-full max-w-sm bg-white border-t-2 rounded-lg shadow-md">
			{ children }
		</div>
	)
}

export default Tile
