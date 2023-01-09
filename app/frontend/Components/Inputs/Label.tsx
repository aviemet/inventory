import React, { forwardRef } from 'react'
import { Box, type BoxProps } from '@mantine/core'
import { merge } from 'lodash'
import cx from 'clsx'
import { LabelProps } from 'react-html-props'

interface ILabelProps extends BoxProps, LabelProps {
	required?: boolean
}

const Label = forwardRef<HTMLLabelElement, ILabelProps>((
	{ children, sx, required = false, className, ...props },
	ref,
) => {
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
		ref={ ref }
		{ ...props }
		>
			{ children }
		</Box>
	)
})

export default Label
