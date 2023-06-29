import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getItems = (
	options?: ReactQueryOptions<Schema.Item[]>,
) => query(
	['items'],
	() => axios.get(Routes.apiItems()).then(res => res.data),
	options,
)

export const getItemsAsOptions = (
	options?: ReactQueryOptions<Schema.ItemsOptions[]>,
) => query(
	['items', 'options'],
	() => axios.get(Routes.apiItemsOptions()).then(res => res.data),
	options,
)

export const getItem = (
	id: string|number,
	options?: ReactQueryOptions<Schema.Item[]>,
) => query(
	['items', id],
	() => axios.get(Routes.apiItem(id)).then(res => res.data),
	options,
)
