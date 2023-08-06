import { router } from '@inertiajs/react'
import React from 'react'

interface ISearchFormProps {
	children: React.ReactNode
	searchPath: string
}

const SearchForm = ({ children, searchPath }: ISearchFormProps) => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		router.get(searchPath, undefined, { preserveState: true, preserveScroll: true })
	}

	return (
		<form onSubmit={ e => handleSubmit }>{ children }</form>
	)
}

export default SearchForm
