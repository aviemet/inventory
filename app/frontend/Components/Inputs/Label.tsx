import React from 'react'
import { Box, type BoxProps } from '@mantine/core'
import { merge } from 'lodash'
import cx from 'clsx'

interface ILabelProps extends BoxProps<'label'> {
	required?: boolean
}

const Label = ({ children, sx, required = false, className, ...props }: ILabelProps) => {
	return (
		<Box component="label" sx={ theme => {
			let labelStyles = { }

			if(sx) {
				let propStyles = {}
				propStyles = typeof sx === 'function' ? sx(theme) : sx
				labelStyles = merge(labelStyles, propStyles)
			}

			return labelStyles
		} }
		className={ cx(className, { required }) }
		{ ...props }
		>
			{ children }
		</Box>
	)
}

export default Label
