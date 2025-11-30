import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { DangerousHtml } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("DangerousHtml", () => {
	it("renders without error", () => {
		render(<DangerousHtml>Hello World</DangerousHtml>)
		expect(screen.getByText("Hello World")).toBeInTheDocument()
	})

	it("renders HTML content", () => {
		render(<DangerousHtml>{ "<p>Hello <strong>World</strong></p>" }</DangerousHtml>)
		expect(screen.getByText("Hello")).toBeInTheDocument()
		expect(screen.getByText("World")).toBeInTheDocument()
		const strongElement = screen.getByText("World").closest("strong")
		expect(strongElement).toBeInTheDocument()
	})

	it("renders empty string when children is null", () => {
		const { container } = render(<DangerousHtml>{ null }</DangerousHtml>)
		expect(container.firstChild).toBeInTheDocument()
	})

	it("renders empty string when children is undefined", () => {
		const { container } = render(<DangerousHtml>{ undefined }</DangerousHtml>)
		expect(container.firstChild).toBeInTheDocument()
	})

	it("renders empty string when children is empty string", () => {
		const { container } = render(<DangerousHtml>{ "" }</DangerousHtml>)
		expect(container.firstChild).toBeInTheDocument()
	})

	it("handles complex HTML", () => {
		const html = "<div><h1>Title</h1><p>Paragraph with <a href='/link'>link</a></p></div>"
		render(<DangerousHtml>{ html }</DangerousHtml>)
		const container = screen.getByText("Title").closest("div")
		expect(container).toBeInTheDocument()
	})

	it("passes through additional Box props", () => {
		render(<DangerousHtml data-testid="dangerous-html">Content</DangerousHtml>)
		expect(screen.getByTestId("dangerous-html")).toBeInTheDocument()
	})

	it("handles className prop", () => {
		render(<DangerousHtml className="custom-class">Content</DangerousHtml>)
		const element = screen.getByText("Content").closest("div")
		expect(element).toHaveClass("custom-class")
	})

	it("handles inline styles", () => {
		render(<DangerousHtml style={ { color: "red" } }>Content</DangerousHtml>)
		const element = screen.getByText("Content").closest("div")
		expect(element).toHaveStyle({ color: "red" })
	})
})
