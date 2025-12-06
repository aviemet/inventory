import { createDepartmentsBasicFixture } from "./departmentsBasic"
import { createLocationsBasicFixture } from "./locationsBasic"
import { createPeopleBasicFixture } from "./peopleBasic"
import { createUsersBasicFixture } from "./usersBasic"

export const basePeopleShowFixture: Schema.PeopleShow = {
	id: 1,
	name: "Test User",
	first_name: "Test",
	last_name: "User",
	middle_name: undefined,
	active: true,
	employee_number: "EMP001",
	job_title: undefined,
	department: createDepartmentsBasicFixture(),
	department_id: 1,
	location: createLocationsBasicFixture(),
	location_id: 1,
	manager: createPeopleBasicFixture(),
	manager_id: 1,
	user: createUsersBasicFixture(),
	user_id: 1,
	contact: {
		id: 1,
		emails: [],
		phones: [],
		addresses: [],
		websites: [],
	},
	activities: [],
	possessions: [],
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createPeopleShowFixture = (overrides?: Partial<Schema.PeopleShow>): Schema.PeopleShow => ({
	...basePeopleShowFixture,
	...overrides,
})
