import { useForm } from '.'

type IInputPropsStrategyOutput = {
	inputId: string
	inputName: string
}

type TInputPropsStrategy = (model: string | undefined, name: string) => IInputPropsStrategyOutput

const inputPropsStrategy: TInputPropsStrategy = (model, name) => {
	if(!model) {
		return {
			inputId: name,
			inputName: name,
		}
	}

	let inputName: string
	if(name.charAt(0) === '[') {
		inputName = `${model}${name}`
	} else {
		inputName = `${model}.${name}`
	}

	return {
		inputId: `${model}_${name}`,
		inputName,
	}
}

const useInertiaInput = (name: string, model?: string) => {
	const form = useForm()

	const usedModel = model ?? form.model

	const { inputName, inputId } = inputPropsStrategy(usedModel, name)

	return {
		form,
		inputName,
		inputId,
		value: form.getData(inputName),
		setValue: (value: any) => form.setData(inputName, value),
		error: form.getError(inputName),
	}
}

export default useInertiaInput
