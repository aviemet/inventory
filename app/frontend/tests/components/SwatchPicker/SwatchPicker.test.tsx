import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { SwatchPicker } from "@/components/SwatchPicker"
import { render } from "@/tests/helpers/utils"

describe("SwatchPicker", () => {
	it("renders without error", () => {
		const handleChange = () => {}
		render(<SwatchPicker value="blue" onChange={ handleChange } />)
		const buttons = screen.getAllByRole("button")
		expect(buttons.length).toBeGreaterThan(0)
	})

	it("renders color swatches", () => {
		const handleChange = () => {}
		render(<SwatchPicker value="blue" onChange={ handleChange } />)
		const buttons = screen.getAllByRole("button")
		expect(buttons.length).toBeGreaterThan(0)
	})

	it("calls onChange when swatch is clicked", async() => {
		const user = userEvent.setup()
		const handleChange = vi.fn()
		render(<SwatchPicker value="blue" onChange={ handleChange } />)
		const buttons = screen.getAllByRole("button")
		await user.click(buttons[0])
		expect(handleChange).toHaveBeenCalled()
	})

	it("renders with different value", () => {
		const handleChange = () => {}
		render(<SwatchPicker value="red" onChange={ handleChange } />)
		const buttons = screen.getAllByRole("button")
		expect(buttons.length).toBeGreaterThan(0)
	})
})
