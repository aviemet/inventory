import React, { useEffect, useCallback } from 'react'
import { useForm as useInertiaForm } from '@inertiajs/inertia-react'
import { fillEmptyValues, getNestedValue, setNestedValue } from '@/lib'
import { createContext } from '@/Components/Hooks'
import { FormProps } from 'react-html-props'
import cn from 'classnames'

import './form.css'

interface IInertiaFormProps extends InertiaFormProps {
	model?: string
	getData: (data: string) => string|boolean
	getErrors: (data: string) => string
	separator: string
}

const [useForm, FormProvider] = createContext<IInertiaFormProps>()
export { useForm, FormProvider }

interface IFormProps<T> extends Omit<FormProps, 'onChange'|'onSubmit'|'onError'> {
	model?: string
	data: T
	to: string
	grid?: boolean
	onSubmit?: (object: IInertiaFormProps) => boolean|void
	onChange?: (object: IInertiaFormProps) => void
	onSuccess?: (object: IInertiaFormProps) => void
	onError?: (object: IInertiaFormProps) => void
	separator?: string
}

function Form<T extends Record<keyof T, unknown>>({
	children,
	model,
	data,
	method = 'post',
	to,
	grid = true,
	onSubmit,
	onChange,
	onSuccess,
	onError,
	className,
	separator = '.',
	...props
}: IFormProps<T>) {
	const form = useInertiaForm<Record<string, unknown>>(fillEmptyValues(data))

	// This overrides the default form.setData method to allow for setting nested values
	const setData: IInertiaFormProps['setData'] = (key, value?) => {
		if(key.includes(separator)) {
			form.setData(data => setNestedValue(data, key, value, separator))
		} else {
			form.setData(key, value)
		}
	}

	const getData = useCallback((key: string) => {
		return getNestedValue(form.data, key, separator)
	}, [form.data])

	const getErrors = useCallback((key: string) => {
		return getNestedValue(form.errors, key, separator)
	}, [form.errors])

	const contextValueObject = { ...form, setData, model, getData, getErrors, separator }

	const handleSubmit = e => {
		e.preventDefault()

		let submit = true
		if(onSubmit) {
			const val = onSubmit(contextValueObject)
			if(val === true || val === false) submit = val
		}
		if(submit) form[method.toLowerCase()](to)
	}

	useEffect(() => {
		if(onChange) onChange(contextValueObject)
	}, [form.data])

	useEffect(() => {
		if(onError) onError(contextValueObject)
	}, [form.errors])

	useEffect(() => {
		if(onSuccess && form.wasSuccessful) {
			onSuccess(contextValueObject)
		}
	}, [form.wasSuccessful])

	return (
		<FormProvider value={ contextValueObject }>
			<form onSubmit={ handleSubmit } className={ cn({ 'format-grid': grid }, className) } { ...props }>
				{ children }
			</form>
		</FormProvider>
	)
}

export default React.memo(Form)
