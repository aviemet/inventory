import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getLocations = <T = Schema.Location[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['locations'],
	() => axios.get(Routes.apiLocations()).then(res => res.data),
	options,
)

export const getLocationsAsOptions = <T = Schema.LocationsOptions[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['locations', 'options'],
	() => axios.get(Routes.apiLocationsOptions()).then(res => res.data),
	options,
)

export const getLocation = <T = Schema.Location[]>(
	slug: string,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['locations', slug],
	() => axios.get(Routes.apiLocation(slug)).then(res => res.data),
	options,
)
