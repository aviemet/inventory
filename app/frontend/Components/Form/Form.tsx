import React from 'react'
import { useForm as useInertiaForm, InertiaFormProps } from '@inertiajs/inertia-react'

import { createContext } from '@/Components/Hooks'
import { FormProps } from 'react-html-props'

// TODO: Figure out how to use generics to pass down model type definitions to useInertiaForm

interface IFormProps<T> extends FormProps {
	model?: string
	data: T
	to: string
	onSubmit?: (object) => boolean|void
}

interface IInertiaFormProps extends InertiaFormProps {
	model?: string
}

const [useForm, FormProvider] = createContext<IInertiaFormProps>()
export { useForm }

function fillEmptyValues<T extends Record<keyof T, unknown>>(data: T): T {
	const sanitizedDefaultData = data
	Object.keys(data).forEach(key => {
		sanitizedDefaultData[key] = data === null || data === undefined ? '' : data[key]
	})
	return sanitizedDefaultData
}

function Form<T extends Record<keyof T, unknown>>({ children, model, data, method = 'post', to, onSubmit, ...props }: IFormProps<T>) {
	const form = { ...useInertiaForm<Record<string, unknown>>(fillEmptyValues(data)), model }

	const handleSubmit = e => {
		e.preventDefault()
		let submit = true
		if(onSubmit) {
			const val = onSubmit(form)
			if(val === true || val === false) submit = val
		}
		if(submit) form[method.toLocaleLowerCase()](to)
	}

	return (
		<FormProvider value={ form }>
			<form onSubmit={ handleSubmit } { ...props }>
				{ children }
			</form>
		</FormProvider>
	)
}

export default React.memo(Form)

export const useInputProps = (name) => {
	const { model } = useForm()
	return { inputId: `${model}_${name}`, inputName: `${model}/${name}` }
}
