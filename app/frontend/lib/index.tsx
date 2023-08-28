
import { Routes } from '@/lib'
export { default as IPAddress } from './IPAddress'

export * as Routes from '@/types/routes'
export * as formatter from './formatters'

export * from './uuid'
export * from './strings'
export * from './collections'
export * from './forms'

export const polymorphicRoute = (model: string, param: string|number) => {
	// @ts-ignore
	return Routes[camelize(model)](param)
}
