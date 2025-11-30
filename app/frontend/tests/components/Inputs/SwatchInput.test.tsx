import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import SwatchInput from "@/components/Inputs/SwatchInput"
import { render } from "@/tests/helpers/utils"

describe("SwatchInput", () => {
	it("renders without error", () => {
		const { container } = render(<SwatchInput name="test" />)
		const hiddenInput = container.querySelector('input[type="hidden"]')
		expect(hiddenInput).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<SwatchInput name="test" label="Color" />)
		expect(screen.getByText("Color")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		const { container } = render(<SwatchInput name="test" id="color-input" />)
		const hiddenInput = container.querySelector('input[type="hidden"]')
		expect(hiddenInput).toHaveAttribute("id", "color-input")
	})

	it("uses name as id when id is not provided", () => {
		const { container } = render(<SwatchInput name="color-input" />)
		const hiddenInput = container.querySelector('input[type="hidden"]')
		expect(hiddenInput).toHaveAttribute("id", "color-input")
		expect(hiddenInput).toHaveAttribute("name", "color-input")
	})

	it("handles initialValue prop", () => {
		const { container } = render(<SwatchInput name="test" initialValue="#ff0000" />)
		const hiddenInput = container.querySelector('input[type="hidden"]') as HTMLInputElement
		expect(hiddenInput.value).toBe("#ff0000")
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<SwatchInput name="test" onChange={ onChange } />)
		const swatches = screen.getAllByRole("button")
		if(swatches.length > 0) {
			await user.click(swatches[0])
			expect(onChange).toHaveBeenCalled()
		}
	})

	it("handles required prop", () => {
		render(<SwatchInput name="test" required label="Required Color" />)
		expect(screen.getByText("Required Color")).toBeInTheDocument()
	})

	it("renders swatch picker", () => {
		render(<SwatchInput name="test" />)
		const swatches = screen.getAllByRole("button")
		expect(swatches.length).toBeGreaterThan(0)
	})

	it("handles wrapper prop", () => {
		render(<SwatchInput name="test" wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles wrapperProps", () => {
		render(<SwatchInput name="test" wrapperProps={ { "data-testid": "wrapper", "data-custom": "value" } } />)
		const wrapper = screen.getByTestId("wrapper")
		expect(wrapper).toHaveAttribute("data-custom", "value")
	})
})
