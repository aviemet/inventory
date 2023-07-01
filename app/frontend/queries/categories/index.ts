import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getCategories = <T = Schema.Category[]>(
	category: Schema.CategoryTypes|undefined,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['categories'],
	() => axios.get(Routes.apiCategories({ category })).then(res => res.data),
	options,
)

export const getCategoriesAsOptions = <T = Schema.CategoriesOptions[]>(
	category: Schema.CategoryTypes|undefined,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['categories', 'options'],
	() => axios.get(Routes.apiCategoriesOptions({ category })).then(res => res.data),
	options,
)

export const getCategory = <T = Schema.Category[]>(
	slug: string,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['categories', slug],
	() => axios.get(Routes.apiCategory(slug)).then(res => res.data),
	options,
)
