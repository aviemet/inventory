import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { CurrencyInput } from "@/components/Inputs/CurrencyInput"
import { render } from "@/tests/helpers/utils"

describe("CurrencyInput", () => {
	it("renders without error", () => {
		render(<CurrencyInput name="test" />)
		const input = screen.getByRole("textbox")
		expect(input).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<CurrencyInput name="test" label="Amount" />)
		expect(screen.getByLabelText("Amount")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<CurrencyInput name="test" id="currency-input" />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveAttribute("id", "currency-input")
	})

	it("uses name as id when id is not provided", () => {
		render(<CurrencyInput name="currency-input" />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveAttribute("id", "currency-input")
	})

	it("renders with default currency symbol", () => {
		render(<CurrencyInput name="test" />)
		const input = screen.getByRole("textbox")
		expect(input).toBeInTheDocument()
		const symbol = screen.getByText("$")
		expect(symbol).toBeInTheDocument()
	})

	it("renders with custom currency symbol", () => {
		render(<CurrencyInput name="test" symbol="€" />)
		const symbol = screen.getByText("€")
		expect(symbol).toBeInTheDocument()
	})

	it("handles value prop", () => {
		render(<CurrencyInput name="test" value={ 100.50 } />)
		const input = screen.getByRole("textbox") as HTMLInputElement
		expect(input.value).toBe("100.5")
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<CurrencyInput name="test" onChange={ onChange } />)
		const input = screen.getByRole("textbox")
		await user.type(input, "5")
		expect(onChange).toHaveBeenCalled()
	})

	it("handles required prop", () => {
		render(<CurrencyInput name="test" required label="Required Amount" />)
		const input = screen.getByRole("textbox")
		expect(input).toBeRequired()
	})

	it("handles disabled state", () => {
		render(<CurrencyInput name="test" disabled />)
		const input = screen.getByRole("textbox")
		expect(input).toBeDisabled()
	})

	it("handles wrapper prop", () => {
		render(<CurrencyInput name="test" wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles wrapperProps", () => {
		render(<CurrencyInput name="test" wrapperProps={ { "data-testid": "wrapper", "data-custom": "value" } } />)
		const wrapper = screen.getByTestId("wrapper")
		expect(wrapper).toHaveAttribute("data-custom", "value")
	})
})
