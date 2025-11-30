import { createDepartmentsBasicFixture } from "./departmentsBasic"
import { createUsersBasicFixture } from "./usersBasic"

export const basePeopleBasicFixture: Schema.PeopleBasic = {
	id: 1,
	name: "Test User",
	first_name: "Test",
	last_name: "User",
	active: true,
	department: createDepartmentsBasicFixture(),
	department_id: 1,
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
	user: createUsersBasicFixture(),
}

export const createPeopleBasicFixture = (overrides?: Partial<Schema.PeopleBasic>): Schema.PeopleBasic => ({
	...basePeopleBasicFixture,
	...overrides,
})
