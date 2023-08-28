import React from 'react'
import ConditionalWrapper from '../ConditionalWrapper'
import { Box } from '@/Components'

interface IInputWrapper {
	children: React.ReactNode
	wrapper?: boolean
	wrapperProps?: Record<string, any>
}

const InputWrapper = ({ children, wrapper = true, wrapperProps }: IInputWrapper) => {
	return (
		<ConditionalWrapper
			wrapper={ children => <Box { ...wrapperProps }>{ children }</Box> }
			condition={ wrapper }
		>
			{ children }
		</ConditionalWrapper>
	)
}

export default InputWrapper
