import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
	type QueryFunctionSingle,
	type QueryFunction,
} from '..'

export const useGetDepartments: QueryFunction<Schema.Department[]> = (options) => {
	return useQuery({
		queryKey: ['departments'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDepartments())
			return res.data
		},
		...options,
	})
}

export const useGetDepartmentsAsOptions: QueryFunction<Schema.DepartmentsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['departments', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDepartmentsOptions())
			return res.data
		},
		...options,
	})
}

export const useGetDepartment: QueryFunctionSingle<Schema.Department[]> = (slug, options) => {
	return useQuery({
		queryKey: ['departments', slug],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDepartment(slug))
			return res.data
		},
		...options,
	})
}
