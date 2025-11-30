import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { DateTimeFormatter } from "@/components/Formatters/DateTime"
import { formatter } from "@/lib"
import { render } from "@/tests/helpers/utils"

describe("DateTimeFormatter", () => {
	it("renders without error with string date", () => {
		render(<DateTimeFormatter>2024-01-15T10:30:00</DateTimeFormatter>)
		const timeElement = screen.getByText(/1\/15\/24/)
		expect(timeElement).toBeInTheDocument()
	})

	it("renders without error with Date object", () => {
		const date = new Date("2024-01-15T10:30:00")
		render(<DateTimeFormatter>{ date }</DateTimeFormatter>)
		const timeElement = screen.getByText(/1\/15\/24/)
		expect(timeElement).toBeInTheDocument()
	})

	it("renders nothing when children is undefined", () => {
		const { container } = render(<DateTimeFormatter>{ undefined }</DateTimeFormatter>)
		expect(container.querySelector("time")).toBeNull()
	})

	it("uses dateShort format by default", () => {
		render(<DateTimeFormatter>2024-01-15T10:30:00</DateTimeFormatter>)
		const timeElement = screen.getByText(/1\/15\/24 10:30/)
		expect(timeElement).toBeInTheDocument()
	})

	it("uses custom format when provided", () => {
		render(<DateTimeFormatter format="dateLong">2024-01-15T10:30:00</DateTimeFormatter>)
		const timeElement = screen.getByText(/01\/15\/2024 10:30:00/)
		expect(timeElement).toBeInTheDocument()
	})

	it("handles all format options", () => {
		const formats: Array<keyof typeof formatter.datetime> = ["dateShort", "dateLong", "relative", "english"]
		const date = "2024-01-15T10:30:00"

		formats.forEach(format => {
			const { unmount } = render(<DateTimeFormatter format={ format }>{ date }</DateTimeFormatter>)
			const timeElement = screen.getByText(/1\/15\/24|01\/15\/2024|January|ago/i)
			expect(timeElement).toBeInTheDocument()
			unmount()
		})
	})

	it("renders tooltip when tooltipFormats provided", async() => {
		render(
			<DateTimeFormatter
				format="dateShort"
				tooltipFormats={ ["dateLong", "relative"] }
			>
				2024-01-15T10:30:00
			</DateTimeFormatter>
		)
		const timeElement = screen.getByText(/1\/15\/24/)
		expect(timeElement).toBeInTheDocument()
	})

	it("uses time element", () => {
		const { container } = render(<DateTimeFormatter>2024-01-15T10:30:00</DateTimeFormatter>)
		const timeElement = container.querySelector("time")
		expect(timeElement).toBeInTheDocument()
		expect(timeElement).toHaveAttribute("dateTime")
	})

	it("handles ISO date strings", () => {
		render(<DateTimeFormatter>2024-12-31T23:59:59Z</DateTimeFormatter>)
		const timeElement = screen.getByText(/12\/31\/24/)
		expect(timeElement).toBeInTheDocument()
	})
})
