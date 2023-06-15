import { cloneDeep, unset, get, set, isEmpty } from 'lodash'
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

export const coerceArray = (arg: string | string[]) => {
	if(Array.isArray(arg)) return arg
	return [arg]
}

export const exclude = <T extends any, K extends string>(obj: T, keys: K | K[]): Omit<T, K> | undefined => {
	const clone = cloneDeep(obj)
	if(clone) {
		coerceArray(keys).forEach(key => {
			unset(clone, key)
		})
	}
	return clone
}

export const isUnset = (v: any) => {
	if(typeof v === 'string') {
		return v === ''
	}

	if(typeof v === 'number') {
		return v === 0 ? false : !Boolean(v)
	}

	return isEmpty(v)
}
