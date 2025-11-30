import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Table } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Table.Section", () => {
	it("renders without error", () => {
		render(
			<Table.Section>
				<Table>
					<Table.Head>
						<Table.Row>
							<Table.HeadCell>Header</Table.HeadCell>
						</Table.Row>
					</Table.Head>
				</Table>
			</Table.Section>
		)
		expect(screen.getByText("Header")).toBeInTheDocument()
	})

	it("renders with children", () => {
		render(
			<Table.Section>
				<div>Content</div>
			</Table.Section>
		)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})
})
