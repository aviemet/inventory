import React, { useEffect } from 'react'
import { createContext } from '@/Components/Hooks'
import { FormProps } from 'react-html-props'
import { Box } from '@mantine/core'
import useFormStyles from './useFormStyles'
import cx from 'clsx'
import axios from 'axios'
import useInertiaForm from './useInertiaForm'

const [useForm, FormProvider] = createContext<Inertia.FormProps>()
export { useForm, FormProvider }

export type TInputType = 'button'|'checkbox'|'color'|'currency'|'date'|'datetime-local'|'email'|'file'|'hidden'|'image'|'month'|'number'|'password'|'radio'|'range'|'reset'|'search'|'select'|'submit'|'tel'|'text'|'textarea'|'time'|'url'

interface IFormProps<T> extends Omit<FormProps, 'onChange'|'onSubmit'|'onError'> {
	data: T
	model?: string
	method?: HTTPVerb
	to?: string
	async?: boolean
	grid?: boolean
	remember?: boolean
	onSubmit?: (object: Inertia.FormProps) => boolean|void
	onChange?: (object: Inertia.FormProps) => void
	onSuccess?: (object: Inertia.FormProps) => void
	onError?: (object: Inertia.FormProps) => void
}

const Form = <T extends Record<keyof T, unknown>>(
	{
		children,
		model,
		data,
		method = 'post',
		to,
		async = false,
		grid = true,
		remember = true,
		onSubmit,
		onChange,
		onSuccess,
		onError,
		className,
		...props
	}: IFormProps<T>,
	ref: React.ForwardedRef<HTMLFormElement>,
) => {
	const form = remember ? useInertiaForm(`${method}/${model}`, data) : useInertiaForm(data)

	const { classes } = useFormStyles()

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
	// const contextValueObject = { ...form, setData, model, getData, getErrors, method, to, submit }
	const contextValueObject: Inertia.FormProps = { ...form, model, method, to, submit }

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		e.stopPropagation()

		submit()
	}

	// Reset form after succesful submit
	useEffect(() => {
		form.reset()
	}, [form.wasSuccessful])

	// Set values from url search params. Allows for prefilling form data from a link
	useEffect(() => {
		const url = new URL(window.location.href)
		url.searchParams.forEach((value, key) => {
			form.setData(key, value)
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
					ref={ ref }
					{ ...props }
				>
					{ children }
				</form>
			</Box>
		</FormProvider>
	)
}

export default React.memo(React.forwardRef(Form))
