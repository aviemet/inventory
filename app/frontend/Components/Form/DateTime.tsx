import React, { useCallback } from 'react'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import DateTimeInput, { type IDateTimeProps } from '../Inputs/DateTime'

interface IDateTimeFormProps extends Omit<IDateTimeProps, 'name'> {
	name: string
}

const DateTime = ({ name, required, onChange, id, ...props }: IDateTimeFormProps) => {
	const { getData, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = useCallback((dates: Date[], dateStr, instance) => {
		setData(inputName, dates[0].toISOString())
		if(onChange) onChange(dates, dateStr, instance)
	}, [onChange, inputName])

	return (
		<Field type="date" required={ required } errors={ !!errors?.[name] }>
			<DateTimeInput
				id={ id || inputId }
				name={ inputName }
				value={ String(getData(inputName)) }
				onChange={ handleChange }
				required={ required }
				{ ...props }
			/>
			<Feedback errors={ errors[name] } />
		</Field>
	)
}

export default DateTime
