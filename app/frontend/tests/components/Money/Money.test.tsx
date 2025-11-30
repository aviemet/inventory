import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Money } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Money", () => {
	it("renders without error with number", () => {
		render(<Money>{ 100 }</Money>)
		expect(screen.getByText(/\$|100/)).toBeInTheDocument()
	})

	it("renders with custom currency", () => {
		render(<Money currency="EUR">{ 100 }</Money>)
		expect(screen.getByText(/100|€/)).toBeInTheDocument()
	})

	it("renders with accounting prop", () => {
		render(<Money accounting>{ 100 }</Money>)
		const content = screen.getByText(/100/)
		expect(content).toBeInTheDocument()
	})

	it("renders with null value", () => {
		render(<Money>{ null }</Money>)
		expect(screen.getByText("$0.00")).toBeInTheDocument()
	})

	it("renders with Money object", () => {
		const moneyValue: Schema.Money = {
			amount: 150,
			currency: "USD",
		}
		render(<Money>{ moneyValue }</Money>)
		expect(screen.getByText(/150/)).toBeInTheDocument()
	})
})
