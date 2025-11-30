export const baseUsersBasicFixture: Schema.UsersBasic = {
	id: 1,
	email: "test@example.com",
	active: true,
	companies: [],
	roles: [],
	table_preferences: {},
	user_preferences: {},
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createUsersBasicFixture = (overrides?: Partial<Schema.UsersBasic>): Schema.UsersBasic => ({
	...baseUsersBasicFixture,
	...overrides,
})
