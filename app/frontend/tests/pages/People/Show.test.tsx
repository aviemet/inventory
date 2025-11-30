import { describe, test, expect, beforeEach } from "vitest"

import ShowPerson from "@/pages/People/Show"
import { testShowPageTabs } from "@/tests/helpers/testTabs"
import { render } from "@/tests/helpers/utils"

import {
	createMockPeopleShow,
} from "./helpers"

describe("People/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/people/1"
		window.location.pathname = "/people/1"
	})

	test("renders without error", () => {
		const person = createMockPeopleShow()

		const { container } = render(<ShowPerson person={ person } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with person without name", () => {
		const person = createMockPeopleShow({ name: undefined, first_name: "Test", last_name: "User" })

		const { container } = render(<ShowPerson person={ person } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders all tabs and their content", async() => {
		const person = createMockPeopleShow()

		render(<ShowPerson person={ person } />)

		await testShowPageTabs(["Details", "History", "Documentation", "Associations"])
	})
})
