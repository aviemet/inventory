import React from 'react'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import { useForm, useInputProps } from './Form'
import cx from 'classnames'

import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'

const DateTime = ({ label, name, required, onChange, type = 'text', id, ...props }) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	return (
		<div className={ cx('field', type, { required }) }>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<DateTimePicker />

			{ errors && <div className="feedback">

			</div> }
		</div>
	)
}

export default DateTime