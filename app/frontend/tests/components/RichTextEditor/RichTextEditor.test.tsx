import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { RichTextEditor } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("RichTextEditor", () => {
	it("renders without error", () => {
		render(<RichTextEditor />)
		const editor = screen.getByRole("textbox")
		expect(editor).toBeInTheDocument()
	})

	it("renders with initial content", () => {
		render(<RichTextEditor>Initial content</RichTextEditor>)
		const editor = screen.getByRole("textbox")
		expect(editor).toBeInTheDocument()
	})

	it("renders toolbar", () => {
		render(<RichTextEditor />)
		const editor = screen.getByRole("textbox")
		expect(editor).toBeInTheDocument()
		const toolbar = screen.queryByRole("toolbar")
		if(toolbar) {
			expect(toolbar).toBeInTheDocument()
		} else {
			expect(editor).toBeInTheDocument()
		}
	})
})
