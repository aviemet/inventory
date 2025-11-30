import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import TextInput from "@/components/Inputs/TextInput"
import { render } from "@/tests/helpers/utils"

describe("TextInput", () => {
	it("renders without error", () => {
		render(<TextInput name="test" />)
		const input = screen.getByRole("textbox")
		expect(input).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<TextInput name="test" label="Test Label" />)
		expect(screen.getByLabelText("Test Label")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<TextInput name="test" id="test-input" />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveAttribute("id", "test-input")
	})

	it("uses name as id when id is not provided", () => {
		render(<TextInput name="test-input" />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveAttribute("id", "test-input")
		expect(input).toHaveAttribute("name", "test-input")
	})

	it("handles value prop", () => {
		render(<TextInput name="test" value="Test Value" />)
		const input = screen.getByRole("textbox") as HTMLInputElement
		expect(input.value).toBe("Test Value")
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<TextInput name="test" onChange={ onChange } />)
		const input = screen.getByRole("textbox")
		await user.type(input, "a")
		expect(onChange).toHaveBeenCalled()
	})

	it("handles clearable prop when value is present", () => {
		const { container } = render(<TextInput name="test" value="Test" clearable />)
		const svg = container.querySelector("svg")
		expect(svg).toBeInTheDocument()
	})

	it("does not show clear button when value is empty", () => {
		render(<TextInput name="test" value="" clearable />)
		const clearButton = screen.queryByRole("button")
		expect(clearButton).not.toBeInTheDocument()
	})

	it("clears value when clear button is clicked", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		const { container } = render(<TextInput name="test" value="Test" clearable onChange={ onChange } />)
		const svg = container.querySelector("svg")
		expect(svg).toBeInTheDocument()
		if(svg) {
			await user.click(svg)
			expect(onChange).toHaveBeenCalled()
		}
	})

	it("does not show clear button when clearable is false", () => {
		render(<TextInput name="test" value="Test" clearable={ false } />)
		const clearButton = screen.queryByRole("button")
		expect(clearButton).not.toBeInTheDocument()
	})

	it("handles readOnly prop", () => {
		render(<TextInput name="test" readOnly />)
		const input = screen.getByRole("textbox")
		expect(input).toHaveProperty("readOnly", true)
	})

	it("does not show clear button when readOnly is true", () => {
		render(<TextInput name="test" value="Test" clearable readOnly />)
		const clearButton = screen.queryByRole("button")
		expect(clearButton).not.toBeInTheDocument()
	})

	it("handles required prop", () => {
		render(<TextInput name="test" required label="Required Field" />)
		const input = screen.getByRole("textbox")
		expect(input).toBeRequired()
	})

	it("handles disabled state", () => {
		render(<TextInput name="test" disabled />)
		const input = screen.getByRole("textbox")
		expect(input).toBeDisabled()
	})

	it("handles placeholder prop", () => {
		render(<TextInput name="test" placeholder="Enter text" />)
		const input = screen.getByPlaceholderText("Enter text")
		expect(input).toBeInTheDocument()
	})

	it("handles default size", () => {
		render(<TextInput name="test" />)
		const input = screen.getByRole("textbox")
		expect(input).toBeInTheDocument()
	})

	it("handles custom size", () => {
		render(<TextInput name="test" size="sm" />)
		const input = screen.getByRole("textbox")
		expect(input).toBeInTheDocument()
	})

	it("handles wrapper prop", () => {
		render(<TextInput name="test" wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})
})

