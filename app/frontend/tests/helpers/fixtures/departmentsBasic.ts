import { createCompanyFixture } from "./company"
import { createLocationFixture } from "./location"

export const baseDepartmentsBasicFixture: Schema.DepartmentsBasic = {
	id: 1,
	name: "Test Department",
	slug: "test-department",
	location: createLocationFixture(),
	company: createCompanyFixture(),
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createDepartmentsBasicFixture = (overrides?: Partial<Schema.DepartmentsBasic>): Schema.DepartmentsBasic => ({
	...baseDepartmentsBasicFixture,
	...overrides,
})
