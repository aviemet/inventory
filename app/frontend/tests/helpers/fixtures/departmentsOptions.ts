export const baseDepartmentsOptionsFixture: Schema.DepartmentsOptions = {
	id: 1,
	name: "Test Department",
	slug: "test-department",
}

export const createDepartmentsOptionsFixture = (overrides?: Partial<Schema.DepartmentsOptions>): Schema.DepartmentsOptions => ({
	...baseDepartmentsOptionsFixture,
	...overrides,
})
