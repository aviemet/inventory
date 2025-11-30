import { createCategoriesOptionsFixture } from "./categoriesOptions"
import { createDocumentableFixture } from "./documentable"
import { createPeopleBasicFixture } from "./peopleBasic"

const documentationBase = {
	title: "Test Documentation",
	body: "Test body",
	category_id: 1,
	documentable_id: 1,
	documentable_name: "Test Documentable",
	documentable_type: "Item",
	category: createCategoriesOptionsFixture(),
}

export const baseDocumentationsIndexFixture: Schema.DocumentationsIndex = {
	...documentationBase,
	id: 1,
	slug: "test-documentation",
	route: "/items/1",
	created_by: createPeopleBasicFixture(),
	documentable: createDocumentableFixture(),
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createDocumentationsIndexFixture = (overrides?: Partial<Schema.DocumentationsIndex>): Schema.DocumentationsIndex => ({
	...baseDocumentationsIndexFixture,
	...overrides,
})

export const baseDocumentationsFormDataFixture: Schema.DocumentationsFormData = {
	...documentationBase,
}

export const createDocumentationsFormDataFixture = (overrides?: Partial<Schema.DocumentationsFormData>): Schema.DocumentationsFormData => ({
	...baseDocumentationsFormDataFixture,
	...overrides,
})

export const baseDocumentationsEditFixture: Schema.DocumentationsEdit = {
	...documentationBase,
	id: 1,
	slug: "test-documentation",
}

export const createDocumentationsEditFixture = (overrides?: Partial<Schema.DocumentationsEdit>): Schema.DocumentationsEdit => ({
	...baseDocumentationsEditFixture,
	...overrides,
})

export const baseDocumentationsShowFixture: Schema.DocumentationsShow = {
	...documentationBase,
	id: 1,
	slug: "test-documentation",
	route: "/items/1",
	created_by: createPeopleBasicFixture(),
	documentable: createDocumentableFixture(),
	created_at: new Date().toISOString(),
	updated_at: new Date().toISOString(),
}

export const createDocumentationsShowFixture = (overrides?: Partial<Schema.DocumentationsShow>): Schema.DocumentationsShow => ({
	...baseDocumentationsShowFixture,
	...overrides,
})
