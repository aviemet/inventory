import React from 'react'
import { Link } from '@/Components'
import { CheckinIcon } from '@/Components/Icons'

const CheckinButton = ({ href }: {href: string}) => {
	return (
		<Link as="button" compact href={ href }><CheckinIcon /></Link>
	)
}

export default CheckinButton
