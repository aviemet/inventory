import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
	type QueryFunctionSingle,
	type QueryFunction,
} from '..'

export const useGetAssets: QueryFunction<Schema.Asset[]> = (options) => {
	return useQuery({
		queryKey: ['items'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiAssets())
			return res.data
		},
		...options,
	})
}

export const useGetAssetsAsOptions: QueryFunction<Schema.AssetsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['items', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiAssetsOptions())
			return res.data
		},
		...options,
	})
}

export const useGetAsset: QueryFunctionSingle<Schema.Asset[]> = (id, options) => {
	return useQuery({
		queryKey: ['items', id],
		queryFn: async() => {
			const res = await axios.get(Routes.apiAsset(id))
			return res.data
		},
		...options,
	})
}
