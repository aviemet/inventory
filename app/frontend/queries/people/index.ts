import { Routes } from '@/lib'
import axios from 'axios'
import { query, type ReactQueryOptions } from '..'

export const getPeople = <T = Schema.Person[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['people'],
	() => axios.get(Routes.apiPeople()).then(res => res.data),
	options,
)

export const getPeopleAsOptions = <T = Schema.PeopleOptions[]>(
	options?: ReactQueryOptions<T>,
) => query<T>(
	['people', 'options'],
	() => axios.get(Routes.apiPeopleOptions()).then(res => res.data),
	options,
)

export const getPerson = <T = Schema.Person[]>(
	id: string|number,
	options?: ReactQueryOptions<T>,
) => query<T>(
	['people', id],
	() => axios.get(Routes.apiPerson(id)).then(res => res.data),
	options,
)
