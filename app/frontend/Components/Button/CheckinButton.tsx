import React from 'react'
import { Link } from '@/Components'
import { CheckinIcon } from '@/Components/Icons'
import { Tooltip } from '@mantine/core'

const color = 'cyan'

const CheckinButton = ({ href }: {href: string}) => {
	return (
		<Tooltip withArrow label="Check In" position="left" transition="fade" color={ color }>
			<Link as="button" compact href={ href } color={ color } size="md" p="xs"><CheckinIcon /></Link>
		</Tooltip>
	)
}

export default CheckinButton
