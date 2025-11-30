import { screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { ErrorBoundary } from "@/components/Error"
import { render } from "@/tests/helpers/utils"

const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
	if(shouldThrow) {
		throw new Error("Test error")
	}
	return <div>No error</div>
}

describe("ErrorBoundary", () => {
	it("renders children when no error occurs", () => {
		render(
			<ErrorBoundary>
				<ThrowError shouldThrow={ false } />
			</ErrorBoundary>
		)
		expect(screen.getByText("No error")).toBeInTheDocument()
	})

	it("renders ErrorFallback when error occurs", () => {
		const consoleError = vi.spyOn(console, "error").mockImplementation(() => {})

		render(
			<ErrorBoundary>
				<ThrowError shouldThrow={ true } />
			</ErrorBoundary>
		)

		expect(screen.getByRole("alert")).toBeInTheDocument()
		expect(screen.getByText("Something went wrong")).toBeInTheDocument()

		consoleError.mockRestore()
	})

	it("calls onError callback when error occurs", () => {
		const consoleError = vi.spyOn(console, "error").mockImplementation(() => {})
		const onError = vi.fn()

		render(
			<ErrorBoundary onError={ onError }>
				<ThrowError shouldThrow={ true } />
			</ErrorBoundary>
		)

		expect(onError).toHaveBeenCalled()

		consoleError.mockRestore()
	})

	it("calls onReset callback when error is reset", () => {
		const consoleError = vi.spyOn(console, "error").mockImplementation(() => {})
		const onReset = vi.fn()

		render(
			<ErrorBoundary onReset={ onReset }>
				<ThrowError shouldThrow={ true } />
			</ErrorBoundary>
		)

		const resetButton = screen.getByRole("button", { name: "Try again" })
		resetButton.click()

		expect(onReset).toHaveBeenCalled()

		consoleError.mockRestore()
	})

	it("accepts custom fallback component", () => {
		const consoleError = vi.spyOn(console, "error").mockImplementation(() => {})
		const CustomFallback = () => <div>Custom error fallback</div>

		render(
			<ErrorBoundary fallback={ CustomFallback }>
				<ThrowError shouldThrow={ true } />
			</ErrorBoundary>
		)

		expect(screen.getByText("Custom error fallback")).toBeInTheDocument()

		consoleError.mockRestore()
	})
})
