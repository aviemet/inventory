import { describe, test, expect, beforeEach } from "vitest"

import NewConsumable from "@/pages/Consumables/New"
import { render } from "@/tests/helpers/utils"

import {
	createMockConsumablesFormData,
} from "./helpers"

describe("Consumables/New", () => {
	beforeEach(() => {
		window.location.href = "http://localhost:3000/consumables/new"
		window.location.pathname = "/consumables/new"
	})

	test("renders without error", () => {
		const consumable = createMockConsumablesFormData()

		const { container } = render(<NewConsumable consumable={ consumable } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
