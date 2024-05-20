import React from 'react'

interface ConditionalWrapperProps {
	children: JSX.Element|React.ReactNode
	condition: boolean
	wrapper: (children: JSX.Element|React.ReactNode) => JSX.Element
}

const ConditionalWrapper = ({ children, condition, wrapper }: ConditionalWrapperProps) => condition ? wrapper(children) : children

export default ConditionalWrapper
