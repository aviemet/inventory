import React from 'react'
import { DivProps } from 'react-html-props'

interface IFormGroupProps extends DivProps {
	legend?: string
}

const FormGroup = ({ children, legend }: IFormGroupProps) => {
	return (

		<fieldset>
			{ legend && <legend>{ legend }</legend> }
			{ children }
		</fieldset>
	)
}

export default FormGroup
