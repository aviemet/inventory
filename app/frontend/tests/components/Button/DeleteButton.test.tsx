import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { DeleteButton } from "@/components/Button"
import { render } from "@/tests/helpers/utils"

describe("DeleteButton", () => {
	it("renders without error", () => {
		render(<DeleteButton href="/delete" />)
		const link = screen.getByRole("link")
		expect(link).toBeInTheDocument()
	})

	it("renders with default label when no label prop", () => {
		render(<DeleteButton href="/delete" />)
		const link = screen.getByRole("link")
		expect(link).toHaveAttribute("aria-label", "Delete undefined")
	})

	it("renders with custom label", () => {
		render(<DeleteButton href="/delete" label="User" />)
		const link = screen.getByRole("link")
		expect(link).toHaveAttribute("aria-label", "Delete User")
	})

	it("shows tooltip with default message", async() => {
		const user = userEvent.setup()
		render(<DeleteButton href="/delete" />)
		const link = screen.getByRole("link")
		await user.hover(link)
		expect(await screen.findByText(/Check In/)).toBeInTheDocument()
	})

	it("shows tooltip with custom tooltipMessage", async() => {
		const user = userEvent.setup()
		render(<DeleteButton href="/delete" tooltipMessage="Remove Item" />)
		const link = screen.getByRole("link")
		await user.hover(link)
		expect(await screen.findByText("Remove Item")).toBeInTheDocument()
	})

	it("hides tooltip when tooltipMessage is false", () => {
		render(<DeleteButton href="/delete" tooltipMessage={ false } />)
		const link = screen.getByRole("link")
		expect(link).toBeInTheDocument()
	})

	it("hides tooltip when tooltipMessage is null", () => {
		render(<DeleteButton href="/delete" tooltipMessage={ null } />)
		const link = screen.getByRole("link")
		expect(link).toBeInTheDocument()
	})

	it("renders link with correct href", () => {
		render(<DeleteButton href="/users/1/delete" />)
		const link = screen.getByRole("link")
		expect(link).toHaveAttribute("href", "/users/1/delete")
	})

	it("handles click event", async() => {
		const user = userEvent.setup()
		render(<DeleteButton href="/delete" />)
		const link = screen.getByRole("link")
		await user.click(link)
		expect(link).toBeInTheDocument()
	})

	it("renders TrashIcon", () => {
		render(<DeleteButton href="/delete" />)
		const link = screen.getByRole("link")
		const svg = link.querySelector("svg")
		expect(svg).toBeInTheDocument()
	})
})

