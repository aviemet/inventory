import React, { useEffect, useState } from 'react'
import { Autocomplete } from '@/Components/Form'

interface IDocumentationSearchProps {
	name: string
	label: string
	required: boolean
}

const DocumentationSearch = ({ ...props  }: IDocumentationSearchProps) => {
	const [data, setData] = useState<Schema.Search[]>([])

	useEffect(() => {

	}, [] )

	return (
		<Autocomplete
			data={ data.map(datum => ({ value: datum.content!, group: datum.searchable_type! })) }
			{ ...props }
		/>
	)
}

export default DocumentationSearch
