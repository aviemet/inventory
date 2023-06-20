import React from 'react'
import { Box, BoxProps, Grid, type ColSpan, type ColProps } from '@mantine/core'
import cx from 'clsx'
import ConditionalWrapper from '../ConditionalWrapper'

export interface IFieldProps extends BoxProps {
	children: React.ReactNode
	type?: TInputType
	required?: boolean
	errors?: boolean
	disableFormatting?: boolean
	grid?: boolean
	span?: ColSpan
	gridProps?: ColProps
}

interface IFieldGridColProps extends ColProps {
	children: React.ReactNode
	span?: ColSpan
}

export const FieldGridCol = ({ children, span, ...props }: IFieldGridColProps) => (
	<Grid.Col
		md={ span }
		sm={ 12 }
		p={ 0 }
		{ ...props }
	>
		{ children }
	</Grid.Col>
)

const Field = ({
	children,
	type,
	required = false,
	errors = false,
	className,
	disableFormatting = false,
	grid = true,
	span = 12,
	gridProps,
	...props
}: IFieldProps) => {
	return (
		<ConditionalWrapper
			wrapper={ children => <FieldGridCol span={ span } { ...gridProps }>{ children }</FieldGridCol> }
			condition={ grid }
		>
			<Box
				className={ cx(
					'field',
					{ [String(type)]: type },
					{ 'required': required },
					{ 'field_with_errors': errors },
					{ 'no-grid': disableFormatting },
					className,
				) }
				{ ...props }
			>
				{ children }
			</Box>
		</ConditionalWrapper>
	)
}

export default Field
