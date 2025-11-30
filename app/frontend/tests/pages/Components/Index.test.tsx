import { describe, test, expect } from "vitest"

import ComponentsIndex from "@/pages/Components/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockItem,
	createMockPagination,
} from "./helpers"

describe("Components/Index", () => {
	test("renders without error", () => {
		const components = [createMockItem()]
		const pagination = createMockPagination()

		const { container } = render(<ComponentsIndex components={ components } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with multiple components", () => {
		const components = [
			createMockItem({ id: 1, name: "Component 1" }),
			createMockItem({ id: 2, name: "Component 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		const { container } = render(<ComponentsIndex components={ components } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with empty components array", () => {
		const components: Schema.Item[] = []
		const pagination = createMockPagination({ count: 0 })

		const { container } = render(<ComponentsIndex components={ components } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
