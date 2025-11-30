import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Checkbox } from "@/components/Inputs"
import { render } from "@/tests/helpers/utils"

import {
	testCommonInputBehaviors,
	testLabelBehavior,
	testRequiredBehavior,
} from "./sharedBehaviors"

describe("Checkbox", () => {
	testCommonInputBehaviors({
		component: Checkbox,
		defaultProps: {},
		getInputElement: () => screen.getByRole("checkbox"),
		interactionTest: {
			action: async(checkbox, user) => {
				await user.click(checkbox)
			},
		},
	})

	testLabelBehavior(Checkbox, {})
	testRequiredBehavior(Checkbox, {}, () => screen.getByRole("checkbox"))

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

	it("passes through additional props", () => {
		render(<Checkbox data-testid="custom-checkbox" />)
		expect(screen.getByTestId("custom-checkbox")).toBeInTheDocument()
	})
})

