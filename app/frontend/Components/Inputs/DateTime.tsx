import React from 'react'
import Flatpickr, { type DateTimePickerProps } from 'react-flatpickr'
import labelPlugin from 'flatpickr/dist/plugins/labelPlugin/labelPlugin'
import { Box, Input } from '@mantine/core'

import 'flatpickr/dist/themes/material_green.css'
import Label from './Label'

export interface IDateTimeProps extends Omit<DateTimePickerProps, 'onChange'|'size'> {
	label?: string
	name?: string
	onChange?: (values: Flatpicker.ChangeProps) => void
	error?: string | string[]
}

const DateTime = ({ label, name, required, value, onChange, type = 'text', id, ...props }: IDateTimeProps) => {
	const handleChange = (dates: Date[], dateStr: string, instance: Flatpicker.Instance) => {
		if(onChange) onChange({ dates, dateStr, instance })
	}

	return (
		<>
			{ label && <Label required={ required } htmlFor={ id }>
				{ label }
			</Label> }
			<Box sx={ {

			} }>
				<Flatpickr
	        data-enable-time
					name={ name }
					required={ required }
					onChange={ handleChange }
					value={ value }
					options={ {
						altInput: true,
						plugins: [labelPlugin()],
					} }
					id={ id }
					render={
						({ defaultValue, value, ...props }, ref) => {
							return <Input defaultValue={ defaultValue } ref={ ref } size="md" { ...props } />
						}
					}
				/>
			</Box>
		</>
	)
}

export default DateTime
