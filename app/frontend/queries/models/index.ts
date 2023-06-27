import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getModels = (
	category: Schema.CategoryTypes|undefined,
	options?: ReactQueryOptions<Schema.Model[]>,
) => query(
	['models'],
	() => axios.get(Routes.apiModels({ category })).then(res => res.data),
	options,
)

export const getModelsAsOptions = (
	category: Schema.CategoryTypes|undefined,
	options?: ReactQueryOptions<Schema.ModelsOptions[]>,
) => query(
	['models', 'options'],
	() => axios.get(Routes.apiModelsOptions({ category })).then(res => res.data),
	options,
)

export const getModel = (id: number, options?: ReactQueryOptions<Schema.Model>) => query(
	['models', id],
	() => axios.get(Routes.apiModel(id)).then(res => res.data),
	options,
)

export const getModelBySlug = (slug: string, options?: ReactQueryOptions<Schema.Model>) => query(
	['models', slug],
	() => axios.get(Routes.apiModel(slug)).then(res => res.data),
	options,
)
