import React from 'react'
import Flatpickr, { type DateTimePickerProps } from 'react-flatpickr'
import labelPlugin from 'flatpickr/dist/plugins/labelPlugin/labelPlugin'
import { Input } from '@mantine/core'
import tw, { styled } from 'twin.macro'
import cx from 'classnames'

import 'flatpickr/dist/themes/material_green.css'

export interface IDateTimeProps extends Omit<DateTimePickerProps, 'onChange'> {
	label?: string
	name?: string
	onChange?: (values: Flatpicker.ChangeProps) => void
}

const DateTime = ({ label, name, required, value, onChange, type = 'text', id, ...props }: IDateTimeProps) => {
	const handleChange = (dates: Date[], dateStr: string, instance: Flatpicker.Instance) => {
		if(onChange) onChange({ dates, dateStr, instance })
	}

	return (
		<>
			{ label && <label className={ cx({ required }) } htmlFor={ id }>
				{ label }
			</label> }
			<DateTimeComponent>
				<Flatpickr
	        data-enable-time
					name={ name }
					required={ required }
					onChange={ handleChange }
					value={ value }
					options={ {
						altInput: true,
						plugins: [labelPlugin()]
					} }
					id={ id }
					render={
						({ defaultValue, value, ...props }, ref) => {
							return <Input defaultValue={ defaultValue } ref={ ref } size="md" { ...props } />
						}
					}
				/>
			</DateTimeComponent>
		</>
	)
}

export default DateTime

const DateTimeComponent = styled.div`
	.react-datetime-picker {
		height: 100%;
		width: 100%;
	}
	
	button, .button {
		color: black;

		&.react-calendar__month-view__days__day--weekend {
			${tw`text-brand-dark`}
		}
	}
`
