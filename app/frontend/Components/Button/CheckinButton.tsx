import React from 'react'
import { Link } from '@/Components'
import { CheckinIcon } from '@/Components/Icons'
import { Tooltip } from '@mantine/core'

const CheckinButton = ({ href }: {href: string}) => {
	return (
		<Tooltip withArrow label="Check In" position="left" transition="fade">
			<Link as="button" compact href={ href }><CheckinIcon /></Link>
		</Tooltip>
	)
}

export default CheckinButton
