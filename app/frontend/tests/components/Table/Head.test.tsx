import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Table } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Table.Head", () => {
	it("renders without error", () => {
		render(
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell>Header</Table.HeadCell>
					</Table.Row>
				</Table.Head>
			</Table>
		)
		expect(screen.getByText("Header")).toBeInTheDocument()
	})

	it("renders with multiple head cells", () => {
		render(
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell>Header 1</Table.HeadCell>
						<Table.HeadCell>Header 2</Table.HeadCell>
					</Table.Row>
				</Table.Head>
			</Table>
		)
		expect(screen.getByText("Header 1")).toBeInTheDocument()
		expect(screen.getByText("Header 2")).toBeInTheDocument()
	})
})
