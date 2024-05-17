import { Routes } from '@/lib'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import {
	type QueryFunctionSingle,
	type QueryFunction,
} from '..'

export const useGetPeople: QueryFunction<Schema.Person[]> = (options) => {
	return useQuery({
		queryKey: ['people'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiPeople())
			return res.data
		},
		...options,
	})
}

export const useGetPeopleAsOptions: QueryFunction<Schema.PeopleOptions[]> = (options) => {
	return useQuery({
		queryKey: ['people', 'options'],
		queryFn: async () => {
			const res = await axios.get(Routes.apiPeopleOptions())
			return res.data
		},
		...options,
	})
}

export const useGetPerson: QueryFunctionSingle<Schema.Person[]> = (id, options) => {
	return useQuery({
		queryKey: ['people', id],
		queryFn: async () => {
			const res = await axios.get(Routes.apiPerson(id))
			return res.data
		},
		...options,
	})
}
