import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Table } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Table.Cell", () => {
	it("renders without error", () => {
		render(
			<Table>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Cell Content</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)
		expect(screen.getByText("Cell Content")).toBeInTheDocument()
	})

	it("renders with sort prop", () => {
		render(
			<Table>
				<Table.Body>
					<Table.Row>
						<Table.Cell sort="name">Cell</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)
		expect(screen.getByText("Cell")).toBeInTheDocument()
	})

	it("renders with hideable prop", () => {
		render(
			<Table>
				<Table.Body>
					<Table.Row>
						<Table.Cell hideable="name">Cell</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)
		expect(screen.getByText("Cell")).toBeInTheDocument()
	})

	it("renders with nowrap prop", () => {
		render(
			<Table>
				<Table.Body>
					<Table.Row>
						<Table.Cell nowrap>Cell</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)
		expect(screen.getByText("Cell")).toBeInTheDocument()
	})
})
