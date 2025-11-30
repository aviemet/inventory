import { Box } from "@mantine/core"
import clsx from "clsx"
import {
	Form as InertiaForm,
	type FormProps as UifFormProps,
	type NestedObject,
} from "use-inertia-form"

import { createContext } from "@/lib/hooks"

import * as classes from "./Form.css"

type FormLayoutValues = {
	disableFormatting: boolean
}

const [useFormFormat, FormFormatProvider] = createContext<FormLayoutValues>()
export { useFormFormat }

export interface FormProps<TForm> extends UifFormProps<TForm> {
	disableFormatting?: boolean
	grid?: boolean
}

export function Form<TForm extends NestedObject>({
	children,
	data,
	disableFormatting = false,
	className,
	railsAttributes = true,
	grid: grid,
	...props
}: FormProps<TForm>) {
	return (
		<FormFormatProvider value={ { disableFormatting } }>
			<Box className={ clsx(classes.form, { grid }) }>
				<InertiaForm
					data={ data }
					className={ clsx({ "format-grid": !disableFormatting }, className) }
					railsAttributes={ railsAttributes }
					{ ...props }
				>
					{ children }
				</InertiaForm>
			</Box>
		</FormFormatProvider>
	)
}

