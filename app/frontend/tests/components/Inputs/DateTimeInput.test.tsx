import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { DateTimeInput } from "@/components/Inputs/DateTimeInput"
import { render } from "@/tests/helpers/utils"

describe("DateTimeInput", () => {
	it("renders without error", () => {
		render(<DateTimeInput name="test" />)
		const button = screen.getByRole("button")
		expect(button).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<DateTimeInput name="test" label="Date Time" />)
		expect(screen.getByText("Date Time")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<DateTimeInput name="test" id="datetime-input" />)
		const button = screen.getByRole("button")
		expect(button).toHaveAttribute("id", "datetime-input")
	})

	it("uses name as id when id is not provided", () => {
		render(<DateTimeInput name="datetime-input" />)
		const button = screen.getByRole("button")
		expect(button).toHaveAttribute("id", "datetime-input")
	})

	it("handles value prop", () => {
		const date = new Date("2024-01-15T10:30:00")
		render(<DateTimeInput name="test" value={ date } />)
		const button = screen.getByRole("button")
		expect(button).toBeInTheDocument()
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<DateTimeInput name="test" onChange={ onChange } />)
		const button = screen.getByRole("button")
		await user.click(button)
	})

	it("handles required prop", () => {
		render(<DateTimeInput name="test" required label="Required DateTime" />)
		expect(screen.getByText("Required DateTime")).toBeInTheDocument()
	})

	it("handles disabled state", () => {
		render(<DateTimeInput name="test" disabled />)
		const button = screen.getByRole("button")
		expect(button).toBeDisabled()
	})

	it("handles wrapper prop", () => {
		render(<DateTimeInput name="test" wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles wrapperProps", () => {
		render(<DateTimeInput name="test" wrapperProps={ { "data-testid": "wrapper", "data-custom": "value" } } />)
		const wrapper = screen.getByTestId("wrapper")
		expect(wrapper).toHaveAttribute("data-custom", "value")
	})
})
