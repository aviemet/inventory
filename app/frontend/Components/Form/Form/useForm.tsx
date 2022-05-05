import { createContext } from '@/Components/Hooks'

interface IInertiaFormProps extends InertiaFormProps {
	model?: string
	getData: (data: string) => string
}

const [useForm, FormProvider] = createContext<IInertiaFormProps>()
export { useForm, FormProvider }
