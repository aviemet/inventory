import React from 'react'
import { Box } from '@mantine/core'
import cx from 'clsx'
import { Form as InertiaForm, type FormProps, type NestedObject } from 'use-inertia-form'
import * as classes from './Form.css'
import { createContext } from '@/lib/hooks'

type TFormLayoutValues = {
	disableFormatting: boolean
}

const [useFormFormat, FormFormatProvider] = createContext<TFormLayoutValues>()
export { useFormFormat }

export interface IFormProps<TForm> extends FormProps<TForm> {
	disableFormatting?: boolean
	grid?: boolean
}

const Form = <TForm extends NestedObject>({
	children,
	data,
	disableFormatting = false,
	className,
	railsAttributes = true,
	...props
}: IFormProps<TForm>) => {
	return (
		<FormFormatProvider value={ { disableFormatting } }>
			<Box className={ cx(classes.form) } px="xs" pt="xs">
				<InertiaForm
					data={ data }
					className={ cx({ 'format-grid': !disableFormatting }, className) }
					railsAttributes={ railsAttributes }
					{ ...props }
				>
					{ children }
				</InertiaForm>
			</Box>
		</FormFormatProvider>
	)
}

export default Form
