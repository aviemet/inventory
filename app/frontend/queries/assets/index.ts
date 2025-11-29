import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetAssets: ReactQueryFunction<Schema.Asset[]> = (options) => {
	return useQuery({
		queryKey: ['items'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiAssets())
			return res.data
		},
		...options,
	})
}

export const useGetAssetsAsOptions: ReactQueryFunction<Schema.AssetsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['items', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiAssetsOptions())
			return res.data
		},
		...options,
	})
}

export const useGetAsset: ReactQueryFunction<Schema.Asset[], { id: string | number }> = ({ id }, options) => {
	return useQuery({
		queryKey: ['items', id],
		queryFn: async() => {
			const res = await axios.get(Routes.apiAsset(id))
			return res.data
		},
		...options,
	})
}
