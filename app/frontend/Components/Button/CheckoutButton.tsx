import React from 'react'
import { Link } from '@/Components'
import { CheckoutIcon } from '@/Components/Icons'

const CheckoutButton = ({ href }: {href: string}) => {
	return (
		<Link as="button" href={ href }><CheckoutIcon /></Link>
	)
}

export default CheckoutButton
