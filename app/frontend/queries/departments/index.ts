import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetDepartments: ReactQueryFunction<Schema.Department[]> = (options) => {
	return useQuery({
		queryKey: ['departments'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDepartments())
			return res.data
		},
		...options,
	})
}

export const useGetDepartmentsAsOptions: ReactQueryFunction<Schema.DepartmentsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['departments', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDepartmentsOptions())
			return res.data
		},
		...options,
	})
}

export const useGetDepartment: ReactQueryFunction<Schema.Department[], { slug: string }> = ({ slug }, options) => {
	return useQuery({
		queryKey: ['departments', slug],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDepartment(slug))
			return res.data
		},
		...options,
	})
}
