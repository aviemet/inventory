import { useForm } from '@inertiajs/inertia-react'
import { cloneDeep, isPlainObject, set, get } from 'lodash'

const fillEmptyValues = (data: Record<string, any>) => {
	const sanitizedDefaultData = cloneDeep(data)

	for(const key in sanitizedDefaultData) {
		if(isPlainObject(sanitizedDefaultData[key])) {
			sanitizedDefaultData[key] = fillEmptyValues(sanitizedDefaultData[key])
		} else if(sanitizedDefaultData[key] === undefined || sanitizedDefaultData[key] === null) {
			sanitizedDefaultData[key] = ''
		}
	}

	return sanitizedDefaultData
}

function useInertiaForm<TForm = Record<string, any>>(initialValues?: TForm): Inertia.FormProps<TForm>
function useInertiaForm<TForm = Record<string, any>>(rememberKey: string, initialValues?: TForm): Inertia.FormProps<TForm>

function useInertiaForm(...args) {
	const rememberKey = typeof args[0] === 'string' ? args[0] : null
	const initialValues = fillEmptyValues(typeof args[0] === 'string' ? args[1] : args[0]) || {}

	const formArgs = rememberKey ? [rememberKey, initialValues] : [initialValues]
	const form = useForm(...formArgs)

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
	const getError = (key: string) => {
		return get(form.errors, key)
	}

	return { ...form, setData, getData, getError }

}

export default useInertiaForm
