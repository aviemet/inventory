import axios from "axios"

import { Title } from "@/components"
import { Routes } from "@/lib"

import SettingsLayout from "../../SettingsLayout"
import LdapForm from "@/domains/Settings/Ldap/Form"

interface LdapSettingsProps {
	ldap: Schema.LdapsFormData
}

const Ldap = ({ ldap }: LdapSettingsProps) => {
	const handleLdapSync = () => {
		if(!ldap.id) return

		axios.patch(Routes.settingsLdapSync(ldap.id))
	}

	return (
		<SettingsLayout>
			<Title mb={ 24 }>LDAP/Active Directory Settings</Title>
			<LdapForm
				to={ ldap.id ? Routes.settingsLdap({ id: ldap.id }) : Routes.settingsLdaps() }
				method={ ldap.id ? "put" : "post" }
				ldap={ ldap }
			/>
		</SettingsLayout>
	)
}

export default Ldap
