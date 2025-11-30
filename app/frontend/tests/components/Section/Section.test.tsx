import { screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Section } from "@/components"
import { render } from "@/tests/helpers/utils"

describe("Section", () => {
	it("renders without error", () => {
		render(<Section>Content</Section>)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("renders with fullHeight prop", () => {
		render(<Section fullHeight>Content</Section>)
		expect(screen.getByText("Content")).toBeInTheDocument()
	})

	it("renders as section element", () => {
		render(<Section>Content</Section>)
		const section = screen.getByText("Content").closest("section")
		expect(section).toBeInTheDocument()
	})
})
