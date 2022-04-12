import React, { useState } from 'react'
import { MdMoreVert } from 'react-icons/md'
import classnames from 'classnames'

interface IPopoverProps {
	children?: React.ReactNode
	width?: number
}

const Popover = ({ children, width = 24 }: IPopoverProps) => {
	const [visible, setVisible] = useState(false)

	return (
		<div
			className="popover cursor-pointer inline-block m-2 relative"
			style={ { width: `${width}px`, height: `${width}px` } }
			onClick={ () => setVisible(!visible) }
		>
			<MdMoreVert />
			<div
				className={ classnames(
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
