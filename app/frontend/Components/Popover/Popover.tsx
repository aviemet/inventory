import React, { useState, useRef } from 'react'
import { useClickAwayListener } from '@/Components/Hooks'
import { MdMoreVert } from 'react-icons/md'
import cx from 'classnames'

interface IPopoverProps {
	children?: React.ReactNode
	width?: number
}

const Popover = ({ children, width = 24 }: IPopoverProps) => {
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

	return (
		<div
			className="popover cursor-pointer inline-block m-2 relative"
			style={ { width: `${width}px`, height: `${width}px` } }
			onClick={ handleToggle }
			ref={ outerElRef }
		>
			<MdMoreVert />
			<div
				className={ cx(
					{ 'visually-hidden': !visible },
					'absolute',
					'right-0',
					'bg-white',
					'border-gray-300',
					'border-1',
					'rounded',
					'z-50',
					'shadow'
				) }
			>
				{ children }
			</div>
		</div>
	)
}

export default Popover
