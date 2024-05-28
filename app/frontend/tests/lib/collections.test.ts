import { describe, expect, test } from 'vitest'
import { NestedObject, NestedURLSearchParams, coerceArray, exclude } from '@/lib'

describe('coerceArray', () => {
	test('returns a given value wrapped in an array', () => {
		expect(coerceArray('hi')).toEqual(['hi'])
	})

	test('returns an array when supplied an array', () => {
		expect(coerceArray(['hi'])).toEqual(['hi'])
	})
})

describe('exclude', () => {
	test('omits a shallow key/value pair from an object', () => {
		const test = { one: 'one', two: 'two' }
		expect(exclude(test, 'one')).toEqual({ two: 'two' })
	})

	test('omits a nested key/value pair from an object', () => {
		const test = {
			one: 'one',
			two: {
				three: 'three',
			},
		}
		expect(exclude(test, 'two.three')).toEqual({ one: 'one', two: {} })
	})
})

describe('NestedObject', () => {
	test('initializes', () => {
		const obj = new NestedObject({ one: 'one' })
		expect(obj).toBeInstanceOf(NestedObject)
	})

	test('sets and gets shallow data', () => {
		const obj = new NestedObject()
		obj.set('one', 'one')
		expect(obj.get('one')).toEqual('one')
	})

	test('sets and gets nested data', () => {
		const obj = new NestedObject()
		obj.set('two[three]', 23)
		obj.set('four.five', 45)
		expect(obj.get('four')).toMatchObject({ five: 45 })
	})
})

describe('NestedURLSearchParams', () => {
	const nestedParams = new NestedURLSearchParams('?created_at[type]=range&created_at[start]=now&name=hi')

	test('initializes with url parameters', () => {
		expect(nestedParams.data).toMatchObject({
			created_at: {
				type: 'range',
				start: 'now',
			},
			name: 'hi',
		})
	})

	test('initializes with object', () => {
		const init = {
			test: 'one',
			nest: {
				two: 'three',
			},
		}

		const params = new NestedURLSearchParams(init)

		expect(params.data).toMatchObject(init)
	})

	test('toString', () => {
		expect(nestedParams.toString()).toEqual('?created_at[type]=range&created_at[start]=now&name=hi')

		const init = {
			test: 'one',
			nest: {
				two: 'three',
			},
		}

		const params = new NestedURLSearchParams(init)
		expect(params.toString()).toEqual('?test=one&nest[two]=three')
	})

	test('getter', () => {
		expect(nestedParams.get('name')).toEqual('hi')
		expect(nestedParams.get('created_at')).toMatchObject({
			type: 'range',
			start: 'now',
		})
	})

	test('setter', () => {
		const setterParams = new NestedURLSearchParams()

		setterParams.set('one', 'one')
		setterParams.set('two[three]', 23)

		expect(setterParams.data).toMatchObject({
			one: 'one',
			two: {
				three: 23,
			},
		})
	})

	test('clone', () => {
		const clone = nestedParams.clone()

		expect(clone).toBeInstanceOf(NestedURLSearchParams)
		expect(clone).not.toBe(nestedParams)
		expect(clone.get('name')).toEqual('hi')
	})

	test('iterator', () => {
		const init = {
			two: {
				three: 'four',
				five: 'six',
			},
		}
		const params = new NestedURLSearchParams(init)

		for(const [key, value] of params) {
			expect(key).toEqual('two')
			expect(value).toMatchObject(init.two)
		}
	})
})
