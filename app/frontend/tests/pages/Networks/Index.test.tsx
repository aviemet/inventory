import { describe, test, expect } from "vitest"

import NetworksIndex from "@/pages/Networks/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockNetworkIndex,
	createMockPagination,
} from "./helpers"

describe("Networks/Index", () => {
	test("renders without error", () => {
		const networks = [createMockNetworkIndex()]
		const pagination = createMockPagination()

		const { container } = render(<NetworksIndex networks={ networks } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with multiple networks", () => {
		const networks = [
			createMockNetworkIndex({ id: 1, name: "Network 1" }),
			createMockNetworkIndex({ id: 2, name: "Network 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		const { container } = render(<NetworksIndex networks={ networks } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with empty networks array", () => {
		const networks: Schema.NetworksIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		const { container } = render(<NetworksIndex networks={ networks } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
