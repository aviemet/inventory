import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Tile } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Tile", () => {
	it("renders without error", () => {
		render(<Tile>Content</Tile>)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("renders with Content subcomponent", () => {
		render(
			<Tile>
				<Tile.Content>Content</Tile.Content>
			</Tile>
		)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("renders with Footer subcomponent", () => {
		render(
			<Tile>
				<Tile.Content>Content</Tile.Content>
				<Tile.Footer>Footer</Tile.Footer>
			</Tile>
		)
		expect(screen.getByText("Content")).toBeInTheDocument()
		expect(screen.getByText("Footer")).toBeInTheDocument()
	})

	it("renders with HoverLink subcomponent", () => {
		render(
			<Tile>
				<Tile.HoverLink href="/test">Link</Tile.HoverLink>
			</Tile>
		)
		expect(screen.getByText("Link")).toBeInTheDocument()
	})
})
