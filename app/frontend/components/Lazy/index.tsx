import loadable from "@loadable/component"
import React, { Suspense } from "react"

import { ErrorBoundary } from "@/components/Error"

interface LazyProps {
	children: React.ReactNode
	fallback: React.ReactNode
}

const Lazy = ({ children, fallback }: LazyProps) => {
	return (
		<ErrorBoundary>
			<Suspense fallback={ fallback }>
				{ children }
			</Suspense>
		</ErrorBoundary>
	)
}

Lazy.loadable = loadable

export default Lazy
