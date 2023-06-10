import React from 'react'
import { Link } from '@/Components'
import { usePage } from '@inertiajs/react'
import { Text } from '@mantine/core'
import { Routes } from '@/lib'

const Empty = () => {
	const { props } = usePage<SharedInertiaProps>()

	return (
		<Text>There are no SMTP servers set up for { props.auth.user.active_company.name },
			<Link href={ Routes.newSettingsSmtp() } as="button" size="sm" p="xs">Add one now</Link>
		</Text>
	)
}

export default Empty
