import React from 'react'
import { Link } from '@/Components'
import { type LinkProps } from '../Link'
import { CheckoutIcon } from '@/Components/Icons'
import { Tooltip, useMantineTheme } from '@mantine/core'

interface CheckoutButtonProps extends Omit<LinkProps, 'children'> {
	href: string
	label?: string
	disabled?: boolean
	tooltipMessage?: string | false | null
}

const CheckoutButton = ({ href, label, disabled, tooltipMessage, ...props }: CheckoutButtonProps) => {
	const { other: { colors: { checkoutButtonColor } } } = useMantineTheme()

	const usedLabel = tooltipMessage || `Checkout${label ? ` ${label}` : ''}`

	return (
		<Tooltip
			withArrow
			label={ usedLabel }
			position="left"
			transitionProps={ { transition: 'fade' } }
			color={ checkoutButtonColor }
		>
			<Link
				as="button"
				href={ href }
				buttonProps={ { disabled, color: checkoutButtonColor } }
				aria-label={ usedLabel }
				{ ...props }
			>
				<CheckoutIcon />
			</Link>
		</Tooltip>
	)
}

export default CheckoutButton
