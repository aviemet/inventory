export * as Routes from '@/types/routes'
export * as formatter from './formatters'
import { merge, isBoolean } from 'lodash'
// export { default as IPAddress } from './IPAddress'

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
			sanitizedDefaultData[key] = ''
		} else if(!isBoolean(sanitizedDefaultData[key])) {
			sanitizedDefaultData[key] = String(sanitizedDefaultData[key])
		} else {
			sanitizedDefaultData[key] = sanitizedDefaultData[key]
		}
	}

	return sanitizedDefaultData
}

/*
export const fillEmptyValuesOrig = <T extends Record<keyof T, unknown>>(data: T): T => {
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
*/
