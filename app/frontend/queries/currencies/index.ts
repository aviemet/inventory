import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getCurrencies = <T = Schema.CurrencyOption[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['currencies'],
	() => axios.get(Routes.apiCurrencies() ).then(res => res.data),
	options,
)
