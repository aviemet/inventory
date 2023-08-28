import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getAssets = <T = Schema.Asset[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['items'],
	() => axios.get(Routes.apiAssets()).then(res => res.data),
	options,
)

export const getAssetsAsOptions = <T = Schema.AssetsOptions[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['items', 'options'],
	() => axios.get(Routes.apiAssetsOptions()).then(res => res.data),
	options,
)

export const getAsset = <T = Schema.Asset[]>(
	id: string|number,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['items', id],
	() => axios.get(Routes.apiAsset(id)).then(res => res.data),
	options,
)
