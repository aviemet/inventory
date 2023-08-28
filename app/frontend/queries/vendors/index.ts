import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getVendors = <T = Schema.Vendor[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['vendors'],
	() => axios.get(Routes.apiVendors()).then(res => res.data),
	options,
)

export const getVendorsAsOptions = <T = Schema.VendorsOptions[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['vendors', 'options'],
	() => axios.get(Routes.apiVendorsOptions()).then(res => res.data),
	options,
)

export const getVendor = <T = Schema.Vendor[]>(
	slug: string,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['vendors', slug],
	() => axios.get(Routes.apiVendor(slug)).then(res => res.data),
	options,
)
