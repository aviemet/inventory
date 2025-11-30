import { Button, Code, Stack, Text, Title } from "@mantine/core"
import React from "react"
import { type FallbackProps } from "react-error-boundary"

interface ErrorFallbackProps extends Omit<FallbackProps, "resetErrorBoundary"> {
	resetErrorBoundary?: FallbackProps["resetErrorBoundary"]
	heading?: string
}

export function ErrorFallback({
	error,
	resetErrorBoundary,
	heading = "Something went wrong",
}: ErrorFallbackProps) {
	return (
		<div role="alert">
			<Stack gap="md" p="md">
				<Title order={ 3 }>{ heading }</Title>
				<Text>
					An unexpected error occurred. Please try again or contact support if the problem
					persists.
				</Text>
				{ error.message && (
					<Code block p="sm">
						{ error.message }
					</Code>
				) }
				{ error.stack && import.meta.env.DEV && (
					<details>
						<summary>
							<Text size="sm" c="dimmed">
								Stack trace (dev only)
							</Text>
						</summary>
						<Code block p="sm" style={ { marginTop: "0.5rem" } }>
							{ error.stack }
						</Code>
					</details>
				) }
				{ resetErrorBoundary && (
					<Button onClick={ resetErrorBoundary } style={ { alignSelf: "flex-start" } }>
						Try again
					</Button>
				) }
			</Stack>
		</div>
	)
}
