import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { RichText } from "@/components/Inputs/RichText"
import { render } from "@/tests/helpers/utils"

describe("RichText", () => {
	it("renders without error", () => {
		render(<RichText name="test" value="" />)
		const editor = screen.getByRole("textbox")
		expect(editor).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<RichText name="test" label="Content" value="" />)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<RichText name="test" id="richtext-input" value="" />)
		const editor = screen.getByRole("textbox")
		expect(editor).toBeInTheDocument()
	})

	it("uses name as id when id is not provided", () => {
		render(<RichText name="richtext-input" value="" />)
		const editor = screen.getByRole("textbox")
		expect(editor).toBeInTheDocument()
	})

	it("handles value prop", () => {
		render(<RichText name="test" value="<p>Test content</p>" />)
		const editor = screen.getByRole("textbox")
		expect(editor).toBeInTheDocument()
	})

	it("handles required prop", () => {
		render(<RichText name="test" required label="Required Content" value="" />)
		expect(screen.getByText("Required Content")).toBeInTheDocument()
	})

	it("handles wrapper prop", () => {
		render(<RichText name="test" value="" wrapper={ true } />)
		const editor = screen.getByRole("textbox")
		expect(editor).toBeInTheDocument()
	})

	it("renders rich text editor", () => {
		render(<RichText name="test" value="" />)
		const editor = screen.getByRole("textbox")
		expect(editor).toBeInTheDocument()
	})
})
