import { createCategoryFixture } from "./category"
import { createLocationFixture } from "./location"
import { createManufacturerFixture } from "./manufacturer"
import { createModelFixture } from "./model"
import { createPurchaseFixture } from "./purchase"
import { createSchemaMoneyFixture } from "./schemaMoney"
import { createVendorFixture } from "./vendor"

const consumableBase = {
	id: 1,
	name: "Test Consumable",
	model_id: 1,
	qty_available: 10,
	requestable: false,
	cost: createSchemaMoneyFixture(),
	cost_currency: "USD",
}

export const baseConsumablesIndexFixture: Schema.ConsumablesIndex = {
	...consumableBase,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	category: createCategoryFixture(),
	manufacturer: createManufacturerFixture(),
	model: createModelFixture(),
	vendor: createVendorFixture(),
}

export const createConsumablesIndexFixture = (overrides?: Partial<Schema.ConsumablesIndex>): Schema.ConsumablesIndex => ({
	...baseConsumablesIndexFixture,
	...overrides,
})

export const baseConsumablesFormDataFixture: Schema.ConsumablesFormData = {
	...consumableBase,
}

export const createConsumablesFormDataFixture = (overrides?: Partial<Schema.ConsumablesFormData>): Schema.ConsumablesFormData => ({
	...baseConsumablesFormDataFixture,
	...overrides,
})

export const baseConsumablesEditFixture: Schema.ConsumablesEdit = {
	...consumableBase,
}

export const createConsumablesEditFixture = (overrides?: Partial<Schema.ConsumablesEdit>): Schema.ConsumablesEdit => ({
	...baseConsumablesEditFixture,
	...overrides,
})

export const baseConsumablesShowFixture: Schema.ConsumablesShow = {
	...consumableBase,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	category: createCategoryFixture(),
	default_location: createLocationFixture(),
	manufacturer: createManufacturerFixture(),
	model: createModelFixture(),
	vendor: createVendorFixture(),
	activities: [],
	assignments: [],
	documentations: [],
	purchase: createPurchaseFixture(),
}

export const createConsumablesShowFixture = (overrides?: Partial<Schema.ConsumablesShow>): Schema.ConsumablesShow => ({
	...baseConsumablesShowFixture,
	...overrides,
})
