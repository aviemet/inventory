import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getPeople = (
	options: ReactQueryOptions<Schema.Person[]>,
) => query(
	['people'],
	() => axios.get(Routes.apiPeople()).then(res => res.data),
	options,
)

export const getPeopleAsOptions = (
	options: ReactQueryOptions<Schema.PeopleOptions[]>,
) => query(
	['people', 'options'],
	() => axios.get(Routes.apiPeopleOptions()).then(res => res.data),
	options,
)

export const getPerson = (id: string|number, options: ReactQueryOptions<Schema.Person[]>) => query(
	['people', id],
	() => axios.get(Routes.apiPerson(id)).then(res => res.data),
	options,
)
