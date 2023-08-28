import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getItems = <T = Schema.Item[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['items'],
	() => axios.get(Routes.apiItems()).then(res => res.data),
	options,
)

export const getItemsAsOptions = <T = Schema.ItemsOptions[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['items', 'options'],
	() => axios.get(Routes.apiItemsOptions()).then(res => res.data),
	options,
)

export const getItem = <T = Schema.Item[]>(
	id: string|number,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['items', id],
	() => axios.get(Routes.apiItem(id)).then(res => res.data),
	options,
)
