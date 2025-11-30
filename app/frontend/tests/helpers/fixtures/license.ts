import { createCategoriesBasicFixture } from "./categoriesBasic"
import { createCategoriesOptionsFixture } from "./categoriesOptions"
import { createCategoryFixture } from "./category"
import { createDepartmentFixture } from "./department"
import { createDepartmentsBasicFixture } from "./departmentsBasic"
import { createManufacturerFixture } from "./manufacturer"
import { createManufacturersBasicFixture } from "./manufacturersBasic"
import { createManufacturersOptionsFixture } from "./manufacturersOptions"
import { createPurchasesBasicFixture } from "./purchasesBasic"
import { createSchemaMoneyFixture } from "./schemaMoney"
import { createVendorFixture } from "./vendor"
import { createVendorsBasicFixture } from "./vendorsBasic"
import { createVendorsOptionsFixture } from "./vendorsOptions"

const licenseBase = {
	id: 1,
	name: "Test License",
	category_id: 1,
	manufacturer_id: 1,
	maintained: false,
	reassignable: false,
	qty_available: 10,
	cost: createSchemaMoneyFixture(),
	cost_currency: "USD",
}

export const baseLicensesIndexFixture: Schema.LicensesIndex = {
	...licenseBase,
	category: createCategoryFixture(),
	department: createDepartmentFixture(),
	manufacturer: createManufacturerFixture(),
	vendor: createVendorFixture(),
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createLicensesIndexFixture = (overrides?: Partial<Schema.LicensesIndex>): Schema.LicensesIndex => ({
	...baseLicensesIndexFixture,
	...overrides,
})

export const baseLicensesFormDataFixture: Schema.LicensesFormData = {
	...licenseBase,
}

export const createLicensesFormDataFixture = (overrides?: Partial<Schema.LicensesFormData>): Schema.LicensesFormData => ({
	...baseLicensesFormDataFixture,
	...overrides,
})

export const baseLicensesEditFixture: Schema.LicensesEdit = {
	...licenseBase,
	category: createCategoriesOptionsFixture(),
	manufacturer: createManufacturersOptionsFixture(),
	vendor: createVendorsOptionsFixture(),
}

export const createLicensesEditFixture = (overrides?: Partial<Schema.LicensesEdit>): Schema.LicensesEdit => ({
	...baseLicensesEditFixture,
	...overrides,
})

export const baseLicensesShowFixture: Schema.LicensesShow = {
	...licenseBase,
	qty: 10,
	category: createCategoriesBasicFixture(),
	department: createDepartmentsBasicFixture(),
	manufacturer: createManufacturersBasicFixture(),
	vendor: createVendorsBasicFixture(),
	purchase: createPurchasesBasicFixture(),
	activities: [],
	assignments: [],
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createLicensesShowFixture = (overrides?: Partial<Schema.LicensesShow>): Schema.LicensesShow => ({
	...baseLicensesShowFixture,
	...overrides,
})
