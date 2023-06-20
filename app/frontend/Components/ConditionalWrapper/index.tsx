import React from 'react'

interface IConditionalWrapperProps {
	children: JSX.Element|React.ReactNode
	condition: boolean
	wrapper: (children: JSX.Element|React.ReactNode) => JSX.Element
}

const ConditionalWrapper = ({ children, condition, wrapper }: IConditionalWrapperProps) => condition ? wrapper(children) : children

export default ConditionalWrapper
