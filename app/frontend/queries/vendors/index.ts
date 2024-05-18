import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'


export const useGetVendors: ReactQueryFunction<Schema.Vendor[]> = (options) => {
	return useQuery({
		queryKey: ['vendors'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiVendors())
			return res.data
		},
		...options,
	})
}

export const useGetVendorsAsOptions: ReactQueryFunction<Schema.VendorsOptions[]> = (options) => {
	return useQuery({
		queryKey: ['vendors', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiVendorsOptions())
			return res.data
		},
		...options,
	})
}

export const useGetVendor: ReactQueryFunction<Schema.Vendor[], { slug: string }> = ({ slug }, options) => {
	return useQuery({
		queryKey: ['vendors', slug],
		queryFn: async () => {
			const res = await axios.get(Routes.apiVendor(slug))
			return res.data
		},
		...options,
	})
}
