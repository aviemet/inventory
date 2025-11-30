import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Tabs } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Tabs", () => {
	it("renders without error", () => {
		render(
			<Tabs defaultValue="tab1">
				<Tabs.List>
					<Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
					<Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
				<Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
			</Tabs>
		)
		expect(screen.getByText("Tab 1")).toBeInTheDocument()
		expect(screen.getByText("Panel 1")).toBeInTheDocument()
	})

	it("renders with urlControlled prop", () => {
		render(
			<Tabs urlControlled defaultValue="tab1">
				<Tabs.List>
					<Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
			</Tabs>
		)
		expect(screen.getByText("Tab 1")).toBeInTheDocument()
	})

	it("renders multiple tabs", () => {
		render(
			<Tabs defaultValue="tab1">
				<Tabs.List>
					<Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
					<Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
					<Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
				</Tabs.List>
				<Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
				<Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
				<Tabs.Panel value="tab3">Panel 3</Tabs.Panel>
			</Tabs>
		)
		expect(screen.getByText("Tab 1")).toBeInTheDocument()
		expect(screen.getByText("Tab 2")).toBeInTheDocument()
		expect(screen.getByText("Tab 3")).toBeInTheDocument()
	})
})
