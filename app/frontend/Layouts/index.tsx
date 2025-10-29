import React from 'react'
import { type PageProps } from '@inertiajs/core'
import Providers from '@/Layouts/Providers'
import { Flash } from '@/components'
import Spotlight from '@/features/Spotlight'

import AppLayout from './AppLayout'
import AuthLayout from './AuthLayout'

interface LayoutWrapperProps {
	children: React.ReactNode
}

interface InertiaPageProps extends PageProps {
	props: LayoutWrapperProps
}

const LayoutWrapper = React.memo(({ children }: LayoutWrapperProps) => {
	return (
		<Providers>
			<Flash />
			{ children }
		</Providers>
	)
})

const AppLayoutLayout = (page: InertiaPageProps) => {
	return (
		<LayoutWrapper>
			<Spotlight />
			<AppLayout>{ page }</AppLayout>
		</LayoutWrapper>
	)
}

const AuthLayoutLayout = (page: InertiaPageProps) => {
	return (
		<LayoutWrapper>
			<AuthLayout>{ page }</AuthLayout>
		</LayoutWrapper>
	)
}

export {
	AppLayoutLayout as AppLayout,
	AuthLayoutLayout as AuthLayout,
}
