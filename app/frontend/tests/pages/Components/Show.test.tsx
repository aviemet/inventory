import { describe, test, expect, beforeEach } from "vitest"

import ShowComponent from "@/pages/Components/Show"
import { render } from "@/tests/helpers/utils"

import {
	createMockComponentsShow,
} from "./helpers"

describe("Components/Show", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/components/1"
		window.location.pathname = "/components/1"
	})

	test("renders without error", () => {
		const component = createMockComponentsShow()

		expect(() => {
			render(<ShowComponent component={ component } />)
		}).not.toThrow()
	})

	test("renders with component without name", () => {
		const component = createMockComponentsShow({ name: undefined })

		expect(() => {
			render(<ShowComponent component={ component } />)
		}).not.toThrow()
	})

	test("renders with zero available quantity", () => {
		const component = createMockComponentsShow({ qty_available: 0 })

		expect(() => {
			render(<ShowComponent component={ component } />)
		}).not.toThrow()
	})
})
