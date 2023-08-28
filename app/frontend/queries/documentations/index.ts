import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getDocumentations = <T = Schema.Documentation[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['documentations'],
	() => axios.get(Routes.apiDocumentations()).then(res => res.data),
	options,
)

export const getDocumentation = <T = Schema.Documentation[]>(
	id: string|number,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['documentations', id],
	() => axios.get(Routes.apiDocumentation(id)).then(res => res.data),
	options,
)
