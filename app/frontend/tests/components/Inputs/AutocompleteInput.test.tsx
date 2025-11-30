import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import AutocompleteInput from "@/components/Inputs/AutocompleteInput"
import { render } from "@/tests/helpers/utils"

describe("AutocompleteInput", () => {
	it("renders without error", () => {
		render(<AutocompleteInput name="test" data={ [] } />)
		const input = screen.getByRole("textbox")
		expect(input).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<AutocompleteInput name="test" id="autocomplete-input" data={ [] } />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveAttribute("id", "autocomplete-input")
	})

	it("uses name as id when id is not provided", () => {
		render(<AutocompleteInput name="autocomplete-input" data={ [] } />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveAttribute("id", "autocomplete-input")
		expect(input).toHaveAttribute("name", "autocomplete-input")
	})

	it("handles value prop", () => {
		render(<AutocompleteInput name="test" value="Option 1" data={ ["Option 1"] } />)
		const input = screen.getByRole("textbox") as HTMLInputElement
		expect(input.value).toBe("Option 1")
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<AutocompleteInput name="test" data={ [] } onChange={ onChange } />)
		const input = screen.getByRole("textbox")
		await user.type(input, "a")
		expect(onChange).toHaveBeenCalled()
	})

	it("renders with data options", async() => {
		const user = userEvent.setup()
		const options = ["Option 1", "Option 2"]
		render(<AutocompleteInput name="test" data={ options } />)
		const input = screen.getByRole("textbox")
		await user.click(input)
		await user.type(input, "Option")
		await waitFor(() => {
			expect(screen.getByText("Option 1")).toBeInTheDocument()
		})
	})

	it("handles disabled state", () => {
		render(<AutocompleteInput name="test" data={ [] } disabled />)
		const input = screen.getByRole("textbox")
		expect(input).toBeDisabled()
	})

	it("handles placeholder prop", () => {
		render(<AutocompleteInput name="test" data={ [] } placeholder="Select option" />)
		const input = screen.getByPlaceholderText("Select option")
		expect(input).toBeInTheDocument()
	})

	it("handles wrapper prop", () => {
		render(<AutocompleteInput name="test" data={ [] } wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles wrapperProps", () => {
		const { container } = render(<AutocompleteInput name="test" data={ [] } wrapperProps={ { "data-testid": "wrapper", "data-custom": "value" } } />)
		const wrapper = container.querySelector('[data-testid="wrapper"]')
		expect(wrapper).toHaveAttribute("data-custom", "value")
	})
})
