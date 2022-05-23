import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import 'twin.macro'

interface IMessageProps {
	children: React.ReactNode
	type: keyof FlashMessage
	delay?: number
}

const Message = ({ children, type, delay = 5000 }: IMessageProps) => {
	const [hidden, setHidden] = useState(false)

	const handleClick = () => {
		setHidden(true)
	}

	useEffect(() => {
		setTimeout(() => {
			setHidden(true)
		}, delay)
	}, [delay])

	return (
		<div
			className={ cn('alert-banner', { 'visually-hidden': hidden }, type) }
			onClick={ handleClick }
		>
			{ children }
			<AiOutlineCloseCircle color='black' />
		</div>

	)
}

export default Message
