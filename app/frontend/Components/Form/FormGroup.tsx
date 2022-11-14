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
		<Box component='fieldset' className={ cx({ outline }) } sx={ theme => {
			const alphaAdjustment = 0.125

			return {
				marginTop: 30,
				padding: 10,
				position: 'relative',
				backgroundColor: theme.other.colorSchemeOption(
					theme.fn.darken(theme.white, alphaAdjustment),
					theme.fn.lighten(theme.black, alphaAdjustment),
				),
				borderTop: `2px solid ${theme.other.colorSchemeOption(theme.white, theme.black)}`,

				legend: {
					position: 'absolute',
					top: '-1.75rem',
					display: 'inline-block',
					color: theme.other.colorSchemeOption(theme.black, theme.white),
				},
			}
		} }>
			{ legend && <legend>{ legend }</legend> }
			{ children }
		</Box>
	)
}

export default FormGroup
