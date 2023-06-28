import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getVendors = (
	options: ReactQueryOptions<Schema.Vendor[]>,
) => query(
	['vendors'],
	() => axios.get(Routes.apiVendors()).then(res => res.data),
	options,
)

export const getVendorsAsOptions = (
	options: ReactQueryOptions<Schema.VendorsOptions[]>,
) => query(
	['vendors', 'options'],
	() => axios.get(Routes.apiVendorsOptions()).then(res => res.data),
	options,
)

export const getVendor = (slug: string, options: ReactQueryOptions<Schema.Vendor[]>) => query(
	['vendors', slug],
	() => axios.get(Routes.apiVendor(slug)).then(res => res.data),
	options,
)
