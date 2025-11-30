import { describe, test, expect } from "vitest"

import ContractsIndex from "@/pages/Contracts/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockContractsIndex,
	createMockPagination,
} from "./helpers"

describe("Contracts/Index", () => {
	test("renders without error", () => {
		const contracts = [createMockContractsIndex()]
		const pagination = createMockPagination()

		expect(() => {
			render(<ContractsIndex contracts={ contracts } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with multiple contracts", () => {
		const contracts = [
			createMockContractsIndex({ id: 1, name: "Contract 1" }),
			createMockContractsIndex({ id: 2, name: "Contract 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		expect(() => {
			render(<ContractsIndex contracts={ contracts } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with empty contracts array", () => {
		const contracts: Schema.ContractsIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		expect(() => {
			render(<ContractsIndex contracts={ contracts } pagination={ pagination } />)
		}).not.toThrow()
	})
})
