export * as Routes from '@/types/routes'
export * as formatter from './formatters'
import { merge, isBoolean } from 'lodash'
import { Routes } from '@/lib'
// export { default as IPAddress } from './IPAddress'

const B64_SEPARATOR = ' '

export const encodeId = (model: string, id: number) => btoa(`${model}${B64_SEPARATOR}${id}`)

export const decodeId = (id: string) => {
	const parts = atob(id).split(B64_SEPARATOR)
	return {
		model: parts[0],
		id: parts[1],
	}
}

export const isObj = (check: string) => {
	return check !== null && check !== undefined && Object.getPrototypeOf(check) === Object.prototype
}

export const getNestedValue = (data: Record<string, any>, key: string, separator = '.') => {
	const parts = key.split(separator)
	let nestedData: Record<string, any> = data
	let value: string|boolean = ''

	parts.forEach(part => {
		if(isObj(nestedData[part])) {
			nestedData = nestedData[part]
		} else {
			value = nestedData[part]
		}
	})

	return value
}

export const setNestedValue = (data: Record<string, any>, key: string, value: unknown, separator = '.') => {
	const parts = key.split(separator)
	let nestedData: Record<string, any> = {}

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

export const fillEmptyValues = <T extends Record<keyof T, any>>(data: T): T => {
	const sanitizedDefaultData = data

	for(const key in sanitizedDefaultData) {
		if(isObj(sanitizedDefaultData[key])) {
			sanitizedDefaultData[key] = fillEmptyValues(sanitizedDefaultData[key])
		} else if(sanitizedDefaultData[key] === undefined || sanitizedDefaultData[key] === null) {
			// @ts-ignore
			sanitizedDefaultData[key] = ''
		} else if(!isBoolean(sanitizedDefaultData[key])) {
			// @ts-ignore
			sanitizedDefaultData[key] = String(sanitizedDefaultData[key])
		} else {
			sanitizedDefaultData[key] = sanitizedDefaultData[key]
		}
	}

	return sanitizedDefaultData
}

export const capitalize = (str?: string|null): string => {
	if(typeof str !== 'string') return ''
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export const camelize = (str?: string|null) => {
	if(typeof str !== 'string') return ''
	return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase())
}

export const polymorphicRoute = (model: string, param: string|number) => {
	// @ts-ignore
	return Routes[camelize(model)](param)
}
