import React from 'react'
import { Box, Grid } from '@mantine/core'
import cx from 'clsx'
import { Form as InertiaForm, type FormProps, type NestedObject } from 'use-inertia-form'
import useFormStyles from './useFormStyles'
import ConditionalWrapper from '../ConditionalWrapper'
import { createContext } from '@/lib/hooks'

type TFormLayoutValues = {
	disableFormatting: boolean
	grid: boolean
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
	grid = true,
	className,
	railsAttributes = true,
	...props
}: IFormProps<TForm>) => {
	const { classes } = useFormStyles()

	return (
		<FormFormatProvider value={ { disableFormatting, grid } }>
			<Box className={ classes.form } px="xs" pt="xs">
				<InertiaForm
					data={ data }
					className={ cx({ 'format-grid': !disableFormatting }, className) }
					railsAttributes={ railsAttributes }
					{ ...props }
				>
					<ConditionalWrapper
						wrapper={ children => (
							<Grid>
								{ children }
							</Grid>
						) }
						condition={ grid }
					>
						{ children }
					</ConditionalWrapper>
				</InertiaForm>
			</Box>
		</FormFormatProvider>
	)
}

export default Form
