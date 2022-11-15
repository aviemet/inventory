import Form, { useForm } from './Form'
export { Form, useForm }
export { default as Input } from './Input'
export { default as Textarea } from './Textarea'
export { default as RichText } from './RichText'
export { default as Submit } from './Submit'
export { default as Checkbox } from './Checkbox'
export { default as SearchableDropdown } from './SearchableDropdown'
export { default as DateTime } from './DateTime'
export { default as RadioButtons } from './RadioButtons'
export { default as Field } from './Field'
export { default as FormGroup } from './FormGroup'

type IInputPropsStrategyOutput = {
	inputId: string
	inputName: string
}

type TInputPropsStrategy = (model: string | undefined, name: string) => IInputPropsStrategyOutput

const inputPropsStrategy: TInputPropsStrategy = (model, name) => {
	if (!model) {
		return {
			inputId: name,
			inputName: name
		}
	}

	return {
		inputId: `${model}_${name}`,
		inputName: `${model}.${name}`
	}
}

export const useInputProps = (name: string, model?: string) => {
	const { model: formModel } = useForm()
	const usedModel = model ?? formModel

	return inputPropsStrategy(usedModel, name)
}
