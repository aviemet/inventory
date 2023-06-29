import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getStatusLabels = (
	options?: ReactQueryOptions<Schema.StatusLabel[]>,
) => query(
	['statusLabels'],
	() => axios.get(Routes.apiStatusLabels()).then(res => res.data),
	options,
)

export const getStatusLabelsAsOptions = (
	options?: ReactQueryOptions<Schema.StatusLabelsOptions[]>,
) => query(
	['statusLabels', 'options'],
	() => axios.get(Routes.apiStatusLabelsOptions()).then(res => res.data),
	options,
)

export const getStatusLabel = (
	id: string|number,
	options?: ReactQueryOptions<Schema.StatusLabel[]>,
) => query(
	['statusLabels', id],
	() => axios.get(Routes.apiStatusLabel(id)).then(res => res.data),
	options,
)
