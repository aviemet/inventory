import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Menu } from "@/components"
import { MenuItem } from "@/components/Menu/MenuItem"
import { render } from "@/tests/helpers/utils"

describe("MenuItem", () => {
	it("renders without error", () => {
		render(
			<Menu opened>
				<Menu.Dropdown>
					<MenuItem>Item 1</MenuItem>
				</Menu.Dropdown>
			</Menu>
		)
		expect(screen.getByText("Item 1")).toBeInTheDocument()
	})

	it("renders with disabled prop", () => {
		render(
			<Menu opened>
				<Menu.Dropdown>
					<MenuItem disabled>Disabled Item</MenuItem>
				</Menu.Dropdown>
			</Menu>
		)
		expect(screen.getByText("Disabled Item")).toBeInTheDocument()
	})
})
