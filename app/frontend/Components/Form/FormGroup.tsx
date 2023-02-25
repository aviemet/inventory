import React from 'react'
import { DivProps } from 'react-html-props'
import cx from 'clsx'
import { Box } from '@mantine/core'

interface IFormGroupProps extends DivProps {
	legend?: string
	outline?: boolean
	compact?: boolean
}

const FormGroup = ({ children, legend, outline = true, compact = false }: IFormGroupProps) => {
	return (
		<Box component='fieldset' className={ cx({ outline }) } sx={ {
			marginTop: legend ? '0.5rem' : undefined,
		} }>
			{ legend && <legend>{ legend }</legend> }
			{ children }
		</Box>
	)
}

export default FormGroup
