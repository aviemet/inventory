import React from 'react'
import Flatpickr from 'react-flatpickr'
import { InputProps } from 'react-html-props'
import tw, { styled } from 'twin.macro'
import cx from 'classnames'

import 'flatpickr/dist/themes/material_green.css'

export interface IDateTimeProps extends InputProps {
	label?: string
	name?: string
}

const DateTime = ({ label, name, required, value, onChange, type = 'text', id, ...props }: IDateTimeProps) => {
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
					onChange={ onChange }
					value={ value }
					options={ {
						altInput: true
					} }
					{ ...props }
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
