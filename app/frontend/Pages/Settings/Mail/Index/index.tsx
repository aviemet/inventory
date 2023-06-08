import React from 'react'
import SettingsLayout from '../../SettingsLayout'
import { Heading, Link } from '@/Components'
import { usePage } from '@inertiajs/react'
import { Text } from '@mantine/core'
import { Routes } from '@/lib'

interface IMailSettingsProps {
	smtps: Schema.Smtp[]
}

const Mail = ({ smtps }: IMailSettingsProps) => {
	const { props } = usePage<SharedInertiaProps>()

	return (
		<SettingsLayout>
			<Heading mb={ 24 }>Mail Settings</Heading>

			{ smtps.length === 0 &&
				<Text>There are no SMTP servers set up for { props.auth.user.active_company.name },
					<Link href={ Routes.newSettingsMail() } as="button" size="sm" p="xs">Add one now</Link>
				</Text>
			}
		</SettingsLayout>
	)
}

export default Mail
