import { type UseFormProps } from "use-inertia-form"

import { FormConsumer } from "./FormConsumer"


interface ConsoleLoggerProps<TForm> {
	prop: keyof UseFormProps<TForm>
}

export function ConsoleLogger<TForm>({ prop }: ConsoleLoggerProps<TForm>) {
	return (
		<FormConsumer<TForm>>{ (form) => {
			console.log({ [prop]: form[prop] })
			return <></>
		} }</FormConsumer>
	)
}
