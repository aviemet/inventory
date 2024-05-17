import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetLocations: ReactQueryFunction<Schema.Location[]> = (options) => {
	return useQuery({
		queryKey: ['locations'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiLocations())
			return res.data
		},
		...options,
	})
}

export const useGetLocationsAsOptions: ReactQueryFunction<Schema.LocationsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['locations', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiLocationsOptions())
			return res.data
		},
		...options,
	})
}

export const useGetLocation: ReactQueryFunction<Schema.Location[], { slug: string }> = ({ slug }, options) => {
	return useQuery({
		queryKey: ['locations', slug],
		queryFn: async () => {
			const res = await axios.get(Routes.apiLocation(slug))
			return res.data
		},
		...options,
	})
}
