import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'
import { SpotlightSearchValues } from '@/Features/Spotlight'

export const useGetSearchResults: ReactQueryFunction<
	Schema.Search[],
	{ searchParams: string }
> = ({ searchParams }, options) => {
	return useQuery({
		queryKey: ['search'],
		queryFn: async () => {
			console.log({ route: Routes.apiSearches({ search: searchParams }) })
			const res = await axios.get(Routes.apiSearches({ search: searchParams }))
			return res.data
		},
		...options,
	})
}

export const useGetSpotlightResults: ReactQueryFunction<
	SpotlightSearchValues,
	{ searchParams: string }
> = ({ searchParams }, options) => {
	return useQuery({
		queryKey: ['spotlight'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiSpotlights({ search: searchParams }))
			return res.data
		},
		...options,
	})
}
