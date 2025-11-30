import {
	createPaginationFixture,
	createComponentsFormDataFixture,
	createComponentsEditFixture,
	createComponentsShowFixture,
} from "@/tests/helpers/fixtures"

export const createMockPagination = createPaginationFixture

export const createMockItem = (overrides?: Partial<Schema.Item>): Schema.Item => ({
	id: 1,
	name: "Test Component",
	model_id: 1,
	assigned: false,
	requestable: false,
	cost: { fractional: 10000, currency: "USD" },
	cost_currency: "USD",
	...overrides,
})

export const createMockComponentsFormData = createComponentsFormDataFixture

export const createMockComponentsEdit = createComponentsEditFixture

export const createMockComponentsShow = createComponentsShowFixture
