import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Table } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Table.Row", () => {
	it("renders without error", () => {
		render(
			<Table>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Cell</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)
		expect(screen.getByText("Cell")).toBeInTheDocument()
	})

	it("renders with multiple cells", () => {
		render(
			<Table>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Cell 1</Table.Cell>
						<Table.Cell>Cell 2</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)
		expect(screen.getByText("Cell 1")).toBeInTheDocument()
		expect(screen.getByText("Cell 2")).toBeInTheDocument()
	})
})
