import React from 'react'
import { useForm, useInputProps } from './Form'
import Field from './Field'
import Feedback from './Feedback'
import DateTimeInput, { type IDateTimeProps } from '../Inputs/DateTime'
import cx from 'classnames'

interface IDateTimeFormProps extends Omit<IDateTimeProps, 'name'> {
	name: string
}

const DateTime = ({ name, required, onChange, id, ...props }: IDateTimeFormProps) => {
	const { data, setData, errors } = useForm()
	const { inputId, inputName } = useInputProps(name)

	const handleChange = value => {
		setData(name, value[0].toISOString())
	}

	return (
		<Field type="date" required={ required } errors={ !!errors?.[name] }>
			<DateTimeInput
				id={ id || inputId }
				name={ inputName }
				value={ data[name] }
				onChange={ handleChange }
				required={ required }
				{ ...props }
			/>
			<Feedback errors={ errors[name] } />
		</Field>
	)
}

export default DateTime
