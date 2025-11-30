import { BoxProps } from "@mantine/core"
import { NestedObject, UseFormProps, UseInertiaInputProps } from "use-inertia-form"

export { FormAutocompleteComponent as Autocomplete } from "./Autocomplete"
export { FormCurrencyInput as CurrencyInput } from "./CurrencyInput"
export { FormDateInput as DateInput } from "./DateInput"
export { FormDateTimeInput as DateTimeInput } from "./DateTimeInput"
export { FormHiddenInput as HiddenInput } from "./HiddenInput"
export { FormMultiSelect as MultiSelect } from "./MultiSelect"
export { FormNumberInput as NumberInput } from "./NumberInput"
export { FormPasswordInput as PasswordInput } from "./PasswordInput"
export { FormSegmentedControl as SegmentedControl } from "./SegmentedControl"
export { FormRichText as RichText } from "./RichText"
export { FormSelect as Select } from "./Select"
export { FormSwatchInput as SwatchInput } from "./SwatchInput"
export { FormSwitchComponent as Switch } from "./Switch"
export { FormTextInput as TextInput } from "./TextInput"
export { FormTextarea as Textarea } from "./Textarea"

export {
	FormCheckboxComponent as Checkbox,
	GroupedCheckbox,
} from "./Checkbox"

export type InputConflicts = "name" | "onChange" | "onBlur" | "onFocus" | "value" | "defaultValue" | "wrapperProps"
export interface BaseFormInputProps<T, TForm extends NestedObject = NestedObject>
	extends UseInertiaInputProps<T> {
	model?: string
	errorKey?: string
	field?: boolean
	required?: boolean
	hidden?: boolean
	onChange?: (value: T, form: UseFormProps<TForm>) => void
	onBlur?: (value: T, form: UseFormProps<TForm>) => void
	onFocus?: (value: T, form: UseFormProps<TForm>) => void
	wrapperProps?: BoxProps
}
