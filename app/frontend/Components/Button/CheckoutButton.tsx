import React from 'react'
import { Link } from '@/Components'
import { type ILinkProps } from '../Link'
import { CheckoutIcon } from '@/Components/Icons'
import { Tooltip } from '@mantine/core'

interface ICheckoutButtonProps extends Omit<ILinkProps, 'children'> {
	href: string
	disabled?: boolean
	tooltipMessage?: string | false | null
}

const color = 'pink'

const CheckoutButton = ({ href, disabled, tooltipMessage, ...props }: ICheckoutButtonProps) => {
	return (
		<Tooltip withArrow label={ tooltipMessage || 'Checkout' } position="left" transition="fade" color={ color }>
			<Link as="button" compact href={ href } color={ color } size="md" p={ 0 } { ...props } buttonProps={ { disabled } }>
				<CheckoutIcon />
			</Link>
		</Tooltip>
	)
}

export default CheckoutButton
