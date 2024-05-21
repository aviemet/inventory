import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetCategories: ReactQueryFunction<
	Schema.Category[],
	{ categoryType: Schema.CategoryTypes }
> = ({ categoryType }, options) => {
	return useQuery({
		queryKey: ['categories', categoryType],
		queryFn: async () => {
			const res = await axios.get(Routes.apiCategories({ slug: categoryType }))
			return res.data
		},
		...options,
	})
}

export const useGetCategoriesAsOptions: ReactQueryFunction<
	Schema.CategoriesOptions[],
	{ categoryType?: Schema.CategoryTypes }
> = ({ categoryType }, options) => {
	return useQuery({
		queryKey: ['categories', 'options', categoryType],
		queryFn: async () => {
			const res = categoryType ?
				await axios.get(Routes.apiCategoryOptions(categoryType))
				:
				await axios.get(Routes.apiCategoriesOptions())
			return res.data
		},
		...options,
	})
}

export const useGetCategory: ReactQueryFunction<
	Schema.CategoriesOptions[],
	{ slug: string }
> = ({ slug }, options) => {
	return useQuery({
		queryKey: ['categories', slug],
		queryFn: async () => {
			const res = await axios.get(Routes.apiCategory(slug))
			return res.data
		},
		...options,
	})
}
