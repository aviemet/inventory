import React, { useEffect } from 'react'
import { useForm as useInertiaForm } from '@inertiajs/inertia-react'
import { fillEmptyValues } from '@/lib'
import { createContext } from '@/Components/Hooks'
import { FormProps } from 'react-html-props'
import { Box } from '@mantine/core'
import useFormStyles from './useFormStyles'
import cx from 'clsx'
import axios from 'axios'
import { cloneDeep, set, get } from 'lodash'

const [useForm, FormProvider] = createContext<Inertia.FormProps>()
export { useForm, FormProvider }

export type TInputType = 'button'|'checkbox'|'color'|'currency'|'date'|'datetime-local'|'email'|'file'|'hidden'|'image'|'month'|'number'|'password'|'radio'|'range'|'reset'|'search'|'select'|'submit'|'tel'|'text'|'time'|'url'

interface IFormProps<T> extends Omit<FormProps, 'onChange'|'onSubmit'|'onError'> {
	data: T
	model?: string
	method?: HTTPVerb
	to?: string
	async?: boolean
	grid?: boolean
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
		onSubmit,
		onChange,
		onSuccess,
		onError,
		className,
		...props
	}: IFormProps<T>,
	ref: React.ForwardedRef<HTMLFormElement>
) => {
	const form: IndexedInertiaFormProps = useInertiaForm<Record<string, unknown>>(`${method}/${model}`, fillEmptyValues(data))

	const { classes } = useFormStyles()

	/**
	 * Override Inertia's setData method to allow setting nested values
	 */
	const setData: InertiaFormProps['setData'] = (key: Record<string, any>|string, value?: any) => {
		if(typeof key === 'string'){
			form.setData((data: Record<string, any>) => {
				return set(cloneDeep(data), key, value)
			})
		} else {
			form.setData(key)
		}
	}

	/**
	 * Getter for nested values of form data
	 */
	const getData = (key: string): any => {
		return get(form.data, key)
	}

	/**
	 * Getter for nested error values of form errors
	 */
	const getErrors = (key: string) => {
		return get(form.errors, key)
	}

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
	const contextValueObject = { ...form, setData, model, getData, getErrors, method, to, submit }

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
