import React from 'react'
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import cx from 'classnames'

import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'

const DateTime = ({ label, name, required, onChange, type = 'text', id, ...props }) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	return (
		<Field type={ type } required={ required } errors={ !!errors?.[name] }>
			{ label && <label className={ cx({ required }) } htmlFor={ id || inputId }>
				{ label }
			</label> }
			<DateTimePicker
				name={ inputName }
				value={ data[name] }
				onChange={ e => setData(name, e.target.value) }
			/>

			{ errors && <div className="feedback">

			</div> }
		</Field>
	)
}

export default DateTime