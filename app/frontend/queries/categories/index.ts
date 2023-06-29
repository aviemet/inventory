import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getCategories = (
	category: Schema.CategoryTypes|undefined,
	options?: ReactQueryOptions<Schema.Category[]>,
) => query(
	['categories'],
	() => axios.get(Routes.apiCategories({ category })).then(res => res.data),
	options,
)

export const getCategoriesAsOptions = (
	category: Schema.CategoryTypes|undefined,
	options?: ReactQueryOptions<Schema.CategoriesOptions[]>,
) => query(
	['categories', 'options'],
	() => axios.get(Routes.apiCategoriesOptions({ category })).then(res => res.data),
	options,
)

export const getCategory = (
	slug: string,
	options?: ReactQueryOptions<Schema.Category[]>,
) => query(
	['categories', slug],
	() => axios.get(Routes.apiCategory(slug)).then(res => res.data),
	options,
)
