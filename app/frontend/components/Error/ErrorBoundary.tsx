import React, { type ComponentType } from "react"
import { ErrorBoundary as ReactErrorBoundary, type FallbackProps } from "react-error-boundary"

import { ErrorFallback } from "./ErrorFallback"

interface ErrorBoundaryProps {
	children: React.ReactNode
	fallback?: ComponentType<FallbackProps>
	onError?: (error: Error, info: React.ErrorInfo) => void
	onReset?: (details: {
		reason: "imperative-api"
		args: unknown[]
	} | {
		reason: "keys"
		prev: unknown[] | undefined
		next: unknown[] | undefined
	}) => void
	resetKeys?: unknown[]
}

export function ErrorBoundary({
	children,
	fallback = ErrorFallback,
	onError,
	onReset,
	resetKeys,
}: ErrorBoundaryProps) {
	return (
		<ReactErrorBoundary
			FallbackComponent={ fallback }
			onError={ onError }
			onReset={ onReset }
			resetKeys={ resetKeys }
		>
			{ children }
		</ReactErrorBoundary>
	)
}
