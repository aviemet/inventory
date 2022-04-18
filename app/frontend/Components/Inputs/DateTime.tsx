import React from 'react'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import { InputProps } from 'react-html-props'
import tw, { styled } from 'twin.macro'
import cx from 'classnames'

import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'

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
				<DateTimePicker
					name={ name }
					id={ id }
					required={ required }
					onChange={ onChange }
					value={ value }
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
