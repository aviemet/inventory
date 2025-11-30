import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { AddressFormatter } from "@/components/Formatters/Address"
import { baseAddressFixture, createAddressFixture, minimalAddressFixture } from "@/tests/helpers/fixtures/address"
import { render } from "@/tests/helpers/utils"

describe("AddressFormatter", () => {

	it("renders without error", () => {
		render(<AddressFormatter address={ baseAddressFixture } />)
		expect(screen.getByText("123 Main St")).toBeInTheDocument()
	})

	it("renders address with all fields", () => {
		const { container } = render(<AddressFormatter address={ baseAddressFixture } />)
		expect(screen.getByText("123 Main St")).toBeInTheDocument()
		const addressElement = container.querySelector("address")
		expect(addressElement?.textContent).toContain("123 Main St")
	})

	it("handles address with address_2", () => {
		const addressWithSecondLine = createAddressFixture({ address_2: "Apt 4B" })
		const { container } = render(<AddressFormatter address={ addressWithSecondLine } />)
		const addressElement = container.querySelector("address")
		const addressText = addressElement?.textContent || ""
		expect(addressText).toMatch(/123 Main St|Apt 4B/)
	})

	it("handles address without address_2", () => {
		render(<AddressFormatter address={ baseAddressFixture } />)
		expect(screen.getByText("123 Main St")).toBeInTheDocument()
	})

	it("handles missing optional fields", () => {
		render(<AddressFormatter address={ minimalAddressFixture } />)
		expect(screen.getByText("123 Main St")).toBeInTheDocument()
	})

	it("uses address element", () => {
		const { container } = render(<AddressFormatter address={ baseAddressFixture } />)
		const addressElement = container.querySelector("address")
		expect(addressElement).toBeInTheDocument()
	})
})
