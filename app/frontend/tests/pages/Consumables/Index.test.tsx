import { describe, test, expect } from "vitest"

import ConsumablesIndex from "@/pages/Consumables/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockConsumablesIndex,
	createMockPagination,
} from "./helpers"

describe("Consumables/Index", () => {
	test("renders without error", () => {
		const consumables = [createMockConsumablesIndex()]
		const pagination = createMockPagination()

		expect(() => {
			render(<ConsumablesIndex consumables={ consumables } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with multiple consumables", () => {
		const consumables = [
			createMockConsumablesIndex({ id: 1, name: "Consumable 1" }),
			createMockConsumablesIndex({ id: 2, name: "Consumable 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		expect(() => {
			render(<ConsumablesIndex consumables={ consumables } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with empty consumables array", () => {
		const consumables: Schema.ConsumablesIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		expect(() => {
			render(<ConsumablesIndex consumables={ consumables } pagination={ pagination } />)
		}).not.toThrow()
	})
})
