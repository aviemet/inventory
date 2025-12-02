import { DateValue } from "@mantine/dates"
import { NestedObject, useInertiaInput } from "use-inertia-form"

import { ConditionalWrapper } from "@/components"
import { DateTimeInput, type DateTimeProps } from "@/components/Inputs/DateTimeInput"
import { isUnset } from "@/lib"

import { Field } from "../components/Field"

import { type InputConflicts, type BaseFormInputProps } from "."

interface DateTimeFormProps<TForm extends NestedObject = NestedObject>
	extends
	Omit<DateTimeProps, InputConflicts>,
	BaseFormInputProps<Date | "", TForm> {}

export function FormDateTimeInput<TForm extends NestedObject = NestedObject>({
	name,
	required,
	onChange,
	onBlur,
	onFocus,
	id,
	model,
	field = true,
	wrapperProps,
	errorKey,
	defaultValue,
	clearErrorsOnChange,
	...props
}: DateTimeFormProps<TForm>,
) {
	const { form, inputName, inputId, value, setValue, error } = useInertiaInput<Date | "", TForm>({
		name,
		model,
		errorKey,
		defaultValue,
		clearErrorsOnChange,
	})

	const handleChange = (date: DateValue) => {
		let dateWithValidEmptyType: Date | ""
		if(isUnset(date)) {
			dateWithValidEmptyType = ""
		} else if(date instanceof Date) {
			dateWithValidEmptyType = date
		} else {
			dateWithValidEmptyType = new Date(date)
		}

		setValue(dateWithValidEmptyType)

		onChange?.(dateWithValidEmptyType, form)
	}

	const handleBlur = () => {
		onBlur?.(value, form)
	}

	const handleFocus = () => {
		onFocus?.(value, form)
	}

	return (
		<ConditionalWrapper
			condition={ field }
			wrapper={ children => (
				<Field
					type="date"
					required={ required }
					errors={ !!error }
					{ ...wrapperProps }
				>
					{ children }
				</Field>
			) }
		>
			<DateTimeInput
				id={ id || inputId }
				name={ inputName }
				value={ value === "" ? undefined : value }
				onChange={ handleChange }
				onBlur={ handleBlur }
				onFocus={ handleFocus }
				required={ required }
				error={ error }
				wrapper={ false }
				{ ...props }
			/>
		</ConditionalWrapper>
	)
}
