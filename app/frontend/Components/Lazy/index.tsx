import React, { Suspense } from 'react'
import loadable from '@loadable/component'
import { ErrorBoundary } from 'react-error-boundary'
import Error from '@/Components/Error'

interface ILazyProps {
	children: React.ReactNode
	fallback: React.ReactNode
}

const Lazy = ({ children, fallback }: ILazyProps) => {
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
