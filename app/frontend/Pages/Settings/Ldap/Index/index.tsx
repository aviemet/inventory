import React, { useEffect } from 'react'
import { Box } from '@/Components'
import { Routes } from '@/lib'
import LdapForm from '@/Pages/Ldap/Form'
import { router, usePage } from '@inertiajs/react'
import { LoadingOverlay } from '@mantine/core'
import SettingsLayout from '../../SettingsLayout'

interface ILdapSettingsProps {
	ldap: Schema.Ldap
}

const Ldap = ({ ldap }: ILdapSettingsProps) => {
	return (
		<SettingsLayout>
			<LdapForm
				to={ ldap.id ? Routes.settingsLdap({ id: ldap.id }) : Routes.settingsLdaps() }
				method={ ldap.id ? 'put' : 'post' }
				ldap={ ldap }
			/>
		</SettingsLayout>
	)
}

export default Ldap
