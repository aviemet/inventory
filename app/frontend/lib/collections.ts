import { cloneDeep, unset } from "lodash"

export { default as NestedObject } from "./Collections/NestedObject"
export { default as NestedURLSearchParams } from "./Collections/NestedURLSearchParams"

export const coerceArray = <T extends unknown>(arg: T | T[] | null | undefined) => {
	if(arg === null || arg === undefined) return []

	if(Array.isArray(arg)) return arg

	return [arg]
}

export const exclude = <T extends Record<string, unknown>, K extends string>(obj: T, keys: K | K[]): Omit<T, K> => {
	const clone = cloneDeep(obj)
	if(clone) {
		coerceArray(keys).forEach(key => {
			unset(clone, key)
		})
	}
	return clone
}

export const withDefaults = (obj: Record<string, any>, defaults: Record<string, any>) => {
	return Object.assign(defaults, obj)
}
