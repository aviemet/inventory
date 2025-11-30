import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { NumberInput } from "@/components/Inputs/NumberInput"
import { render } from "@/tests/helpers/utils"

import {
	testCommonInputBehaviors,
	testLabelBehavior,
	testPlaceholderBehavior,
	testRequiredBehavior,
} from "./sharedBehaviors"

describe("NumberInput", () => {
	testCommonInputBehaviors({
		component: NumberInput,
		defaultProps: { name: "test" },
		getInputElement: () => screen.getByRole("textbox"),
		interactionTest: {
			action: async(input, user) => {
				await user.type(input, "5")
			},
		},
	})

	testLabelBehavior(NumberInput, { name: "test" })
	testPlaceholderBehavior(NumberInput, { name: "test" })
	testRequiredBehavior(NumberInput, { name: "test" }, () => screen.getByRole("textbox"))

	it("handles value prop", () => {
		render(<NumberInput name="test" value={ 42 } />)
		const input = screen.getByRole("textbox") as HTMLInputElement
		expect(input.value).toBe("42")
	})

	it("handles default size", () => {
		render(<NumberInput name="test" />)
		const input = screen.getByRole("textbox")
		expect(input).toBeInTheDocument()
	})

	it("handles custom size", () => {
		render(<NumberInput name="test" size="sm" />)
		const input = screen.getByRole("textbox")
		expect(input).toBeInTheDocument()
	})
})
