import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getDocumentations = (
	options: ReactQueryOptions<Schema.Documentation[]>,
) => query(
	['documentations'],
	() => axios.get(Routes.apiDocumentations()).then(res => res.data),
	options,
)

export const getDocumentation = (id: string|number, options: ReactQueryOptions<Schema.Documentation[]>) => query(
	['documentations', id],
	() => axios.get(Routes.apiDocumentation(id)).then(res => res.data),
	options,
)
