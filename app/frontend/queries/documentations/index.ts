import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetDocumentations: ReactQueryFunction<Schema.Documentation[]> = (options) => {
	return useQuery({
		queryKey: ['documentations'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDocumentations())
			return res.data
		},
		...options,
	})
}

export const useGetDocumentation: ReactQueryFunction<Schema.Documentation[], { id: string | number }> = ({ id }, options) => {
	return useQuery({
		queryKey: ['documentations', id],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDocumentation(id))
			return res.data
		},
		...options,
	})
}
