import React, { Suspense } from 'react'
import loadable from '@loadable/component'
import { ErrorBoundary } from 'react-error-boundary'
import Error from '@/components/Error'

interface LazyProps {
	children: React.ReactNode
	fallback: React.ReactNode
}

const Lazy = ({ children, fallback }: LazyProps) => {
	return (
		<ErrorBoundary FallbackComponent={ Error }>
			<Suspense fallback={ fallback }>
				{ children }
			</Suspense>
		</ErrorBoundary>
	)
}

Lazy.loadable = loadable

export default Lazy
