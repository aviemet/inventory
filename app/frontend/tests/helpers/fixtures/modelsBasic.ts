import { createCategoryFixture } from "./category"
import { createManufacturerFixture } from "./manufacturer"

export const baseModelsBasicFixture: Schema.ModelsBasic = {
	id: 1,
	name: "Test Model",
	slug: "test-model",
	category_id: 1,
	manufacturer_id: 1,
	category: createCategoryFixture(),
	manufacturer: createManufacturerFixture(),
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createModelsBasicFixture = (overrides?: Partial<Schema.ModelsBasic>): Schema.ModelsBasic => ({
	...baseModelsBasicFixture,
	...overrides,
})
