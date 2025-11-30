import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import Checkbox from "@/components/Inputs/Checkbox"
import { render } from "@/tests/helpers/utils"

describe("Checkbox", () => {
	it("renders without error", () => {
		render(<Checkbox />)
		const checkbox = screen.getByRole("checkbox")
		expect(checkbox).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<Checkbox label="Test Label" />)
		expect(screen.getByLabelText("Test Label")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<Checkbox id="test-checkbox" />)
		const checkbox = screen.getByRole("checkbox")
		expect(checkbox).toHaveAttribute("id", "test-checkbox")
	})

	it("uses name as id when id is not provided", () => {
		render(<Checkbox name="test-checkbox" />)
		const checkbox = screen.getByRole("checkbox")
		expect(checkbox).toHaveAttribute("id", "test-checkbox")
		expect(checkbox).toHaveAttribute("name", "test-checkbox")
	})

	it("handles checked state", () => {
		render(<Checkbox checked />)
		const checkbox = screen.getByRole("checkbox")
		expect(checkbox).toBeChecked()
	})

	it("handles unchecked state", () => {
		render(<Checkbox checked={ false } />)
		const checkbox = screen.getByRole("checkbox")
		expect(checkbox).not.toBeChecked()
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<Checkbox onChange={ onChange } />)
		const checkbox = screen.getByRole("checkbox")
		await user.click(checkbox)
		expect(onChange).toHaveBeenCalledTimes(1)
	})

	it("handles disabled state", () => {
		render(<Checkbox disabled />)
		const checkbox = screen.getByRole("checkbox")
		expect(checkbox).toBeDisabled()
	})

	it("handles required prop", () => {
		render(<Checkbox required label="Required Field" />)
		const checkbox = screen.getByRole("checkbox")
		expect(checkbox).toBeRequired()
	})

	it("passes through additional props", () => {
		render(<Checkbox data-testid="custom-checkbox" />)
		expect(screen.getByTestId("custom-checkbox")).toBeInTheDocument()
	})

	it("handles wrapper prop", () => {
		render(<Checkbox name="test" wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles wrapperProps", () => {
		render(<Checkbox name="test" wrapperProps={ { "data-testid": "wrapper", "data-custom": "value" } } />)
		const wrapper = screen.getByTestId("wrapper")
		expect(wrapper).toHaveAttribute("data-custom", "value")
	})
})

