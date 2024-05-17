import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
	type QueryFunctionSingle,
	type QueryFunction,
} from '..'

export const useGetModels: QueryFunctionSingle<Schema.Model[]> = (category, options) => {
	return useQuery({
		queryKey: ['models'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiModels({ category }))
			return res.data
		},
		...options,
	})
}

export const useGetModelsAsOptions: QueryFunctionSingle<Schema.ModelsOptions[]> = (category, options) => {
	return useQuery({
		queryKey: ['models', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiModelsOptions({ category }))
			return res.data
		},
		...options,
	})
}

export const useGetModel: QueryFunctionSingle<Schema.Model> = (id, options) => {
	return useQuery({
		queryKey: ['models', id],
		queryFn: async () => {
			const res = await axios.get(Routes.apiModel(id))
			return res.data
		},
		...options,
	})
}
