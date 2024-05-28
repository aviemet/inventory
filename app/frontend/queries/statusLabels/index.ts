import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetStatusLabels: ReactQueryFunction<Schema.StatusLabel[]> = (options) => {
	return useQuery({
		queryKey: ['statusLabels'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiStatusLabels()).then(res => res.data)
			return res.data
		},
		...options,
	})
}

export const useGetStatusLabelsAsOptions: ReactQueryFunction<Schema.StatusLabelsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['statusLabels', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiStatusLabelsOptions()).then(res => res.data)
			return res.data
		},
		...options,
	})
}

export const useGetStatusLabel: ReactQueryFunction<Schema.StatusLabel[], { id: string|number}> = ({ id }, options) => {
	return useQuery({
		queryKey: ['statusLabels', id],
		queryFn: async () => {
			const res = await axios.get(Routes.apiStatusLabel(id)).then(res => res.data)
			return res.data
		},
		...options,
	})
}
