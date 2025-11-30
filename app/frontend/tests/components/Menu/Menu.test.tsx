import { screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"

import { Menu } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Menu", () => {
	it("renders without error", () => {
		render(
			<Menu>
				<Menu.Target>
					<button>Open</button>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item>Item 1</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		)
		expect(screen.getByText("Open")).toBeInTheDocument()
	})

	it("renders with children", () => {
		render(
			<Menu>
				<Menu.Target>
					<button>Open</button>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item>Item 1</Menu.Item>
					<Menu.Item>Item 2</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		)
		expect(screen.getByText("Open")).toBeInTheDocument()
	})

	it("opens dropdown when target is clicked", async() => {
		const user = userEvent.setup()
		render(
			<Menu>
				<Menu.Target>
					<button>Open</button>
				</Menu.Target>
				<Menu.Dropdown>
					<Menu.Item>Item 1</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		)
		const target = screen.getByText("Open")
		await user.click(target)
		await waitFor(() => {
			expect(screen.getByText("Item 1")).toBeInTheDocument()
		})
	})
})
