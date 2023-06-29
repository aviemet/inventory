import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getManufacturers = (
	options?: ReactQueryOptions<Schema.Manufacturer[]>,
) => query(
	['manufacturers'],
	() => axios.get(Routes.apiManufacturers()).then(res => res.data),
	options,
)

export const getManufacturersAsOptions = (
	options?: ReactQueryOptions<Schema.ManufacturersOptions[]>,
) => query(
	['manufacturers', 'options'],
	() => axios.get(Routes.apiManufacturersOptions()).then(res => res.data),
	options,
)

export const getManufacturer = (
	id: number,
	options?: ReactQueryOptions<Schema.Manufacturer>,
) => query(
	['manufacturers', id],
	() => axios.get(Routes.apiManufacturer(id)).then(res => res.data),
	options,
)
