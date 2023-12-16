import { NestedObject, UseFormProps } from 'use-inertia-form'

export interface IFormInputProps<T, TForm extends NestedObject = NestedObject> {
	name: string
	model?: string
	errorKey?: string
	onChange?: (value: T, form: UseFormProps<TForm>) => void
	onBlur?: (value: T, form: UseFormProps<TForm>) => void
	field?: boolean
	span?: number|'auto'|'content'
}

export { default as Autocomplete }  from './Autocomplete'
export { default as Checkbox }      from './Checkbox'
export { default as CurrencyInput } from './CurrencyInput'
export { default as Date }          from './Date'
export { default as DateTime }      from './DateTime'
export { default as HiddenInput }   from './HiddenInput'
export { default as MultiSelect }   from './MultiSelect'
export { default as NumberInput }   from './NumberInput'
export { default as PasswordInput } from './PasswordInput'
export { default as RadioButtons }  from './RadioButtons'
export { default as RichText }      from './RichText'
export { default as Select }        from './Select'
export { default as SwatchInput }   from './SwatchInput'
export { default as Switch }        from './Switch'
export { default as TextInput }     from './TextInput'
export { default as Textarea }      from './Textarea'
