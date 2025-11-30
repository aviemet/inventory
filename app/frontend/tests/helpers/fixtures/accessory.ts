import { createCategoryFixture } from "./category"
import { createCompanyFixture } from "./company"
import { createDepartmentFixture } from "./department"
import { createLocationFixture } from "./location"
import { createLocationsOptionsFixture } from "./locationsOptions"
import { createManufacturerFixture } from "./manufacturer"
import { createModelFixture } from "./model"
import { createModelsOptionsFixture } from "./modelsOptions"
import { createPurchaseFixture } from "./purchase"
import { createSchemaMoneyFixture } from "./schemaMoney"
import { createStatusLabelFixture } from "./statusLabel"
import { createVendorFixture } from "./vendor"
import { createVendorsOptionsFixture } from "./vendorsOptions"

const accessoryBase = {
	id: 1,
	name: "Test Accessory",
	model_id: 1,
	qty_available: 10,
	requestable: false,
	cost: createSchemaMoneyFixture(),
	cost_currency: "USD",
	category: createCategoryFixture(),
	manufacturer: createManufacturerFixture(),
	status_label: createStatusLabelFixture(),
}

export const baseAccessoriesIndexFixture: Schema.AccessoriesIndex = {
	...accessoryBase,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	company: createCompanyFixture(),
	default_location: createLocationFixture(),
	department: createDepartmentFixture(),
	model: createModelFixture(),
	vendor: createVendorFixture(),
	activities: [],
	assignments: [],
	documentations: [],
	purchase: createPurchaseFixture(),
}

export const createAccessoriesIndexFixture = (overrides?: Partial<Schema.AccessoriesIndex>): Schema.AccessoriesIndex => ({
	...baseAccessoriesIndexFixture,
	...overrides,
})

export const baseAccessoriesFormDataFixture: Schema.AccessoriesFormData = {
	...accessoryBase,
	default_location: createLocationsOptionsFixture(),
	model: createModelsOptionsFixture(),
	vendor: createVendorsOptionsFixture(),
}

export const createAccessoriesFormDataFixture = (overrides?: Partial<Schema.AccessoriesFormData>): Schema.AccessoriesFormData => ({
	...baseAccessoriesFormDataFixture,
	...overrides,
})

export const baseAccessoriesEditFixture: Schema.AccessoriesEdit = {
	...accessoryBase,
	default_location: createLocationsOptionsFixture(),
	model: createModelsOptionsFixture(),
	vendor: createVendorsOptionsFixture(),
}

export const createAccessoriesEditFixture = (overrides?: Partial<Schema.AccessoriesEdit>): Schema.AccessoriesEdit => ({
	...baseAccessoriesEditFixture,
	...overrides,
})

export const baseAccessoriesShowFixture: Schema.AccessoriesShow = {
	...accessoryBase,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	company: createCompanyFixture(),
	default_location: createLocationFixture(),
	department: createDepartmentFixture(),
	model: createModelFixture(),
	vendor: createVendorFixture(),
	activities: [],
	assignments: [],
	documentations: [],
	purchase: createPurchaseFixture(),
}

export const createAccessoriesShowFixture = (overrides?: Partial<Schema.AccessoriesShow>): Schema.AccessoriesShow => ({
	...baseAccessoriesShowFixture,
	...overrides,
})
