import React from 'react'
import { Routes } from '@/lib'
import LdapForm from '../Form'
import SettingsLayout from '../../SettingsLayout'
import axios from 'axios'

interface ILdapSettingsProps {
	ldap: Schema.Ldap
}

const Ldap = ({ ldap }: ILdapSettingsProps) => {
	const handleLdapSync = () => {
		axios.patch(Routes.settingsLdapSync(ldap))
	}

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
