import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Table } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Table.Footer", () => {
	it("renders without error", () => {
		render(
			<Table>
				<Table.Footer>
					<Table.Row>
						<Table.Cell>Footer</Table.Cell>
					</Table.Row>
				</Table.Footer>
			</Table>
		)
		expect(screen.getByText("Footer")).toBeInTheDocument()
	})

	it("renders with multiple cells", () => {
		render(
			<Table>
				<Table.Footer>
					<Table.Row>
						<Table.Cell>Footer 1</Table.Cell>
						<Table.Cell>Footer 2</Table.Cell>
					</Table.Row>
				</Table.Footer>
			</Table>
		)
		expect(screen.getByText("Footer 1")).toBeInTheDocument()
		expect(screen.getByText("Footer 2")).toBeInTheDocument()
	})
})
