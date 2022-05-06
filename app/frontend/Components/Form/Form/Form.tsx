import React, { useEffect, useCallback } from 'react'
import { useForm as useInertiaForm } from '@inertiajs/inertia-react'
import { FormProvider } from './useForm'
import { isObj } from '@/lib'
import { merge, isBoolean } from 'lodash'
import { createContext } from '@/Components/Hooks'
import { FormProps } from 'react-html-props'
import cn from 'classnames'

import './form.css'

const INPUT_NAME_SEPARATOR = '.'

export const setNestedValue = (data: Record<string, any>, key: string, value: unknown) => {
	const parts = key.split('.')
	let nestedData = {}

	for(let i = parts.length - 1; i >= 0; i--) {
		if(i === parts.length - 1) {
			nestedData[parts[i]] = value
		} else {
			nestedData = {
				[parts[i]]: nestedData
			}
		}
	}

	return merge({}, data, nestedData)
}

interface IFormProps<T> extends FormProps {
	model?: string
	data: T
	to: string
	grid?: boolean
	onSubmit?: (object) => boolean|void
	onChange?: (object) => void
	onSuccess?: (object) => void
}

const [useFormMetaData, FormMetaDataProvider] = createContext<Record<string, string>>()
export const useInputProps = (name: string, modelOverride?: string) => {
	const { model } = useFormMetaData()
	const usedModel = modelOverride ?? model

	return {
		inputId: `${usedModel}_${name}`,
		inputName: `${usedModel}${INPUT_NAME_SEPARATOR}${name}`
	}
}

function fillEmptyValues<T extends Record<keyof T, unknown>>(data: T): T {
	const sanitizedDefaultData = data
	Object.keys(data).forEach(key => {
		if(isObj(data[key])) {
			sanitizedDefaultData[key] = fillEmptyValues(data[key])
		} else if(data[key] === undefined || data[key] === null) {
			sanitizedDefaultData[key] = ''
		} else if(!isBoolean(data[key])) {
			sanitizedDefaultData[key] = String(data[key])
		} else {
			sanitizedDefaultData[key] = data[key]
		}
	})
	return sanitizedDefaultData
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
	className,
	...props
}: IFormProps<T>) {
	const form = useInertiaForm<Record<string, unknown>>(fillEmptyValues(data))

	const getData = useCallback((key) => {
		const parts = key.split(INPUT_NAME_SEPARATOR)
		let nestedData: Record<string, any> = form.data
		let value = ''
		parts.forEach(part => {
			if(isObj(nestedData[part])) {
				nestedData = nestedData[part]
			} else {
				value = nestedData[part]
			}
		})
		return value
	}, [form.data])

	const getErrors = useCallback((key) => {
		// TODO: Implement getting nested error object from dot notation string
	}, [form.errors])

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
		<FormProvider value={ { ...form, getData } }>
			<FormMetaDataProvider value={ { model: model || 'form' } }>
				<form onSubmit={ handleSubmit } className={ cn({ 'format-grid': grid }, className) } { ...props }>
					{ children }
				</form>
			</FormMetaDataProvider>
		</FormProvider>
	)
}

export default React.memo(Form)
