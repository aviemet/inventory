import { screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { PasswordInput } from "@/components/Inputs/PasswordInput"
import { render } from "@/tests/helpers/utils"

import {
	testCommonInputBehaviors,
	testPlaceholderBehavior,
	testRequiredBehavior,
} from "./sharedBehaviors"

describe("PasswordInput", () => {
	const getPasswordInput = (result: ReturnType<typeof render>) => {
		const input = result.container.querySelector('input[type="password"]')
		if(!input) {
			throw new Error("Password input not found")
		}
		return input as HTMLElement
	}

	testCommonInputBehaviors({
		component: PasswordInput,
		defaultProps: { name: "test" },
		getInputElement: getPasswordInput,
		interactionTest: {
			action: async(input, user) => {
				await user.type(input, "a")
			},
		},
	})

	it("renders with label when provided", () => {
		render(<PasswordInput name="test" label="Password" />)
		expect(screen.getByText("Password")).toBeInTheDocument()
	})

	testPlaceholderBehavior(PasswordInput, { name: "test" })
	testRequiredBehavior(PasswordInput, { name: "test" }, getPasswordInput)

	it("handles value prop", () => {
		const { container } = render(<PasswordInput name="test" value="password123" onChange={ vi.fn() } />)
		const input = container.querySelector('input[type="password"]') as HTMLInputElement
		expect(input.value).toBe("password123")
	})

	it("handles default size", () => {
		const { container } = render(<PasswordInput name="test" />)
		const input = container.querySelector('input[type="password"]')
		expect(input).toBeInTheDocument()
	})

	it("handles custom size", () => {
		const { container } = render(<PasswordInput name="test" size="sm" />)
		const input = container.querySelector('input[type="password"]')
		expect(input).toBeInTheDocument()
	})
})
