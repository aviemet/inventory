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
		<Box component='fieldset' className={ cx({ outline }) } sx={ theme => ({
			'&.outline': {
				border: `solid 1px ${theme.colors[theme.primaryColor][theme.primaryShade[theme.colorScheme]]}`,
				padding: '10px 16px',
				borderRadius: 10,
				marginBottom: 10,
				background: theme.other.colorSchemeOption(theme.colors.gray[0], theme.colors.gray[8])
			},
			legend: {
				padding: '0 10px',
				color: theme.white,
			},
		}) }>
			{ legend && <legend>{ legend }</legend> }
			{ children }
		</Box>
	)
}

export default FormGroup
