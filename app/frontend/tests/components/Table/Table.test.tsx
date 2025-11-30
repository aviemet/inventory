import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Table } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Table", () => {
	it("renders without error", () => {
		render(
			<Table>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell>Header</Table.HeadCell>
					</Table.Row>
				</Table.Head>
				<Table.Body>
					<Table.Row>
						<Table.Cell>Cell</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		)
		expect(screen.getByText("Header")).toBeInTheDocument()
		expect(screen.getByText("Cell")).toBeInTheDocument()
	})

	it("renders with fixed prop", () => {
		render(
			<Table fixed>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell>Header</Table.HeadCell>
					</Table.Row>
				</Table.Head>
			</Table>
		)
		expect(screen.getByText("Header")).toBeInTheDocument()
	})

	it("renders with wrapper prop set to false", () => {
		render(
			<Table wrapper={ false }>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell>Header</Table.HeadCell>
					</Table.Row>
				</Table.Head>
			</Table>
		)
		expect(screen.getByText("Header")).toBeInTheDocument()
	})

	it("renders with striped prop", () => {
		render(
			<Table striped>
				<Table.Head>
					<Table.Row>
						<Table.HeadCell>Header</Table.HeadCell>
					</Table.Row>
				</Table.Head>
			</Table>
		)
		expect(screen.getByText("Header")).toBeInTheDocument()
	})
})
