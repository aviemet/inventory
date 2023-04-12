import React from 'react'
import { Link } from '@/Components'
import { type ILinkProps } from '../Link'
import { CheckinIcon } from '@/Components/Icons'
import { Tooltip, useMantineTheme } from '@mantine/core'

interface ICheckinButtonProps extends Omit<ILinkProps, 'children'> {
	href: string
	label?: string
	disabled?: boolean
	tooltipMessage?: string | false | null
}

const CheckinButton = ({ href, label, disabled, tooltipMessage, ...props }: ICheckinButtonProps) => {
	const { other: { colors: { checkinButtonColor } } } = useMantineTheme()

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
			color={ checkinButtonColor }
		>
			<Link
				as="button"
				compact
				href={ href }
				color={ checkinButtonColor }
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
