export * as Routes from '@/types/routes'
export * as formatter from './formatters'
// export { default as IPAddress } from './IPAddress'

export const isObj = check => {
	return check !== null && check !== undefined && Object.getPrototypeOf(check) === Object.prototype
}
