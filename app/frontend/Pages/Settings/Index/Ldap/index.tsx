import React, { useEffect } from 'react'
import { Lazy, Link, Box } from '@/Components'
import { Routes } from '@/lib'
import LdapForm from '@/Pages/Ldap/Form'
import { router, usePage } from '@inertiajs/react'
import { LoadingOverlay } from '@mantine/core'

const Ldap = () => {
	const page = usePage<{ ldap:Schema.Ldap }>()

	if(!page.props.ldap) return <Box><LoadingOverlay visible /></Box>

	return (
		<LdapForm
			to={ page.props.ldap.id ? Routes.ldap({ id: page.props.ldap.id }) : Routes.ldaps() }
			method={ page.props.ldap.id ? 'put' : 'post' }
			ldap={ page.props.ldap }
		/>
	)
}

export default Ldap
