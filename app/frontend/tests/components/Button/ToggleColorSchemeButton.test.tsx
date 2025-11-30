import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { ToggleColorSchemeButton } from "@/components/Button"
import { render } from "@/tests/helpers/utils"

describe("ToggleColorSchemeButton", () => {
	it("renders without error", () => {
		render(<ToggleColorSchemeButton />)
		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	it("renders with aria-label", () => {
		render(<ToggleColorSchemeButton />)
		const button = screen.getByRole("button")
		expect(button).toHaveAttribute("aria-label")
	})

	it("handles click event", async() => {
		const user = userEvent.setup()
		render(<ToggleColorSchemeButton />)
		const button = screen.getByRole("button")
		await user.click(button)
		expect(button).toBeInTheDocument()
	})

	it("renders icon", () => {
		render(<ToggleColorSchemeButton />)
		const button = screen.getByRole("button")
		const svg = button.querySelector("svg")
		expect(svg).toBeInTheDocument()
	})
})
