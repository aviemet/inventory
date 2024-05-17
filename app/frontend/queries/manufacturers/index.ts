import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
	type QueryFunctionSingle,
	type QueryFunction,
} from '..'

export const useGetManufacturers: QueryFunction<Schema.Manufacturer[]> = (options) => {
	return useQuery({
		queryKey: ['manufacturers'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiManufacturers())
			return res.data
		},
		...options,
	})
}

export const useGetManufacturersAsOptions: QueryFunction<Schema.ManufacturersOptions[]> = (options) => {
	return useQuery({
		queryKey: ['manufacturers', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiManufacturersOptions())
			return res.data
		},
		...options,
	})
}

export const useGetManufacturer: QueryFunctionSingle<Schema.Manufacturer> = (id, options) => {
	return useQuery({
		queryKey: ['manufacturers', id],
		queryFn: async () => {
			const res = await axios.get(Routes.apiManufacturer(id))
			return res.data
		},
		...options,
	})
}
