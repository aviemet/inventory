import React from 'react'
import tw from 'twin.macro'
import Link, { type LinkProps } from '@/Components/Link'

interface IOptionProps extends Omit<LinkProps, 'href'> {
	href?: string
	bubble?: boolean
}

const Option = ({ children, href, id, className, bubble = true, ...props }: IOptionProps) => {
	const handleBubble = e => {
		if(!bubble) e.stopPropagation()
	}

	if(href) {
		return (
			<Link
				tw="block whitespace-nowrap w-full py-3 px-4 hover:bg-gray-100"
				href={ href }
				id={ id }
				className={ className }
				onClick={ handleBubble }
				{ ...props }
			>
				{ children }
			</Link>
		)
	}

	return (
		<div
			tw="whitespace-nowrap w-full py-2 px-4 hover:bg-gray-100"
			id={ id }
			className={ className }
			onClick={ handleBubble }
		>
			{ children }
		</div>
	)
}

export default Option
