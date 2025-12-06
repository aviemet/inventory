import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Table } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Table.HeadCell", () => {
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

})
