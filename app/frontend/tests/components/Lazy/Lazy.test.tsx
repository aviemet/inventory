import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import Lazy from "@/components/Lazy"
import { render } from "@/tests/helpers/utils"

describe("Lazy", () => {
	it("renders without error", () => {
		render(
			<Lazy fallback={ <div>Loading...</div> }>
				<div>Content</div>
			</Lazy>
		)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("renders children when provided", () => {
		render(
			<Lazy fallback={ <div>Loading...</div> }>
				<span>Test Content</span>
			</Lazy>
		)
		expect(screen.getByText("Test Content")).toBeInTheDocument()
	})

	it("renders fallback during suspense", () => {
		const TestComponent = () => {
			throw new Promise(() => {})
		}
		render(
			<Lazy fallback={ <div>Loading...</div> }>
				<TestComponent />
			</Lazy>
		)
		expect(screen.getByText("Loading...")).toBeInTheDocument()
	})

	it("handles complex children", () => {
		render(
			<Lazy fallback={ <div>Loading...</div> }>
				<div>
					<h1>Title</h1>
					<p>Paragraph</p>
				</div>
			</Lazy>
		)
		expect(screen.getByText("Title")).toBeInTheDocument()
		expect(screen.getByText("Paragraph")).toBeInTheDocument()
	})

	it("handles null children", () => {
		const { container } = render(
			<Lazy fallback={ <div>Loading...</div> }>
				{ null }
			</Lazy>
		)
		expect(container.firstChild).toBeInTheDocument()
	})

	it("handles multiple children", () => {
		render(
			<Lazy fallback={ <div>Loading...</div> }>
				<div>First</div>
				<div>Second</div>
			</Lazy>
		)
		expect(screen.getByText("First")).toBeInTheDocument()
		expect(screen.getByText("Second")).toBeInTheDocument()
	})
})
