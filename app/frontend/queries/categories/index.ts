import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
	type QueryFunctionSingle,
	type QueryFunction,
} from '..'

export const useGetCategories: QueryFunctionSingle<Schema.Category[], Schema.CategoryTypes|undefined> = (categoryType, options) => {
	return useQuery({
		queryKey: ['categories', categoryType],
		queryFn: async () => {
			const res = await axios.get(Routes.apiCategories({ slug: categoryType }))
			return res.data
		},
		...options,
	})
}

export const useGetCategoriesAsOptions: QueryFunctionSingle<Schema.CategoriesOptions[], Schema.CategoryTypes|undefined> = (categoryType, options) => {
	return useQuery({
		queryKey: ['categories', 'options', categoryType],
		queryFn: async () => {
			const res = await axios.get(Routes.apiCategoriesOptions({ slug: categoryType }))
			return res.data
		},
		...options,
	})
}

export const useGetCategory: QueryFunctionSingle<Schema.CategoriesOptions[]> = (slug, options) => {
	return useQuery({
		queryKey: ['categories', slug],
		queryFn: async () => {
			const res = await axios.get(Routes.apiCategory(slug))
			return res.data
		},
		...options,
	})
}
