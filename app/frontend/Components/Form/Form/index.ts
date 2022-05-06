import Form, { useForm } from './Form'

export { useForm }
export default Form

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
