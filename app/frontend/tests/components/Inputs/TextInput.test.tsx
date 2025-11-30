import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import { TextInput } from "@/components/Inputs/TextInput"
import { render } from "@/tests/helpers/utils"

import {
	testCommonInputBehaviors,
	testLabelBehavior,
	testPlaceholderBehavior,
	testRequiredBehavior,
} from "./sharedBehaviors"

describe("TextInput", () => {
	testCommonInputBehaviors({
		component: TextInput,
		defaultProps: { name: "test" },
		getInputElement: () => screen.getByRole("textbox"),
		interactionTest: {
			action: async(input, user) => {
				await user.type(input, "a")
			},
		},
	})

	testLabelBehavior(TextInput, { name: "test" })
	testPlaceholderBehavior(TextInput, { name: "test" })
	testRequiredBehavior(TextInput, { name: "test" }, () => screen.getByRole("textbox"))

	it("handles value prop", () => {
		render(<TextInput name="test" value="Test Value" />)
		const input = screen.getByRole("textbox") as HTMLInputElement
		expect(input.value).toBe("Test Value")
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
		expect(input).toBeInTheDocument()
	})

	it("does not show clear button when readOnly is true", () => {
		render(<TextInput name="test" value="Test" clearable readOnly />)
		const clearButton = screen.queryByRole("button")
		expect(clearButton).not.toBeInTheDocument()
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
})

