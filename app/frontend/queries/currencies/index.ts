import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetCurrencies: ReactQueryFunction<Schema.CurrencyOption[]> = (options) => {
	return useQuery({
		queryKey: ['currencies'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiCurrencies())
			return res.data
		},
		...options,
	})
}
