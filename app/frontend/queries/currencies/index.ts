import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getCurrencies = (
	options: ReactQueryOptions<string[]>,
) => query(
	['currencies'],
	() => axios.get(Routes.apiCurrencies() ).then(res => res.data),
	options,
)
