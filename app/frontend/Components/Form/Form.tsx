import React, { useEffect, useCallback } from 'react'
import { useForm as useInertiaForm } from '@inertiajs/inertia-react'
import { fillEmptyValues, getNestedValue, setNestedValue } from '@/lib'
import { createContext } from '@/Components/Hooks'
import { FormProps } from 'react-html-props'
import { Box } from '@mantine/core'
import useFormStyles from './useFormStyles'
import cx from 'clsx'

const [useForm, FormProvider] = createContext<Inertia.FormProps>()
export { useForm, FormProvider }

interface IFormProps<T> extends Omit<FormProps, 'onChange'|'onSubmit'|'onError'> {
	model?: string
	data: T
	method?: HTTPVerb
	to?: string
	grid?: boolean
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	onChange?: (object: Inertia.FormProps) => void
	onSuccess?: (object: Inertia.FormProps) => void
	onError?: (object: Inertia.FormProps) => void
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
	const form: IndexedInertiaFormProps = useInertiaForm<Record<string, unknown>>(`${method}/${model}`, fillEmptyValues(data))

	const { classes } = useFormStyles()

	// This overrides the default form.setData method to allow for setting nested values
	const setData: InertiaFormProps['setData'] = (key: Record<string, any>|string, value?: any) => {
		if(typeof key === 'string'){
			if(key.includes(separator)) {
				form.setData((data: Record<string, any>) => setNestedValue(data, key, value, separator))
			} else {
				form.setData(key, value)
			}
		} else {
			form.setData(key)
		}
	}

	const getData = useCallback((key: string): any => {
		return getNestedValue(form.data, key, separator)
	}, [form.data])

	const getErrors = useCallback((key: string) => {
		return getNestedValue(form.errors, key, separator)
	}, [form.errors])

	const contextValueObject = { ...form, setData, model, getData, getErrors, separator }

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		let submit = true
		if(onSubmit) {
			const val = onSubmit(contextValueObject)
			if(val === true || val === false) submit = val
		}
		if(submit) form[method](to)
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
			<Box className={ classes.form }>
				<form onSubmit={ handleSubmit } className={ cx({ 'format-grid': grid }, className) } { ...props }>
					{ children }
				</form>
			</Box>
		</FormProvider>
	)
}

export default React.memo(Form)
