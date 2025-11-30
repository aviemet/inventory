import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { PhoneFormatter } from "@/components/Formatters/PhoneNumber"
import { render } from "@/tests/helpers/utils"

describe("PhoneFormatter", () => {
	it("renders without error", () => {
		render(<PhoneFormatter>5551234567</PhoneFormatter>)
		expect(screen.getByRole("link")).toBeInTheDocument()
	})

	it("renders phone number as link", () => {
		render(<PhoneFormatter>5551234567</PhoneFormatter>)
		const link = screen.getByRole("link")
		expect(link).toHaveAttribute("href", "tel:+15551234567")
	})

	it("uses NATIONAL format by default", () => {
		render(<PhoneFormatter>5551234567</PhoneFormatter>)
		const link = screen.getByRole("link")
		expect(link).toHaveTextContent(/(\d{3})?\s*\d{3}[-.\s]?\d{4}/)
	})

	it("uses custom format when provided", () => {
		render(<PhoneFormatter format="INTERNATIONAL">5551234567</PhoneFormatter>)
		const link = screen.getByRole("link")
		expect(link).toBeInTheDocument()
	})

	it("handles various phone number formats", () => {
		const phoneNumbers = [
			"5551234567",
			"(555) 123-4567",
			"555-123-4567",
			"15551234567",
		]

		phoneNumbers.forEach(phone => {
			const { unmount } = render(<PhoneFormatter>{ phone }</PhoneFormatter>)
			const link = screen.getByRole("link")
			expect(link).toBeInTheDocument()
			expect(link).toHaveAttribute("href", expect.stringContaining("tel:"))
			unmount()
		})
	})

	it("handles E164 format", () => {
		render(<PhoneFormatter format="E164">5551234567</PhoneFormatter>)
		const link = screen.getByRole("link")
		expect(link).toBeInTheDocument()
	})

	it("handles RFC3966 format", () => {
		render(<PhoneFormatter format="RFC3966">5551234567</PhoneFormatter>)
		const link = screen.getByRole("link")
		expect(link).toBeInTheDocument()
	})
})
