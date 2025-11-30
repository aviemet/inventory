import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { CurrencyFormatter } from "@/components/Formatters/Currency"
import { render } from "@/tests/helpers/utils"

describe("CurrencyFormatter", () => {
	it("renders without error with number", () => {
		render(<CurrencyFormatter>{ 100 }</CurrencyFormatter>)
		expect(screen.getByText(/\$100/)).toBeInTheDocument()
	})

	it("renders without error with Money object", () => {
		const money = {
			amount: 100,
			cents: 10000,
			currency_iso: "USD",
		}
		render(<CurrencyFormatter>{ money }</CurrencyFormatter>)
		expect(screen.getByText(/\$100/)).toBeInTheDocument()
	})

	it("renders zero when children is null", () => {
		render(<CurrencyFormatter>{ null }</CurrencyFormatter>)
		expect(screen.getByText(/\$0/)).toBeInTheDocument()
	})

	it("uses default currency USD", () => {
		render(<CurrencyFormatter>{ 100 }</CurrencyFormatter>)
		expect(screen.getByText(/\$100/)).toBeInTheDocument()
	})

	it("uses custom currency", () => {
		render(<CurrencyFormatter currency="EUR">{ 100 }</CurrencyFormatter>)
		expect(screen.getByText(/€|EUR/)).toBeInTheDocument()
	})

	it("handles zero value", () => {
		render(<CurrencyFormatter>{ 0 }</CurrencyFormatter>)
		expect(screen.getByText(/\$0/)).toBeInTheDocument()
	})

	it("handles negative values", () => {
		render(<CurrencyFormatter>{ - 50 }</CurrencyFormatter>)
		expect(screen.getByText(/-?\$50/)).toBeInTheDocument()
	})

	it("handles decimal values", () => {
		render(<CurrencyFormatter>{ 99.99 }</CurrencyFormatter>)
		expect(screen.getByText(/\$99\.99/)).toBeInTheDocument()
	})

	it("handles accounting format", () => {
		render(<CurrencyFormatter accounting={ true }>{ - 50 }</CurrencyFormatter>)
		const text = screen.getByText(/\(50\)|50/)
		expect(text).toBeInTheDocument()
	})

	it("handles custom locale", () => {
		render(<CurrencyFormatter locale="de-DE" currency="EUR">{ 100 }</CurrencyFormatter>)
		expect(screen.getByText(/€|EUR/)).toBeInTheDocument()
	})
})
