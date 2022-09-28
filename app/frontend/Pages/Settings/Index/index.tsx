import { Heading, Link, Section } from '@/Components'
import { Routes } from '@/lib'
import React from 'react'

const Settings = () => {
	return (
		<Section>
			<Heading>Settings</Heading>

			<Link href={ Routes.ldaps() }>LDAP Settings</Link>
		</Section>
	)
}

export default Settings
