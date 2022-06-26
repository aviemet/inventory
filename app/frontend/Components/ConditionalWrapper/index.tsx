import React from 'react'

interface IConditionalWrapperProps {
	children: React.ReactNode
	condition: boolean
	wrapper: (children: React.ReactNode) => React.ReactNode
}

const ConditionalWrapper = ({ children, condition, wrapper }: IConditionalWrapperProps) => condition ? wrapper(children) : children

export default ConditionalWrapper
