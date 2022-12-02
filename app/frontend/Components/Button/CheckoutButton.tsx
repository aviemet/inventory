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
	const finalProps: Partial<typeof props & { disabled?: boolean }> = props
	if(disabled) {
		finalProps.disabled = disabled
		finalProps.buttonProps = {
			disabled: true,
		}
	}

	return (
		<Tooltip withArrow label={ tooltipMessage || 'Checkout' } position="left" transition="fade" color={ color }>
			<Link as="button" compact href={ href } color={ color } size="md" p={ 0 } { ...finalProps }><CheckoutIcon /></Link>
		</Tooltip>
	)
}

export default CheckoutButton
