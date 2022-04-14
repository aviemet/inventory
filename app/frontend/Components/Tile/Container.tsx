import React from 'react'

const Tile = ({ children }) => {
	return (
		<div className="tile border-brand-light w-full max-w-sm bg-white border-t-2 rounded-lg shadow-md">
			{ children }
		</div>
	)
}

export default Tile
