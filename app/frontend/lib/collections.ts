import { cloneDeep, unset, get, set } from 'lodash'

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

export const coerceArray = <T extends unknown>(arg: T | T[] | null | undefined) => {
	if(arg === null || arg === undefined) return []

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
