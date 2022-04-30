import React from 'react'
import { DivProps } from 'react-html-props'

interface IGroupProps extends DivProps {
	legend?: string
}

const Group = ({ children, legend }: IGroupProps) => {
	return (

		<fieldset>
			{ legend && <legend>{ legend }</legend> }
			{ children }
		</fieldset>
	)
}

export default Group
