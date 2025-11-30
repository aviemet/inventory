import { createLocationFixture } from "./location"

const departmentBase = {
	name: "Test Department",
}

export const baseDepartmentsIndexFixture: Schema.DepartmentsIndex = {
	...departmentBase,
	id: 1,
	slug: "test-department",
	location: createLocationFixture(),
	counts: {
		items: 0,
		accessories: 0,
		consumables: 0,
		components: 0,
		licenses: 0,
		contracts: 0,
		people: 0,
	},
	items: [],
	accessories: [],
	components: [],
	consumables: [],
	licenses: [],
	people: [],
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createDepartmentsIndexFixture = (overrides?: Partial<Schema.DepartmentsIndex>): Schema.DepartmentsIndex => ({
	...baseDepartmentsIndexFixture,
	...overrides,
})

export const baseDepartmentsFormDataFixture: Schema.DepartmentsFormData = {
	...departmentBase,
}

export const createDepartmentsFormDataFixture = (overrides?: Partial<Schema.DepartmentsFormData>): Schema.DepartmentsFormData => ({
	...baseDepartmentsFormDataFixture,
	...overrides,
})

export const baseDepartmentsEditFixture: Schema.DepartmentsEdit = {
	...departmentBase,
	id: 1,
	slug: "test-department",
}

export const createDepartmentsEditFixture = (overrides?: Partial<Schema.DepartmentsEdit>): Schema.DepartmentsEdit => ({
	...baseDepartmentsEditFixture,
	...overrides,
})

export const baseDepartmentsShowFixture: Schema.DepartmentsShow = {
	...departmentBase,
	id: 1,
	slug: "test-department",
	location: createLocationFixture(),
	counts: {
		items: 0,
		accessories: 0,
		consumables: 0,
		components: 0,
		licenses: 0,
		contracts: 0,
		people: 0,
	},
	items: [],
	accessories: [],
	components: [],
	consumables: [],
	licenses: [],
	people: [],
	activities: [],
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createDepartmentsShowFixture = (overrides?: Partial<Schema.DepartmentsShow>): Schema.DepartmentsShow => ({
	...baseDepartmentsShowFixture,
	...overrides,
})
