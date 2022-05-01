import React from 'react'
import { Link } from '@/Components'
import { TrashIcon } from '@/Components/Icons'

const DeleteButton = ({ href }: {href: string}) => {
	return (
		<Link as="button" href={ href }><TrashIcon /></Link>
	)
}

export default DeleteButton
