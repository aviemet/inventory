import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
	type QueryFunctionSingle,
	type QueryFunction,
} from '..'

export const useGetItems: QueryFunction<Schema.Item[]> = (options) => {
	return useQuery({
		queryKey: ['items'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiItems())
			return res.data
		},
		...options,
	})
}

export const useGetItemsAsOptions: QueryFunction<Schema.ItemsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['items', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiItemsOptions())
			return res.data
		},
		...options,
	})
}

export const useGetItem: QueryFunctionSingle<Schema.Item[]> = (id, options) => {
	return useQuery({
		queryKey: ['items', id],
		queryFn: async () => {
			const res = await axios.get(Routes.apiItem(id))
			return res.data
		},
		...options,
	})
}
