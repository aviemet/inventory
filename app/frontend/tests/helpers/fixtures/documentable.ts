export const baseDocumentableFixture: Schema.Documentable = {
	id: 1 as unknown,
	name: "Test Documentable",
	created_at: new Date().toISOString() as unknown,
	updated_at: new Date().toISOString() as unknown,
}

export const createDocumentableFixture = (overrides?: Partial<Schema.Documentable>): Schema.Documentable => ({
	...baseDocumentableFixture,
	...overrides,
})
