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

	return (
		<Tooltip
			withArrow
			label={ tooltipMessage || 'Checkout' }
			position="left"
			transitionProps={ { transition: 'fade' } }
			color={ checkoutButtonColor }
		>
			<Link
				as="button"
				href={ href }
				color={ checkoutButtonColor }
				buttonProps={ { disabled } }
				aria-label={ `Check in ${label}` }
				{ ...props }
			>
				<CheckoutIcon />
			</Link>
		</Tooltip>
	)
}

export default CheckoutButton
