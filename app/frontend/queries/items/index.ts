import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { Routes } from "@/lib"

import { type ReactQueryFunction } from ".."

export const useGetItems: ReactQueryFunction<Schema.Item[]> = (options) => {
	return useQuery({
		queryKey: ["items"],
		queryFn: async() => {
			const res = await axios.get(Routes.apiItems())
			return res.data
		},
		...options,
	})
}

export const useGetItemsAsOptions: ReactQueryFunction<Schema.ItemsOptions[]> = (options) => {
	return useQuery({
		queryKey: ["items", "options"],
		queryFn: async() => {
			const res = await axios.get(Routes.apiItemsOptions())
			return res.data
		},
		...options,
	})
}

export const useGetItem: ReactQueryFunction<Schema.Item[], { id: string | number }> = ({ id }, options) => {
	return useQuery({
		queryKey: ["items", id],
		queryFn: async() => {
			const res = await axios.get(Routes.apiItem(id))
			return res.data
		},
		...options,
	})
}
