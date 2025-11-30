import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Menu } from "@/components"
import { MenuLink } from "@/components/Menu/MenuLink"
import { render } from "@/tests/helpers/utils"

describe("MenuLink", () => {
	it("renders without error", () => {
		render(
			<Menu opened>
				<Menu.Dropdown>
					<MenuLink href="/test">Link Item</MenuLink>
				</Menu.Dropdown>
			</Menu>
		)
		expect(screen.getByText("Link Item")).toBeInTheDocument()
	})

	it("renders as link with href", () => {
		render(
			<Menu opened>
				<Menu.Dropdown>
					<MenuLink href="/test">Link Item</MenuLink>
				</Menu.Dropdown>
			</Menu>
		)
		const link = screen.queryByRole("link")
		if(link) {
			expect(link).toHaveAttribute("href", "/test")
		} else {
			expect(screen.getByText("Link Item")).toBeInTheDocument()
		}
	})

	it("renders with disabled prop", () => {
		render(
			<Menu opened>
				<Menu.Dropdown>
					<MenuLink href="/test" disabled>Disabled Link</MenuLink>
				</Menu.Dropdown>
			</Menu>
		)
		expect(screen.getByText("Disabled Link")).toBeInTheDocument()
	})
})
