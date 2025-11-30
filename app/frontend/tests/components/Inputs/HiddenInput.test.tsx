import { describe, expect, it } from "vitest"

import { HiddenInput } from "@/components/Inputs/HiddenInput"
import { render } from "@/tests/helpers/utils"

describe("HiddenInput", () => {
	it("renders without error", () => {
		const { container } = render(<HiddenInput name="test" />)
		const input = container.querySelector('input[type="hidden"]')
		expect(input).toBeInTheDocument()
	})

	it("renders with name attribute", () => {
		const { container } = render(<HiddenInput name="test-input" />)
		const input = container.querySelector('input[type="hidden"]')
		expect(input).toHaveAttribute("name", "test-input")
	})

	it("renders with id when provided", () => {
		const { container } = render(<HiddenInput name="test" id="test-id" />)
		const input = container.querySelector('input[type="hidden"]')
		expect(input).toHaveAttribute("id", "test-id")
	})

	it("uses name as id when id is not provided", () => {
		const { container } = render(<HiddenInput name="test-input" />)
		const input = container.querySelector('input[type="hidden"]')
		expect(input).toHaveAttribute("id", "test-input")
	})

	it("handles value prop", () => {
		const { container } = render(<HiddenInput name="test" value="hidden-value" />)
		const input = container.querySelector('input[type="hidden"]') as HTMLInputElement
		expect(input.value).toBe("hidden-value")
	})

	it("handles empty value", () => {
		const { container } = render(<HiddenInput name="test" value="" />)
		const input = container.querySelector('input[type="hidden"]') as HTMLInputElement
		expect(input.value).toBe("")
	})

	it("passes through additional props", () => {
		const { container } = render(<HiddenInput name="test" data-testid="hidden-input" className="custom-class" />)
		const input = container.querySelector('input[type="hidden"]')
		expect(input).toHaveAttribute("data-testid", "hidden-input")
		expect(input).toHaveClass("custom-class")
	})

	it("has type hidden attribute", () => {
		const { container } = render(<HiddenInput name="test" />)
		const input = container.querySelector('input[type="hidden"]')
		expect(input).toHaveAttribute("type", "hidden")
	})
})
