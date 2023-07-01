import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getModels = <T = Schema.Model[]>(
	category: Schema.CategoryTypes|undefined,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['models'],
	() => axios.get(Routes.apiModels({ category })).then(res => res.data),
	options,
)

export const getModelsAsOptions = <T = Schema.ModelsOptions[]>(
	category: Schema.CategoryTypes|undefined,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['models', 'options'],
	() => axios.get(Routes.apiModelsOptions({ category })).then(res => res.data),
	options,
)

export const getModel = <T = Schema.Model>(
	id: number,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['models', id],
	() => axios.get(Routes.apiModel(id)).then(res => res.data),
	options,
)
