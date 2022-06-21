import Form, { useForm } from './Form'
export { Form, useForm }
export { default as Input } from './Input'
export { default as Textarea } from './Textarea'
export { default as Submit } from './Submit'
export { default as Checkbox } from './Checkbox'
export { default as SearchableDropdown } from './SearchableDropdown'
export { default as DateTime } from './DateTime'
export { default as RadioButtons } from './RadioButtons'
export { default as Group } from './Group'


type IInputPropsStrategyOutput = {
	inputId: string
	inputName: string
}
type TInputPropsStrategy = (model: string|undefined, name: string, separator: string) => IInputPropsStrategyOutput
const inputPropsStrategy: TInputPropsStrategy = (model, name, separator) => {
	if(!model) {
		return {
			inputId: name,
			inputName: name
		}
	}

	return {
		inputId: `${model}_${name}`,
		inputName: `${model}${separator}${name}`
	}
}

export const useInputProps = (name: string, model?: string) => {
	const { model: formModel, separator } = useForm()
	const usedModel = model ?? formModel

	return inputPropsStrategy(usedModel, name, separator)
}
