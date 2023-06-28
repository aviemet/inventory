import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getLocations = (
	options: ReactQueryOptions<Schema.Location[]>,
) => query(
	['locations'],
	() => axios.get(Routes.apiLocations()).then(res => res.data),
	options,
)

export const getLocationsAsOptions = (
	options: ReactQueryOptions<Schema.LocationsOptions[]>,
) => query(
	['locations', 'options'],
	() => axios.get(Routes.apiLocationsOptions()).then(res => res.data),
	options,
)

export const getLocation = (slug: string, options: ReactQueryOptions<Schema.Location[]>) => query(
	['locations', slug],
	() => axios.get(Routes.apiLocation(slug)).then(res => res.data),
	options,
)
