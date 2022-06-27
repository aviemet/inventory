import React from 'react'
import { Link } from '@/Components'
import { CheckoutIcon } from '@/Components/Icons'
import { Tooltip } from '@mantine/core'

const color = 'pink'

const CheckoutButton = ({ href }: {href: string}) => {
	return (
		<Tooltip withArrow label="Checkout" position="left" transition="fade" color={ color }>
			<Link as="button" compact href={ href } color={ color } size="md" p="xs"><CheckoutIcon /></Link>
		</Tooltip>
	)
}

export default CheckoutButton
