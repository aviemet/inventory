import React from 'react'
import { type UseFormProps, useForm } from 'use-inertia-form'

const FormConsumer = ({ children }: { children: (form: UseFormProps<any>) => React.ReactNode }) => {
	const form = useForm()

	return (
		<>{ children(form) }</>
	)
}

export default FormConsumer
