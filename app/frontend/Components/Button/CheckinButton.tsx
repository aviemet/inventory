import React from 'react'
import { Link } from '@/Components'
import { type ILinkProps } from '../Link'
import { CheckinIcon } from '@/Components/Icons'
import { Tooltip } from '@mantine/core'

interface ICheckinButtonProps extends Omit<ILinkProps, 'children'> {
	href: string
	label?: string
	disabled?: boolean
	tooltipMessage?: string | false | null
}

const color = 'cyan'

const CheckinButton = ({ href, label, disabled, tooltipMessage, ...props }: ICheckinButtonProps) => {
	const finalProps = props
	if(disabled) {
		finalProps.buttonProps = {
			disabled: true,
		}
	}

	return (
		<Tooltip
			withArrow
			label={ tooltipMessage || 'Check In' }
			position="left"
			transitionProps={ { transition: 'fade' } }
			color={ color }
		>
			<Link
				as="button"
				compact
				href={ href }
				color={ color }
				size="md"
				p={ 0 }
				aria-label={ `Check in ${label}` }
				{ ...finalProps }
			>
				<CheckinIcon />
			</Link>
		</Tooltip>
	)
}

export default CheckinButton
