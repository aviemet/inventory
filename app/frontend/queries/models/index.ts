import { Routes } from '@/lib'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const getModels = <T = Schema.Model[]>(options: UseQueryOptions<T>) => {
	return useQuery<T>({
		queryKey: ['models'],
		queryFn: (): Promise<T> => axios.get(Routes.apiModels()),
		...options,
	})
}

export const getModelsAsOptions = <T = Schema.ModelsOptions[]>(options: UseQueryOptions<T>) => {
	return useQuery<T>({
		queryKey: ['models', 'options'],
		queryFn: (): Promise<T> => axios.get(Routes.apiModelsOptions()),
		...options,
	})
}

export const getModel = <T = Schema.Model>(id: number, options: UseQueryOptions<T>) => {
	return useQuery<T>({
		queryKey: ['models', id],
		queryFn: (): Promise<T> => axios.get(Routes.apiModel(id)),
		...options,
	})
}

export const getModelBySlug = <T = Schema.Model[]>(slug: string, options: UseQueryOptions<T>) => {
	return useQuery<T>({
		queryKey: ['models', slug],
		queryFn: (): Promise<T> => axios.get(Routes.apiModel(slug)),
		...options,
	})
}
