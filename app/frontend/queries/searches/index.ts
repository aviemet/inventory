import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getSearchResults = <T = Schema.Search[]>(
	params?: Record<string, string>,
	options?: ReactQueryOptions<T>,
) => {
	console.log({ queryParams: params })
	return query<T>(
		['search'],
		() => axios.get(Routes.apiSearches(params)).then(res => res.data),
		options,
	)
}
