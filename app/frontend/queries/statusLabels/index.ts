import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getStatusLabels = <T = Schema.StatusLabel[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['statusLabels'],
	() => axios.get(Routes.apiStatusLabels()).then(res => res.data),
	options,
)

export const getStatusLabelsAsOptions = <T = Schema.StatusLabelsOptions[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['statusLabels', 'options'],
	() => axios.get(Routes.apiStatusLabelsOptions()).then(res => res.data),
	options,
)

export const getStatusLabel = <T = Schema.StatusLabel[]>(
	id: string|number,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['statusLabels', id],
	() => axios.get(Routes.apiStatusLabel(id)).then(res => res.data),
	options,
)
