import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { CheckinButton } from "@/components/Button"
import { render } from "@/tests/helpers/utils"

describe("CheckinButton", () => {
	it("renders without error", () => {
		render(<CheckinButton href="/checkin" />)
		const link = screen.getByRole("link", { name: "Check In" })
		expect(link).toBeInTheDocument()
	})

	it("renders with default label when no label prop", () => {
		render(<CheckinButton href="/checkin" />)
		const link = screen.getByRole("link", { name: "Check In" })
		expect(link).toHaveAttribute("aria-label", "Check In")
	})

	it("renders with custom label", () => {
		render(<CheckinButton href="/checkin" label="Item" />)
		const link = screen.getByRole("link", { name: "Check In Item" })
		expect(link).toHaveAttribute("aria-label", "Check In Item")
	})

	it("shows tooltip with default message", async() => {
		const user = userEvent.setup()
		render(<CheckinButton href="/checkin" />)
		const link = screen.getByRole("link", { name: "Check In" })
		await user.hover(link)
		expect(await screen.findByText("Check In")).toBeInTheDocument()
	})

	it("shows tooltip with custom tooltipMessage", async() => {
		const user = userEvent.setup()
		render(<CheckinButton href="/checkin" tooltipMessage="Return Item" />)
		const link = screen.getByRole("link", { name: "Return Item" })
		await user.hover(link)
		expect(await screen.findByText("Return Item")).toBeInTheDocument()
	})

	it("hides tooltip when tooltipMessage is false", () => {
		render(<CheckinButton href="/checkin" tooltipMessage={ false } />)
		const link = screen.getByRole("link", { name: "Check In" })
		expect(link).toBeInTheDocument()
	})

	it("hides tooltip when tooltipMessage is null", () => {
		render(<CheckinButton href="/checkin" tooltipMessage={ null } />)
		const link = screen.getByRole("link", { name: "Check In" })
		expect(link).toBeInTheDocument()
	})

	it("renders link with correct href", () => {
		render(<CheckinButton href="/items/1/checkin" />)
		const link = screen.getByRole("link", { name: "Check In" })
		expect(link).toHaveAttribute("href", "/items/1/checkin")
	})

	it("handles disabled state", () => {
		render(<CheckinButton href="/checkin" disabled />)
		const link = screen.getByRole("link", { name: "Check In" })
		expect(link).toBeInTheDocument()
	})

	it("handles click event", async() => {
		const user = userEvent.setup()
		render(<CheckinButton href="/checkin" />)
		const link = screen.getByRole("link", { name: "Check In" })
		await user.click(link)
		expect(link).toBeInTheDocument()
	})

	it("renders CheckinIcon", () => {
		render(<CheckinButton href="/checkin" />)
		const link = screen.getByRole("link", { name: "Check In" })
		const svg = link.querySelector("svg")
		expect(svg).toBeInTheDocument()
	})
})

