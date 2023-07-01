import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getManufacturers = <T = Schema.Manufacturer[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['manufacturers'],
	() => axios.get(Routes.apiManufacturers()).then(res => res.data),
	options,
)

export const getManufacturersAsOptions = <T = Schema.ManufacturersOptions[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['manufacturers', 'options'],
	() => axios.get(Routes.apiManufacturersOptions()).then(res => res.data),
	options,
)

export const getManufacturer = <T = Schema.Manufacturer>(
	id: number,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['manufacturers', id],
	() => axios.get(Routes.apiManufacturer(id)).then(res => res.data),
	options,
)
