import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getDepartments = (
	options: ReactQueryOptions<Schema.Department[]>,
) => query(
	['departments'],
	() => axios.get(Routes.apiDepartments()).then(res => res.data),
	options,
)

export const getDepartmentsAsOptions = (
	options: ReactQueryOptions<Schema.DepartmentsOptions[]>,
) => query(
	['departments', 'options'],
	() => axios.get(Routes.apiDepartmentsOptions()).then(res => res.data),
	options,
)

export const getDepartment = (slug: string, options: ReactQueryOptions<Schema.Department[]>) => query(
	['departments', slug],
	() => axios.get(Routes.apiDepartment(slug)).then(res => res.data),
	options,
)
