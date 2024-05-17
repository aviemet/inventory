import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { type ReactQueryFunction } from '..'

export const useGetPeople: ReactQueryFunction<Schema.Person[]> = (options) => {
	return useQuery({
		queryKey: ['people'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiPeople())
			return res.data
		},
		...options,
	})
}

export const useGetPeopleAsOptions: ReactQueryFunction<Schema.PeopleOptions[]> = (options) => {
	return useQuery({
		queryKey: ['people', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiPeopleOptions())
			return res.data
		},
		...options,
	})
}

export const useGetPerson: ReactQueryFunction<Schema.Person[], { id: string|number }> = ({ id }, options) => {
	return useQuery({
		queryKey: ['people', id],
		queryFn: async () => {
			const res = await axios.get(Routes.apiPerson(id))
			return res.data
		},
		...options,
	})
}
