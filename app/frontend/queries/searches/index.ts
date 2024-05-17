import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
	type QueryFunctionSingle,
	type QueryFunction,
} from '..'

export const useGetSearchResults: QueryFunctionSingle<Schema.Search[], string[]> = (params, options) => {
	return useQuery({
		queryKey: ['search'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiSearches(params))
			return res.data
		},
		...options,
	})
}
