import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getDepartments = <T = Schema.Department[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['departments'],
	() => axios.get(Routes.apiDepartments()).then(res => res.data),
	options,
)

export const getDepartmentsAsOptions = <T = Schema.DepartmentsOptions[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['departments', 'options'],
	() => axios.get(Routes.apiDepartmentsOptions()).then(res => res.data),
	options,
)

export const getDepartment = <T = Schema.Department[]>(
	slug: string,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['departments', slug],
	() => axios.get(Routes.apiDepartment(slug)).then(res => res.data),
	options,
)
