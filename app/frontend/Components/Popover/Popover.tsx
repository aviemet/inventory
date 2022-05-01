import React, { useState, useRef } from 'react'
import { useClickAwayListener } from '@/Components/Hooks'
import { MenuDotsIcon } from '@/Components/Icons'
import tw, { styled } from 'twin.macro'
import cx from 'classnames'
import { DivProps } from 'react-html-props'

interface IPopoverProps extends Omit<DivProps, 'ref'> {
	children?: React.ReactNode
	width?: number
	icon?: typeof MenuDotsIcon
}

const Popover = ({ children, width = 24, icon, ...props }: IPopoverProps) => {
	const [visible, setVisible] = useState(false)

	const outerElRef = useRef<HTMLDivElement>(null)

	const { startClickListener, cancelClickListener } = useClickAwayListener(outerElRef, () => {
		setVisible(false)
	})

	const handleShow = () => startClickListener(() => setVisible(true))
	const handleHide = () => cancelClickListener(() => setVisible(false))

	const handleToggle = () => {
		if(visible) handleHide()
		else handleShow()
	}

	const Icon = icon ?? MenuDotsIcon

	return (
		<PopoverComponent
			tw="relative inline-block m-2 cursor-pointer"
			style={ { width: `${width}px`, height: `${width}px` } }
			onClick={ handleToggle }
			ref={ outerElRef }
			{ ...props }
		>
			<Icon />
			<div
				className={ cx({ 'visually-hidden': !visible }) }
				tw="absolute right-0 bg-white border-gray-300 border rounded z-50 shadow px-2"
			>
				{ children }
			</div>
		</PopoverComponent>
	)
}

export default Popover

const PopoverComponent = styled.div`
  & > .react-icon {
    width: 100%;
    height: 100%;
  }

	a {
		.react-icon {
			${tw`inline-block mr-2 text-gray-800`}
		}

		&:hover .react-icon {
			${tw`text-brand-dark`}
		}
	}
`
