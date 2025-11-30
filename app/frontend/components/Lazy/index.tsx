import loadable from "@loadable/component"
import React, { Suspense } from "react"

import { ErrorBoundary } from "@/components/Error"

interface LazyProps {
	children: React.ReactNode
	fallback: React.ReactNode
}

const LazyBase = ({ children, fallback }: LazyProps) => {
	return (
		<ErrorBoundary>
			<Suspense fallback={ fallback }>
				{ children }
			</Suspense>
		</ErrorBoundary>
	)
}

export const Lazy = Object.assign(LazyBase, {
	loadable,
})
