import React from 'react'
import { Link } from '@/Components'
import { CheckoutIcon } from '@/Components/Icons'
import { Tooltip } from '@mantine/core'

const CheckoutButton = ({ href }: {href: string}) => {
	return (
		<Tooltip withArrow label="Checkout" position="left" transition="fade">
			<Link as="button" href={ href } size="md" p="xs"><CheckoutIcon /></Link>
		</Tooltip>
	)
}

export default CheckoutButton
