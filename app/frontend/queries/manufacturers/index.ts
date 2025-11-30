import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { Routes } from "@/lib"

import { type ReactQueryFunction } from ".."

export const useGetManufacturers: ReactQueryFunction<Schema.Manufacturer[]> = (options) => {
	return useQuery({
		queryKey: ["manufacturers"],
		queryFn: async() => {
			const res = await axios.get(Routes.apiManufacturers())
			return res.data
		},
		...options,
	})
}

export const useGetManufacturersAsOptions: ReactQueryFunction<Schema.ManufacturersOptions[]> = (options) => {
	return useQuery({
		queryKey: ["manufacturers", "options"],
		queryFn: async() => {
			const res = await axios.get(Routes.apiManufacturersOptions())
			return res.data
		},
		...options,
	})
}

export const useGetManufacturer: ReactQueryFunction<Schema.Manufacturer, { id: string | number }> = ({ id }, options) => {
	return useQuery({
		queryKey: ["manufacturers", id],
		queryFn: async() => {
			const res = await axios.get(Routes.apiManufacturer(id))
			return res.data
		},
		...options,
	})
}
