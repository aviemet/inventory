import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import EditButton from "@/components/Button/EditButton"
import { render } from "@/tests/helpers/utils"

describe("EditButton", () => {
	it("renders without error", () => {
		render(<EditButton href="/edit" />)
		const link = screen.getByRole("link")
		expect(link).toBeInTheDocument()
	})

	it("renders with default label when no label prop", () => {
		render(<EditButton href="/edit" />)
		const link = screen.getByRole("link")
		expect(link).toHaveAttribute("aria-label", "Edit undefined")
	})

	it("renders with custom label", () => {
		render(<EditButton href="/edit" label="User" />)
		const link = screen.getByRole("link")
		expect(link).toHaveAttribute("aria-label", "Edit User")
	})

	it("shows tooltip with default label", async() => {
		const user = userEvent.setup()
		render(<EditButton href="/edit" />)
		const link = screen.getByRole("link")
		await user.hover(link)
		expect(await screen.findByText("Edit")).toBeInTheDocument()
	})

	it("shows tooltip with custom label", async() => {
		const user = userEvent.setup()
		render(<EditButton href="/edit" label="Item" />)
		const link = screen.getByRole("link")
		await user.hover(link)
		expect(await screen.findByText("Edit Item")).toBeInTheDocument()
	})

	it("renders link with correct href", () => {
		render(<EditButton href="/users/1/edit" />)
		const link = screen.getByRole("link")
		expect(link).toHaveAttribute("href", "/users/1/edit")
	})

	it("handles click event", async() => {
		const user = userEvent.setup()
		render(<EditButton href="/edit" />)
		const link = screen.getByRole("link")
		await user.click(link)
		expect(link).toBeInTheDocument()
	})

	it("renders EditIcon", () => {
		render(<EditButton href="/edit" />)
		const link = screen.getByRole("link")
		const svg = link.querySelector("svg")
		expect(svg).toBeInTheDocument()
	})
})

