import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { DateInput } from "@/components/Inputs/DateInput"
import { render } from "@/tests/helpers/utils"

describe("DateInput", () => {
	it("renders without error", () => {
		render(<DateInput name="test" value={ null } />)
		const button = screen.getByRole("button")
		expect(button).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<DateInput name="test" label="Date" value={ null } />)
		expect(screen.getByText("Date")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<DateInput name="test" id="date-input" value={ null } />)
		const button = screen.getByRole("button")
		expect(button).toHaveAttribute("id", "date-input")
	})

	it("uses name as id when id is not provided", () => {
		render(<DateInput name="date-input" value={ null } />)
		const button = screen.getByRole("button")
		expect(button).toHaveAttribute("id", "date-input")
	})

	it("handles value prop", () => {
		const date = new Date("2024-01-15")
		render(<DateInput name="test" value={ date } />)
		const buttons = screen.getAllByRole("button")
		expect(buttons.length).toBeGreaterThan(0)
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<DateInput name="test" value={ null } onChange={ onChange } />)
		const button = screen.getByRole("button")
		await user.click(button)
	})

	it("handles required prop", () => {
		render(<DateInput name="test" required label="Required Date" value={ null } />)
		expect(screen.getByText("Required Date")).toBeInTheDocument()
	})

	it("handles disabled state", () => {
		render(<DateInput name="test" disabled value={ null } />)
		const button = screen.getByRole("button")
		expect(button).toBeDisabled()
	})

	it("handles default type", () => {
		render(<DateInput name="test" value={ null } />)
		const button = screen.getByRole("button")
		expect(button).toBeInTheDocument()
	})

	it("handles range type", () => {
		render(<DateInput name="test" type="range" value={ null } />)
		const buttons = screen.getAllByRole("button")
		expect(buttons.length).toBeGreaterThan(0)
	})

	it("handles wrapper prop", () => {
		render(<DateInput name="test" value={ null } wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles wrapperProps", () => {
		render(<DateInput name="test" value={ null } wrapperProps={ { "data-testid": "wrapper", "data-custom": "value" } } />)
		const wrapper = screen.getByTestId("wrapper")
		expect(wrapper).toHaveAttribute("data-custom", "value")
	})
})
