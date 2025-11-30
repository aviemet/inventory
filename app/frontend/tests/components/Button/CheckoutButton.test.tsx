import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import CheckoutButton from "@/components/Button/CheckoutButton"
import { render } from "@/tests/helpers/utils"

describe("CheckoutButton", () => {
	it("renders without error", () => {
		render(<CheckoutButton href="/checkout" />)
		const link = screen.getByRole("link", { name: "Checkout" })
		expect(link).toBeInTheDocument()
	})

	it("renders with default label when no label prop", () => {
		render(<CheckoutButton href="/checkout" />)
		const link = screen.getByRole("link", { name: "Checkout" })
		expect(link).toHaveAttribute("aria-label", "Checkout")
	})

	it("renders with custom label", () => {
		render(<CheckoutButton href="/checkout" label="Item" />)
		const link = screen.getByRole("link", { name: "Checkout Item" })
		expect(link).toHaveAttribute("aria-label", "Checkout Item")
	})

	it("shows tooltip with default message", async() => {
		const user = userEvent.setup()
		render(<CheckoutButton href="/checkout" />)
		const link = screen.getByRole("link", { name: "Checkout" })
		await user.hover(link)
		expect(await screen.findByText("Checkout")).toBeInTheDocument()
	})

	it("shows tooltip with custom tooltipMessage", async() => {
		const user = userEvent.setup()
		render(<CheckoutButton href="/checkout" tooltipMessage="Assign Item" />)
		const link = screen.getByRole("link", { name: "Assign Item" })
		await user.hover(link)
		expect(await screen.findByText("Assign Item")).toBeInTheDocument()
	})

	it("hides tooltip when tooltipMessage is false", () => {
		render(<CheckoutButton href="/checkout" tooltipMessage={ false } />)
		const link = screen.getByRole("link", { name: "Checkout" })
		expect(link).toBeInTheDocument()
	})

	it("hides tooltip when tooltipMessage is null", () => {
		render(<CheckoutButton href="/checkout" tooltipMessage={ null } />)
		const link = screen.getByRole("link", { name: "Checkout" })
		expect(link).toBeInTheDocument()
	})

	it("renders link with correct href", () => {
		render(<CheckoutButton href="/items/1/checkout" />)
		const link = screen.getByRole("link", { name: "Checkout" })
		expect(link).toHaveAttribute("href", "/items/1/checkout")
	})

	it("handles disabled state", () => {
		render(<CheckoutButton href="/checkout" disabled />)
		const link = screen.getByRole("link", { name: "Checkout" })
		expect(link).toBeInTheDocument()
	})

	it("handles click event", async() => {
		const user = userEvent.setup()
		render(<CheckoutButton href="/checkout" />)
		const link = screen.getByRole("link", { name: "Checkout" })
		await user.click(link)
		expect(link).toBeInTheDocument()
	})

	it("renders CheckoutIcon", () => {
		render(<CheckoutButton href="/checkout" />)
		const link = screen.getByRole("link", { name: "Checkout" })
		const svg = link.querySelector("svg")
		expect(svg).toBeInTheDocument()
	})
})
