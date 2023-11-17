import { capitalize, toCamelCase, toKebabCase } from '@/lib'
import { describe, expect, test } from 'vitest'

describe('capitalize', () => {
	test('capitalizes the first letter of a string', () => {
		expect(capitalize('hello')).toEqual('Hello')
		expect(capitalize('Hello')).toEqual('Hello')
		expect(capitalize('this has spaces, and punctuation')).toEqual('This has spaces, and punctuation')
		expect(capitalize('This has spaces, and is already capitalized')).toEqual('This has spaces, and is already capitalized')
		expect(capitalize('7')).toEqual('7')
	})
})

describe('toCamelCase', () => {
	test('converts a string to camel case', () => {
		expect(toCamelCase('lower case')).toEqual('lowerCase')
		expect(toCamelCase('snake_case')).toEqual('snakeCase')
		expect(toCamelCase('kebab-case')).toEqual('kebabCase')
		expect(toCamelCase('PascalCase')).toEqual('pascalCase')
		expect(toCamelCase('7')).toEqual('7')
	})
})

describe('toKebabCase', () => {
	test('converts a string to camel case', () => {
		expect(toKebabCase('lower case')).toEqual('lower-case')
		expect(toKebabCase('snake_case')).toEqual('snake-case')
		expect(toKebabCase('camelCase')).toEqual('camel-case')
		expect(toKebabCase('PascalCase')).toEqual('pascal-case')
		expect(toKebabCase('7')).toEqual('7')
	})
})
