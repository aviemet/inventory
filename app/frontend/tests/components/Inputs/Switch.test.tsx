import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import Switch from "@/components/Inputs/Switch"
import { render } from "@/tests/helpers/utils"

describe("Switch", () => {
	it("renders without error", () => {
		render(<Switch name="test" />)
		const switchElement = screen.getByRole("switch")
		expect(switchElement).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<Switch name="test" label="Test Label" />)
		expect(screen.getByLabelText("Test Label")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<Switch name="test" id="test-switch" />)
		const switchElement = screen.getByRole("switch")
		expect(switchElement).toHaveAttribute("id", "test-switch")
	})

	it("uses name as id when id is not provided", () => {
		render(<Switch name="test-switch" />)
		const switchElement = screen.getByRole("switch")
		expect(switchElement).toHaveAttribute("id", "test-switch")
		expect(switchElement).toHaveAttribute("name", "test-switch")
	})

	it("handles checked state", () => {
		render(<Switch name="test" checked />)
		const switchElement = screen.getByRole("switch")
		expect(switchElement).toBeChecked()
	})

	it("handles unchecked state", () => {
		render(<Switch name="test" checked={ false } />)
		const switchElement = screen.getByRole("switch")
		expect(switchElement).not.toBeChecked()
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<Switch name="test" onChange={ onChange } />)
		const switchElement = screen.getByRole("switch")
		await user.click(switchElement)
		expect(onChange).toHaveBeenCalledTimes(1)
	})

	it("handles disabled state", () => {
		render(<Switch name="test" disabled />)
		const switchElement = screen.getByRole("switch")
		expect(switchElement).toBeDisabled()
	})

	it("handles required prop", () => {
		render(<Switch name="test" required label="Required Field" />)
		const switchElement = screen.getByRole("switch")
		expect(switchElement).toBeRequired()
	})

	it("handles wrapper prop", () => {
		render(<Switch name="test" wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles wrapperProps", () => {
		render(<Switch name="test" wrapperProps={ { "data-testid": "wrapper", "data-custom": "value" } } />)
		const wrapper = screen.getByTestId("wrapper")
		expect(wrapper).toHaveAttribute("data-custom", "value")
	})

	it("passes through additional props", () => {
		render(<Switch name="test" data-testid="custom-switch" />)
		expect(screen.getByTestId("custom-switch")).toBeInTheDocument()
	})
})

