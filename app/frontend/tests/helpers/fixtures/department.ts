export const baseDepartmentFixture: Schema.Department = {
	id: 1,
	name: "Test Department",
}

export const createDepartmentFixture = (overrides?: Partial<Schema.Department>): Schema.Department => ({
	...baseDepartmentFixture,
	...overrides,
})

export const minimalDepartmentFixture: Schema.Department = {
	id: 1,
	name: "Test Department",
}
