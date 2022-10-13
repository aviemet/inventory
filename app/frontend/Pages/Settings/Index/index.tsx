import React from 'react'
import { Heading, Link, Page, Section } from '@/Components'
import { Routes } from '@/lib'

const Settings = () => {
	const title = 'Settings'
	return (
		<Page title={ title }>
			<Section>
				<Heading>{ title }</Heading>

				<Link href={ Routes.ldaps() }>LDAP Settings</Link>
			</Section>
		</Page>
	)
}

export default Settings
