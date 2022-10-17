import React from 'react'
import { type FallbackProps } from 'react-error-boundary'

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{ error.message }</pre>
			<button onClick={ resetErrorBoundary }>Try again</button>
		</div>
	)
}

export default Error
