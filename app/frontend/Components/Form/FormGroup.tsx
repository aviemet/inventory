import React from 'react'
import { DivProps } from 'react-html-props'
import cx from 'clsx'

interface IFormGroupProps extends DivProps {
	legend?: string
	outline?: boolean
}

const FormGroup = ({ children, legend, outline = false }: IFormGroupProps) => {
	return (
		<fieldset className={ cx({ outline }) }>
			{ legend && <legend>{ legend }</legend> }
			{ children }
		</fieldset>
	)
}

export default FormGroup
