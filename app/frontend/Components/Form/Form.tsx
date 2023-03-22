import React from 'react'
import { Box } from '@mantine/core'
import useFormStyles from './useFormStyles'
import cx from 'clsx'
import { Form as InertiaForm, type FormProps, type NestedObject } from 'use-inertia-form'

interface IFormProps<TForm> extends FormProps<TForm> {
	grid?: boolean
}

const Form = <TForm extends NestedObject>(
	{ children, data, grid = true, className, railsAttributes = true, onChange, ...props }: IFormProps<TForm>,
) => {
	const { classes } = useFormStyles()

	return (
		<Box className={ classes.form }>
			<InertiaForm
				data={ data }
				className={ cx({ 'format-grid': grid }, className) }
				railsAttributes={ railsAttributes }
				onChange={ (form) => {
					console.log({ data: form.data })
					if(onChange) onChange(form)
				} }
				{ ...props }
			>
				{ children }
			</InertiaForm>
		</Box>
	)
}

export default Form
