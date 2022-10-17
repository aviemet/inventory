import React, { Suspense } from 'react'
import loadable from '@loadable/component'
import { ErrorBoundary } from 'react-error-boundary'
import Error from '@/Components/Error'

// If this file ever moves, this path will need to be updated
const absolutePathToRelative = (path: string) => path.replace('@', '../..')

interface ILazyProps {
	path: string
	fallback: React.ReactNode
}

const Lazy = ({ path, fallback, ...props }: ILazyProps) => {
	const LazyComponent = loadable(() => import(absolutePathToRelative(path)))

	return (
		<>
			<ErrorBoundary FallbackComponent={ Error }>
				<Suspense fallback={ fallback }>
					<LazyComponent { ...props } />
				</Suspense>
			</ErrorBoundary>
		</>
	)
}

export default Lazy
