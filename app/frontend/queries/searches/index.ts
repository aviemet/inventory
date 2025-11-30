import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { SpotlightSearchValues } from "@/features/Spotlight"
import { Routes } from "@/lib"

import { type ReactQueryFunction } from ".."


export const useGetSearchResults: ReactQueryFunction<
	Schema.Search[],
	{ searchParams: string }
> = ({ searchParams }, options) => {
	return useQuery({
		queryKey: ["search"],
		queryFn: async() => {
			const res = await axios.get(Routes.apiSearches({ search: searchParams }))
			return res.data
		},
		...options,
	})
}

export const useGetSpotlightResults: ReactQueryFunction<
	SpotlightSearchValues,
	{ searchParams: string }
> = ({ searchParams }, options) => {
	return useQuery({
		queryKey: ["spotlight"],
		queryFn: async() => {
			const res = await axios.get(Routes.apiSpotlights({ search: searchParams }))
			return res.data
		},
		...options,
	})
}
