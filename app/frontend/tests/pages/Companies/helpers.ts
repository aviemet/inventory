import {
	createPaginationFixture,
	createCompaniesIndexFixture,
	createCompaniesFormDataFixture,
	createCompaniesEditFixture,
	createCompaniesShowFixture,
} from "@/tests/helpers/fixtures"

export const createMockPagination = createPaginationFixture

export const createMockContactFormData = (overrides?: Partial<Schema.ContactsFormData>): Schema.ContactsFormData => ({
	addresses: [],
	emails: [],
	phones: [],
	websites: [],
	...overrides,
})

export const createMockContactBasic = (overrides?: Partial<Schema.ContactsBasic>): Schema.ContactsBasic => ({
	id: 1,
	addresses: [],
	emails: [],
	phones: [],
	websites: [],
	...overrides,
})

export const createMockCompaniesIndex = createCompaniesIndexFixture

export const createMockCompaniesFormData = createCompaniesFormDataFixture

export const createMockCompaniesEdit = createCompaniesEditFixture

export const createMockCompaniesShow = createCompaniesShowFixture
