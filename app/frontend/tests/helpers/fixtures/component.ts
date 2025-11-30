import { createCategoriesBasicFixture } from "./categoriesBasic"
import { createCategoryFixture } from "./category"
import { createDepartmentFixture } from "./department"
import { createDepartmentsBasicFixture } from "./departmentsBasic"
import { createLocationsBasicFixture } from "./locationsBasic"
import { createLocationsOptionsFixture } from "./locationsOptions"
import { createManufacturerFixture } from "./manufacturer"
import { createManufacturersBasicFixture } from "./manufacturersBasic"
import { createModelFixture } from "./model"
import { createModelsBasicFixture } from "./modelsBasic"
import { createModelsOptionsFixture } from "./modelsOptions"
import { createPurchaseFixture } from "./purchase"
import { createSchemaMoneyFixture } from "./schemaMoney"
import { createStatusLabelsOptionsFixture } from "./statusLabelsOptions"
import { createVendorFixture } from "./vendor"
import { createVendorsBasicFixture } from "./vendorsBasic"
import { createVendorsOptionsFixture } from "./vendorsOptions"

const componentBase = {
	id: 1,
	name: "Test Component",
	model_id: 1,
	qty_available: 10,
	requestable: false,
	cost: createSchemaMoneyFixture(),
	cost_currency: "USD",
}

export const baseComponentsIndexFixture: Schema.ComponentsIndex = {
	...componentBase,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	category: createCategoryFixture(),
	department: createDepartmentFixture(),
	manufacturer: createManufacturerFixture(),
	model: createModelFixture(),
	status_label: createStatusLabelsOptionsFixture(),
	vendor: createVendorFixture(),
}

export const createComponentsIndexFixture = (overrides?: Partial<Schema.ComponentsIndex>): Schema.ComponentsIndex => ({
	...baseComponentsIndexFixture,
	...overrides,
})

export const baseComponentsFormDataFixture: Schema.ComponentsFormData = {
	...componentBase,
	default_location: createLocationsOptionsFixture(),
	model: createModelsOptionsFixture(),
	status_label: createStatusLabelsOptionsFixture(),
	vendor: createVendorsOptionsFixture(),
}

export const createComponentsFormDataFixture = (overrides?: Partial<Schema.ComponentsFormData>): Schema.ComponentsFormData => ({
	...baseComponentsFormDataFixture,
	...overrides,
})

export const baseComponentsEditFixture: Schema.ComponentsEdit = {
	...componentBase,
	default_location: createLocationsOptionsFixture(),
	model: createModelsOptionsFixture(),
	status_label: createStatusLabelsOptionsFixture(),
	vendor: createVendorsOptionsFixture(),
}

export const createComponentsEditFixture = (overrides?: Partial<Schema.ComponentsEdit>): Schema.ComponentsEdit => ({
	...baseComponentsEditFixture,
	...overrides,
})

export const baseComponentsShowFixture: Schema.ComponentsShow = {
	...componentBase,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	category: createCategoriesBasicFixture(),
	default_location: createLocationsBasicFixture(),
	department: createDepartmentsBasicFixture(),
	manufacturer: createManufacturersBasicFixture(),
	model: createModelsBasicFixture(),
	status_label: createStatusLabelsOptionsFixture(),
	vendor: createVendorsBasicFixture(),
	activities: [],
	assignments: [],
	documentations: [],
	purchase: createPurchaseFixture(),
}

export const createComponentsShowFixture = (overrides?: Partial<Schema.ComponentsShow>): Schema.ComponentsShow => ({
	...baseComponentsShowFixture,
	...overrides,
})
