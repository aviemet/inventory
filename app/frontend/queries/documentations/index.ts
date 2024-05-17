import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
	type QueryFunctionSingle,
	type QueryFunction,
} from '..'


export const useGetDocumentations: QueryFunction<Schema.Documentation[]> = (options) => {
	return useQuery({
		queryKey: ['documentations'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDocumentations())
			return res.data
		},
		...options,
	})
}

export const useGetDocumentation: QueryFunctionSingle<Schema.Documentation[]> = (id, options) => {
	return useQuery({
		queryKey: ['documentations', id],
		queryFn: async () => {
			const res = await axios.get(Routes.apiDocumentation(id))
			return res.data
		},
		...options,
	})
}
