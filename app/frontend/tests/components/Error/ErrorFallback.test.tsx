import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { ErrorFallback } from "@/components/Error"
import { render } from "@/tests/helpers/utils"

describe("ErrorFallback", () => {
	it("renders without error", () => {
		const error = new Error("Test error message")
		const resetErrorBoundary = vi.fn()
		render(<ErrorFallback error={ error } resetErrorBoundary={ resetErrorBoundary } />)
		expect(screen.getByRole("alert")).toBeInTheDocument()
	})

	it("displays error message", () => {
		const error = new Error("Custom error message")
		const resetErrorBoundary = vi.fn()
		render(<ErrorFallback error={ error } resetErrorBoundary={ resetErrorBoundary } />)
		expect(screen.getByText("Custom error message")).toBeInTheDocument()
	})

	it("displays error in Code block", () => {
		const error = new Error("Error details")
		const resetErrorBoundary = vi.fn()
		render(<ErrorFallback error={ error } resetErrorBoundary={ resetErrorBoundary } />)
		const codeElement = screen.getByText("Error details").closest("pre")
		expect(codeElement).toBeInTheDocument()
		expect(codeElement).toHaveClass("mantine-Code-root")
	})

	it("renders Try again button", () => {
		const error = new Error("Test error")
		const resetErrorBoundary = vi.fn()
		render(<ErrorFallback error={ error } resetErrorBoundary={ resetErrorBoundary } />)
		expect(screen.getByRole("button", { name: "Try again" })).toBeInTheDocument()
	})

	it("calls resetErrorBoundary when Try again is clicked", async() => {
		const user = userEvent.setup()
		const error = new Error("Test error")
		const resetErrorBoundary = vi.fn()
		render(<ErrorFallback error={ error } resetErrorBoundary={ resetErrorBoundary } />)
		const button = screen.getByRole("button", { name: "Try again" })
		await user.click(button)
		await waitFor(() => {
			expect(resetErrorBoundary).toHaveBeenCalledTimes(1)
		})
	})

	it("handles error with empty message", () => {
		const error = new Error("")
		const resetErrorBoundary = vi.fn()
		render(<ErrorFallback error={ error } resetErrorBoundary={ resetErrorBoundary } />)
		expect(screen.getByRole("alert")).toBeInTheDocument()
	})

	it("displays default heading", () => {
		const error = new Error("Test")
		const resetErrorBoundary = vi.fn()
		render(<ErrorFallback error={ error } resetErrorBoundary={ resetErrorBoundary } />)
		expect(screen.getByText("Something went wrong")).toBeInTheDocument()
	})

	it("displays custom heading when provided", () => {
		const error = new Error("Test")
		const resetErrorBoundary = vi.fn()
		render(
			<ErrorFallback
				error={ error }
				resetErrorBoundary={ resetErrorBoundary }
				heading="Custom Error"
			/>
		)
		expect(screen.getByText("Custom Error")).toBeInTheDocument()
	})

	it("does not render button when resetErrorBoundary is not provided", () => {
		const error = new Error("Test error")
		render(<ErrorFallback error={ error } />)
		expect(screen.queryByRole("button", { name: "Try again" })).not.toBeInTheDocument()
	})

	it("displays stack trace in development mode", () => {
		const originalEnv = import.meta.env.DEV
		Object.defineProperty(import.meta, "env", {
			value: { ...import.meta.env, DEV: true },
			writable: true,
		})

		const error = new Error("Test error")
		error.stack = "Error: Test error\n    at test.js:1:1"
		const resetErrorBoundary = vi.fn()

		render(<ErrorFallback error={ error } resetErrorBoundary={ resetErrorBoundary } />)

		expect(screen.getByText("Stack trace (dev only)")).toBeInTheDocument()
		expect(screen.getByText(/Error: Test error/)).toBeInTheDocument()

		Object.defineProperty(import.meta, "env", {
			value: { ...import.meta.env, DEV: originalEnv },
			writable: true,
		})
	})
})
