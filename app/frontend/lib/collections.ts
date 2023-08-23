import { cloneDeep, unset, get, set } from 'lodash'

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

export class NestedObject {
	data = {}

	constructor(initialData?: Record<string, any>|Map<string, any>) {
		if(!initialData) return

		for(const [key, value] of Object.entries(initialData)) {
			this.set(key, value)
		}
	}

	get(key: string) {
		return get(this.data, key)
	}

	set(key: string, value: any) {
		return set(this.data, key, value)
	}

	*[Symbol.iterator]() {
		yield* Object.entries(this.data)
	}

	entries() {
		return this[Symbol.iterator]()
	}

	values() {
		return Object.values(this.data)
	}

	keys() {
		return Object.keys(this.data)
	}

}

export class NestedURLSearchParams {
	_data = new NestedObject()

	constructor(initialData?: string|Record<string, any>|URLSearchParams) {
		if(!initialData) return

		if(initialData instanceof URLSearchParams || typeof initialData === 'string') {
			let searchParams: URLSearchParams

			if(initialData instanceof URLSearchParams) {
				searchParams = initialData
			} else {
				searchParams = new URLSearchParams(initialData)
			}

			for(const [key, value] of searchParams.entries()) {
				this._data.set(key, value)
			}

			return
		}

		this._data = new NestedObject(initialData)
	}

	get(key: string) {
		return this._data.get(key)
	}

	set(key: string, value: any) {
		return this._data.set(key, value)
	}

	get data() {
		return this._data.data
	}

	// Only supports 2 levels of nesting, because any more would be silly in a URL string
	toString() {
		let str = '?'

		for(const [key, value] of this._data.entries()) {
			if(typeof value === 'string') {
				str += `${key}=${value}&`
			} else {
				for(const [key2, value2] of Object.entries(value as Object)) {
					str += `${key}[${key2}]=${value2}&`
				}
			}
		}

		return str.replace(/\&$/, '')
	}

	params() {
		return new URLSearchParams(this.data.toString())
	}
}
