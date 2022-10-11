import React, { useEffect, useCallback, useRef } from 'react'
import { useForm as useInertiaForm } from '@inertiajs/inertia-react'
import { fillEmptyValues, getNestedValue, setNestedValue } from '@/lib'
import { createContext } from '@/Components/Hooks'
import { FormProps } from 'react-html-props'
import { Box } from '@mantine/core'
import useFormStyles from './useFormStyles'
import cx from 'clsx'
import axios from 'axios'

const [useForm, FormProvider] = createContext<Inertia.FormProps>()
export { useForm, FormProvider }

export type TInputType = 'button'|'checkbox'|'color'|'currency'|'date'|'datetime-local'|'email'|'file'|'hidden'|'image'|'month'|'number'|'password'|'radio'|'range'|'reset'|'search'|'submit'|'tel'|'text'|'time'|'url'

interface IFormProps<T> extends Omit<FormProps, 'onChange'|'onSubmit'|'onError'> {
	model?: string
	data: T
	method?: HTTPVerb
	to?: string
	async?: boolean
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
	async = false,
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

	/**
	 * Override Inertia's setData method to allow setting nested values
	 */
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

	/**
	 * Getter for nested values of form data
	 */
	const getData = useCallback((key: string): any => {
		return getNestedValue(form.data, key, separator)
	}, [form.data])

	/**
	 * Getter for nested error values of form errors
	 */
	const getErrors = useCallback((key: string) => {
		return getNestedValue(form.errors, key, separator)
	}, [form.errors])

	const formRef = useRef<HTMLFormElement>(null)

	/**
	 * Submits the form. If async was passed to the Form component, submits using axios,
	 * otherwise submits using Inertia's form methods
	 * @returns Promise
	 */
	const submit = async () => {
		let shouldSubmit = true
		if(onSubmit) {
			if(onSubmit(contextValueObject) === false) shouldSubmit = false
		}

		if(shouldSubmit && to) {
			if(async) {
				return axios[method](to, form.data)
			} else {
				form[method](to)
			}
		}
	}

	// Expand Inertia's form object to include other useful data
	// TS type definition is in app/frontend/types/inertia.d.ts
	const contextValueObject = { ...form, setData, model, getData, getErrors, separator, method, to, submit }

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		e.stopPropagation()

		submit()
	}

	// Set values from url search params. Allows for prefilling form data from a link
	useEffect(() => {
		const url = new URL(window.location.href)
		url.searchParams.forEach((value, key) => {
			setData(key, value)
		})
	}, [])

	// **** Conditional calls to callbacks **** \\
	useEffect(() => {
		if(onChange) onChange(contextValueObject)
	}, [form.data])

	useEffect(() => {
		if(onError) onError(contextValueObject)
	}, [form.errors])

	useEffect(() => {
		if(onSuccess && form.wasSuccessful) onSuccess(contextValueObject)
	}, [form.wasSuccessful])

	return (
		<FormProvider value={ contextValueObject }>
			<Box className={ classes.form }>
				<form
					onSubmit={ handleSubmit }
					className={ cx({ 'format-grid': grid }, className) }
					ref={ formRef }
					{ ...props }
				>
					{ children }
				</form>
			</Box>
		</FormProvider>
	)
}

export default React.memo(Form)
