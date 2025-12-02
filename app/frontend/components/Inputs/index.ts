import { type DateValue, type DatesRangeValue } from "@mantine/dates"

export { AutocompleteInput } from "./AutocompleteInput"
export { CheckboxInput as Checkbox } from "./Checkbox"
export { CurrencyInput } from "./CurrencyInput"
export { DateInput, type DateInputProps } from "./DateInput"
export { DateTimeInput } from "./DateTimeInput"
export { HiddenInput } from "./HiddenInput"
export { MultiSelectInput as MultiSelect } from "./MultiSelect"
export { NumberInput } from "./NumberInput"
export { PasswordInput } from "./PasswordInput"
export { SegmentedControl } from "./SegmentedControl"
export { RichText } from "./RichText"
export { SelectInput as Select } from "./Select"
export { SwatchInput } from "./SwatchInput"
export { Textarea } from "./Textarea"
export { TextInput } from "./TextInput"
export { Switch } from "./Switch"

export interface BaseInputProps {
	wrapper?: boolean
	disableAutofill?: boolean
}

export type DateInputValue = DateValue | DatesRangeValue<DateValue> | DateValue[] | undefined

const disableAutofillProps = {
	autoComplete: "off",
	"data-1p-ignore": true,
	"data-bwignore": true,
	"data-lpignore": true,
	"data-form-type": "other",
}

type withInjectedPropsFunc = (
	props: Record<string, unknown>,
	options: {
		disableAutofill?: boolean
	}
) => Record<string, unknown>

export const withInjectedProps: withInjectedPropsFunc = (props, { disableAutofill }) => {
	const usedProps = props ?? {}

	if(disableAutofill) {
		Object.assign(usedProps, disableAutofillProps)
	}

	return usedProps
}
