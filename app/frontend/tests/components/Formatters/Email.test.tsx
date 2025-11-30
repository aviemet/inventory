import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { EmailFormatter } from "@/components/Formatters/Email"
import { render } from "@/tests/helpers/utils"

describe("EmailFormatter", () => {
	it("renders without error", () => {
		render(<EmailFormatter>test@example.com</EmailFormatter>)
		expect(screen.getByText("test@example.com")).toBeInTheDocument()
	})

	it("renders email as link by default", () => {
		render(<EmailFormatter>test@example.com</EmailFormatter>)
		const link = screen.getByRole("link")
		expect(link).toHaveAttribute("href", "mailto:test@example.com")
		expect(link).toHaveTextContent("test@example.com")
	})

	it("renders email without link when link is false", () => {
		render(<EmailFormatter link={ false }>test@example.com</EmailFormatter>)
		expect(screen.getByText("test@example.com")).toBeInTheDocument()
		expect(screen.queryByRole("link")).not.toBeInTheDocument()
	})

	it("uses address element", () => {
		const { container } = render(<EmailFormatter>test@example.com</EmailFormatter>)
		const addressElement = container.querySelector("address")
		expect(addressElement).toBeInTheDocument()
		expect(addressElement).toHaveTextContent("test@example.com")
	})

	it("handles various email formats", () => {
		const emails = [
			"user@example.com",
			"test.email+tag@example.co.uk",
			"user123@test-domain.com",
		]

		emails.forEach(email => {
			const { unmount } = render(<EmailFormatter>{ email }</EmailFormatter>)
			expect(screen.getByText(email)).toBeInTheDocument()
			const link = screen.getByRole("link")
			expect(link).toHaveAttribute("href", `mailto:${email}`)
			unmount()
		})
	})
})
