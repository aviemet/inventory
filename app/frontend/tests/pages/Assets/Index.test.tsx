import { describe, test, expect } from "vitest"

import AssetsIndex from "@/pages/Assets/Index"
import { render } from "@/tests/helpers/utils"

import {
	createMockAssetsIndex,
	createMockPagination,
} from "./helpers"

describe("Assets/Index", () => {
	test("renders without error", () => {
		const assets = [createMockAssetsIndex()]
		const pagination = createMockPagination()

		expect(() => {
			render(<AssetsIndex assets={ assets } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with multiple assets", () => {
		const assets = [
			createMockAssetsIndex({ id: 1, name: "Asset 1" }),
			createMockAssetsIndex({ id: 2, name: "Asset 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		expect(() => {
			render(<AssetsIndex assets={ assets } pagination={ pagination } />)
		}).not.toThrow()
	})

	test("renders with empty assets array", () => {
		const assets: Schema.AssetsIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		expect(() => {
			render(<AssetsIndex assets={ assets } pagination={ pagination } />)
		}).not.toThrow()
	})
})
