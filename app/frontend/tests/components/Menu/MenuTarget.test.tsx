import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Menu } from "@/components"
import { MenuTarget } from "@/components/Menu/MenuTarget"
import { render } from "@/tests/helpers/utils"

describe("MenuTarget", () => {
	it("renders without error with default icon", () => {
		render(
			<Menu>
				<MenuTarget />
				<Menu.Dropdown>
					<Menu.Item>Item</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		)
		const button = screen.getByRole("button")
		expect(button).toBeInTheDocument()
	})

	it("renders with custom children", () => {
		render(
			<Menu>
				<MenuTarget>
					<button>Custom Target</button>
				</MenuTarget>
				<Menu.Dropdown>
					<Menu.Item>Item</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		)
		expect(screen.getByText("Custom Target")).toBeInTheDocument()
	})

	it("renders with custom icon", () => {
		render(
			<Menu>
				<MenuTarget icon={ <span>Custom Icon</span> } />
				<Menu.Dropdown>
					<Menu.Item>Item</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		)
		expect(screen.getByText("Custom Icon")).toBeInTheDocument()
	})
})
