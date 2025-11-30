import { createCategoriesBasicFixture } from "./categoriesBasic"
import { createCategoriesOptionsFixture } from "./categoriesOptions"
import { createDepartmentsBasicFixture } from "./departmentsBasic"
import { createDepartmentsOptionsFixture } from "./departmentsOptions"
import { createLocationsBasicFixture } from "./locationsBasic"
import { createLocationsOptionsFixture } from "./locationsOptions"
import { createManufacturersBasicFixture } from "./manufacturersBasic"
import { createManufacturersOptionsFixture } from "./manufacturersOptions"
import { createModelsBasicFixture } from "./modelsBasic"
import { createModelsOptionsFixture } from "./modelsOptions"
import { createSchemaMoneyFixture } from "./schemaMoney"
import { createStatusLabelsBasicFixture } from "./statusLabelsBasic"
import { createStatusLabelsOptionsFixture } from "./statusLabelsOptions"
import { createVendorsBasicFixture } from "./vendorsBasic"
import { createVendorsOptionsFixture } from "./vendorsOptions"

const itemBase = {
	id: 1,
	name: "Test Item",
	model_id: 1,
	assigned: false,
	requestable: false,
	cost: createSchemaMoneyFixture(),
	cost_currency: "USD",
}

export const baseItemsIndexFixture: Schema.ItemsIndex = {
	...itemBase,
	asset_tag: "ITEM-001",
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	category: createCategoriesOptionsFixture(),
	location: createLocationsOptionsFixture(),
	department: createDepartmentsOptionsFixture(),
	manufacturer: createManufacturersOptionsFixture(),
	model: createModelsOptionsFixture(),
	status_label: createStatusLabelsOptionsFixture(),
	vendor: createVendorsOptionsFixture(),
}

export const createItemsIndexFixture = (overrides?: Partial<Schema.ItemsIndex>): Schema.ItemsIndex => ({
	...baseItemsIndexFixture,
	...overrides,
})

export const baseItemsFormDataFixture: Schema.ItemsFormData = {
	...itemBase,
	department_id: 1,
	default_location: createLocationsOptionsFixture(),
	model: createModelsOptionsFixture(),
	status_label: createStatusLabelsOptionsFixture(),
	vendor: createVendorsOptionsFixture(),
	department: createDepartmentsOptionsFixture(),
}

export const createItemsFormDataFixture = (overrides?: Partial<Schema.ItemsFormData>): Schema.ItemsFormData => ({
	...baseItemsFormDataFixture,
	...overrides,
})

export const baseItemsEditFixture: Schema.ItemsEdit = {
	...itemBase,
	department_id: 1,
	default_location: createLocationsOptionsFixture(),
	model: createModelsOptionsFixture(),
	status_label: createStatusLabelsOptionsFixture(),
	vendor: createVendorsOptionsFixture(),
	department: createDepartmentsOptionsFixture(),
}

export const createItemsEditFixture = (overrides?: Partial<Schema.ItemsEdit>): Schema.ItemsEdit => ({
	...baseItemsEditFixture,
	...overrides,
})

export const baseItemsShowFixture: Schema.ItemsShow = {
	...itemBase,
	asset_tag: "ITEM-001",
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	category: createCategoriesBasicFixture(),
	default_location: createLocationsBasicFixture(),
	location: createLocationsBasicFixture(),
	department: createDepartmentsBasicFixture(),
	manufacturer: createManufacturersBasicFixture(),
	model: createModelsBasicFixture(),
	status_label: createStatusLabelsBasicFixture(),
	vendor: createVendorsBasicFixture(),
	activities: [],
	assignments: [],
	documentations: [],
	accessories: [],
	components: [],
	consumables: [],
	items: [],
	licenses: [],
	nics: [],
}

export const createItemsShowFixture = (overrides?: Partial<Schema.ItemsShow>): Schema.ItemsShow => ({
	...baseItemsShowFixture,
	...overrides,
})
