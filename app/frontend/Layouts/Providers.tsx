import React from 'react'
import { IconContext } from 'react-icons'

const Providers = ({ children, auth }) => {
	return (
		<IconContext.Provider value={ { color: 'black', className: 'react-icon', size: '1rem' } }>
			{ children }
		</IconContext.Provider>
	)
}

export default Providers
