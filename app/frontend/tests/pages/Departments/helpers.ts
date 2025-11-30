import {
	createPaginationFixture,
	createDepartmentsIndexFixture,
	createDepartmentsFormDataFixture,
	createDepartmentsEditFixture,
	createDepartmentsShowFixture,
} from "@/tests/helpers/fixtures"
import { type PaginatedModel } from "@/types/PaginatedModel"

export const createMockPagination = createPaginationFixture

export const createMockDepartmentsIndex = createDepartmentsIndexFixture

export const createMockDepartmentsFormData = createDepartmentsFormDataFixture

export const createMockDepartmentsEdit = createDepartmentsEditFixture

export const createMockDepartmentsShow = createDepartmentsShowFixture

export const createMockPaginatedModel = <T>(data: T, pagination?: Partial<Schema.Pagination>): PaginatedModel<T> => ({
	data,
	pagination: createMockPagination(pagination),
})
