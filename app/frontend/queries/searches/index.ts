import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getSearchResults = (
	options: ReactQueryOptions<Schema.Search[]>,
) => query(
	['search'],
	() => axios.get(Routes.apiSearches()).then(res => res.data),
	options,
)
