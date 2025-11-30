import React from "react"

import { Flash } from "@/components"
import Spotlight from "@/features/Spotlight"
import Providers from "@/layouts/Providers"

import AppLayout from "./AppLayout"
import AuthLayout from "./AuthLayout"

import "@/lib/i18n"

export const LAYOUTS = {
	"auth": "auth",
	"app": "app",
} as const

export interface LayoutProps {
	children: React.ReactNode
}

const LayoutWrapper = React.memo(({ children }: LayoutProps) => {
	return (
		<Providers>
			<Flash />
			{ children }
		</Providers>
	)
})

const AppLayoutLayout = ({ children }: LayoutProps) => {
	return (
		<LayoutWrapper>
			<Spotlight />
			<AppLayout>{ children }</AppLayout>
		</LayoutWrapper>
	)
}

const AuthLayoutLayout = ({ children }: LayoutProps) => {
	return (
		<LayoutWrapper>
			<AuthLayout>{ children }</AuthLayout>
		</LayoutWrapper>
	)
}

export {
	AppLayoutLayout as AppLayout,
	AuthLayoutLayout as AuthLayout,
}
