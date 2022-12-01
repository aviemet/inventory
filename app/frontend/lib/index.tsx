import { isBoolean, isPlainObject, cloneDeep, unset, get, set } from 'lodash'
import { Routes } from '@/lib'
export { default as IPAddress } from './IPAddress'

export * as Routes from '@/types/routes'
export * as formatter from './formatters'

const B64_SEPARATOR = ' '

export const encodeId = (model: string, id: number) => btoa(`${model}${B64_SEPARATOR}${id}`)

export const decodeId = (id: string) => {
	const parts = atob(id).split(B64_SEPARATOR)
	return {
		model: parts[0],
		id: parts[1],
	}
}

export const fillEmptyValues = <T extends Record<keyof T, any>>(data: T): T => {
	const sanitizedDefaultData = cloneDeep(data)

	for(const key in sanitizedDefaultData) {
		if(isPlainObject(sanitizedDefaultData[key])) {
			sanitizedDefaultData[key] = fillEmptyValues(sanitizedDefaultData[key])
		} else if(sanitizedDefaultData[key] === undefined || sanitizedDefaultData[key] === null) {
			// @ts-ignore
			sanitizedDefaultData[key] = ''
		} else if(!isBoolean(sanitizedDefaultData[key])) {
			// @ts-ignore
			sanitizedDefaultData[key] = String(sanitizedDefaultData[key])
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

type TArrType = string|number|Record<string, unknown>
export const unsetCompact = (data: Record<string, any>, path: string) => {
	unset(data, path)

	let position = path.indexOf('[')
	while(position >= 0) {
		const arrPath = path.slice(0, position)
		const arr = get(data, arrPath)
		const compacted: TArrType[] = []
		arr.forEach((a: TArrType) => compacted.push(a))
		set(data, arrPath, compacted)

		position = path.indexOf('[', position + 1)
	}
}
