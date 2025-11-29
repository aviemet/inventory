import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetModels: ReactQueryFunction<Schema.Model[], { category: string }> = ({ category }, options) => {
	return useQuery({
		queryKey: ['models', category],
		queryFn: async () => {
			const res = await axios.get(Routes.apiModels({ category }))
			return res.data
		},
		...options,
	})
}

export const useGetModelsAsOptions: ReactQueryFunction<
	Schema.ModelsOptions[],
	{ category?: string }
> = ({ category }, options) => {
	return useQuery({
		queryKey: ['models', category, 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiModelsOptions({ category }))
			return res.data
		},
		...options,
	})
}

export const useGetModel: ReactQueryFunction<Schema.Model, { id: string | number }> = ({ id }, options) => {
	return useQuery({
		queryKey: ['models', id],
		queryFn: async () => {
			const res = await axios.get(Routes.apiModel(id))
			return res.data
		},
		...options,
	})
}
