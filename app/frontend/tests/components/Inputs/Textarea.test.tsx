import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import Textarea from "@/components/Inputs/Textarea"
import { render } from "@/tests/helpers/utils"

describe("Textarea", () => {
	it("renders without error", () => {
		render(<Textarea name="test" />)
		const textarea = screen.getByRole("textbox")
		expect(textarea).toBeInTheDocument()
	})

	it("renders with label when provided", () => {
		render(<Textarea name="test" label="Test Label" />)
		expect(screen.getByLabelText("Test Label")).toBeInTheDocument()
	})

	it("renders with id when provided", () => {
		render(<Textarea name="test" id="test-textarea" />)
		const textarea = screen.getByRole("textbox")
		expect(textarea).toHaveAttribute("id", "test-textarea")
	})

	it("uses name as id when id is not provided", () => {
		render(<Textarea name="test-textarea" />)
		const textarea = screen.getByRole("textbox")
		expect(textarea).toHaveAttribute("id", "test-textarea")
		expect(textarea).toHaveAttribute("name", "test-textarea")
	})

	it("handles value prop", () => {
		render(<Textarea name="test" defaultValue="Test Value" />)
		const textarea = screen.getByRole("textbox") as HTMLTextAreaElement
		expect(textarea.value).toBe("Test Value")
	})

	it("handles onChange callback", async() => {
		const user = userEvent.setup()
		const onChange = vi.fn()
		render(<Textarea name="test" onChange={ onChange } />)
		const textarea = screen.getByRole("textbox")
		await user.type(textarea, "a")
		expect(onChange).toHaveBeenCalled()
	})

	it("handles required prop", () => {
		render(<Textarea name="test" required label="Required Field" />)
		const textarea = screen.getByRole("textbox")
		expect(textarea).toBeRequired()
	})

	it("handles disabled state", () => {
		render(<Textarea name="test" disabled />)
		const textarea = screen.getByRole("textbox")
		expect(textarea).toBeDisabled()
	})

	it("handles placeholder prop", () => {
		render(<Textarea name="test" placeholder="Enter text" />)
		const textarea = screen.getByPlaceholderText("Enter text")
		expect(textarea).toBeInTheDocument()
	})

	it("handles readOnly prop", () => {
		render(<Textarea name="test" readOnly />)
		const textarea = screen.getByRole("textbox")
		expect(textarea).toHaveAttribute("readonly")
	})

	it("handles rows prop", () => {
		render(<Textarea name="test" rows={ 5 } />)
		const textarea = screen.getByRole("textbox") as HTMLTextAreaElement
		expect(textarea).toHaveAttribute("rows", "5")
	})

	it("handles wrapper prop", () => {
		render(<Textarea name="test" wrapper={ true } wrapperProps={ { "data-testid": "wrapper" } } />)
		expect(screen.getByTestId("wrapper")).toBeInTheDocument()
	})

	it("handles wrapperProps", () => {
		render(<Textarea name="test" wrapperProps={ { "data-testid": "wrapper", "data-custom": "value" } } />)
		const wrapper = screen.getByTestId("wrapper")
		expect(wrapper).toHaveAttribute("data-custom", "value")
	})
})

