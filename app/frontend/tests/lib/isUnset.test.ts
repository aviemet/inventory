import { describe, expect, test } from "vitest"

import { isUnset } from "@/lib"

describe("isUnset", () => {
	test("returns true for empty values", () => {
		const truths = [undefined, "", [], null, {}]
		truths.forEach(truth => {
			expect(isUnset(truth)).toBe(true)
		})
	})

	test("returns false for non-empty values", () => {
		const falsies = ["hi", 0, 10, - 345, ["filled"], [0], [10], { with: "values" }]
		falsies.forEach(falsy => {
			expect(isUnset(falsy)).toBe(false)
		})
	})
})
