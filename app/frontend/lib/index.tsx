import * as Routes from "./routes"
import { toCamelCase } from "./strings"

export { default as IPAddress } from "./IPAddress"

export { Routes }
export * as formatter from "./formatters"

export * from "./uuid"
export * from "./strings"
export * from "./collections"
export * from "./forms"

export const polymorphicRoute = (model: string, param: string | number) => {
	// @ts-ignore
	// eslint-disable-next-line import/namespace
	return Routes[toCamelCase(model)](param)
}
