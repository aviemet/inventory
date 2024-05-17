import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetSearchResults: ReactQueryFunction<Schema.Search[], {searchParams: string[]}> = ({ searchParams }, options) => {
	return useQuery({
		queryKey: ['search'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiSearches({ search: searchParams }))
			return res.data
		},
		...options,
	})
}
