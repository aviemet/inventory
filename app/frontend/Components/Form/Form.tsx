import React, { useContext } from 'react'
import { useForm as useInertiaForm, InertiaFormProps } from '@inertiajs/inertia-react'

import { createContext } from '@/Components/Hooks'
import { FormProps } from 'react-html-props'

interface IFormProps extends FormProps {
	model?: string
	data: Record<string, any>
	to: string
	onSubmit?: (object) => boolean|void
}

interface IInertiaFormProps extends InertiaFormProps {
	model?: string
}

const [useForm, FormProvider] = createContext<IInertiaFormProps>()
export { useForm }

const Form = ({ children, model, data, method = 'post', to, onSubmit, ...props }: IFormProps) => {
	const form = { ...useInertiaForm(data), model }
	console.log({ to })

	const handleSubmit = e => {
		e.preventDefault()
		let submit = true
		if(onSubmit) {
			const val = onSubmit(form)
			if(val === true || val === false) submit = val
		}
		if(submit) form[method.toLocaleLowerCase()](to)
	}

	return (
		<FormProvider value={ form }>
			<form onSubmit={ handleSubmit } { ...props }>
				{ children }
			</form>
		</FormProvider>
	)
}

export default React.memo(Form)

export const useInputProps = (name) => {
	const { model } = useForm()
	return { inputId: `${model}[${name}]`, inputName: `${model}/${name}` }
}
