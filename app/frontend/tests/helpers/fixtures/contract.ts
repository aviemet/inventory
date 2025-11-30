import { createCategoriesOptionsFixture } from "./categoriesOptions"
import { createDepartmentFixture } from "./department"
import { createVendorFixture } from "./vendor"

const contractBase = {
	name: "Test Contract",
	category_id: 1,
	vendor_id: 1,
}

export const baseContractsIndexFixture: Schema.ContractsIndex = {
	...contractBase,
	id: 1,
	slug: "test-contract",
	category: createCategoriesOptionsFixture(),
	department: createDepartmentFixture(),
	vendor: createVendorFixture(),
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createContractsIndexFixture = (overrides?: Partial<Schema.ContractsIndex>): Schema.ContractsIndex => ({
	...baseContractsIndexFixture,
	...overrides,
})

export const baseContractsFormDataFixture: Schema.ContractsFormData = {
	...contractBase,
}

export const createContractsFormDataFixture = (overrides?: Partial<Schema.ContractsFormData>): Schema.ContractsFormData => ({
	...baseContractsFormDataFixture,
	...overrides,
})

export const baseContractsEditFixture: Schema.ContractsEdit = {
	...contractBase,
	id: 1,
	slug: "test-contract",
}

export const createContractsEditFixture = (overrides?: Partial<Schema.ContractsEdit>): Schema.ContractsEdit => ({
	...baseContractsEditFixture,
	...overrides,
})

export const baseContractsShowFixture: Schema.ContractsShow = {
	...contractBase,
	id: 1,
	slug: "test-contract",
	category: createCategoriesOptionsFixture(),
	department: createDepartmentFixture(),
	vendor: createVendorFixture(),
	activities: [],
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createContractsShowFixture = (overrides?: Partial<Schema.ContractsShow>): Schema.ContractsShow => ({
	...baseContractsShowFixture,
	...overrides,
})
