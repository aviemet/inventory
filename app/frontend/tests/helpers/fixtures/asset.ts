import { createCategoryFixture } from "./category"
import { createDepartmentFixture } from "./department"
import { createLocationFixture } from "./location"
import { createManufacturerFixture } from "./manufacturer"
import { createModelFixture } from "./model"
import { createStatusLabelFixture } from "./statusLabel"
import { createVendorFixture } from "./vendor"
import { createSchemaMoneyFixture } from "./schemaMoney"

export const baseAssetsIndexFixture: Schema.AssetsIndex = {
	id: 1,
	name: "Test Asset",
	asset_tag: "ASSET-001",
	model_id: 1,
	requestable: false,
	cost: createSchemaMoneyFixture(),
	cost_currency: "USD",
	type: "Item",
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	category: createCategoryFixture(),
	department: createDepartmentFixture(),
	location: createLocationFixture(),
	manufacturer: createManufacturerFixture(),
	model: createModelFixture(),
	status_label: createStatusLabelFixture(),
	vendor: createVendorFixture(),
	assignments: [],
	available_to_checkout: true,
}

export const createAssetsIndexFixture = (overrides?: Partial<Schema.AssetsIndex>): Schema.AssetsIndex => ({
	...baseAssetsIndexFixture,
	...overrides,
})
