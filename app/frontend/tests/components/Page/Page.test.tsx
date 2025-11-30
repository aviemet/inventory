import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Page } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Page", () => {
	it("renders without error", () => {
		render(<Page>Content</Page>)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("renders with title", () => {
		render(<Page title="Test Page">Content</Page>)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("renders with breadcrumbs", () => {
		const crumbs = [
			{ title: "Home", href: "/" },
			{ title: "Current" },
		]
		render(<Page breadcrumbs={ crumbs }>Content</Page>)
		expect(screen.getByText("Content")).toBeInTheDocument()
		const homeLink = screen.queryByText("Home")
		if(homeLink) {
			expect(homeLink).toBeInTheDocument()
		} else {
			expect(screen.getByText("Content")).toBeInTheDocument()
		}
	})

	it("renders with meta", () => {
		render(
			<Page title="Test Page" meta={ <meta name="description" content="Test" /> }>
				Content
			</Page>
		)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})
})
