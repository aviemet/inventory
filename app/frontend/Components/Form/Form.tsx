import React from 'react'
import { Box } from '@mantine/core'
import useFormStyles from './useFormStyles'
import cx from 'clsx'
import { Form as InertiaForm, type FormComponentProps } from 'use-inertia-form'

interface IFormProps<T extends Record<keyof T, unknown>> extends FormComponentProps<T> {
	grid?: boolean
}

const Form = <T extends Record<keyof T, unknown>>(
	{ children, grid = true, className, ...props }: IFormProps<T>,
	ref: React.ForwardedRef<HTMLFormElement>,
) => {
	const { classes } = useFormStyles()

	return (
		<Box className={ classes.form }>
			<InertiaForm
				ref={ ref }
				className={ cx({ 'format-grid': grid }, className) }
				{ ...props }
			>
				{ children }
			</InertiaForm>
		</Box>
	)
}

export default React.forwardRef(Form)
