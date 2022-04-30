import React from 'react'
import { IconContext } from 'react-icons'

const iconDefaults =  {
	className: 'react-icon',
	size: '1rem'
}

const IconProvider = ({ children }) => {
	return (
		<IconContext.Provider value={ iconDefaults }>
			{ children }
		</IconContext.Provider>
	)
}

export default IconProvider