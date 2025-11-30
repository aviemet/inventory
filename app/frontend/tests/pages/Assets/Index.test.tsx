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

		const { container } = render(<AssetsIndex assets={ assets } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with multiple assets", () => {
		const assets = [
			createMockAssetsIndex({ id: 1, name: "Asset 1" }),
			createMockAssetsIndex({ id: 2, name: "Asset 2" }),
		]
		const pagination = createMockPagination({ count: 2 })

		const { container } = render(<AssetsIndex assets={ assets } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})

	test("renders with empty assets array", () => {
		const assets: Schema.AssetsIndex[] = []
		const pagination = createMockPagination({ count: 0 })

		const { container } = render(<AssetsIndex assets={ assets } pagination={ pagination } />)

		expect(container.firstChild).toBeInTheDocument()
	})
})
