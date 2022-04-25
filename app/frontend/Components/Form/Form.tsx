import React, { useEffect } from 'react'
import { useForm as useInertiaForm } from '@inertiajs/inertia-react'

import { createContext } from '@/Components/Hooks'
import { FormProps } from 'react-html-props'

interface IFormProps<T> extends FormProps {
	model?: string
	data: T
	to: string
	onSubmit?: (object) => boolean|void
	onChange?: (object) => void
	onSuccess?: (object) => void
}

interface IInertiaFormProps extends InertiaFormProps {
	model?: string
}

const [useForm, FormProvider] = createContext<IInertiaFormProps>()
export { useForm }

const [useFormMetaData, FormMetaDataProvider] = createContext<Record<string, string>>()
export const useInputProps = (name: string, modelOverride?: string) => {
	const { model } = useFormMetaData()
	const usedModel = modelOverride ?? model
	return { inputId: `${usedModel}_${name}`, inputName: `${usedModel}/${name}` }
}

function fillEmptyValues<T extends Record<keyof T, unknown>>(data: T): T {
	const sanitizedDefaultData = data
	Object.keys(data).forEach(key => {
		sanitizedDefaultData[key] = data[key] === undefined || data[key] === null ? '' : String(data[key])
	})
	return sanitizedDefaultData
}

function Form<T extends Record<keyof T, unknown>>({
	children,
	model,
	data,
	method = 'post',
	to,
	onSubmit,
	onChange,
	onSuccess,
	...props
}: IFormProps<T>) {
	const form = useInertiaForm<Record<string, unknown>>(fillEmptyValues(data))

	const handleSubmit = e => {
		e.preventDefault()

		let submit = true
		if(onSubmit) {
			const val = onSubmit(form)
			if(val === true || val === false) submit = val
		}
		if(submit) form[method.toLowerCase()](to)
	}

	useEffect(() => {
		if(onChange) onChange(form)
	}, [form.data])

	useEffect(() => {
		// console.log({ errors: form.errors })
	}, [form.errors])

	useEffect(() => {
		if(onSuccess && form.wasSuccessful) {
			onSuccess(form)
		}
	}, [form.wasSuccessful])

	return (
		<FormProvider value={ form }>
			<FormMetaDataProvider value={ { model: model || 'form' } }>
				<form onSubmit={ handleSubmit } { ...props }>
					{ children }
				</form>
			</FormMetaDataProvider>
		</FormProvider>
	)
}

export default React.memo(Form)
