import React from 'react'
import { Link } from '@/Components'
import { EditIcon } from '@/Components/Icons'

const EditButton = ({ href }: {href: string}) => {
	return (
		<Link as="button" compact href={ href }><EditIcon /></Link>
	)
}

export default EditButton
