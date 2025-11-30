export const basePaginationFixture: Schema.Pagination = {
	count: 10,
	pages: 1,
	limit: 25,
	current_page: 1,
	next_page: 1,
	prev_page: 1,
	is_first_page: true,
	is_last_page: true,
}

export const createPaginationFixture = (overrides?: Partial<Schema.Pagination>): Schema.Pagination => ({
	...basePaginationFixture,
	...overrides,
})

export const emptyPaginationFixture: Schema.Pagination = {
	count: 0,
	pages: 0,
	limit: 25,
	current_page: 1,
	next_page: 1,
	prev_page: 1,
	is_first_page: true,
	is_last_page: true,
}
